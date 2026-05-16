# Flow Map — SISTEMA-MMO-DESKTOP

**Gerado em:** 2026-05-14  
**Total de telas:** 138 (26 módulos · desktop)  
**Legenda de status:**

| Status | Significado |
|---|---|
| ✅ Mapeado | Destino identificado com certeza |
| 🔍 VERIFICAR | Destino ambíguo — requer confirmação humana |
| ⚠️ FALTANTE | Tela de destino não existe no projeto atual |
| ❌ Dead End | Tela sem saída natural (terminal) |
| 🔗 Linkado | Já implementado (preencher conforme avança) |
| 🔁 Mesma tela | Ação recarrega/atualiza a tela atual |

> **Nota padrão:** Links de rodapé (Termos de Uso, Política de Privacidade, Suporte, Privacidade) aparecem em quase todas as telas. Destino padrão: ⚠️ FALTANTE (páginas institucionais não existem no protótipo). Não listados individualmente por tela — tratar como bloco único ao implementar.

---

## Módulo 3.1 — Acesso, Conta e Identidade

| Tela | Elemento | Destino | Status |
|---|---|---|---|
| T1 - Cadastro de conta | Avançar | M3.1/T4 - Validação de E-mail/Telefone | ✅ Mapeado |
| T1 - Cadastro de conta | Entrar com Google | M3.1/T5 - Seleção de Contexto | ✅ Mapeado |
| T1 - Cadastro de conta | Esqueceu a senha? | M3.1/T3 - Recuperação de Acesso | ✅ Mapeado |
| T1 - Cadastro de conta | Já tem conta? / Entrar | M3.1/T2 - Login | ✅ Mapeado |
| T2 - Login | Continuar com Google | M3.1/T5 - Seleção de Contexto | ✅ Mapeado |
| T2 - Login | Continuar com Apple | M3.1/T5 - Seleção de Contexto | ✅ Mapeado |
| T2 - Login | Entrar na Plataforma | M3.1/T5 - Seleção de Contexto | ✅ Mapeado |
| T2 - Login | Recuperar senha | M3.1/T3 - Recuperação de Acesso | ✅ Mapeado |
| T2 - Login | Cadastre-se grátis | M3.1/T1 - Cadastro de conta | ✅ Mapeado |
| T3 - Recuperação de Acesso | Enviar Instruções de Acesso | M3.1/T4 - Validação de E-mail/Telefone | ✅ Mapeado |
| T3 - Recuperação de Acesso | Precisa de ajuda com seu acesso? | M3.21/T1 - Home da Academy | 🔍 VERIFICAR |
| T4 - Validação de E-mail/Telefone | Confirmar Verificação | M3.1/T5 - Seleção de Contexto | ✅ Mapeado |
| T4 - Validação de E-mail/Telefone | Tentar outro método | 🔁 Mesma tela (outro canal) | 🔍 VERIFICAR |
| T4 - Validação de E-mail/Telefone | Precisa de ajuda? | M3.21/T1 - Home da Academy | 🔍 VERIFICAR |
| T5 - Seleção/Alternância de Contexto | Entrar como Cliente | M3.4/T1 - Tela inicial de busca | ✅ Mapeado |
| T5 - Seleção/Alternância de Contexto | Entrar como Profissional | M3.2/T1 - Ativação do modo profissional | ✅ Mapeado |
| T5 - Seleção/Alternância de Contexto | Entrar como Empresa | M3.19/T2 - Painel da empresa | ✅ Mapeado |
| T5 - Seleção/Alternância de Contexto | Sair | M3.1/T2 - Login | ✅ Mapeado |
| T6 - Painel Inicial Pós-Login | Buscar | M3.4/T1 - Tela inicial de busca | ✅ Mapeado |
| T6 - Painel Inicial Pós-Login | Ver Perfil | M3.3/T1 - Edição do perfil profissional | ✅ Mapeado |
| T6 - Painel Inicial Pós-Login | Solicitar Orçamento (card prof.) | M3.6/T1 - Criação de solicitação | ✅ Mapeado |
| T6 - Painel Inicial Pós-Login | Ver todas as categorias | M3.4/T2 - Listagem de profissionais | ✅ Mapeado |
| T6 - Painel Inicial Pós-Login | Central de Ajuda | M3.21/T1 - Home da Academy | ✅ Mapeado |
| T6 - Painel Inicial Pós-Login | Seja um Parceiro | M3.2/T1 - Ativação do modo profissional | ✅ Mapeado |
| T6 - Painel Inicial Pós-Login | Planos e Preços | M3.11/T1 - Seleção de plano | ✅ Mapeado |
| T6 - Painel Inicial Pós-Login | Sobre nós / Imprensa / Carreiras | M3.22/T5 - Páginas institucionais | ✅ Mapeado |
| T6 - Painel Inicial Pós-Login | Como funciona | ⚠️ FALTANTE — tela "Como Funciona" não existe | ⚠️ FALTANTE |
| T6 - Painel Inicial Pós-Login | Garantia MMO | ⚠️ FALTANTE — tela "Garantia" não existe | ⚠️ FALTANTE |

---

## Módulo 3.2 — Onboarding e Ativação Profissional

| Tela | Elemento | Destino | Status |
|---|---|---|---|
| T1 - Ativação do modo profissional | Ativar Perfil Profissional Agora | M3.2/T2 - Seleção de serviço | ✅ Mapeado |
| T1 - Ativação do modo profissional | Ajuda | M3.21/T1 - Home da Academy | ✅ Mapeado |
| T2 - Seleção de serviço principal | Salvar e Continuar | M3.2/T3 - Definição de região | ✅ Mapeado |
| T3 - Definição de região de atendimento | Salvar Região e Continuar | M3.2/T4 - Definição de disponibilidade | ✅ Mapeado |
| T4 - Definição de disponibilidade | Finalizar Configuração de Agenda | M3.2/T5 - Prévia de oportunidade | ✅ Mapeado |
| T5 - Prévia de oportunidade | Validar Perfil para Desbloquear | M3.2/T6 - Envio de documentos | ✅ Mapeado |
| T5 - Prévia de oportunidade | Entrar (já tem conta) | M3.1/T2 - Login | ✅ Mapeado |
| T6 - Envio de documentos | Procurar Arquivo | 🔁 Mesma tela (file picker) | ✅ Mapeado |
| T6 - Envio de documentos | Enviar para Curadoria Especializada | M3.2/T7 - Aceite contratual | ✅ Mapeado |
| T7 - Aceite contratual | Concordar e Assinar Eletronicamente | M3.2/T8 - Contratação de assinatura | ✅ Mapeado |
| T8 - Contratação de assinatura | Começar Grátis | M3.2/T9 - Confirmação de ativação | ✅ Mapeado |
| T8 - Contratação de assinatura | Assinar Mestre VIP | M3.11/T2 - Checkout | ✅ Mapeado |
| T9 - Confirmação de ativação | Ir para o Painel Profissional | M3.3/T1 - Edição do perfil profissional | ✅ Mapeado |
| T9 - Confirmação de ativação | Acesse a Central de Ajuda | M3.21/T1 - Home da Academy | ✅ Mapeado |

---

## Módulo 3.3 — Cadastro e Perfil Profissional

| Tela | Elemento | Destino | Status |
|---|---|---|---|
| T1 - Edição do perfil (visão geral) | Geral & Bio (tab) | 🔁 Mesma tela | ✅ Mapeado |
| T1 - Edição do perfil (visão geral) | Serviços (tab) | M3.3/T3 - Gestão de serviços | ✅ Mapeado |
| T1 - Edição do perfil (visão geral) | Região (tab) | M3.3/T4 - Gestão da região | ✅ Mapeado |
| T1 - Edição do perfil (visão geral) | Disponibilidade (tab) | M3.3/T5 - Gestão de disponibilidade | ✅ Mapeado |
| T1 - Edição do perfil (visão geral) | Portfólio (tab) | M3.3/T7 - Gestão de portfólio | ✅ Mapeado |
| T1 - Edição do perfil (visão geral) | Alterar foto | 🔁 Mesma tela (file picker) | ✅ Mapeado |
| T1 - Edição do perfil (visão geral) | Salvar Alterações | 🔁 Mesma tela (salvo) | ✅ Mapeado |
| T2 - Edição do perfil (Formulário) | Salvar Alterações | M3.3/T1 - Edição do perfil (visão geral) | ✅ Mapeado |
| T2 - Edição do perfil (Formulário) | Alterar Foto | 🔁 Mesma tela (file picker) | ✅ Mapeado |
| T3 - Gestão de serviços | Avançar para o Próximo Passo | M3.3/T4 - Gestão da região | ✅ Mapeado |
| T3 - Gestão de serviços | Ver todos os serviços | 🔁 Mesma tela (expand) | ✅ Mapeado |
| T4 - Gestão da região de atendimento | Salvar Região e Continuar | M3.3/T5 - Gestão de disponibilidade | ✅ Mapeado |
| T5 - Gestão de disponibilidade | Finalizar Configuração de Agenda | M3.3/T1 - Edição do perfil (visão geral) | ✅ Mapeado |
| T6 - Gestão de links sociais | Adicionar Nova Conexão | 🔁 Mesma tela (add row) | ✅ Mapeado |
| T6 - Gestão de links sociais | Atualizar Perfil Social | M3.3/T1 - Edição do perfil (visão geral) | ✅ Mapeado |
| T7 - Gestão de portfólio | Publicar Projeto | 🔁 Mesma tela (modal/form) | ✅ Mapeado |
| T7 - Gestão de portfólio | Dashboard (nav) | M3.1/T6 - Painel Inicial | 🔍 VERIFICAR |
| T8 - Gestão de condições e cobrança | Salvar Configurações de Cobrança | M3.3/T1 - Edição do perfil (visão geral) | ✅ Mapeado |
| T9 - Status de validação do perfil | Visualizar Meu Perfil Público | M3.3/T10 - Perfil público | ✅ Mapeado |
| T10 - Perfil público do profissional | Solicitar Orçamento | M3.6/T1 - Criação de solicitação | ✅ Mapeado |
| T10 - Perfil público do profissional | Ver todos (avaliações) | M3.10/T2 - Histórico de avaliações | ✅ Mapeado |
| T10 - Perfil público do profissional | Carregar mais avaliações | 🔁 Mesma tela (paginação) | ✅ Mapeado |

---

## Módulo 3.4 — Vitrine, Busca e Descoberta

| Tela | Elemento | Destino | Status |
|---|---|---|---|
| T1 - Tela inicial de busca | Solicitar Orçamento | M3.6/T1 - Criação de solicitação | ✅ Mapeado |
| T1 - Tela inicial de busca | Explorar (categoria) | M3.4/T2 - Listagem de profissionais | ✅ Mapeado |
| T1 - Tela inicial de busca | Ver todos (categorias) | M3.4/T2 - Listagem de profissionais | ✅ Mapeado |
| T2 - Listagem de profissionais | Ver Perfil Completo | M3.4/T6 - Perfil público do profissional | ✅ Mapeado |
| T2 - Listagem de profissionais | Buscar / Aplicar Filtros | M3.4/T3 - Filtros da busca | ✅ Mapeado |
| T2 - Listagem de profissionais | Limpar (busca sem resultado) | M3.4/T5 - Estado vazio | 🔍 VERIFICAR |
| T3 - Filtros da busca | Aplicar Filtros e Buscar | M3.4/T2 - Listagem de profissionais | ✅ Mapeado |
| T3 - Filtros da busca | Cancelar | M3.4/T2 - Listagem de profissionais | ✅ Mapeado |
| T3 - Filtros da busca | Limpar todos os filtros | 🔁 Mesma tela (reset) | ✅ Mapeado |
| T4 - Tela de favoritos | Solicitar Orçamento (card) | M3.6/T1 - Criação de solicitação | ✅ Mapeado |
| T4 - Tela de favoritos | Ver Perfil (card) | M3.4/T6 - Perfil público | ✅ Mapeado |
| T5 - Estado vazio / sem resultados | Recomeçar Busca | M3.4/T1 - Tela inicial de busca | ✅ Mapeado |
| T5 - Estado vazio / sem resultados | Categoria sugerida (link) | M3.4/T2 - Listagem de profissionais | ✅ Mapeado |
| T6 - Perfil público do profissional | Solicitar Orçamento | M3.6/T1 - Criação de solicitação | ✅ Mapeado |
| T6 - Perfil público do profissional | Salvar nos Favoritos | M3.18/T1 - Tela de favoritos | ✅ Mapeado |
| T6 - Perfil público do profissional | Ver todos (avaliações) | M3.10/T2 - Histórico de avaliações | ✅ Mapeado |

---

## Módulo 3.5 — Matching Automático

| Tela | Elemento | Destino | Status |
|---|---|---|---|
| T1 - Bloco de profissionais recomendados | Pedir Orçamento Grátis | M3.6/T1 - Criação de solicitação | ✅ Mapeado |
| T1 - Bloco de profissionais recomendados | Filtros | M3.4/T3 - Filtros da busca | ✅ Mapeado |
| T1 - Bloco de profissionais recomendados | Card do profissional | M3.4/T6 - Perfil público | ✅ Mapeado |
| T2 - Visão administrativa de matching | Ver Detalhes | M3.13/T3 - Gestão de profissionais | 🔍 VERIFICAR |
| T2 - Visão administrativa de matching | Exportar Dados | ❌ Dead End (download) | ❌ Dead End |
| T2 - Visão administrativa de matching | Dashboard (nav) | M3.13/T1 - Dashboard admin | ✅ Mapeado |

---

## Módulo 3.6 — Solicitações e Oportunidades

| Tela | Elemento | Destino | Status |
|---|---|---|---|
| T1 - Criação de solicitação | Continuar para Local | M3.6/T2 - Detalhe da solicitação | 🔍 VERIFICAR |
| T1 - Criação de solicitação | Cancelar Solicitação | M3.6/T3 - Histórico de solicitações | ✅ Mapeado |
| T2 - Detalhe da solicitação | Ver Detalhes e Contratar | M3.6/T5 - Detalhe do Grupo de Serviço | 🔍 VERIFICAR |
| T2 - Detalhe da solicitação | Ver Detalhes da Proposta | M3.6/T7 - Detalhe da oportunidade elegível | 🔍 VERIFICAR |
| T2 - Detalhe da solicitação | Voltar para meus pedidos | M3.6/T3 - Histórico de solicitações | ✅ Mapeado |
| T3 - Histórico de solicitações | Acessar (pedido) | M3.6/T2 - Detalhe da solicitação | ✅ Mapeado |
| T3 - Histórico de solicitações | Novo Pedido | M3.6/T1 - Criação de solicitação | ✅ Mapeado |
| T4 - Solicitação Composta | Iniciar Novo Projeto Composto | M3.6/T1 - Criação de solicitação | ✅ Mapeado |
| T4 - Solicitação Composta | Painel do Projeto | M3.6/T5 - Detalhe do Grupo de Serviço | ✅ Mapeado |
| T4 - Solicitação Composta | Ver Contratos e Pagamentos | M3.12/T3 - Status de transação | 🔍 VERIFICAR |
| T5 - Detalhe do Grupo de Serviço | Abrir Chat | M3.8/T4 - Detalhe da conversa | ✅ Mapeado |
| T5 - Detalhe do Grupo de Serviço | Analisar e Contratar | M3.6/T7 - Detalhe da oportunidade elegível | 🔍 VERIFICAR |
| T5 - Detalhe do Grupo de Serviço | Ver Contrato | M3.12/T3 - Status de transação | 🔍 VERIFICAR |
| T5 - Detalhe do Grupo de Serviço | Convidar Profissionais | M3.5/T1 - Profissionais recomendados | 🔍 VERIFICAR |
| T6 - Oportunidades elegíveis | Analisar Pedido | M3.6/T7 - Detalhe da oportunidade elegível | ✅ Mapeado |
| T7 - Detalhe da oportunidade elegível | Enviar Orçamento Agora | M3.6/T2 - Detalhe da solicitação | 🔍 VERIFICAR |
| T7 - Detalhe da oportunidade elegível | Voltar ao Mural de Oportunidades | M3.6/T6 - Oportunidades elegíveis | ✅ Mapeado |
| T8 - Histórico de oportunidades | Ver Detalhes | M3.6/T7 - Detalhe da oportunidade elegível | ✅ Mapeado |
| T8 - Histórico de oportunidades | Exportar | ❌ Dead End (download) | ❌ Dead End |

---

## Módulo 3.7 — Balcão de Serviço

| Tela | Elemento | Destino | Status |
|---|---|---|---|
| T1 - Criação de Balcão | Salvar e Continuar | M3.7/T2 - Checkout do Balcão | ✅ Mapeado |
| T1 - Criação de Balcão | Cancelar | M3.6/T3 - Histórico de solicitações | 🔍 VERIFICAR |
| T1 - Criação de Balcão | Alterar endereço | 🔁 Mesma tela (modal) | ✅ Mapeado |
| T2 - Checkout do Balcão | Finalizar e Enviar para Mestres | M3.7/T3 - Detalhe/gestão da publicação | ✅ Mapeado |
| T2 - Checkout do Balcão | Pix / Cartão | 🔁 Mesma tela (trocar método) | ✅ Mapeado |
| T3 - Detalhe/gestão da publicação | Aceitar Proposta | M3.8/T4 - Detalhe da conversa | 🔍 VERIFICAR |
| T3 - Detalhe/gestão da publicação | Enviar Mensagem | M3.8/T4 - Detalhe da conversa | ✅ Mapeado |
| T3 - Detalhe/gestão da publicação | Ver Perfil e Portfólio | M3.4/T6 - Perfil público | ✅ Mapeado |
| T3 - Detalhe/gestão da publicação | Editar Pedido | M3.7/T1 - Criação de Balcão | ✅ Mapeado |
| T3 - Detalhe/gestão da publicação | Encerrar | M3.7/T3 - confirmação encerramento | ⚠️ FALTANTE |
| T4 - Balcões elegíveis (profissional) | Ver Oportunidade Completa | M3.7/T5 - Detalhe da oportunidade do Balcão | ✅ Mapeado |
| T4 - Balcões elegíveis (profissional) | Configurar Alertas | M3.24/T2 - Preferências de notificação | ✅ Mapeado |
| T5 - Detalhe da oportunidade do Balcão | Submeter Orçamento | M3.7/T3 - Detalhe/gestão da publicação | 🔍 VERIFICAR |
| T5 - Detalhe da oportunidade do Balcão | Oportunidades (nav) | M3.7/T4 - Balcões elegíveis | ✅ Mapeado |
| T6 - Fila/limite de interessados | Entrar na Fila de Espera | 🔁 Mesma tela (confirmação) | 🔍 VERIFICAR |
| T6 - Fila/limite de interessados | Voltar para Mesa de Oportunidades | M3.7/T4 - Balcões elegíveis | ✅ Mapeado |
| T7 - Acompanhamento administrativo | Exportar Relatório | ❌ Dead End (download) | ❌ Dead End |
| T7 - Acompanhamento administrativo | Filtros (Status/Categoria/Plano) | 🔁 Mesma tela (filtrado) | ✅ Mapeado |

---

## Módulo 3.8 — Chat Interno e Inbox

| Tela | Elemento | Destino | Status |
|---|---|---|---|
| T1 - Inbox do cliente | Conversa (item da lista) | M3.8/T4 - Detalhe da conversa | ✅ Mapeado |
| T1 - Inbox do cliente | Iniciar novo pedido no Balcão | M3.7/T1 - Criação de Balcão | ✅ Mapeado |
| T1 - Inbox do cliente | Todas / Orçamentos (tabs) | 🔁 Mesma tela (filtrado) | ✅ Mapeado |
| T2 - Solicitação Composta (cliente) | Ver Detalhes do Projeto | M3.6/T4 - Solicitação Composta | ✅ Mapeado |
| T2 - Solicitação Composta (cliente) | Liberar Pagamento | M3.12/T1 - Checkout integrado | ✅ Mapeado |
| T2 - Solicitação Composta (cliente) | Agendar Visita Técnica | ⚠️ FALTANTE — tela de agendamento não existe | ⚠️ FALTANTE |
| T3 - Inbox do profissional | Conversa (item da lista) | M3.8/T4 - Detalhe da conversa | ✅ Mapeado |
| T3 - Inbox do profissional | Configurar Respostas Automáticas | M3.8/T6 - Filtros/pastas do inbox | 🔍 VERIFICAR |
| T4 - Detalhe da conversa | Enviar Tabela de Preços | 🔁 Mesma tela (attach) | 🔍 VERIFICAR |
| T4 - Detalhe da conversa | Pedir Endereço | 🔁 Mesma tela (template msg) | 🔍 VERIFICAR |
| T4 - Detalhe da conversa | Gerar Recibo de Pagamento | M3.12/T3 - Status de transação | 🔍 VERIFICAR |
| T4 - Detalhe da conversa | Perfil (nav) | M3.3/T1 - Edição do perfil | 🔍 VERIFICAR |
| T5 - Conversas arquivadas | Ler Histórico | M3.8/T4 - Detalhe da conversa | ✅ Mapeado |
| T5 - Conversas arquivadas | Mensagens (nav) | M3.8/T1 - Inbox do cliente | ✅ Mapeado |
| T6 - Filtros/pastas do inbox | Salvar Tag | 🔁 Mesma tela (salvo) | ✅ Mapeado |
| T6 - Filtros/pastas do inbox | Marcar todas como lidas | 🔁 Mesma tela (atualizado) | ✅ Mapeado |
| T6 - Filtros/pastas do inbox | Arquivar Selecionadas | M3.8/T5 - Conversas arquivadas | ✅ Mapeado |
| T6 - Filtros/pastas do inbox | Excluir Permanentemente | 🔁 Mesma tela (confirmação) | 🔍 VERIFICAR |

---

## Módulo 3.9 — Pipeline Simples do Profissional

| Tela | Elemento | Destino | Status |
|---|---|---|---|
| T1 - Pipeline simples | Adicionar Negócio | M3.6/T2 - Detalhe da solicitação | 🔍 VERIFICAR |
| T1 - Pipeline simples | Card de item (coluna) | M3.9/T3 - Detalhe do item | ✅ Mapeado |
| T1 - Pipeline simples | Dashboard (nav) | M3.1/T6 - Painel Inicial | 🔍 VERIFICAR |
| T2 - Lista por etapa/status | Ver Ficha | M3.9/T3 - Detalhe do item | ✅ Mapeado |
| T2 - Lista por etapa/status | Mover para... | 🔁 Mesma tela (muda coluna) | ✅ Mapeado |
| T2 - Lista por etapa/status | Exportar Dados | ❌ Dead End (download) | ❌ Dead End |
| T3 - Detalhe do item do pipeline | Enviar Mensagem | M3.8/T4 - Detalhe da conversa | ✅ Mapeado |
| T3 - Detalhe do item do pipeline | Finalizar Serviço e Solicitar Pagamento | M3.12/T1 - Checkout integrado | ✅ Mapeado |
| T3 - Detalhe do item do pipeline | Editar Detalhes | 🔁 Mesma tela (modal) | ✅ Mapeado |
| T3 - Detalhe do item do pipeline | Em Orçamento (status badge) | 🔁 Mesma tela (muda status) | 🔍 VERIFICAR |

---

## Módulo 3.10 — Avaliação e Reputação

| Tela | Elemento | Destino | Status |
|---|---|---|---|
| T1 - Avaliação pós-serviço | Salvar e Publicar Avaliação | M3.10/T2 - Histórico de avaliações | ✅ Mapeado |
| T1 - Avaliação pós-serviço | Estrelas de rating (critérios) | 🔁 Mesma tela (seleção) | ✅ Mapeado |
| T2 - Histórico de avaliações | Baixar Certificado de Qualidade | ❌ Dead End (download PDF) | ❌ Dead End |
| T2 - Histórico de avaliações | Perfil (nav) | M3.3/T10 - Perfil público | ✅ Mapeado |
| T3 - Bloco de reputação no perfil | Ler todas as avaliações | M3.10/T2 - Histórico de avaliações | ✅ Mapeado |

---

## Módulo 3.11 — Planos, Assinaturas e Cobrança

| Tela | Elemento | Destino | Status |
|---|---|---|---|
| T1 - Seleção de plano | Começar Grátis | M3.2/T9 - Confirmação de ativação | ✅ Mapeado |
| T1 - Seleção de plano | Assinar Mestre | M3.11/T2 - Checkout | ✅ Mapeado |
| T1 - Seleção de plano | Falar com Vendas | ⚠️ FALTANTE — tela de contato/vendas | ⚠️ FALTANTE |
| T1 - Seleção de plano | Cobrança Mensal / Anual | 🔁 Mesma tela (toggle preço) | ✅ Mapeado |
| T2 - Checkout | Finalizar Compra | M3.12/T1 - Checkout integrado | ✅ Mapeado |
| T3 - Resumo da assinatura | Gerenciar Pagamento | M3.12/T1 - Checkout integrado | ✅ Mapeado |
| T3 - Resumo da assinatura | Mudar de Plano | M3.11/T1 - Seleção de plano | ✅ Mapeado |
| T3 - Resumo da assinatura | Dashboard (nav) | M3.1/T6 - Painel Inicial | 🔍 VERIFICAR |
| T4 - Status de cobrança | Acessar Painel de Negócios | M3.1/T6 - Painel Inicial | ✅ Mapeado |
| T4 - Status de cobrança | Imprimir Recibo | ❌ Dead End (print/download) | ❌ Dead End |
| T5 - Upgrade/destaque premium | Quero me Destacar Agora | M3.11/T2 - Checkout | ✅ Mapeado |
| T5 - Upgrade/destaque premium | Fechar | 🔁 Mesma tela anterior (modal fecha) | ✅ Mapeado |
| T6 - Checkout exposição Balcão | Pagar R$ 19,90 e Acessar Cliente | M3.12/T1 - Checkout integrado | ✅ Mapeado |

---

## Módulo 3.12 — Gateway de Pagamento

| Tela | Elemento | Destino | Status |
|---|---|---|---|
| T1 - Checkout integrado | Pagar Agora | M3.12/T2 - Retorno de pagamento | ✅ Mapeado |
| T2 - Retorno de pagamento | Salvar Comprovante | ❌ Dead End (download) | ❌ Dead End |
| T2 - Retorno de pagamento | Continuar / Voltar ao painel | M3.1/T6 - Painel Inicial | 🔍 VERIFICAR |
| T3 - Status de transação | Exportar Recibo (PDF) | ❌ Dead End (download) | ❌ Dead End |
| T3 - Status de transação | Transferir Saldo para Conta | ⚠️ FALTANTE — tela de saque não existe | ⚠️ FALTANTE |
| T3 - Status de transação | Financeiro / Histórico (nav) | 🔁 Mesma tela (filtros) | 🔍 VERIFICAR |

---

## Módulo 3.13 — Backoffice Administrativo

| Tela | Elemento | Destino | Status |
|---|---|---|---|
| T1 - Dashboard administrativo | Filtros / períodos | 🔁 Mesma tela (filtrado) | ✅ Mapeado |
| T1 - Dashboard administrativo | Cards de métricas | M3.17/T1 - Dashboard de métricas | 🔍 VERIFICAR |
| T2 - Gestão de usuários | Exportar CSV | ❌ Dead End (download) | ❌ Dead End |
| T2 - Gestão de usuários | Usuário (linha da tabela) | M3.14/T2 - Revisão cadastral | 🔍 VERIFICAR |
| T3 - Gestão de profissionais | Convidar Profissional | ⚠️ FALTANTE — modal/tela de convite | ⚠️ FALTANTE |
| T3 - Gestão de profissionais | Exportar CSV | ❌ Dead End (download) | ❌ Dead End |
| T3 - Gestão de profissionais | Profissional (linha tabela) | M3.3/T10 - Perfil público | 🔍 VERIFICAR |
| T4 - Gestão de empresas | Cadastrar Nova Empresa | M3.19/T1 - Cadastro da empresa | ✅ Mapeado |
| T4 - Gestão de empresas | Empresa (linha tabela) | M3.19/T2 - Painel da empresa | 🔍 VERIFICAR |
| T5 - Gestão de categorias/cidades | Nova Cidade | 🔁 Mesma tela (modal) | ✅ Mapeado |
| T5 - Gestão de categorias/cidades | Nova Categoria | 🔁 Mesma tela (modal) | ✅ Mapeado |
| T5 - Gestão de categorias/cidades | Adicionar Serviço | 🔁 Mesma tela (expand) | ✅ Mapeado |
| T6 - Gestão de planos | Novo Plano Promocional | 🔁 Mesma tela (modal) | ✅ Mapeado |
| T6 - Gestão de planos | Atualizar Plano | 🔁 Mesma tela (salvo) | ✅ Mapeado |
| T7 - Gestão de campanhas | Novo Anunciante | M3.20/T1 - Cadastro do anunciante | ✅ Mapeado |
| T7 - Gestão de campanhas | Campanha (linha tabela) | M3.20/T8 - Detalhe/edição da campanha | 🔍 VERIFICAR |
| T8 - Gestão do Balcão | Ver Todos | M3.7/T7 - Acompanhamento admin | 🔍 VERIFICAR |
| T9 - Relatórios operacionais | Exportar Dados (PDF/XLS) | ❌ Dead End (download) | ❌ Dead End |
| T9 - Relatórios operacionais | Filtros período | 🔁 Mesma tela (filtrado) | ✅ Mapeado |

---

## Módulo 3.14 — Curadoria e Validação

| Tela | Elemento | Destino | Status |
|---|---|---|---|
| T1 - Fila de validação | Ver Cadastro / Ver Detalhes | M3.14/T2 - Revisão cadastral | ✅ Mapeado |
| T1 - Fila de validação | Continuar Análise | M3.14/T3 - Análise documental | ✅ Mapeado |
| T2 - Revisão cadastral | Dados Aprovados | M3.14/T3 - Análise documental | ✅ Mapeado |
| T2 - Revisão cadastral | Solicitar Correção | M3.14/T4 - Status de validação | ✅ Mapeado |
| T3 - Análise documental | Confirmar Decisão de KYC (Aprovar) | M3.14/T4 - Status de validação | ✅ Mapeado |
| T3 - Análise documental | Confirmar Decisão de KYC (Rejeitar) | M3.14/T4 - Status de validação | ✅ Mapeado |
| T4 - Status de validação | Falar com Suporte | M3.21/T1 - Home da Academy | 🔍 VERIFICAR |
| T4 - Status de validação | Enviar e Solicitar Nova Análise | M3.14/T1 - Fila de validação | ✅ Mapeado |

---

## Módulo 3.15 — Moderação e Suspensão

| Tela | Elemento | Destino | Status |
|---|---|---|---|
| T1 - Tela de denúncia | Abrir Chamado de Moderação | M3.15/T2 - Fila de moderação | 🔍 VERIFICAR |
| T1 - Tela de denúncia | Voltar com Segurança | M3.4/T6 - Perfil público | 🔍 VERIFICAR |
| T1 - Tela de denúncia | Tipo de denúncia (seleção) | 🔁 Mesma tela (seleção) | ✅ Mapeado |
| T2 - Fila de moderação | Analisar (linha da tabela) | M3.15/T3 - Detalhe do caso | ✅ Mapeado |
| T3 - Detalhe do caso | Suspender Conta | M3.15/T4 - Histórico de sanções | ✅ Mapeado |
| T3 - Detalhe do caso | Aplicar Advertência | M3.15/T4 - Histórico de sanções | ✅ Mapeado |
| T3 - Detalhe do caso | Encerrar a favor do Mestre | M3.15/T4 - Histórico de sanções | ✅ Mapeado |
| T3 - Detalhe do caso | Fila (breadcrumb) | M3.15/T2 - Fila de moderação | ✅ Mapeado |
| T4 - Histórico de sanções | Exportar Histórico (PDF) | ❌ Dead End (download) | ❌ Dead End |

---

## Módulo 3.16 — Permissões e Níveis de Acesso

| Tela | Elemento | Destino | Status |
|---|---|---|---|
| T1 - Gestão de perfis administrativos | Novo Admin | 🔁 Mesma tela (modal form) | ✅ Mapeado |
| T1 - Gestão de perfis administrativos | Editar (linha) | M3.16/T3 - Definição de permissões | ✅ Mapeado |
| T1 - Gestão de perfis administrativos | Deletar (linha) | 🔁 Mesma tela (confirmação) | ✅ Mapeado |
| T1 - Gestão de perfis administrativos | Revisar Permissões | M3.16/T3 - Definição de permissões | ✅ Mapeado |
| T2 - Gestão de subcontas da empresa | Adicionar Membro | 🔁 Mesma tela (modal form) | ✅ Mapeado |
| T2 - Gestão de subcontas da empresa | Settings (linha subconta) | M3.16/T3 - Definição de permissões | ✅ Mapeado |
| T2 - Gestão de subcontas da empresa | Delete (linha subconta) | 🔁 Mesma tela (confirmação) | ✅ Mapeado |
| T3 - Definição de permissões | Criar Novo Papel | 🔁 Mesma tela (modal) | ✅ Mapeado |
| T3 - Definição de permissões | Salvar Matriz de Permissões | M3.16/T1 - Gestão de perfis admin | ✅ Mapeado |
| T3 - Definição de permissões | Resetar para Padrão | 🔁 Mesma tela (reset) | ✅ Mapeado |

---

## Módulo 3.17 — Métricas e Rastreamento

| Tela | Elemento | Destino | Status |
|---|---|---|---|
| T1 - Dashboard de métricas | Filtros Avançados | 🔁 Mesma tela (filtrado) | ✅ Mapeado |
| T1 - Dashboard de métricas | Cards/gráficos | M3.17/T2 - Relatórios por região | 🔍 VERIFICAR |
| T2 - Relatórios por região/categoria | Exportar Massa de Dados | ❌ Dead End (download) | ❌ Dead End |
| T2 - Relatórios por região/categoria | Aplicar Filtros | 🔁 Mesma tela (filtrado) | ✅ Mapeado |
| T2 - Relatórios por região/categoria | Expandir linha | 🔁 Mesma tela (detalhe inline) | ✅ Mapeado |
| T3 - Blocos resumidos de desempenho | Compartilhar Visão | ⚠️ FALTANTE — modal de compartilhamento | ⚠️ FALTANTE |

---

## Módulo 3.18 — Favoritos

| Tela | Elemento | Destino | Status |
|---|---|---|---|
| T1 - Tela de favoritos | Card do profissional | M3.4/T6 - Perfil público | ✅ Mapeado |
| T1 - Tela de favoritos | Coração (desfavoritar) | M3.18/T3 - Ação de desfavoritar | ✅ Mapeado |
| T1 - Tela de favoritos | Tabs de categoria | 🔁 Mesma tela (filtrado) | ✅ Mapeado |
| T1 - Tela de favoritos | (lista vazia) | M3.18/T4 - Estado vazio de favoritos | ✅ Mapeado |
| T2 - Ação de favoritar (card/perfil) | Coração (favoritar) | M3.18/T1 - Tela de favoritos | ✅ Mapeado |
| T3 - Ação de desfavoritar | Confirmar desfavoritar | M3.18/T1 - Tela de favoritos | ✅ Mapeado |
| T4 - Estado vazio de favoritos | Explorar profissionais | M3.4/T1 - Tela inicial de busca | ✅ Mapeado |

---

## Módulo 3.19 — Conta Empresa e Subcontas

| Tela | Elemento | Destino | Status |
|---|---|---|---|
| T1 - Cadastro da empresa | Avançar / Criar empresa | M3.19/T2 - Painel da empresa | 🔍 VERIFICAR |
| T1 - Cadastro da empresa | Já tenho conta | M3.1/T2 - Login | 🔍 VERIFICAR |
| T2 - Painel da empresa | Gestão de subcontas | M3.19/T3 - Gestão de subcontas | ✅ Mapeado |
| T2 - Painel da empresa | Visão consolidada | M3.19/T4 - Visão consolidada | ✅ Mapeado |
| T2 - Painel da empresa | Nova solicitação | M3.6/T1 - Criação de solicitação | ✅ Mapeado |
| T3 - Gestão de subcontas | Adicionar subconta | M3.16/T2 - Gestão de subcontas | ✅ Mapeado |
| T3 - Gestão de subcontas | Permissões (subconta) | M3.19/T5 - Definição de permissões | ✅ Mapeado |
| T4 - Visão consolidada | Ver detalhes (subconta) | M3.19/T2 - Painel da empresa | 🔍 VERIFICAR |
| T5 - Permissões da subconta | Salvar permissões | M3.19/T3 - Gestão de subcontas | ✅ Mapeado |

---

## Módulo 3.20 — Central do Anunciante

| Tela | Elemento | Destino | Status |
|---|---|---|---|
| T1 - Cadastro do anunciante | Criar conta anunciante | M3.20/T2 - Criação de campanha | ✅ Mapeado |
| T2 - Criação de campanha | Continuar | M3.20/T3 - Seleção de região | ✅ Mapeado |
| T3 - Seleção de região/cidade | Continuar | M3.20/T4 - Upload de material | ✅ Mapeado |
| T4 - Upload de material | Continuar para Checkout | M3.20/T5 - Checkout da campanha | ✅ Mapeado |
| T5 - Checkout da campanha | Finalizar Compra | M3.12/T1 - Checkout integrado | ✅ Mapeado |
| T6 - Status da campanha | Ver métricas | M3.20/T7 - Métricas da campanha | ✅ Mapeado |
| T6 - Status da campanha | Editar campanha | M3.20/T8 - Detalhe/edição | ✅ Mapeado |
| T7 - Métricas da campanha | Exportar | ❌ Dead End (download) | ❌ Dead End |
| T8 - Detalhe/edição da campanha | Salvar alterações | M3.20/T6 - Status da campanha | ✅ Mapeado |
| T8 - Detalhe/edição da campanha | Cancelar campanha | M3.20/T6 - Status da campanha | 🔍 VERIFICAR |

---

## Módulo 3.21 — Academy e Conteúdo de Apoio

| Tela | Elemento | Destino | Status |
|---|---|---|---|
| T1 - Home da Academy | Ver conteúdo/tutorial | M3.21/T2 - Conteúdo/tutorial | ✅ Mapeado |
| T1 - Home da Academy | Ver trilhas | M3.21/T3 - Trilhas de apoio | ✅ Mapeado |
| T2 - Conteúdo/tutorial | Detalhe do conteúdo | M3.21/T4 - Detalhe do conteúdo | ✅ Mapeado |
| T2 - Conteúdo/tutorial | Voltar | M3.21/T1 - Home da Academy | ✅ Mapeado |
| T3 - Trilhas ou materiais | Material (item) | M3.21/T4 - Detalhe do conteúdo | ✅ Mapeado |
| T4 - Detalhe do conteúdo | Próximo conteúdo | M3.21/T2 - Conteúdo/tutorial | 🔍 VERIFICAR |
| T4 - Detalhe do conteúdo | Voltar à trilha | M3.21/T3 - Trilhas | ✅ Mapeado |
| T5 - Gestão interna de conteúdo | Novo conteúdo | 🔁 Mesma tela (form modal) | ✅ Mapeado |
| T5 - Gestão interna de conteúdo | Dashboard admin | M3.13/T1 - Dashboard admin | ✅ Mapeado |

---

## Módulo 3.22 — Blog, Conteúdo Institucional e SEO

| Tela | Elemento | Destino | Status |
|---|---|---|---|
| T1 - Home do blog | Ver artigo | M3.22/T3 - Página de artigo | ✅ Mapeado |
| T1 - Home do blog | Ver listagem | M3.22/T2 - Listagem de artigos | ✅ Mapeado |
| T2 - Listagem de artigos | Artigo (card) | M3.22/T3 - Página de artigo | ✅ Mapeado |
| T2 - Listagem de artigos | Filtrar por categoria | 🔁 Mesma tela (filtrado) | ✅ Mapeado |
| T3 - Página de artigo | Voltar | M3.22/T2 - Listagem de artigos | ✅ Mapeado |
| T3 - Página de artigo | Artigo relacionado | M3.22/T3 - Página de artigo | ✅ Mapeado |
| T4 - Conteúdo por serviço/região | Ver artigo | M3.22/T3 - Página de artigo | ✅ Mapeado |
| T5 - Páginas institucionais | Links internos | 🔍 VERIFICAR | 🔍 VERIFICAR |
| T6 - Gestão interna de conteúdo | Novo artigo | 🔁 Mesma tela (form modal) | ✅ Mapeado |
| T6 - Gestão interna de conteúdo | Dashboard admin | M3.13/T1 - Dashboard admin | ✅ Mapeado |

---

## Módulo 3.23 — Central de Modelos e Boas Práticas

| Tela | Elemento | Destino | Status |
|---|---|---|---|
| T1 - Home da central | Ver modelos | M3.23/T2 - Listagem de modelos | ✅ Mapeado |
| T2 - Listagem de modelos | Modelo (card) | M3.23/T3 - Detalhe do modelo | ✅ Mapeado |
| T3 - Detalhe do modelo | Download do arquivo | M3.23/T4 - Download de arquivo | ✅ Mapeado |
| T3 - Detalhe do modelo | Voltar | M3.23/T2 - Listagem de modelos | ✅ Mapeado |
| T4 - Download de arquivo | Baixar | ❌ Dead End (download) | ❌ Dead End |
| T4 - Download de arquivo | Voltar | M3.23/T3 - Detalhe do modelo | ✅ Mapeado |
| T5 - Gestão interna dos materiais | Novo material | 🔁 Mesma tela (form modal) | ✅ Mapeado |
| T5 - Gestão interna dos materiais | Dashboard admin | M3.13/T1 - Dashboard admin | ✅ Mapeado |

---

## Módulo 3.24 — Notificações

| Tela | Elemento | Destino | Status |
|---|---|---|---|
| T1 - Central de notificações | Notificação (item) | Módulo correspondente ao tipo | 🔍 VERIFICAR |
| T1 - Central de notificações | Preferências | M3.24/T2 - Preferências de notificação | ✅ Mapeado |
| T2 - Preferências de notificação | Salvar preferências | M3.24/T1 - Central de notificações | ✅ Mapeado |
| T3 - Aviso em destaque (profissional) | CTA do aviso | Módulo relevante (depende do tipo) | 🔍 VERIFICAR |
| T3 - Aviso em destaque (profissional) | Dispensar | 🔁 Mesma tela (fecha aviso) | ✅ Mapeado |
| T4 - E-mail transacional | Links no e-mail | Módulo correspondente à ação | 🔍 VERIFICAR |
| T5 - Push app/web | Ação do push | Módulo correspondente à notificação | 🔍 VERIFICAR |

---

## Módulo 3.25 — IA Analítica Interna

| Tela | Elemento | Destino | Status |
|---|---|---|---|
| T1 - Blocos de insights no admin | Ver detalhes (insight) | M3.17/T1 - Dashboard de métricas | 🔍 VERIFICAR |
| T1 - Blocos de insights no admin | Dashboard (nav) | M3.13/T1 - Dashboard admin | ✅ Mapeado |
| T2 - Resumos operacionais | Ver relatório | M3.17/T2 - Relatórios por região | ✅ Mapeado |
| T3 - Alertas internos | Ver alerta (detalhe) | M3.13/T1 - Dashboard admin | 🔍 VERIFICAR |
| T3 - Alertas internos | Dispensar alerta | 🔁 Mesma tela (fecha) | ✅ Mapeado |
| T4 - Classificação de perda | Ver detalhes | M3.17/T2 - Relatórios por região | 🔍 VERIFICAR |

---

## Módulo 3.26 — Auditoria e Histórico Administrativo

| Tela | Elemento | Destino | Status |
|---|---|---|---|
| T1 - Histórico administrativo | Entrada (linha tabela) | M3.26/T3 - Detalhe de auditoria | ✅ Mapeado |
| T1 - Histórico administrativo | Filtros | M3.26/T4 - Filtros de auditoria | ✅ Mapeado |
| T2 - Linha do tempo | Evento (item) | M3.26/T3 - Detalhe de auditoria | ✅ Mapeado |
| T2 - Linha do tempo | Filtros (data/ação) | M3.26/T4 - Filtros de auditoria | ✅ Mapeado |
| T3 - Detalhe de auditoria | Voltar | M3.26/T1 - Histórico administrativo | ✅ Mapeado |
| T3 - Detalhe de auditoria | Usuário (link) | M3.13/T2 - Gestão de usuários | 🔍 VERIFICAR |
| T4 - Filtros de auditoria | Aplicar Filtros | M3.26/T1 - Histórico administrativo | ✅ Mapeado |
| T4 - Filtros de auditoria | Limpar Filtros | M3.26/T1 - Histórico administrativo | ✅ Mapeado |

---

## Resumo de Telas Faltantes (⚠️ FALTANTE)

| Tela faltante | Referenciada em | Prioridade |
|---|---|---|
| "Como funciona" (institucional) | M3.1/T6 - Painel Inicial | 🔴 Alta (aparece no painel principal) |
| "Garantia MMO" | M3.1/T6 - Painel Inicial | 🟡 Média |
| Tela de Agendamento de Visita Técnica | M3.8/T2 - Chat Composto | 🔴 Alta (fluxo de contratação) |
| Tela de Saque / Transferência de Saldo | M3.12/T3 - Status de transação | 🟡 Média |
| Tela de Encerramento de Balcão (confirmação) | M3.7/T3 - Gestão do Balcão | 🟡 Média |
| Tela de Contato / Vendas | M3.11/T1 - Seleção de plano | 🟢 Baixa |
| Tela "Falar com Suporte" (fluxo completo) | M3.14/T4 - Status de validação | 🟢 Baixa |
| Modal de Compartilhamento de Visão | M3.17/T3 - Blocos de desempenho | 🟢 Baixa |
| Tela de Convidar Profissional | M3.13/T3 - Gestão de profissionais | 🟡 Média |

---

## Cobertura por Status

| Status | Quantidade estimada |
|---|---|
| ✅ Mapeado | ~270 elementos |
| 🔍 VERIFICAR | ~55 elementos |
| ⚠️ FALTANTE | 9 telas/destinos |
| ❌ Dead End (download/print) | ~18 ações |
| 🔗 Linkado | 0 (a preencher conforme implementa) |

**Cobertura:** 138 telas mapeadas · 9 telas faltantes identificadas · 55 destinos a verificar manualmente
