#!/bin/bash
# Brainiac Context — PreCompact hook
# Fires BEFORE /compact (manual or auto) executes.
#
# Behavior:
#   1. Save a handoff snapshot to .brainiac/last-compact-state.json so post-compact
#      logic (and the agent) has a disk-resident record of what was active when
#      compact occurred. Survives compact (file system, not chat history).
#   2. Emit a JSON advisory (hookSpecificOutput.additionalContext) — plain stdout
#      from PreCompact goes to debug log only.
#   3. Opt-in block: when BRAINIAC_BLOCK_AUTOCOMPACT=1 in env AND trigger=auto,
#      emit decision:"block" with reason. Default does NOT block.
#
# Iron Law 7 — Context Hygiene: hooks may inform/pause/request action, but must
# not silently /clear or /compact. This hook stays advisory unless the user has
# explicitly opted into blocking via env var.
#
# i18n: messages loaded from messages/${BRAINIAC_LANG}.sh (default: en).
#
# Exit 0 advisory; exit 2 (or decision:"block") only when opt-in env is set.

set -euo pipefail

# --- i18n ---
BRAINIAC_LANG="${BRAINIAC_LANG:-en}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
MSG_FILE="$SCRIPT_DIR/messages/${BRAINIAC_LANG}.sh"
[[ -f "$MSG_FILE" ]] && source "$MSG_FILE" || source "$SCRIPT_DIR/messages/en.sh"

# --- Parse stdin (best effort) ---
TRIGGER="unknown"
SESSION_ID=""
CWD=""
if command -v jq >/dev/null 2>&1; then
    INPUT=$(cat)
    TRIGGER=$(echo "$INPUT" | jq -r '.compaction_trigger // "unknown"' 2>/dev/null || echo "unknown")
    SESSION_ID=$(echo "$INPUT" | jq -r '.session_id // ""' 2>/dev/null || echo "")
    CWD=$(echo "$INPUT" | jq -r '.cwd // ""' 2>/dev/null || echo "")
fi

# --- Save handoff snapshot (best effort; never fail the hook on disk issues) ---
HANDOFF_DIR=".brainiac"
HANDOFF_FILE="${HANDOFF_DIR}/last-compact-state.json"
# Timestamp em America/Sao_Paulo (UTC-3). TZ='America/Sao_Paulo' é ignorado
# em Git Bash Windows (sem zoneinfo), entao calculamos do epoch UTC subtraindo
# 3h. Compativel com GNU date (Linux/Git Bash) e BSD date (macOS).
_brainiac_epoch=$(date -u +%s 2>/dev/null || echo "")
if [[ -n "$_brainiac_epoch" ]]; then
    _brainiac_epoch_sp=$((_brainiac_epoch - 10800))
    TIMESTAMP=$(date -u -d "@$_brainiac_epoch_sp" +"%Y-%m-%dT%H:%M:%S-03:00" 2>/dev/null \
                || date -u -r "$_brainiac_epoch_sp" +"%Y-%m-%dT%H:%M:%S-03:00" 2>/dev/null \
                || date -u +"%Y-%m-%dT%H:%M:%SZ" 2>/dev/null \
                || echo "unknown")
else
    TIMESTAMP="unknown"
fi
unset _brainiac_epoch _brainiac_epoch_sp

mkdir -p "$HANDOFF_DIR" 2>/dev/null || true
if command -v jq >/dev/null 2>&1; then
    jq -n \
        --arg ts "$TIMESTAMP" \
        --arg trig "$TRIGGER" \
        --arg sid "$SESSION_ID" \
        --arg cwd "$CWD" \
        '{
            timestamp: $ts,
            trigger: $trig,
            session_id: $sid,
            cwd: $cwd
        }' > "$HANDOFF_FILE" 2>/dev/null || true
else
    cat <<EOF > "$HANDOFF_FILE" 2>/dev/null || true
{
  "timestamp": "$TIMESTAMP",
  "trigger": "$TRIGGER",
  "session_id": "$SESSION_ID",
  "cwd": "$CWD"
}
EOF
fi

# --- Opt-in auto-compact block (single explicit case where 'block' is allowed) ---
if [[ "${BRAINIAC_BLOCK_AUTOCOMPACT:-0}" == "1" && "$TRIGGER" == "auto" ]]; then
    if command -v jq >/dev/null 2>&1; then
        jq -n --arg reason "${MSG_PRE_COMPACT_BLOCKED_REASON:-Auto-compact blocked by BRAINIAC_BLOCK_AUTOCOMPACT=1 (opt-in).}" '{
          decision: "block",
          reason: $reason,
          hookSpecificOutput: {
            hookEventName: "PreCompact",
            additionalContext: $reason
          }
        }'
    else
        cat <<EOF
{
  "decision": "block",
  "reason": "${MSG_PRE_COMPACT_BLOCKED_REASON:-Auto-compact blocked by BRAINIAC_BLOCK_AUTOCOMPACT=1 (opt-in).}",
  "hookSpecificOutput": {
    "hookEventName": "PreCompact",
    "additionalContext": "${MSG_PRE_COMPACT_BLOCKED_REASON:-Auto-compact blocked by BRAINIAC_BLOCK_AUTOCOMPACT=1 (opt-in).}"
  }
}
EOF
    fi
    exit 0
fi

# --- Standard advisory path (does not block) ---
ADVISORY="${MSG_PRE_COMPACT_HEADER:-[Brainiac pre-compact]} ${MSG_PRE_COMPACT_BODY:-Compact starting. Iron Law 7: handoff saved to .brainiac/last-compact-state.json. post-compact.sh will inject the reload checklist.}"

if command -v jq >/dev/null 2>&1; then
    jq -n --arg ctx "$ADVISORY" --arg trig "$TRIGGER" '{
      hookSpecificOutput: {
        hookEventName: "PreCompact",
        additionalContext: ($ctx + " (trigger: " + $trig + ")")
      }
    }'
else
    ESCAPED=$(printf '%s (trigger: %s)' "$ADVISORY" "$TRIGGER" | sed ':a;N;$!ba;s/\n/\\n/g' | sed 's/"/\\"/g')
    cat <<EOF
{
  "hookSpecificOutput": {
    "hookEventName": "PreCompact",
    "additionalContext": "$ESCAPED"
  }
}
EOF
fi

exit 0
