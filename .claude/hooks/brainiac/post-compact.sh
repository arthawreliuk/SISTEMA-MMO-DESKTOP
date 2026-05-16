#!/bin/bash
# Brainiac Context — PostCompact hook
# Fires AFTER /compact (manual or auto) completes.
#
# Critical: plain stdout from PostCompact goes to debug log only, NOT to Claude.
# To inject a reload checklist that Claude sees, we MUST emit JSON output with
# hookSpecificOutput.additionalContext (per Claude Code hooks doc).
#
# Iron Law 7 — Context Hygiene Between Cycles:
#   - Framework spec is always-on via @import chain (CLAUDE.md → AGENTS.md → framework spec).
#   - The chain is re-injected automatically after compact.
#   - For critical work (Build, Learn, framework update, migration, refactor,
#     complex bugfix), the agent must reload active intent + relevant ADRs from disk.
#
# i18n: messages loaded from messages/${BRAINIAC_LANG}.sh (default: en).
#
# Exit 0 (advisory only — compact already happened, cannot be blocked).

set -euo pipefail

# --- i18n ---
BRAINIAC_LANG="${BRAINIAC_LANG:-en}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
MSG_FILE="$SCRIPT_DIR/messages/${BRAINIAC_LANG}.sh"
[[ -f "$MSG_FILE" ]] && source "$MSG_FILE" || source "$SCRIPT_DIR/messages/en.sh"

# --- Parse stdin (best effort) ---
TRIGGER="unknown"
if command -v jq >/dev/null 2>&1; then
    INPUT=$(cat)
    TRIGGER=$(echo "$INPUT" | jq -r '.compaction_trigger // "unknown"' 2>/dev/null || echo "unknown")
fi

# --- Build advisory message (i18n) ---
ADVISORY="${MSG_POST_COMPACT_HEADER:-=== Brainiac post-compact reload (Iron Law 7) ===}
${MSG_POST_COMPACT_LINE_TRIGGER:-Compact concluído}: ${TRIGGER}.

${MSG_POST_COMPACT_LINE_FRAMEWORK:-Framework spec foi re-injetado via @AGENTS.md → @context/.brainiac-context-framework.md (import chain).}

${MSG_POST_COMPACT_LINE_CRITICAL:-Antes de trabalho crítico (Build / Learn / update / migração / refactor / bugfix complexo):}
1. ${MSG_POST_COMPACT_STEP1:-Confirme acesso a Iron Laws 1-7 (framework spec carregado).}
2. ${MSG_POST_COMPACT_STEP2:-Releia intent ativo (feature-*.md / bug-*.md / refactor-*.md).}
3. ${MSG_POST_COMPACT_STEP3:-Releia ADRs referenciados na seção Related do intent.}
4. ${MSG_POST_COMPACT_STEP4:-Verifique .brainiac/last-compact-state.json para handoff.}
5. ${MSG_POST_COMPACT_STEP5:-Rode /context — se ≥60%, continuar trabalho crítico sem novo /compact ou /clear é Brainiac violation (Iron Law 7.5).}

${MSG_POST_COMPACT_FOOTER:-Se tarefa simples em continuação, summary é suficiente.}"

# --- Emit JSON output (REQUIRED for PostCompact — plain stdout does not reach Claude) ---
# Build JSON safely: use jq if available, fallback to manual escape for portability.
if command -v jq >/dev/null 2>&1; then
    jq -n --arg ctx "$ADVISORY" '{
      hookSpecificOutput: {
        hookEventName: "PostCompact",
        additionalContext: $ctx
      }
    }'
else
    # Fallback: escape newlines + quotes manually. Less robust but functional.
    ESCAPED=$(printf '%s' "$ADVISORY" | sed ':a;N;$!ba;s/\n/\\n/g' | sed 's/"/\\"/g')
    cat <<EOF
{
  "hookSpecificOutput": {
    "hookEventName": "PostCompact",
    "additionalContext": "$ESCAPED"
  }
}
EOF
fi

exit 0
