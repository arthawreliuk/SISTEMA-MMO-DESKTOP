---
name: Flow Map com Status Indicators
description: Padrão para mapear navegação entre telas HTML em protótipos usando tabela Markdown com colunas de status codificado
type: pattern
validado: 2026-05-14 23:15 -0300
---

## Contexto

Protótipos HTML estáticos com múltiplas telas precisam de um documento de referência que mapeie origem → destino antes de qualquer linkagem ser implementada.

## Padrão

Criar `context/flow-map.md` com tabela por módulo:

```markdown
| Tela | Elemento | Destino | Status |
|---|---|---|---|
| T1 - Login | Entrar | M3.1/T5 - Seleção de Contexto | ✅ Mapeado |
| T1 - Login | Recuperar senha | M3.1/T3 - Recuperação | ✅ Mapeado |
| T1 - Login | Botão X | ⚠️ FALTANTE — tela não existe | ⚠️ FALTANTE |
```

**Status codificado obrigatório:**
- `✅ Mapeado` — destino identificado com certeza
- `🔍 VERIFICAR` — ambíguo, confirmar lendo o HTML real
- `⚠️ FALTANTE` — tela não existe, precisa criar ou decidir destino
- `❌ Dead End` — ação terminal (download, print, logout)
- `🔁 Mesma tela` — ação recarrega/atualiza sem navegar
- `🔗 Linkado` — já implementado (atualizar conforme avança)

## Por que funciona

- Legível flat sem ferramentas externas
- Fácil de varrer cobertura global (buscar células VERIFICAR/FALTANTE)
- Status `🔗 Linkado` permite rastrear progresso da implementação
- Identifica telas faltantes antes de começar a linkar (evita surpresas no meio do fluxo)

## Como usar

1. Gerar o mapa antes de qualquer linkagem
2. Resolver todos os ⚠️ FALTANTE (criar tela ou redirecionar para existente)
3. Confirmar 🔍 VERIFICAR lendo o HTML real
4. Durante linkagem: mudar status de ✅ Mapeado para 🔗 Linkado
5. DoD: zero células em branco + zero 🔍 VERIFICAR
