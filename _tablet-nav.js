(function () {
  'use strict';

  const path = decodeURIComponent(window.location.pathname).toLowerCase();
  const AUTH = ['tela 1 - cadastro', 'tela 2 - login', 'tela 3 - recupera', 'tela 4 - valida'];
  const isAuth = AUTH.some(s => path.includes(s));

  const style = document.createElement('style');
  style.textContent = `
    *, *::before, *::after { box-sizing: border-box; }
    ::-webkit-scrollbar { display: none; }

    #mmo-float-rail {
      position: fixed;
      left: 14px;
      top: 50%;
      transform: translateY(-50%);
      width: 64px;
      background: rgba(255,255,255,.82);
      backdrop-filter: blur(20px) saturate(200%);
      -webkit-backdrop-filter: blur(20px) saturate(200%);
      border: 1px solid rgba(255,255,255,.7);
      border-radius: 28px;
      box-shadow: 0 8px 40px rgba(26,26,36,.13), 0 2px 8px rgba(26,26,36,.06),
                  inset 0 1px 0 rgba(255,255,255,.9);
      z-index: 9999;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px 0;
      gap: 4px;
    }

    .mmo-fr-item {
      width: 44px; height: 50px;
      display: flex; align-items: center; justify-content: center;
      border-radius: 14px;
      text-decoration: none; color: #9ca3af;
      transition: background .15s, color .15s, transform .12s;
      position: relative;
      -webkit-tap-highlight-color: transparent;
    }
    .mmo-fr-item:hover {
      background: rgba(240,244,255,.85);
      color: #1a1a24;
      transform: scale(1.06);
    }
    .mmo-fr-item.on {
      background: rgba(0,22,220,.08);
      color: #0016dc;
    }
    .mmo-fr-item i { font-size: 21px; }

    .mmo-fr-item.on::after {
      content: '';
      position: absolute; right: 4px; top: 4px;
      width: 6px; height: 6px;
      background: #0016dc; border-radius: 50%;
    }

    .mmo-fr-item[data-t]::before {
      content: attr(data-t);
      position: absolute; left: calc(100% + 12px); top: 50%;
      transform: translateY(-50%);
      background: rgba(26,26,36,.88);
      backdrop-filter: blur(8px);
      color: #fff;
      font-size: 12px; font-weight: 600;
      padding: 6px 12px; border-radius: 10px;
      white-space: nowrap; pointer-events: none;
      opacity: 0; transition: opacity .15s; z-index: 10000;
      font-family: 'Plus Jakarta Sans', sans-serif;
      letter-spacing: -.01em;
    }
    .mmo-fr-item[data-t]:hover::before { opacity: 1; }

    body { padding-left: 92px !important; }
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
  rail.id = 'mmo-float-rail';
  rail.innerHTML = NAV.map(n => {
    const on = n.keys.some(k => path.includes(k));
    return `<a href="${n.href}" class="mmo-fr-item${on ? ' on' : ''}" data-t="${n.label}">` +
           `<i class="fa-solid ${n.icon}"></i></a>`;
  }).join('');

  document.body.prepend(rail);
})();
