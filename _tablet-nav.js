(function () {
  'use strict';

  const path = decodeURIComponent(window.location.pathname).toLowerCase();
  const AUTH = ['tela 1 - cadastro', 'tela 2 - login', 'tela 3 - recupera', 'tela 4 - valida'];
  const isAuth = AUTH.some(s => path.includes(s));

  const style = document.createElement('style');
  style.textContent = `
    *, *::before, *::after { box-sizing: border-box; }
    ::-webkit-scrollbar { display: none; }

    #mmo-rail {
      position: fixed;
      left: 0; top: 0; bottom: 0;
      width: 80px;
      background: rgba(255,255,255,.92);
      backdrop-filter: blur(16px) saturate(180%);
      -webkit-backdrop-filter: blur(16px) saturate(180%);
      border-right: 1px solid rgba(240,240,245,.9);
      box-shadow: 2px 0 20px rgba(26,26,36,.07);
      z-index: 9999;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 24px 0;
      gap: 4px;
    }

    .mmo-rail-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      width: 64px;
      padding: 8px 0;
      border-radius: 16px;
      text-decoration: none;
      color: #9ca3af;
      transition: background .15s, color .15s;
      position: relative;
      -webkit-tap-highlight-color: transparent;
    }
    .mmo-rail-item:hover { background: #f0f4ff; color: #1a1a24; }
    .mmo-rail-item.on  { color: #0016dc; }

    .mmo-rail-item.on .mmo-rail-pip {
      position: absolute;
      inset: 0;
      border-radius: 16px;
      background: rgba(0,22,220,.08);
      z-index: -1;
    }

    .mmo-rail-item i   { font-size: 22px; line-height: 1; }
    .mmo-rail-item span {
      font-size: 10px;
      font-weight: 600;
      font-family: 'Plus Jakarta Sans', sans-serif;
      white-space: nowrap;
      letter-spacing: -.01em;
    }

    body { padding-left: 80px !important; }
  `;
  document.head.appendChild(style);

  if (isAuth) return;

  const NAV = [
    { label: 'Início',        icon: 'fa-house',          href: '../../Tablet/Módulo 3.4 - Vitrine, Busca e Descoberta/Tela 1 - Tela inicial de busca.html',             keys: ['3.4','vitrine','busca e descoberta'] },
    { label: 'Pedidos',       icon: 'fa-clipboard-list', href: '../../Tablet/Módulo 3.6 - Solicitações e Oportunidades/Tela 3 - Tela de histórico de solicitações.html', keys: ['3.6','3.7','solicita','bal'] },
    { label: 'Mensagens',     icon: 'fa-comment-dots',   href: '../../Tablet/Módulo 3.8 - Chat Interno e Inbox/Tela 1 - Inbox do cliente.html',                        keys: ['3.8','chat','inbox'] },
    { label: 'Oportunidades', icon: 'fa-bolt',           href: '../../Tablet/Módulo 3.6 - Solicitações e Oportunidades/Tela 6 - Tela de oportunidades elegíveis.html',  keys: ['oportunidade'] },
    { label: 'Perfil',        icon: 'fa-user',           href: '../../Tablet/Módulo 3.3 - Cadastro e Perfil Profissional/Tela 1 - Edição do perfil profissional.html',  keys: ['3.3','3.1','cadastro','perfil'] },
  ];

  const rail = document.createElement('nav');
  rail.id = 'mmo-rail';
  rail.innerHTML = NAV.map(n => {
    const on = n.keys.some(k => path.includes(k));
    return `<a href="${n.href}" class="mmo-rail-item${on ? ' on' : ''}">` +
           `${on ? '<span class="mmo-rail-pip"></span>' : ''}` +
           `<i class="fa-solid ${n.icon}"></i>` +
           `<span>${n.label}</span>` +
           `</a>`;
  }).join('');

  document.body.prepend(rail);
})();
