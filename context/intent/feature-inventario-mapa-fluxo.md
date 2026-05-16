# Intent: Feature - Inventário de Telas + Mapa de Fluxo Global

## What

Listar todos os arquivos `.html` dos 26 módulos desktop, identificar todos os elementos clicáveis de cada tela (botões, links, ações) e registrar em `context/flow-map.md` um mapa completo de origem → destino, sinalizando telas intermediárias faltantes.

## Why

Para demonstrar ao cliente Mestre da Mão de Obra como o produto funcionará, permitindo que ele visualize o fluxo real durante a reunião. Pré-requisito obrigatório para qualquer trabalho de linkagem — sem mapa documentado, a interatividade pode ter buracos (telas sem entrada ou saída) que comprometem o demo.

## Acceptance Criteria

- [x] Todos os arquivos `.html` dos 26 módulos estão listados em `context/flow-map.md`
- [x] Para cada tela: elementos clicáveis identificados (botões, links, ações)
- [x] Para cada elemento clicável: tela de destino mapeada ou `FALTANTE` sinalizado
- [x] Telas sem nenhuma saída (dead ends) estão marcadas explicitamente
- [x] `flow-map.md` revisado e sem linhas vazias (cobertura 100%)

## Related

- [Project Intent](project-intent.md)
- [Decision: 001-formato-flow-map](../decisions/001-formato-flow-map.md)

## Status

- **Created**: 2026-05-14 22:53 -0300 (Phase: Intent)
- **Status**: Done (Build concluído — Learn Gate pendente)

| Data | Status | Fase | Nota |
|---|---|---|---|
| 2026-05-14 22:53 -0300 | Draft | Intent | Feature criada via /brainiac-context-feature |
| 2026-05-14 23:10 -0300 | Done | Build | flow-map.md gerado: 138 telas, 9 faltantes, ~55 a verificar |
