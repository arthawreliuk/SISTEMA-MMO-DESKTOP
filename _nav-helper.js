// brainiac-allow-large reason="Single-domain prototype helper: nav standardization, responsive rail, footer standardization and FAB all belong in one injected script"
(function () {
  'use strict';

  /* ── Styles ─────────────────────────────────────────────── */
  const style = document.createElement('style');
  style.textContent = `
    @keyframes mmo-pulse {
      0%   { box-shadow: 0 0 0 0   rgba(0,22,220,0.55); }
      60%  { box-shadow: 0 0 0 7px rgba(0,22,220,0.0);  }
      100% { box-shadow: 0 0 0 0   rgba(0,22,220,0);    }
    }
    .mmo-hot {
      outline: 2px solid rgba(0,22,220,0.7) !important;
      outline-offset: 2px !important;
      animation: mmo-pulse 1.6s ease-out infinite !important;
      cursor: pointer !important;
      position: relative !important;
    }

    /* ── Global responsive fixes ──────────────────────────── */
    html, body { overflow-x: hidden !important; }

    /* Responsive navbar: hide links on narrow screens */
    #mmo-nav-links { display: flex; }
    #mmo-hamburger { display: none; }

    /* ── Side drawer backdrop ─────────────────────────────── */
    #mmo-drawer-back {
      position: fixed; inset: 0; z-index: 9998;
      background: rgba(15,15,30,.5);
      backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
      opacity: 0; visibility: hidden;
      transition: opacity .28s ease, visibility .28s;
    }
    #mmo-drawer-back.open { opacity: 1; visibility: visible; }

    /* ── Side drawer panel ────────────────────────────────── */
    #mmo-mobile-menu {
      position: fixed; top: 0; right: 0; bottom: 0;
      width: 300px; z-index: 9999;
      background: #fff;
      display: flex; flex-direction: column;
      transform: translateX(100%);
      transition: transform .3s cubic-bezier(.4,0,.2,1);
      box-shadow: -8px 0 48px rgba(26,26,36,.22);
      overflow-y: auto; overflow-x: hidden;
      border-radius: 20px 0 0 20px;
    }
    #mmo-mobile-menu.open { transform: translateX(0); }

    .mmo-dr-head {
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 18px; height: 68px;
      border-bottom: 1px solid #f0f0f0; flex-shrink: 0;
    }
    .mmo-dr-close {
      width: 36px; height: 36px; border-radius: 10px;
      border: none; background: #f3f4f6; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      color: #6b7280; font-size: 16px;
      transition: background .15s, color .15s;
    }
    .mmo-dr-close:hover { background: #fee2e2; color: #dc2626; }

    .mmo-dr-user {
      margin: 16px 16px 8px;
      padding: 16px;
      background: linear-gradient(135deg, #0016dc 0%, #2d3fe0 100%);
      border-radius: 18px;
      display: flex; align-items: center; gap: 12px; flex-shrink: 0;
    }
    .mmo-dr-avatar {
      width: 46px; height: 46px; border-radius: 50%;
      border: 2.5px solid rgba(255,255,255,.45);
      overflow: hidden; flex-shrink: 0;
    }
    .mmo-dr-avatar img { width: 100%; height: 100%; object-fit: cover; }
    .mmo-dr-uname {
      font-size: 14px; font-weight: 700; color: #fff;
      font-family: 'Plus Jakarta Sans', sans-serif;
    }
    .mmo-dr-urole {
      font-size: 11px; color: rgba(255,255,255,.72);
      font-family: 'Plus Jakarta Sans', sans-serif; margin-top: 2px;
    }

    .mmo-dr-nav { padding: 12px 12px; flex: 1; }
    .mmo-dr-nav-label {
      font-size: 10px; font-weight: 700; color: #9ca3af;
      letter-spacing: .08em; text-transform: uppercase;
      padding: 0 8px; margin: 4px 0 8px;
      font-family: 'Plus Jakarta Sans', sans-serif;
    }
    .mmo-dr-item {
      display: flex; align-items: center; gap: 14px;
      padding: 0 12px; height: 54px; border-radius: 14px;
      text-decoration: none; color: #4b5563;
      font-size: 14px; font-weight: 600;
      font-family: 'Plus Jakarta Sans', sans-serif;
      transition: background .15s, color .15s;
      position: relative; margin-bottom: 2px;
      -webkit-tap-highlight-color: transparent;
    }
    .mmo-dr-item:hover { background: #f0f4ff; color: #1a1a24; }
    .mmo-dr-item.on { background: #eef1fd; color: #0016dc; }
    .mmo-dr-item.on::before {
      content: ''; position: absolute; right: 0; top: 10px; bottom: 10px;
      width: 3px; background: #0016dc; border-radius: 3px 0 0 3px;
    }
    .mmo-dr-item i {
      font-size: 20px; width: 24px; text-align: center; flex-shrink: 0;
    }

    .mmo-dr-footer {
      padding: 16px 20px 28px;
      border-top: 1px solid #f3f4f6; flex-shrink: 0;
      display: flex; gap: 20px; align-items: center;
    }
    .mmo-dr-footer a {
      font-size: 12px; font-weight: 600; color: #9ca3af;
      text-decoration: none; font-family: 'Plus Jakarta Sans', sans-serif;
      transition: color .15s;
    }
    .mmo-dr-footer a:hover { color: #0016dc; }

    @media (max-width: 1023px) {
      #mmo-nav-links { display: none !important; }
      #mmo-hamburger { display: flex !important; }
      #mmo-nav-avatar { display: none !important; }
    }
    @media (max-width: 767px) {
      /* Sidebar + main layouts: force vertical stacking */
      .mmo-sidebar-wrap {
        flex-direction: column !important;
        height: auto !important;
      }
      .mmo-sidebar-wrap > * {
        width: 100% !important;
        min-width: 0 !important;
        max-width: 100% !important;
      }
      /* Un-clip fixed-height workspace panels */
      .mmo-sidebar-wrap [style*="h-[800"],
      .mmo-sidebar-wrap [style*="h-[700"],
      .mmo-sidebar-wrap [style*="h-[600"] {
        height: auto !important; min-height: 400px !important;
      }
    }
    /* FAB */
    #mmo-fab {
      position: fixed;
      bottom: 22px;
      left: 22px;
      z-index: 99999;
      font-family: 'Plus Jakarta Sans', sans-serif;
    }
    #mmo-fab-btn {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: #0016dc;
      color: #fff;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      box-shadow: 0 4px 18px rgba(0,22,220,0.4);
      transition: transform .2s, box-shadow .2s;
    }
    #mmo-fab-btn:hover { transform: scale(1.08); box-shadow: 0 6px 24px rgba(0,22,220,0.5); }
    #mmo-panel {
      display: none;
      position: absolute;
      bottom: 58px;
      left: 0;
      width: 270px;
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(26,26,36,.18);
      overflow: hidden;
      border: 1px solid #e5e7eb;
    }
    #mmo-panel.open { display: block; }
    #mmo-panel-head {
      background: #0016dc;
      color: #fff;
      padding: 12px 16px;
    }
    #mmo-panel-head .mod { font-size: 10px; opacity: .75; text-transform: uppercase; letter-spacing: .06em; margin-bottom: 2px; }
    #mmo-panel-head .scr { font-size: 13px; font-weight: 700; }
    #mmo-panel-body { padding: 10px 14px 14px; }
    #mmo-panel-body .sec-label {
      font-size: 10px;
      font-weight: 700;
      color: #9ca3af;
      text-transform: uppercase;
      letter-spacing: .07em;
      margin-bottom: 6px;
    }
    #mmo-links-list { list-style: none; margin: 0; padding: 0; }
    #mmo-links-list li a {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 12px;
      font-weight: 600;
      color: #1a1a24;
      text-decoration: none;
      padding: 6px 8px;
      border-radius: 8px;
      transition: background .15s;
    }
    #mmo-links-list li a:hover { background: #f0f4ff; color: #0016dc; }
    #mmo-links-list li a .dot {
      width: 6px; height: 6px; border-radius: 50%;
      background: #0016dc; flex-shrink: 0;
    }
    #mmo-toggle-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 14px;
      border-top: 1px solid #f3f4f6;
      font-size: 11px;
      font-weight: 600;
      color: #6b7280;
    }
    #mmo-toggle-btn {
      font-size: 11px;
      font-weight: 700;
      color: #0016dc;
      background: none;
      border: 1px solid #c7d2fe;
      padding: 3px 10px;
      border-radius: 99px;
      cursor: pointer;
    }

    /* ── Highlights toggle button ────────────────────────────── */
    #mmo-hl-toggle {
      position: fixed;
      bottom: 22px;
      right: 22px;
      z-index: 99999;
      display: flex;
      align-items: center;
      gap: 7px;
      padding: 8px 16px 8px 13px;
      border-radius: 999px;
      border: 1.5px solid #e5e7eb;
      background: #fff;
      color: #9ca3af;
      font-size: 12px;
      font-weight: 600;
      font-family: 'Plus Jakarta Sans', sans-serif;
      cursor: pointer;
      box-shadow: 0 2px 10px rgba(26,26,36,.09);
      transition: background .2s, color .2s, border-color .2s, box-shadow .2s;
      white-space: nowrap;
      user-select: none;
    }
    #mmo-hl-toggle:hover { border-color: #0016dc; color: #0016dc; }
    #mmo-hl-toggle.hl-on {
      background: #0016dc;
      color: #fff;
      border-color: #0016dc;
      box-shadow: 0 4px 16px rgba(0,22,220,.3);
    }

    /* ── Tablet navigation rail (601–1023px) ─────────────────── */
    #mmo-tablet-rail {
      display: none;
      position: fixed;
      left: 0; top: 0; bottom: 0;
      width: 96px;
      background: rgba(255,255,255,.92);
      backdrop-filter: blur(16px) saturate(180%);
      -webkit-backdrop-filter: blur(16px) saturate(180%);
      border-right: 1px solid rgba(240,240,245,.9);
      box-shadow: 2px 0 20px rgba(26,26,36,.07);
      z-index: 9999;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 24px 0;
      gap: 2px;
    }
    .mmo-tr-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      width: 82px;
      padding: 8px 4px;
      border-radius: 16px;
      text-decoration: none; color: #9ca3af;
      transition: background .15s, color .15s;
      position: relative;
      -webkit-tap-highlight-color: transparent;
    }
    .mmo-tr-item:hover { background: #f0f4ff; color: #1a1a24; }
    .mmo-tr-item.on  { color: #0016dc; }
    .mmo-tr-item.on::before {
      content: '';
      position: absolute; inset: 0;
      border-radius: 16px;
      background: rgba(0,22,220,.08);
      z-index: -1;
    }
    .mmo-tr-item i    { font-size: 22px; line-height: 1; flex-shrink: 0; }
    .mmo-tr-item span {
      font-size: 10px; font-weight: 600;
      font-family: 'Plus Jakarta Sans', sans-serif;
      white-space: nowrap;
      letter-spacing: -.02em; text-align: center;
    }

    @media (min-width: 601px) and (max-width: 1023px) {
      #mmo-std-header  { display: none !important; }
      #mmo-tablet-rail { display: flex !important; }
      #mmo-hamburger   { display: none !important; }
      #mmo-mobile-menu { display: none !important; }
      body { padding-left: 96px !important; padding-top: 0 !important; }
    }
  `;
  document.head.appendChild(style);

  /* ── Standardize navbar (PT-BR, identical across all pages) ── */
  const NAV_ITEMS = [
    { label: 'Início',        icon: 'fa-house',
      href: '../Módulo 3.4 - Vitrine, Busca e Descoberta/Tela 1 - Tela inicial de busca.html',
      keys: ['3.4', 'vitrine', 'busca e descoberta'] },
    { label: 'Pedidos',       icon: 'fa-clipboard-list',
      href: '../Módulo 3.6 - Solicitações e Oportunidades/Tela 3 - Tela de histórico de solicitações.html',
      keys: ['3.6', '3.7', 'solicita', 'balcão'] },
    { label: 'Mensagens',     icon: 'fa-comment-dots',
      href: '../Módulo 3.8 - Chat Interno e Inbox/Tela 1 - Inbox do cliente.html',
      keys: ['3.8', 'chat', 'inbox'] },
    { label: 'Oportunidades', icon: 'fa-bolt',
      href: '../Módulo 3.6 - Solicitações e Oportunidades/Tela 6 - Tela de oportunidades elegíveis.html',
      keys: ['oportunidade'] },
    { label: 'Perfil',        icon: 'fa-user',
      href: '../Módulo 3.3 - Cadastro e Perfil Profissional/Tela 1 - Edição do perfil profissional.html',
      keys: ['3.3', '3.1', 'cadastro', 'acesso', 'onboarding', '3.2'] },
  ];

  function standardizeNav() {
    const path = decodeURIComponent(window.location.pathname).toLowerCase();

    /* find target: <header> element, or a standalone <nav> */
    const target = document.querySelector('header, #header') ||
                   document.querySelector('nav');
    if (!target) return;

    /* build centered nav links */
    const linksHTML = NAV_ITEMS.map(item => {
      const active = item.keys.some(k => path.includes(k));
      const c  = active ? '#0016dc' : '#6b7280';
      const fw = active ? '700' : '500';
      return (
        '<div style="position:relative;display:flex;flex-direction:column;align-items:center;">' +
          `<a href="${item.href}" ` +
              `style="font-size:14px;font-weight:${fw};color:${c};text-decoration:none;` +
              `white-space:nowrap;font-family:'Plus Jakarta Sans',sans-serif;letter-spacing:-.01em;padding:4px 0;"` +
              `onmouseover="this.style.color='#1a1a24'"` +
              `onmouseout="this.style.color='${c}'">${item.label}</a>` +
          (active
            ? '<span style="position:absolute;bottom:-14px;left:50%;transform:translateX(-50%);' +
              'width:5px;height:5px;background:#0016dc;border-radius:50%;display:block;"></span>'
            : '') +
        '</div>'
      );
    }).join('');

    /* override visual styles while preserving existing position/top/z-index */
    const cs = window.getComputedStyle(target);
    const pos    = cs.position === 'fixed' ? 'fixed'    :
                   cs.position === 'sticky' ? 'sticky'  : 'relative';
    const top    = pos === 'fixed' || pos === 'sticky' ? '0' : cs.top;
    const zIndex = parseInt(cs.zIndex) >= 100 ? cs.zIndex : '1000';

    target.id = 'mmo-std-header';
    target.setAttribute('style',
      `position:${pos};top:${top};left:0;right:0;` +
      `background:#ffffff !important;` +
      `border-bottom:1px solid #f0f0f0 !important;` +
      `box-shadow:0 2px 16px rgba(26,26,36,.05) !important;` +
      `border-radius:0 !important;` +
      `height:72px !important;min-height:72px !important;` +
      `z-index:${zIndex};` +
      `display:flex;align-items:center;justify-content:center;` +
      `padding:0 !important;margin:0 !important;` +
      `width:100%;max-width:100%;box-sizing:border-box;`
    );

    /* inject full header content: logo | centered links | hamburger | avatar */
    target.innerHTML =
      '<div style="width:100%;max-width:1200px;margin:0 auto;padding:0 32px;' +
           'display:flex;align-items:center;justify-content:space-between;box-sizing:border-box;">' +

        /* logo */
        '<a href="../Módulo 3.4 - Vitrine, Busca e Descoberta/Tela 1 - Tela inicial de busca.html" ' +
            'style="display:flex;align-items:center;text-decoration:none;flex-shrink:0;">' +
          '<img src="../assets/logo-mmo.png" style="height:42px;width:auto;" alt="MMO">' +
        '</a>' +

        /* nav links (hidden on <1024px via CSS) */
        `<div id="mmo-nav-links" style="display:flex;align-items:center;gap:32px;">${linksHTML}</div>` +

        /* right side: hamburger (shown on <1024px) + avatar */
        '<div style="display:flex;align-items:center;gap:12px;">' +
          /* hamburger */
          '<button id="mmo-hamburger" aria-label="Menu" ' +
              'style="display:none;width:40px;height:40px;border:none;background:transparent;' +
              'cursor:pointer;border-radius:8px;flex-direction:column;align-items:center;' +
              'justify-content:center;gap:5px;">' +
            '<span style="display:block;width:22px;height:2px;background:#1a1a24;border-radius:2px;"></span>' +
            '<span style="display:block;width:22px;height:2px;background:#1a1a24;border-radius:2px;"></span>' +
            '<span style="display:block;width:16px;height:2px;background:#1a1a24;border-radius:2px;"></span>' +
          '</button>' +
          /* avatar */
          '<div id="mmo-nav-avatar" onclick="window.location.href=\'../Módulo 3.3 - Cadastro e Perfil Profissional/Tela 1 - Edição do perfil profissional.html\'" ' +
               'style="width:38px;height:38px;border-radius:50%;background:#f0f0f5;' +
               'border:1.5px solid #e5e7eb;overflow:hidden;cursor:pointer;flex-shrink:0;">' +
            '<img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" ' +
                 'style="width:100%;height:100%;object-fit:cover;" alt="Perfil">' +
          '</div>' +
        '</div>' +

      '</div>';

    /* side drawer: backdrop + panel */
    if (!document.getElementById('mmo-mobile-menu')) {
      const backdrop = document.createElement('div');
      backdrop.id = 'mmo-drawer-back';
      document.body.appendChild(backdrop);

      const menu = document.createElement('div');
      menu.id = 'mmo-mobile-menu';
      menu.innerHTML =
        '<div class="mmo-dr-head">' +
          '<button class="mmo-dr-close" id="mmo-dr-close-btn"><i class="fa-solid fa-xmark"></i></button>' +
          '<a href="../Módulo 3.4 - Vitrine, Busca e Descoberta/Tela 1 - Tela inicial de busca.html" style="display:flex;align-items:center;text-decoration:none;">' +
            '<img src="../assets/logo-mmo.png" style="height:36px;width:auto;" alt="MMO">' +
          '</a>' +
        '</div>' +
        '<div class="mmo-dr-user">' +
          '<div class="mmo-dr-avatar">' +
            '<img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" alt="Perfil">' +
          '</div>' +
          '<div>' +
            '<div class="mmo-dr-uname">Arthur Hawreliuk</div>' +
            '<div class="mmo-dr-urole">Profissional · MMO Premium</div>' +
          '</div>' +
        '</div>' +
        '<div class="mmo-dr-nav">' +
          '<div class="mmo-dr-nav-label">Navegação</div>' +
          NAV_ITEMS.map(item => {
            const active = item.keys.some(k => path.includes(k));
            return `<a href="${item.href}" class="mmo-dr-item${active ? ' on' : ''}">` +
                   `<i class="fa-solid ${item.icon}"></i>${item.label}</a>`;
          }).join('') +
        '</div>' +
        '<div class="mmo-dr-footer">' +
          '<a href="#">Ajuda</a><a href="#">Privacidade</a><a href="#">Termos</a>' +
        '</div>';
      document.body.appendChild(menu);
    }

    /* tablet floating rail */
    if (!document.getElementById('mmo-tablet-rail')) {
      const tRail = document.createElement('nav');
      tRail.id = 'mmo-tablet-rail';
      tRail.innerHTML = NAV_ITEMS.map(item => {
        const active = item.keys.some(k => path.includes(k));
        return `<a href="${item.href}" class="mmo-tr-item${active ? ' on' : ''}">` +
               `<i class="fa-solid ${item.icon}"></i>` +
               `<span>${item.label}</span></a>`;
      }).join('');
      document.body.prepend(tRail);
    }

    /* hamburger toggle — side drawer with backdrop */
    const hbtn    = document.getElementById('mmo-hamburger');
    const mmenu   = document.getElementById('mmo-mobile-menu');
    const mback   = document.getElementById('mmo-drawer-back');
    const closeBtn = document.getElementById('mmo-dr-close-btn');

    function openDrawer() {
      if (mback)  mback.classList.add('open');
      if (mmenu)  mmenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeDrawer() {
      if (mback)  mback.classList.remove('open');
      if (mmenu)  mmenu.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (hbtn)     hbtn.addEventListener('click', openDrawer);
    if (mback)    mback.addEventListener('click', closeDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  }
  standardizeNav();

  /* ── Standardize footer ──────────────────────────────────── */
  function _footerCol(title, links) {
    const ls = links.map(l =>
      `<a href="#" style="font-size:14px;color:#6b7280;text-decoration:none;font-family:'Plus Jakarta Sans',sans-serif;" ` +
      `onmouseover="this.style.color='#0016dc'" onmouseout="this.style.color='#6b7280'">${l}</a>`
    ).join('');
    return '<div style="display:flex;flex-direction:column;gap:8px;">' +
      `<h4 style="font-size:11px;font-weight:700;color:#1a1a24;letter-spacing:.07em;text-transform:uppercase;` +
           `margin:0 0 8px;font-family:'Plus Jakarta Sans',sans-serif;">${title}</h4>` +
      ls + '</div>';
  }

  function _socialIcon(icon) {
    return `<a href="#" style="color:#9ca3af;font-size:18px;line-height:1;text-decoration:none;" ` +
           `onmouseover="this.style.color='#0016dc'" onmouseout="this.style.color='#9ca3af'">` +
           `<i class="fa-brands ${icon}"></i></a>`;
  }

  function standardizeFooter() {
    const body = document.body;
    if (body.classList.contains('h-screen') && body.classList.contains('overflow-hidden')) return;

    const inner =
      '<div style="max-width:1200px;margin:0 auto;padding:52px 32px 32px;box-sizing:border-box;">' +
        '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:40px;flex-wrap:wrap;margin-bottom:44px;">' +
          '<div style="display:flex;flex-direction:column;gap:14px;max-width:260px;">' +
            '<a href="../Módulo 3.4 - Vitrine, Busca e Descoberta/Tela 1 - Tela inicial de busca.html" style="display:inline-block;">' +
              '<img src="../assets/logo-mmo.png" style="height:34px;width:auto;" alt="MMO">' +
            '</a>' +
            '<p style="font-size:14px;color:#6b7280;line-height:1.65;font-family:\'Plus Jakarta Sans\',sans-serif;margin:0;">' +
              'Conectamos clientes a profissionais verificados em todo o Brasil.' +
            '</p>' +
          '</div>' +
          '<div style="display:flex;gap:48px;flex-wrap:wrap;">' +
            _footerCol('Plataforma', ['Como funciona','Para profissionais','Para empresas','Planos e preços']) +
            _footerCol('Suporte',    ['Central de Ajuda','Fale Conosco','Blog MMO']) +
            _footerCol('Legal',      ['Termos de Uso','Privacidade','Cookies']) +
          '</div>' +
        '</div>' +
        '<div style="border-top:1px solid #f0f0f0;padding-top:24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;">' +
          '<p style="font-size:13px;color:#9ca3af;margin:0;font-family:\'Plus Jakarta Sans\',sans-serif;">' +
            '© 2026 Mestre da Mão de Obra. Todos os direitos reservados.' +
          '</p>' +
          '<div style="display:flex;gap:16px;align-items:center;">' +
            _socialIcon('fa-instagram') + _socialIcon('fa-linkedin-in') + _socialIcon('fa-facebook-f') +
          '</div>' +
        '</div>' +
      '</div>';

    let footer = document.querySelector('footer#footer');
    if (footer) {
      footer.id = 'mmo-std-footer';
      footer.setAttribute('style', 'background:#fff;border-top:1px solid #f0f0f0;margin-top:auto;width:100%;box-sizing:border-box;');
      footer.className = '';
      footer.innerHTML = inner;
    } else {
      footer = document.createElement('footer');
      footer.id = 'mmo-std-footer';
      footer.setAttribute('style', 'background:#fff;border-top:1px solid #f0f0f0;margin-top:auto;width:100%;box-sizing:border-box;');
      footer.innerHTML = inner;
      document.body.appendChild(footer);
    }
  }
  standardizeFooter();

  /* ── Highlight all nav elements ─────────────────────────── */
  let highlightsOn = false;

  function collectNavEls() {
    const els = [];
    document.querySelectorAll('[onclick]').forEach(el => {
      if (/location\.href/.test(el.getAttribute('onclick'))) els.push(el);
    });
    document.querySelectorAll('a[href]').forEach(el => {
      const h = el.getAttribute('href');
      if (h && h.endsWith('.html') && !h.startsWith('http')) els.push(el);
    });
    return els;
  }

  function applyHighlights(on) {
    collectNavEls().forEach(el => {
      if (on) el.classList.add('mmo-hot');
      else el.classList.remove('mmo-hot');
    });
  }
  applyHighlights(false);

  /* ── Extract destinations ────────────────────────────────── */
  function getDestinations() {
    const seen = new Set();
    const dest = [];
    collectNavEls().forEach(el => {
      let href = null;
      const oc = el.getAttribute('onclick');
      if (oc) {
        const m = oc.match(/location\.href\s*=\s*['"]([^'"]+)['"]/);
        if (m) href = m[1];
      } else {
        href = el.getAttribute('href');
      }
      if (href && !seen.has(href)) {
        seen.add(href);
        const parts = href.split('/');
        const file = parts[parts.length - 1].replace(/\.html$/, '');
        // for cross-module links include the module folder context
        let label = file;
        if (href.startsWith('../') && parts.length >= 3) {
          const mod = parts[parts.length - 2]
            .replace(/^Módulo\s+/i, 'Mod ')
            .replace(/\s+-\s+.+$/, '');
          label = mod + ' › ' + file;
        }
        dest.push({ href, label });
      }
    });
    return dest;
  }

  /* ── Parse module/screen from URL ───────────────────────── */
  function parseLocation() {
    const parts = window.location.pathname.split('/');
    const folder = decodeURIComponent(parts[parts.length - 2] || '');
    const file   = decodeURIComponent(parts[parts.length - 1] || '').replace(/\.html$/, '');
    return { mod: folder, scr: file };
  }

  /* ── Build FAB ───────────────────────────────────────────── */
  const fab = document.createElement('div');
  fab.id = 'mmo-fab';
  fab.innerHTML = `
    <div id="mmo-panel">
      <div id="mmo-panel-head">
        <div class="mod" id="mmo-mod-label"></div>
        <div class="scr" id="mmo-scr-label"></div>
      </div>
      <div id="mmo-panel-body">
        <div class="sec-label">Destinos disponíveis</div>
        <ul id="mmo-links-list"></ul>
      </div>
      <div id="mmo-toggle-row">
        <span>Pulsação nos botões</span>
        <button id="mmo-toggle-btn">Mostrar</button>
      </div>
    </div>
    <button id="mmo-fab-btn" title="Navegação do protótipo">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 8 12 12 14 14"/>
      </svg>
    </button>
  `;
  document.body.appendChild(fab);

  /* populate panel */
  const loc = parseLocation();
  document.getElementById('mmo-mod-label').textContent = loc.mod;
  document.getElementById('mmo-scr-label').textContent = loc.scr;

  const list = document.getElementById('mmo-links-list');
  getDestinations().forEach(d => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${d.href}"><span class="dot"></span>${d.label}</a>`;
    list.appendChild(li);
  });

  /* toggle panel */
  const btn   = document.getElementById('mmo-fab-btn');
  const panel = document.getElementById('mmo-panel');
  btn.addEventListener('click', () => panel.classList.toggle('open'));

  /* ── Highlights toggle button (bottom-right corner) ─────── */
  const hlBtn = document.createElement('button');
  hlBtn.id = 'mmo-hl-toggle';
  hlBtn.innerHTML = '<i class="fa-regular fa-eye-slash"></i> Interações';
  document.body.appendChild(hlBtn);

  function setHighlights(on) {
    highlightsOn = on;
    applyHighlights(on);
    hlBtn.innerHTML = on
      ? '<i class="fa-regular fa-eye-slash"></i> Interações'
      : '<i class="fa-regular fa-eye"></i> Interações';
    hlBtn.classList.toggle('hl-on', on);
    const fabToggle = document.getElementById('mmo-toggle-btn');
    if (fabToggle) fabToggle.textContent = on ? 'Ocultar' : 'Mostrar';
  }

  hlBtn.addEventListener('click', () => setHighlights(!highlightsOn));

  /* FAB panel toggle kept in sync */
  document.getElementById('mmo-toggle-btn').addEventListener('click', () => setHighlights(!highlightsOn));

  /* re-apply on dynamic DOM changes (some pages use document.write) */
  const observer = new MutationObserver(() => {
    if (highlightsOn) applyHighlights(true);
    getDestinations().forEach(d => {
      if (![...list.querySelectorAll('a')].find(a => a.getAttribute('href') === d.href)) {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${d.href}"><span class="dot"></span>${d.label}</a>`;
        list.appendChild(li);
      }
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();
