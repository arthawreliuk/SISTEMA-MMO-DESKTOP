#!/bin/bash
# Brainiac Context — PreToolUse hook for Write|Edit
# Blocks code edits when no Intent file has been loaded in the current session.
#
# Permits:
#   - Edits within context/ (framework meta-editing is allowed)
#   - Edits to CLAUDE.md, AGENTS.md, *.md at repo root (framework infra)
#   - Edits to package.json, tsconfig.json, config files (infra, not product code)
#
# Requires an Intent to be loaded before editing product code:
#   - Detects past Read tool calls on context/intent/feature-*.md, bug-*.md, or refactor-*.md
#
# Exit 2 with stderr blocks the tool call; stderr is shown to Claude.

set -euo pipefail

input=$(cat)
transcript_path=$(echo "$input" | jq -r '.transcript_path // ""')
file_path=$(echo "$input" | jq -r '.tool_input.file_path // ""')
tool_name=$(echo "$input" | jq -r '.tool_name // ""')

# Normalize path separators for cross-platform matching
file_path_norm=$(echo "$file_path" | tr '\\' '/')

# --- Allowlist: framework meta-editing and infra files ---
# Note: workflow JSON, migrations, and other domain artifacts are intentionally
# NOT allowlisted — they require Intent because they are domain work.
if [[ "$file_path_norm" == *"/context/"* ]] \
   || [[ "$file_path_norm" == */CLAUDE.md ]] \
   || [[ "$file_path_norm" == */AGENTS.md ]] \
   || [[ "$file_path_norm" == */README.md ]] \
   || [[ "$file_path_norm" == */CHANGELOG.md ]] \
   || [[ "$file_path_norm" == */package.json ]] \
   || [[ "$file_path_norm" == */tsconfig*.json ]] \
   || [[ "$file_path_norm" == */*.config.* ]] \
   || [[ "$file_path_norm" == */drizzle.config.* ]] \
   || [[ "$file_path_norm" == */.env* ]] \
   || [[ "$file_path_norm" == */.gitignore ]] \
   || [[ "$file_path_norm" == *.md ]] \
   || [[ "$file_path_norm" == *.gen.* ]] \
   || [[ "$file_path_norm" == *-lock.* ]] \
   || [[ "$file_path_norm" == */yarn.lock ]] \
   || [[ "$file_path_norm" == */Cargo.lock ]] \
   || [[ "$file_path_norm" == */Gemfile.lock ]] \
   || [[ "$file_path_norm" == */poetry.lock ]] \
   || [[ "$file_path_norm" == */composer.lock ]]; then
    exit 0
fi

# --- Verify Intent was loaded in the current session ---
intent_loaded="no"

if [[ -f "$transcript_path" ]]; then
    # Scan transcript for Read tool_calls that touched context/intent/feature-*.md,
    # context/intent/bug-*.md, or context/intent/refactor-*.md
    if jq -r '
        select(.type == "assistant")
        | .message.content[]?
        | select(.type == "tool_use" and .name == "Read")
        | .input.file_path // empty
    ' "$transcript_path" 2>/dev/null \
    | tr '\\' '/' \
    | grep -E 'context/intent/(feature|bug|refactor)-' > /dev/null ; then
        intent_loaded="yes"
    fi

    # Also accept @-references in user messages (explicit load intent)
    if [[ "$intent_loaded" == "no" ]]; then
        if jq -r '
            select(.type == "user")
            | .message.content[]?
            | select(.type == "text")
            | .text // empty
        ' "$transcript_path" 2>/dev/null \
        | grep -E '@[^[:space:]]*context/intent/(feature|bug|refactor)-' > /dev/null ; then
            intent_loaded="yes"
        fi
    fi
fi

if [[ "$intent_loaded" == "yes" ]]; then
    exit 0
fi

# --- Block: no Intent loaded, editing product code ---
cat >&2 <<EOF
[Brainiac Learn Gate — PreToolUse block]

Bloqueando $tool_name em: $file_path

Regra: edição de código de produto requer Intent carregado na sessão.

Como desbloquear (escolha um):

1. **Carregue o Intent existente**
   Use Read em context/intent/feature-*.md, bug-*.md ou refactor-*.md
   correspondente a esta task. Depois refaça o $tool_name.

2. **Crie o Intent primeiro** (Step 1 — Intent)
   Se a feature/bug/refactor ainda não está documentado:
   - Feature nova → crie context/intent/feature-<slug>.md
   - Bugfix L2 → crie context/intent/bug-<slug>.md (7 critérios no framework)
   - Refactor → crie context/intent/refactor-<slug>.md

3. **Se for edição emergencial justificada** (raro)
   Declare explicitamente no próximo message: "emergency edit — explicit
   skip declaration: [razão]" e registre no buglog após o fix.

Framework spec: context/.brainiac-context-framework.md (Step 1 Intent, Step 2 Build).
EOF

exit 2
