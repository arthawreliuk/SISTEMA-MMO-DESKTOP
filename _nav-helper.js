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
  `;
  document.head.appendChild(style);

  /* ── Standardize navbar (PT-BR, identical across all pages) ── */
  const NAV_ITEMS = [
    { label: 'Início',
      href: '../Módulo 3.4 - Vitrine, Busca e Descoberta/Tela 1 - Tela inicial de busca.html',
      keys: ['3.4', 'vitrine', 'busca e descoberta'] },
    { label: 'Pedidos',
      href: '../Módulo 3.6 - Solicitações e Oportunidades/Tela 3 - Tela de histórico de solicitações.html',
      keys: ['3.6', '3.7', 'solicita', 'balção'] },
    { label: 'Mensagens',
      href: '../Módulo 3.8 - Chat Interno e Inbox/Tela 1 - Inbox do cliente.html',
      keys: ['3.8', 'chat', 'inbox'] },
    { label: 'Oportunidades',
      href: '../Módulo 3.6 - Solicitações e Oportunidades/Tela 6 - Tela de oportunidades elegíveis.html',
      keys: ['oportunidade'] },
    { label: 'Perfil',
      href: '../Módulo 3.3 - Cadastro e Perfil Profissional/Tela 1 - Edição do perfil profissional.html',
      keys: ['3.3', '3.1', 'cadastro', 'acesso', 'onboarding', '3.2'] },
  ];

  function standardizeNav() {
    const header = document.querySelector('header, #header');
    if (!header) return;
    const nav = header.querySelector('nav');
    if (!nav) return;

    const path = decodeURIComponent(window.location.pathname).toLowerCase();

    nav.removeAttribute('class');
    nav.style.cssText = 'display:flex!important;align-items:center;gap:32px;';

    nav.innerHTML = NAV_ITEMS.map(item => {
      const active = item.keys.some(k => path.includes(k));
      const c = active ? '#0016dc' : '#6b7280';
      const w = active ? '700' : '500';
      return [
        '<div style="position:relative;display:flex;flex-direction:column;align-items:center;">',
          `<a href="${item.href}" style="font-size:14px;font-weight:${w};color:${c};text-decoration:none;`,
          `white-space:nowrap;font-family:'Plus Jakarta Sans',sans-serif;letter-spacing:-.01em;"`,
          `onmouseover="this.style.color='#1a1a24'"`,
          `onmouseout="this.style.color='${c}'">${item.label}</a>`,
          active ? '<span style="position:absolute;bottom:-18px;left:50%;transform:translateX(-50%);width:5px;height:5px;background:#0016dc;border-radius:50%;display:block;"></span>' : '',
        '</div>',
      ].join('');
    }).join('');
  }
  standardizeNav();

  /* ── Highlight all nav elements ─────────────────────────── */
  let highlightsOn = true;

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
  applyHighlights(true);

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
        <button id="mmo-toggle-btn">Ocultar</button>
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

  /* toggle highlights */
  document.getElementById('mmo-toggle-btn').addEventListener('click', function () {
    highlightsOn = !highlightsOn;
    applyHighlights(highlightsOn);
    this.textContent = highlightsOn ? 'Ocultar' : 'Mostrar';
  });

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
