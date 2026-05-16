# Changelog — SISTEMA-MMO-DESKTOP

## [Unreleased]

### Intent
- Feature `inventario-mapa-fluxo` criada — inventário completo de telas + mapa de fluxo global
- ADR 001 — formato de flow map (tabela Markdown)

### Build
- `context/flow-map.md` gerado: 26 módulos · 138 telas · ~325 elementos mapeados
- 9 telas faltantes identificadas (listadas no flow-map.md — seção "Resumo de Telas Faltantes")
- ~55 destinos marcados como 🔍 VERIFICAR (ambíguos — requerem confirmação)
- **Módulos 3.1–3.4 linkados** (2026-05-14 23:49 -0300): 4 módulos · ~40 telas · navegação interativa funcional
  - BUG-001 e BUG-002 detectados e resolvidos (ver buglog)
  - Anti-pattern `filename-content-mismatch-skip` documentado

## [0.1.0] — 2026-05-14

### Added
- Bootstrap Brainiac Context Framework v1.21.1
- Estrutura context/ completa (intent, decisions, knowledge, agents, sensors, evolution)
- project-intent.md com escopo do protótipo interativo
- product-spec.md com personas e jornadas
- code-standards.md adaptado para HTML estático + Tailwind
- security-standards.md para protótipo sem backend
- sensors.md com checklist de validação de fluxo
- AGENTS.md com identidade do projeto Mestre da Mão de Obra
- .claude/CLAUDE.md (router Claude Code)
- Modo Brainiac: guided
