# Code Standards — SISTEMA-MMO-DESKTOP

Standards-Version: 1.0
Date: 2026-05-14
Bootstrap: brainiac-context-init

---

## Hard Gates (bloqueiam merge/entrega)

| # | Regra | Severity |
|---|---|---|
| H1 | NUNCA alterar classes Tailwind ou estilos CSS existentes — apenas adicionar atributos de navegação | 🔴 Hard |
| H2 | NUNCA adicionar dependências JS externas além das já presentes (Font Awesome, Tailwind CDN) | 🔴 Hard |
| H3 | Todos os paths de navegação devem ser relativos — sem `http://` ou `https://` internos | 🔴 Hard |
| H4 | NUNCA introduzir backend, APIs reais, banco de dados ou autenticação real | 🔴 Hard |
| H5 | NUNCA remover ou reorganizar elementos HTML existentes (apenas adicionar `href`, `onclick`, `id`) | 🔴 Hard |

## Soft Gates (devem ser justificados se violados)

- JS mínimo: usar `window.location.href` ou `href="./caminho.html"` para navegação
- Sem jQuery ou bibliotecas adicionais
- Preferir `<a href="">` sobre `onclick` quando possível (mais semântico)
- IDs adicionados devem seguir padrão `kebab-case`
- Comentários JS só quando o fluxo de destino não for óbvio

## Stack

| Aspecto | Valor |
|---|---|
| Markup | HTML5 estático |
| Estilo | Tailwind CSS (via CDN) |
| Ícones | Font Awesome 6 |
| Fonte | Google Fonts — Plus Jakarta Sans |
| JS | Vanilla (mínimo — apenas navegação) |
| Servidor | Nenhum — abertura direta no browser |

## Navegação entre Telas

```html
<!-- Preferido: link direto -->
<a href="../Módulo 3.2 - Onboarding/Tela 1 - Boas-vindas.html">...</a>

<!-- Alternativa: onclick para lógica condicional -->
<button onclick="window.location.href='../Módulo 3.2 - Onboarding/Tela 1.html'">...</button>
```

Paths: sempre relativos ao arquivo atual. Usar `../` para subir de pasta.

## Fora de Escopo

- Testes automatizados (protótipo visual)
- Logging
- Error handling
- Validação de formulários real
- Backend de qualquer tipo

## Project-Specific Overrides

Nenhum override adicional. Regras acima são suficientes para o escopo de protótipo.
