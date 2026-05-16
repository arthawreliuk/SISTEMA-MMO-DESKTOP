# Sensors — SISTEMA-MMO-DESKTOP

## Sensors

| Sensor | Tool | Command / Ação | Signal |
|---|---|---|---|
| Flow Check | Browser | Abrir tela linkada e clicar em todos os elementos interativos | Todos os links respondem e levam à tela correta |
| Visual Integrity | Browser | Inspecionar layout após adicionar links | Layout não quebrou (nenhum estilo alterado) |
| Path Validation | Browser Console | Abrir DevTools > Console após navegação | Sem erros 404 ou "file not found" |
| Coverage Check | Manual | Verificar tabela de mapa de fluxo | Zero células vazias no mapa de telas |

## How Model Should React

- **Flow Check falhou** (link quebrado) → corrigir path relativo imediatamente, não avançar para próxima tela
- **Visual Integrity falhou** (layout quebrou) → reverter última alteração, nunca prosseguir com layout comprometido
- **Path Validation** (erro 404) → verificar nome exato da pasta/arquivo (acentos, espaços, capitalização)
- **Coverage Check** (tela sem link de saída) → registrar como tela pendente no buglog antes de encerrar sessão

## Nota sobre Paths

Os nomes de pasta contêm acentos e espaços (ex: `Módulo 3.1 - Acesso, Conta e Identidade`). Ao escrever paths relativos em HTML:
- Testar no browser antes de considerar concluído
- Em caso de dúvida, usar `encodeURIComponent` ou verificar o path literal no Finder
