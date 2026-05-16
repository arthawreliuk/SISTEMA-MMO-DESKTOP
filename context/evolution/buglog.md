# Buglog — SISTEMA-MMO-DESKTOP

Registro de bugs e issues encontrados durante o desenvolvimento do protótipo.

| ID | Data | Módulo | Tela | Descrição | Severidade | Status |
|---|---|---|---|---|---|---|
| BUG-001 | 2026-05-14 | 3.1 | Tela 1 - Cadastro | Rodapé exibia "Não tem conta? Cadastre-se" mas linkava para Login — lógica invertida (texto e destino corretos deveriam ser "Já tem conta? Entrar") | Low | Resolved |
| BUG-002 | 2026-05-14 | 3.1 | Tela 4 - Validação de E-mail_Telefone | Filename enganoso: conteúdo real é tela de vitrine/discovery (MMO Showcase), não validação. Sessão anterior classificou como "destino apenas", deixando 5 botões "Ver Perfil" sem link. Detectado pelo usuário. | Medium | Resolved |
