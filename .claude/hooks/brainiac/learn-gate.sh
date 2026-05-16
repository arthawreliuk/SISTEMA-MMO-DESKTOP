#!/bin/bash
# Brainiac Context — Stop hook (Learn Gate enforcer)
# Blocks session stop when:
#   - There were Write/Edit tool calls in the session AND
#   - No corresponding updates to context/ AND
#   - No explicit skip declaration in Claude's last messages
#
# Exit 2 with stderr blocks the stop; stderr is shown to Claude.

set -euo pipefail

input=$(cat)
transcript_path=$(echo "$input" | jq -r '.transcript_path // ""')

if [[ ! -f "$transcript_path" ]]; then
    exit 0
fi

# --- Check 1: Were there Write/Edit tool calls on product code? ---
# (edits within context/ are framework meta-editing, don't trigger Learn Gate by themselves)
had_product_edit="no"

product_edits=$(jq -r '
    select(.type == "assistant")
    | .message.content[]?
    | select(.type == "tool_use" and (.name == "Write" or .name == "Edit"))
    | .input.file_path // empty
' "$transcript_path" 2>/dev/null | tr '\\' '/' || true)

while IFS= read -r path; do
    [[ -z "$path" ]] && continue
    if [[ "$path" != *"/context/"* ]]; then
        had_product_edit="yes"
        break
    fi
done <<< "$product_edits"

if [[ "$had_product_edit" == "no" ]]; then
    # No product edits → no Learn Gate required
    exit 0
fi

# --- Check 2: Was context/ updated this session? ---
# Look for Write/Edit targeting context/evolution/, context/intent/,
# context/decisions/, context/knowledge/, or context/agents/
context_updated="no"

while IFS= read -r path; do
    [[ -z "$path" ]] && continue
    if [[ "$path" == *"/context/evolution/"* ]] \
       || [[ "$path" == *"/context/intent/"* ]] \
       || [[ "$path" == *"/context/decisions/"* ]] \
       || [[ "$path" == *"/context/knowledge/"* ]] \
       || [[ "$path" == *"/context/agents/"* ]] \
       || [[ "$path" == *"/context/qa/"* ]]; then
        context_updated="yes"
        break
    fi
done <<< "$product_edits"

if [[ "$context_updated" == "yes" ]]; then
    exit 0
fi

# --- Check 3: Explicit skip declaration in Claude's recent messages? ---
skip_declared="no"

if jq -r '
    select(.type == "assistant")
    | .message.content[]?
    | select(.type == "text")
    | .text // empty
' "$transcript_path" 2>/dev/null \
| tail -c 5000 \
| grep -qiE '(explicit skip declaration|no limbo|sem update de context|skip declarado|read-only session|sessão read-only)'; then
    skip_declared="yes"
fi

if [[ "$skip_declared" == "yes" ]]; then
    exit 0
fi

# --- Block stop: Learn Gate failed ---
cat >&2 <<EOF
[Brainiac Learn Gate — Stop block]

A sessão teve edits em código de produto, mas context/ não foi atualizado
e não houve explicit skip declaration. A task não está completa pelo framework.

Antes de encerrar, escolha UM:

1. **Atualize context/** com o que foi feito:
   - bugfix simples → entrada em context/evolution/buglog.md
   - bug L2/arquitetural → atualize bug-*.md + possivelmente ADR
   - feature completa → atualize Status e Updated no feature-*.md
   - decisão arquitetural → crie ou atualize context/decisions/NNN-*.md
   - aprendizado reutilizável → crie context/knowledge/patterns/<slug>.md
   - aprendizado a evitar → crie context/knowledge/anti-patterns/<slug>.md
   - marco/release/incidente → entrada em context/evolution/changelog.md

2. **Declare explicit skip** (se genuinamente não há nada a atualizar):
   Diga claramente em resposta ao usuário:
   "Explicit skip declaration: [razão específica, não genérica]."

   Exemplos válidos:
   - "Explicit skip declaration: sessão foi read-only (investigação), código não foi alterado."
   - "Explicit skip declaration: edição emergencial de typo em comment, sem valor de knowledge."

Framework spec: context/.brainiac-context-framework.md (Step 3 Learn, Learn Gate, No Limbo Rule).
EOF

exit 2
