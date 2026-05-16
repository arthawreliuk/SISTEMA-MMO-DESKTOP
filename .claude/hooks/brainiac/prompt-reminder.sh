#!/bin/bash
# Brainiac Context — UserPromptSubmit hook
# Detects trigger patterns in the user prompt and reminds Claude of the
# corresponding framework step.
#
# Exit 0 + stdout (plain text) is added to Claude's context for this prompt.

set -euo pipefail

input=$(cat)
prompt=$(echo "$input" | jq -r '.prompt // ""' 2>/dev/null || echo "")

# Normalize: lowercase + strip leading whitespace
prompt_lc=$(echo "$prompt" | tr '[:upper:]' '[:lower:]' | sed 's/^[[:space:]]*//')

trigger=""

# Build triggers
if echo "$prompt_lc" | grep -qE '^(implementa|adiciona|cria|constr[óo]i|faz|build|monta)'; then
    trigger="[Brainiac trigger: BUILD detected]
- Carregue feature-*.md relevante em context/intent/. Se não existe, crie Intent antes (Step 1).
- Verifique ADRs relacionadas (seção Related do feature file).
- Siga Plan → Approve → Execute — não edite código sem aprovação do Plan.
- sensors.md deve passar antes de declarar done."

# Bugfix triggers
elif echo "$prompt_lc" | grep -qE '^(corrige|fixa|resolve|bugfix|conserta|arruma|da erro)'; then
    trigger="[Brainiac trigger: BUGFIX detected]
- Triage L1/L2/L3 antes de qualquer arquivo.
- L1 (default): só entrada em context/evolution/buglog.md após o fix.
- L2 (condicional): crie context/intent/bug-<slug>.md se bate 1+ dos 7 critérios
  (root cause não-óbvia, toca arquitetura, alto risco regressão, impacto
  significativo, teste específico, cross-layer, gera pattern).
- L3 (raro): entrada em changelog.md apenas para incidentes majors."

# Update feature triggers
elif echo "$prompt_lc" | grep -qE '^(atualiza|muda|ajusta|update|modifica|troca)'; then
    trigger="[Brainiac trigger: UPDATE FEATURE detected]
- Carregue feature-*.md original. Não crie novo arquivo a menos que seja
  substituição total, feature nova, ou split.
- Modificações incrementais; preserve o que não precisa mudar.
- Atualize Status e Updated no feature file."

# Refactor triggers
elif echo "$prompt_lc" | grep -qE '^(refatora|refactor|reorganiza)'; then
    trigger="[Brainiac trigger: REFACTOR detected]
- Crie context/intent/refactor-<slug>.md se não existe.
- Refactor ≠ mudança de comportamento. Se o comportamento muda, é Update Feature ou nova feature.
- Documente a motivação (performance, legibilidade, dívida técnica)."

# Read-only / investigação triggers
elif echo "$prompt_lc" | grep -qE '^(explora|investiga|analisa|analyze|como funciona|o que faz|me explica|mostra)'; then
    trigger="[Brainiac trigger: READ-ONLY detected]
- Não atualize context/ por default — isso é exploração/leitura, não Build.
- Ao fechar, declare explicitamente: 'sessão read-only, sem context update necessário'."

# Decision / ADR triggers
elif echo "$prompt_lc" | grep -qE '(decid|escolh|chose|choos|vamos usar|vou usar)'; then
    trigger="[Brainiac trigger: DECISION detected]
- Crie context/decisions/<NNN>-<slug>.md com rationale, alternativas consideradas, outcome esperado.
- Se é cross-cutting, referencie a partir do project-intent.md ou do feature file."
fi

if [[ -n "$trigger" ]]; then
    echo "$trigger"
fi

# --- Scope-switch detection (since v1.20.0, Iron Law 7.4 — soft, non-blocking) ---
scope_switch=""
if echo "$prompt_lc" | grep -qE '^(agora vamos|pr[óo]xim[ao] tarefa|nova feature|outro bug|mudando de assunto|vamos come[çc]ar)' \
   || echo "$prompt" | grep -qE '^/brainiac-context-(feature|bugfix|update|learn|build)'; then
    scope_switch="[Brainiac context-hygiene]
Scope switch detectado. Iron Law 7.4: never start a new scope at or above 40%.

Ações:
- Rode /context pra ver uso atual.
- Se ≥40%, /clear é obrigatório antes de prosseguir (não use /compact pra scope switch).
- /compact só preserva mesma tarefa; perde history detalhada.
- Após /clear, framework spec é re-injetado via @import chain (CLAUDE.md → @AGENTS.md → @context/.brainiac-context-framework.md)."
fi

if [[ -n "$scope_switch" ]]; then
    [[ -n "$trigger" ]] && echo ""
    echo "$scope_switch"
fi

exit 0
