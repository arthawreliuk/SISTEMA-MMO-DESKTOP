#!/bin/bash
# Brainiac Context — SessionStart hook
# Fires on startup, resume, clear, compact (matcher field: source).
#
# Plain stdout is added to Claude's context at session start (SessionStart is
# one of three events where plain stdout reaches the model — others are
# UserPromptSubmit and UserPromptExpansion).
#
# v1.20.0 — Iron Law 7 (Context Hygiene): differentiated message per source
# value (startup / resume / clear / compact) so the agent gets a tailored
# reminder for context lifecycle.
#
# Exit 0 always (advisory).

set -euo pipefail

# --- Parse stdin: extract source field (fallback to "startup" if missing) ---
SOURCE="startup"
if command -v jq >/dev/null 2>&1; then
    INPUT=$(cat)
    SOURCE=$(echo "$INPUT" | jq -r '.source // "startup"' 2>/dev/null || echo "startup")
fi

cat <<'EOF'
=== Brainiac Context Framework ativo nesta sessão ===

Contratos obrigatórios:

1. **Context Loading Order** (sempre, antes de agir):
   AGENTS.md → .brainiac-context-framework.md → product-spec.md →
   project-intent.md → feature/bug/refactor relevante → decisions →
   patterns/anti-patterns → agent → sensors.md

2. **Plan → Approve → Execute** — antes de qualquer Build, apresente Plan
   explícito (escopo, arquivos, DoD, sensors). Aguarde aprovação antes de
   editar código.

3. **No Limbo Rule** — todo insight do Build deve classificar em um dos
   5 destinos antes do fim da sessão:
   - knowledge/patterns/ (reutilizável)
   - knowledge/anti-patterns/ (evitar)
   - Outcomes de ADR (revisita decisão)
   - changelog (marco L3)
   - fora do framework (retro de time)

4. **Learn Gate** — a task NÃO está completa até context/ ser atualizado
   OU uma explicit skip declaration ser dita com razão.

5. **Triage antes de criar artefato**:
   - Bug: L1 (buglog sempre) → L2 (bug-*.md se bate 1+ dos 7 critérios) →
     L3 (changelog só para marcos/incidentes)
   - Feature: novo arquivo só se é feature completamente nova,
     substituição total, ou split.

6. **Iron Law 7 — Context Hygiene Between Cycles** (desde v1.20.0):
   Framework spec é always-on via @import chain (CLAUDE.md → @AGENTS.md →
   @context/.brainiac-context-framework.md). Nunca iniciar novo escopo
   em ou acima de 40%. /clear preferido para scope switch; /compact só
   pra continuação da mesma tarefa.

Este hook está monitorando edits e encerramento. Violações serão bloqueadas.
EOF

# --- Source-specific tail (added after the universal contracts above) ---
case "$SOURCE" in
    clear)
        cat <<'EOF'

--- Notice: /clear ---

Sessão recém-resetada. Framework spec foi re-injetado do disco via @import chain.
Antes da primeira ação:
1. Confirme AGENTS.md carregado (já injetado via @import).
2. Carregue intent ativo se for continuar trabalho prévio: context/intent/<feature|bug|refactor>-*.md
3. Carregue ADRs referenciadas na seção Related do intent.
4. Rode /context — se ≥40%, isto é estado inconsistente (clear deveria ter zerado); verifique manualmente.
EOF
        ;;
    compact)
        cat <<'EOF'

--- Notice: /compact ---

Sessão recém-compactada. Framework spec foi re-injetado via @import chain.
post-compact.sh já injetou o checklist detalhado de reload — siga-o antes de
trabalho crítico. Para continuação simples da mesma tarefa, summary é suficiente.
EOF
        ;;
    resume)
        cat <<'EOF'

--- Notice: resume ---

Sessão retomada. Releia o intent ativo (context/intent/) antes de prosseguir;
o framework spec e AGENTS.md já estão re-injetados via @import chain.
EOF
        ;;
    startup|*)
        # Default startup: no extra tail. Universal contracts above are sufficient.
        :
        ;;
esac

exit 0
