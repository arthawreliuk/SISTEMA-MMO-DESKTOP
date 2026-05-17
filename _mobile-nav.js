(function () {
  'use strict';

  const path = decodeURIComponent(window.location.pathname).toLowerCase();
  if (!path.includes('/mobile/')) return;

  /* ── Auth screens: sem bottom nav ───────────────────────── */
  const AUTH_SCREENS = ['tela 1 - cadastro', 'tela 2 - login', 'tela 3 - recupera', 'tela 4 - valida'];
  const isAuth = AUTH_SCREENS.some(s => path.includes(s));

  /* ── Inject safe-area padding + scrollbar hide ──────────── */
  const base = document.createElement('style');
  base.textContent = `
    :root { --bottom-nav-h: 68px; }
    body { padding-bottom: ${isAuth ? '0' : 'var(--bottom-nav-h)'}; }
    ::-webkit-scrollbar { display: none; }
    .mmo-tap { -webkit-tap-highlight-color: transparent; }
    @keyframes mmo-fab-pulse {
      0%  { box-shadow: 0 0 0 0 rgba(0,22,220,.45); }
      60% { box-shadow: 0 0 0 8px rgba(0,22,220,0); }
      100%{ box-shadow: 0 0 0 0 rgba(0,22,220,0); }
    }
  `;
  document.head.appendChild(base);

  if (isAuth) return;

  /* ── Bottom navigation ──────────────────────────────────── */
  const NAV = [
    { label: 'Início',        icon: 'fa-house',           href: '../../Mobile/Módulo 3.4 - Vitrine, Busca e Descoberta/Tela 1 - Tela inicial de busca.html',          keys: ['3.4','vitrine','busca e descoberta'] },
    { label: 'Pedidos',       icon: 'fa-clipboard-list',  href: '../../Mobile/Módulo 3.6 - Solicitações e Oportunidades/Tela 3 - Tela de histórico de solicitações.html', keys: ['3.6','3.7','solicita','bal'] },
    { label: 'Mensagens',     icon: 'fa-comment-dots',    href: '../../Mobile/Módulo 3.8 - Chat Interno e Inbox/Tela 1 - Inbox do cliente.html',                       keys: ['3.8','chat','inbox'] },
    { label: 'Oportunidades', icon: 'fa-bolt',            href: '../../Mobile/Módulo 3.6 - Solicitações e Oportunidades/Tela 6 - Tela de oportunidades elegíveis.html', keys: ['oportunidade'] },
    { label: 'Perfil',        icon: 'fa-user',            href: '../../Mobile/Módulo 3.3 - Cadastro e Perfil Profissional/Tela 1 - Edição do perfil profissional.html', keys: ['3.3','3.1 - acesso','cadastro','perfil'] },
  ];

  const nav = document.createElement('nav');
  nav.style.cssText = `
    position: fixed; bottom: 0; left: 0; right: 0; z-index: 9999;
    background: #fff; border-top: 1px solid #f0f0f0;
    display: flex; justify-content: space-around; align-items: center;
    height: var(--bottom-nav-h); padding-bottom: env(safe-area-inset-bottom, 0px);
    box-shadow: 0 -4px 24px rgba(26,26,36,.06);
  `;

  nav.innerHTML = NAV.map(item => {
    const active = item.keys.some(k => path.includes(k));
    const c = active ? '#0016dc' : '#9ca3af';
    return `
      <a href="${item.href}" style="
        display:flex;flex-direction:column;align-items:center;gap:3px;
        padding:8px 12px;text-decoration:none;color:${c};
        font-family:'Plus Jakarta Sans',sans-serif;
        transition:color .15s;
        -webkit-tap-highlight-color:transparent;
      ">
        <i class="fa-solid ${item.icon}" style="font-size:20px;${active ? 'color:#0016dc' : ''}"></i>
        <span style="font-size:10px;font-weight:${active ? 700 : 500};">${item.label}</span>
      </a>
    `;
  }).join('');

  document.body.appendChild(nav);
})();
