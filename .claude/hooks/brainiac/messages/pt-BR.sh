# Brainiac Context — mensagens i18n (Português Brasil)
# Carregado pelos scripts de hook quando BRAINIAC_LANG=pt-BR.

# --- Comum ---
MSG_HEADER="[Brainiac Clean Code Gate]"

# --- Gate: Nomes de arquivo proibidos ---
MSG_BANNED_FILENAME="Padrão de nome de arquivo proibido (Regra No Limbo)."
MSG_BANNED_FILENAME_HINT="Renomeie o arquivo com nome significativo e específico do domínio. Prefixos proibidos: wip-, temp-, old-, unused-, legacy-."

# --- Gate: Tamanho de arquivo ---
MSG_FILE_TOO_LARGE="Arquivo excede 500 linhas em código de produto."
MSG_FILE_TOO_LARGE_HINT="Divida por responsabilidade, ou adicione marcador 'brainiac-allow-large reason=\"...\"' nas 10 primeiras linhas se dividir fragmenta o domínio."

# --- Gate: any sem justificativa ---
MSG_ANY_FORBIDDEN="Uso de \`: any\` sem justificativa inline."
MSG_ANY_FORBIDDEN_HINT="Substitua 'any' por tipo explícito. Se realmente necessário (ex: parsing de boundary), adicione comentário '// brainiac:any-ok reason=\"...\"' na mesma linha."

# --- Gate: SEC-1 token/secret leak ---
MSG_SEC1_TOKEN_LEAK="Padrão de token/secret detectado (SEC-1 do SECURITY_STANDARDS)."
MSG_SEC1_TOKEN_LEAK_HINT="Remova o token literal imediatamente. Três passos: (1) rotar no provider (revoke/regenerate), (2) substituir no código com referência a env var (ex: process.env.GITHUB_TOKEN), (3) auditar blast radius no provider. NÃO existe exemption para SEC-1 — marker '// security-allow' não vale aqui."

# --- Gate: Proteção de canonicals (desde v1.15.0) ---
MSG_CANONICAL_HEADER="[Brainiac Canonical Gate]"
MSG_CANONICAL_BLOCKED="Edição bloqueada: o alvo é um canonical do framework em context/agents/brainiac/."
MSG_CANONICAL_HINT_1="Caminho preferido: refatore a mudança como Project Extension em context/agents/project/ via /brainiac-context-agent."
MSG_CANONICAL_HINT_2="Caminho oficial: rode /brainiac-context-update pra evoluir canonicals."
MSG_CANONICAL_HINT_3="Bypass justificado: inclua o marker brainiac-canonical-edit reason=\"...\" dentro do payload do Edit/Write — reviewer auditará depois."

# --- Gate: Context Hygiene / PostCompact (desde v1.20.0, Iron Law 7) ---
MSG_POST_COMPACT_HEADER="=== Brainiac post-compact reload (Iron Law 7) ==="
MSG_POST_COMPACT_LINE_TRIGGER="Compact concluído, trigger"
MSG_POST_COMPACT_LINE_FRAMEWORK="Framework spec foi re-injetado via @AGENTS.md -> @context/.brainiac-context-framework.md (import chain)."
MSG_POST_COMPACT_LINE_CRITICAL="Antes de trabalho crítico (Build / Learn / framework update / migração / refactor / bugfix complexo):"
MSG_POST_COMPACT_STEP1="Confirme acesso a Iron Laws 1-7 (framework spec carregado)."
MSG_POST_COMPACT_STEP2="Releia o intent ativo (feature-*.md / bug-*.md / refactor-*.md)."
MSG_POST_COMPACT_STEP3="Releia ADRs referenciados na seção Related do intent."
MSG_POST_COMPACT_STEP4="Verifique .brainiac/last-compact-state.json para o handoff."
MSG_POST_COMPACT_STEP5="Rode /context — se >=60%, continuar trabalho crítico sem novo /compact ou /clear é Brainiac violation (Iron Law 7.5)."
MSG_POST_COMPACT_FOOTER="Se for continuação simples, o summary é suficiente."

# --- Gate: Context Hygiene / PreCompact (desde v1.20.0, Iron Law 7) ---
MSG_PRE_COMPACT_HEADER="[Brainiac pre-compact]"
MSG_PRE_COMPACT_BODY="Compact iniciando. Iron Law 7: handoff salvo em .brainiac/last-compact-state.json. post-compact.sh injetará o checklist de reload. Se este compact é resposta a scope-switch, considere /clear ao invés (Iron Law 7.4)."
MSG_PRE_COMPACT_BLOCKED_REASON="Auto-compact bloqueado por BRAINIAC_BLOCK_AUTOCOMPACT=1 (opt-in). Rode /compact manualmente pra confirmar, ou unset a env var pra liberar."

# --- Gate: Scope-switch (desde v1.20.0, Iron Law 7.4) ---
MSG_SCOPE_SWITCH_HEADER="[Brainiac context-hygiene]"
MSG_SCOPE_SWITCH_BODY="Scope switch detectado. Iron Law 7.4: nunca inicie novo escopo em ou acima de 40%.

Ações:
- Rode /context pra ver uso atual.
- Se >=40%, /clear é obrigatório antes de prosseguir (não use /compact pra scope switch).
- /compact só preserva mesma tarefa; perde history detalhada.
- Após /clear, framework spec é re-injetado via @import chain (CLAUDE.md -> @AGENTS.md -> @context/.brainiac-context-framework.md)."
