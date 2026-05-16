# Security Standards — SISTEMA-MMO-DESKTOP

Standards-Version: 1.0
Date: 2026-05-14
Bootstrap: brainiac-context-init

---

## Security Hard Gates

| # | Regra | Severity |
|---|---|---|
| SEC-1 | NUNCA commitar segredos, tokens, chaves de API ou credenciais em HTML/JS | 🔴 Hard |
| SEC-2 | NUNCA incluir dados pessoais reais nas telas (CPF, e-mails reais, telefones reais) | 🔴 Hard |
| SEC-3 | NUNCA referenciar endpoints de API reais no protótipo | 🔴 Hard |

## Contexto de Risco

Este é um protótipo estático (HTML puro). Não há:
- Autenticação real
- Banco de dados
- Backend
- Transmissão de dados

Risco de segurança é **baixo** — foco principal é não vazar dados pessoais reais nas telas de demo.

## Dados de Exemplo

Usar sempre dados fictícios nas telas:
- Nomes: "João Silva", "Maria Souza" (fictícios)
- E-mails: "usuario@exemplo.com"
- Telefones: "(11) 99999-9999"
- CPF/CNPJ: inválidos propositalmente ("000.000.000-00")

## Project Security ADRs

Nenhuma ainda. Criar via `/brainiac-context-decision` se necessário.
