---
name: Classificar tela por filename sem ler conteúdo
description: Inferir o papel de uma tela (origem/destino/intermediária) com base no filename sem ler o HTML, causando links omitidos
type: anti-pattern
detected: 2026-05-14 23:49 -0300
---

# Anti-Pattern: Classificar tela por filename sem ler conteúdo

## Sintoma

Durante mapeamento de fluxo, uma tela é classificada como "destino apenas" ou "sem elementos clicáveis" com base no nome do arquivo, sem que o HTML seja lido. Resultado: botões reais ficam sem `onclick`/`href` e o bug só é descoberto quando o usuário testa manualmente.

## Manifestação histórica

- **2026-05-14** — `Módulo 3.1 / Tela 4 - Validação de E-mail_Telefone.html`: filename sugere tela de OTP/validação. Conteúdo real = vitrine MMO Showcase & Discovery com 5 botões "Ver Perfil" e 1 botão "Buscar". Sessão anterior classificou como "destino apenas". Usuário reportou: "cliquei tudo e não foi pra lugar nenhum".

## Por que acontece

Filenames no projeto SISTEMA-MMO-DESKTOP foram gerados pela ferramenta de design (UXPilot) e não refletem fielmente o conteúdo final — o design pode ter evoluído após o naming.

**Why:** confiança no nome do arquivo como proxy do conteúdo → skip da leitura → classificação errada → links omitidos → bug detectado pelo usuário.

## Regra

> Nunca classificar uma tela como "destino apenas" sem ler o HTML. Toda tela recebe `grep` por `<button` e `<a ` antes de ser marcada como sem elementos clicáveis.

## Como aplicar

1. Ao mapear telas de um módulo: executar `grep -n "button\|<a " arquivo.html` em TODAS as telas antes de classificar qualquer uma.
2. Só marcar como "destino sem links de saída" se o grep retornar zero resultados clicáveis.
3. Em caso de filename ambíguo ou inesperado: ler o `<title>` e o `<h1>` da tela para confirmar o conteúdo.
