# AGENTS.md — SISTEMA-MMO-DESKTOP

> **Brainiac Mode:** guided
>
> Skills aplicam Small-Steps Discipline conforme modo. Editar este valor ou rodar `/brainiac-context-init --mode <new>` pra alterar.

> Roteador para agentes de IA. Leia este arquivo ANTES de qualquer tarefa.
> Este projeto adota **Brainiac Context** v1.21.1.

<!-- BRAINIAC:CANONICAL-START version=1.21.1 | Managed by /brainiac-context-update — DO NOT EDIT manually.
     The framework spec imported below is the authoritative source of Brainiac rules.
     Customizations belong in the PROJECT:OVERRIDES block below.
     Bypass: rare, justified, with marker `brainiac-canonical-edit reason="..."`.
     The `version=X.Y.Z` attribute is the source of truth for the version of the
     canonical block; `/brainiac-context-update` keeps it in sync. -->

@context/.brainiac-context-framework.md

<!-- BRAINIAC:CANONICAL-END -->

<!-- PROJECT:OVERRIDES-START | Editable by humans. Preserved across /brainiac-context-update.
     Add project-specific rules, conventions, agents, limits below.
     This block is YOURS. -->

## Project Identity

- **Nome**: SISTEMA-MMO-DESKTOP
- **Descrição**: Protótipo interativo de marketplace de serviços profissionais (estilo GetNinjas) para demonstração ao cliente Mestre da Mão de Obra
- **Domínio**: Professional Services Marketplace / Interactive Prototype
- **Stack**: HTML5 + Tailwind CSS (CDN) + Font Awesome 6 + Google Fonts (Plus Jakarta Sans) + Vanilla JS
- **Tipo**: Cliente (entrega contratada)

## Project Operational Rules

Regras específicas deste projeto (numeradas — adicione conforme necessário):

1. **NUNCA alterar CSS/layout existente** — apenas adicionar atributos de navegação (`href`, `onclick`, `id`). Estilos Tailwind e estrutura HTML são intocáveis.
2. **Usar paths relativos obrigatoriamente** — `href="../Módulo X/Tela Y.html"` ou `window.location.href`. Sem `http://` ou `https://` internos.
3. **Mapear TODOS os elementos clicáveis antes de linkar** — nenhuma tela recebe links sem mapeamento prévio documentado.
4. **Protótipo deve abrir direto no browser** — sem servidor local, sem build step.
5. **Plan → Approve → Execute** em toda implementação de fluxo — mesmo para um único link.
6. **Zero backend** — este protótipo é 100% visual. Qualquer sugestão de backend, API real ou banco de dados está fora de escopo.

## Project Artifacts Map (extras além do framework)

| Artefato | Localização | Responsável |
|---|---|---|
| Mapa de fluxo global | `context/flow-map.md` (a criar via /brainiac-context-feature) | Humano + IA |
| Telas HTML (desktop) | `Módulo 3.X - .../Tela N - ....html` | Design (existente) |

## Project Limits

- **Escopo contratual**: protótipo interativo HTML (desktop) + export PNG das telas
- **Fora de escopo**: backend, autenticação real, banco de dados, APIs reais, responsividade (fase futura)
- **Tablet/Mobile**: mesmos fluxos, arquivos separados — fase futura após aprovação do desktop
- **Aditivos**: qualquer escopo além dos 26 módulos desktop = aditivo contratual

## Project Agents (Extensions)

Nenhuma extension ainda. Criar via `/brainiac-context-agent`.

## Source of Truth Hierarchy

Brainiac Context > Telas HTML (design existente) > Tarefas

## Project Environment

```env
# Sem variáveis de ambiente — protótipo estático sem backend
# Adicione aqui se futuras fases introduzirem tooling (ex: build step)
```

**Importante:** Nunca commitar `.env` ou `.env.local`. Adicione ao `.gitignore`.

<!-- PROJECT:OVERRIDES-END -->

---

## References

- [Brainiac Context Framework](https://github.com/kaleldias/Brainiac-Context/blob/main/.brainiac-context-framework.md) — Especificação completa
- [CODE_STANDARDS.md](https://github.com/kaleldias/Brainiac-Context/blob/main/CODE_STANDARDS.md) — Contrato universal de qualidade
- [SECURITY_STANDARDS.md](https://github.com/kaleldias/Brainiac-Context/blob/main/SECURITY_STANDARDS.md) — Contrato universal de security gates
- [PROTOCOL.md (GitHub layer)](https://github.com/kaleldias/Brainiac-Context/blob/main/integrations/github/PROTOCOL.md) — Camada operacional GitHub
