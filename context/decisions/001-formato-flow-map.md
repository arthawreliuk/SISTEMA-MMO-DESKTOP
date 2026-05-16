# ADR 001 — Formato do Flow Map

- **Created**: 2026-05-14 22:53 -0300
- **Status**: Accepted
- **Feature**: [feature-inventario-mapa-fluxo](../intent/feature-inventario-mapa-fluxo.md)

## Context

O projeto precisa de um documento que mapeie todas as telas HTML dos 26 módulos desktop e suas conexões (origem → destino). Esse documento será usado como referência durante a implementação da interatividade e como checklist de cobertura.

## Decision

Usar **tabela Markdown por módulo** em `context/flow-map.md`.

Formato de cada linha:

```
| Módulo | Tela | Elemento Clicável | Destino | Status |
```

Onde `Status` pode ser: `✅ Mapeado` / `⚠️ FALTANTE` / `🔗 Linkado` / `❌ Dead End`.

## Rationale

- Legível diretamente no editor sem ferramentas extras
- Fácil de varrer linha a linha para verificar cobertura 100%
- Editável manualmente quando novas telas forem identificadas
- Alta reversibilidade (plain text, sem dependência de renderer)

## Alternatives Rejected

| Alternativa | Motivo da rejeição |
|---|---|
| Lista hierárquica Markdown | Menos estruturada para checar cobertura global de uma vez |
| Diagrama Mermaid | Ilegível em escala de 26 módulos; difícil de editar ao descobrir telas faltantes |

## Outcomes

- **Updated**: 2026-05-14 23:15 -0300
- **Outcomes**: Decisão validada. Tabela Markdown gerou flow-map.md de 529 linhas cobrindo 138 telas e ~310 elementos navegáveis. Varredura de cobertura via grep funcionou perfeitamente (grep -c "STATUS" flow-map.md). Nenhuma necessidade de revisão da decisão.
