---
name: Inventário de Grande Escopo com Agente Único
description: Anti-padrão de delegar processamento de 100+ arquivos para um único agente de exploração — resulta em perda de cobertura por token limit
type: anti-pattern
detectado: 2026-05-14 23:15 -0300
---

## Problema

Ao processar inventário de 138 telas HTML (26 módulos), o segundo agente de exploração atingiu limite de tokens e não conseguiu detalhar os módulos 3.19–3.26, forçando inferência por domain knowledge em vez de leitura direta do HTML.

## Sintoma

- Agente retorna summary genérico ("due to token constraints...") para os últimos módulos
- Resultado tem mais 🔍 VERIFICAR do que seria necessário
- Risco de destinos incorretos nas telas não lidas diretamente

## Causa raiz

Escopo de 13+ módulos com múltiplos arquivos cada é excessivo para um único agente de exploração. Token limit é um hard constraint.

## Solução

Dividir em agentes menores: **máximo 8–10 módulos por agente** de exploração. Para 26 módulos, usar 3 agentes paralelos (9+9+8) em vez de 2 (13+13).

```
Agente A: módulos 3.1–3.9 (primeiros 9)
Agente B: módulos 3.10–3.18 (próximos 9)
Agente C: módulos 3.19–3.26 (últimos 8)
```

## Quando se aplica

Qualquer tarefa de inventário/leitura em que o número total de arquivos ultrapasse ~60–80 para um único agente.
