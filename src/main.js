import './style.css';

const products = [
  {
    id: 'vip',
    category: 'membresias',
    label: 'Membresía',
    name: 'VIP',
    price: '10 €',
    cadence: '/ mes',
    image: '/images/vip.png',
    accent: 'red',
    badge: 'Inicio',
    description: 'Más tiempo jugando, más recompensas y prioridad para entrar cuando la arena está llena.',
    perks: ['600 tokens cada mes', 'Ruleta cada 10 horas', 'Prioridad de cola', 'Pack VIP semanal'],
  },
  {
    id: 'vip-plus',
    category: 'membresias',
    label: 'Membresía',
    name: 'VIP PLUS',
    price: '36 €',
    cadence: '/ mes',
    image: '/images/vip-plus.png',
    accent: 'gold',
    badge: 'Más elegido',
    description: 'El loadout completo para quienes vienen a competir, subir ELO y dejar huella.',
    perks: ['1.500 tokens cada mes', '+50% Glory en recompensas', 'Corona y nombre dorado', 'Caja Hype semanal'],
  },
  {
    id: 'clan-vip',
    category: 'clanes',
    label: 'Facción',
    name: 'CLAN VIP',
    price: '30 €',
    cadence: ' pago único',
    image: '/images/clan-vip.png',
    accent: 'violet',
    badge: 'Squad',
    description: 'Registra tu banda, crea identidad y entra a la guerra con tu squad organizado.',
    perks: ['Registro oficial de clan', 'Base y territorio', 'Radio privada', 'Canales privados en Discord'],
  },
  {
    id: 'battle-pass',
    category: 'extras',
    label: 'Temporada 04',
    name: 'PASE DE BATALLA',
    price: '12 €',
    cadence: ' pago único',
    image: '/images/pase-batalla.png',
    accent: 'orange',
    badge: 'Nuevo',
    description: 'Desbloquea recompensas de temporada, cosméticos y retos que demuestran tu nivel.',
    perks: ['50 niveles de recompensas', 'Misiones exclusivas', 'Skins de temporada', 'Bonus de experiencia'],
  },
];

const ranking = [
  { rank: '01', name: 'Kairo', clan: 'NOVA', elo: '2.847', winrate: '78%', avatar: 'K' },
  { rank: '02', name: 'Vex', clan: 'BLACKOUT', elo: '2.774', winrate: '74%', avatar: 'V' },
  { rank: '03', name: 'Nyra', clan: 'ORBIT', elo: '2.731', winrate: '72%', avatar: 'N' },
  { rank: '04', name: 'Ozzy', clan: 'SENTINEL', elo: '2.688', winrate: '70%', avatar: 'O' },
];

const icons = {
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>',
  external: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5M19 5l-9 9"/><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
  copy: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>',
  discord: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.5 5.3A16.6 16.6 0 0 0 15.4 4l-.5 1a14.3 14.3 0 0 0-5.8 0l-.5-1A16.7 16.7 0 0 0 4.5 5.3C1.9 9.2 1.2 13 1.5 16.8A16.5 16.5 0 0 0 6.6 19l1.2-1.8c-.7-.3-1.4-.6-2-1.1l.5-.4c3.7 1.7 7.7 1.7 11.3 0l.5.4c-.6.4-1.3.8-2 1.1l1.2 1.8a16.5 16.5 0 0 0 5.1-2.2c.4-4.4-.7-8.2-2.9-11.5ZM8.3 14.2c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2Zm7.4 0c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2Z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 9 6-9 6V6Z"/></svg>',
};

const safe = (value) => String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[character]));
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function navMarkup() {
  return `
    <header class="site-header" data-header>
      <div class="shell nav-inner">
        <a class="brand" href="/" aria-label="Global Arena inicio">
          <span class="brand-mark"><img src="/assets/img/global-arena-logo-raw.png" alt="" /></span>
          <span class="brand-name">GLOBAL<span>ARENA</span></span>
        </a>
        <nav class="desktop-nav" aria-label="Navegación principal">
          <a href="/#home">Inicio</a>
          <a href="/#modes">Modos</a>
          <a href="/#ranking">Ranking</a>
          <a href="/#tournaments">Torneos <i class="live-pill">LIVE</i></a>
          <a href="/store">Tienda</a>
        </nav>
        <div class="nav-actions">
          <a class="nav-discord" href="https://discord.gg/globalarena" target="_blank" rel="noopener">${icons.discord}<span>Discord</span></a>
          <a class="icon-button cart-link" href="/store" aria-label="Abrir tienda"><span class="cart-icon">◈</span><b data-cart-count>0</b></a>
          <button class="menu-toggle" type="button" aria-label="Abrir menú" aria-expanded="false" data-menu-toggle><span></span><span></span></button>
        </div>
      </div>
      <div class="mobile-panel" data-mobile-panel>
        <a href="/#home">Inicio <span>01</span></a>
        <a href="/#modes">Modos <span>02</span></a>
        <a href="/#ranking">Ranking <span>03</span></a>
        <a href="/#tournaments">Torneos <span>04</span></a>
        <a href="/store">Tienda <span>05</span></a>
        <a href="https://discord.gg/globalarena" target="_blank" rel="noopener">Discord <span>${icons.external}</span></a>
      </div>
    </header>`;
}

function heroMarkup() {
  return `
    <section class="hero" id="home">
      <div class="hero-backdrop"></div>
      <div class="hero-scanlines"></div>
      <div class="hero-orb orb-left"></div><div class="hero-orb orb-right"></div>
      <img class="hero-character hero-character-left" src="/assets/img/foto-izquierda.png" alt="" aria-hidden="true" />
      <img class="hero-character hero-character-right" src="/assets/img/foto-derecha.png" alt="" aria-hidden="true" />
      <div class="shell hero-layout">
        <div class="hero-copy">
          <div class="eyebrow"><span class="eyebrow-line"></span> FIVE M · LOS SANTOS · SEASON 04</div>
          <h1>Juega.<br /><em>Compite.</em><br />Domina.</h1>
          <p class="hero-lead">La arena PvP de FiveM donde cada duelo cuenta, cada victoria suma y tu nombre se queda arriba.</p>
          <div class="hero-actions">
            <button class="button button-primary" type="button" data-connect>${icons.play}<span>Entrar al servidor</span></button>
            <a class="button button-ghost" href="#modes">Explorar modos ${icons.arrow}</a>
          </div>
          <div class="hero-proof"><span class="proof-avatars"><i>K</i><i>V</i><i>N</i><i>+</i></span><span><strong>2.4k+</strong> jugadores esta semana</span><span class="proof-separator"></span><span><b class="live-dot"></b> servidor online</span></div>
        </div>
        <div class="hero-console" aria-label="Estado del servidor">
          <div class="console-top"><span><b class="live-dot"></b> LIVE STATUS</span><span>GLOBAL ARENA // 01</span></div>
          <div class="console-main"><div class="server-symbol">GA<span>04</span></div><div><span class="console-label">GLOBAL ARENA</span><strong>PVP COMPETITIVO</strong><span class="console-sub">CONECTA. LÚCETE. REPITE.</span></div></div>
          <div class="console-stats"><div><span>JUGADORES</span><strong data-players>148</strong><small>/ 300</small></div><div><span>LATENCIA</span><strong data-ping>24</strong><small>ms</small></div><div><span>REGIÓN</span><strong>EU</strong><small>WEST</small></div></div>
          <button class="console-command" type="button" data-copy><span>connect cfx.re/join/globalarena</span>${icons.copy}</button>
        </div>
      </div>
      <div class="hero-bottom shell"><span>SCROLL TO ENTER</span><span class="scroll-line"></span><span>01 / 05</span></div>
    </section>`;
}

function tickerMarkup() {
  return `<div class="ticker"><div class="ticker-track">${['RANKED PVP', 'WEEKLY TOURNAMENTS', 'CUSTOM LOADOUTS', 'GLOBAL LEADERBOARD', 'SEASONAL REWARDS', 'RANKED PVP', 'WEEKLY TOURNAMENTS', 'CUSTOM LOADOUTS', 'GLOBAL LEADERBOARD', 'SEASONAL REWARDS'].map((item) => `<span>${item}<b>✦</b></span>`).join('')}</div></div>`;
}

function sectionIntro(kicker, title, body, action = '') {
  return `<div class="section-intro"><div><span class="section-kicker">${kicker}</span><h2>${title}</h2></div><div class="section-intro-side"><p>${body}</p>${action}</div></div>`;
}

function modesMarkup() {
  const modes = [
    { number: '01', title: 'Hopouts 5v5', desc: 'La táctica manda. Coordina tu escuadra, rompe la defensa y gana la ronda.', meta: '5 VS 5', color: 'red' },
    { number: '02', title: 'Duelos Ranked', desc: 'Uno contra uno, sin excusas. Sube ELO, escala puestos y defiende tu racha.', meta: '1 VS 1', color: 'blue' },
    { number: '03', title: 'Zonas de guerra', desc: 'El mapa cambia, la presión sube. Controla el punto y hazte con la recompensa.', meta: 'FREE FOR ALL', color: 'gold' },
  ];
  return `<section class="section modes-section" id="modes"><div class="shell">${sectionIntro('01 / PLAY YOUR WAY', 'Un mapa.<br /><em>Tres formas</em><br />de dominar.', 'Aquí no hay una sola manera de ganar. Elige tu ritmo, forma tu squad y entra a una competición que nunca se apaga.', '<a class="text-link" href="#tournaments">Ver temporada activa ' + icons.arrow + '</a>')}<div class="mode-grid">${modes.map((mode) => `<article class="mode-card mode-${mode.color}"><div class="mode-number">${mode.number}</div><div class="mode-art art-${mode.color}"><span></span><span></span><span></span></div><div class="mode-content"><span class="mode-meta">${mode.meta}</span><h3>${mode.title}</h3><p>${mode.desc}</p><a class="mode-link" href="#tournaments" aria-label="Ver ${mode.title}">${icons.arrow}</a></div></article>`).join('')}</div></div></section>`;
}

function statsMarkup() {
  return `<section class="stats-strip"><div class="shell stats-grid"><div><strong>42<span>K</span></strong><small>jugadores registrados</small></div><div><strong>96</strong><small>países conectados</small></div><div><strong>1.280<span>+</span></strong><small>torneos disputados</small></div><div><strong>24<span>ms</span></strong><small>ping medio en EU</small></div></div></section>`;
}

function rankingMarkup() {
  return `<section class="section ranking-section" id="ranking"><div class="shell">${sectionIntro('02 / THE ELITE', 'Los que están<br /><em>haciendo historia.</em>', 'El ranking se actualiza tras cada partida. ¿Tu nombre aparece aquí la próxima semana?', '<button class="text-link text-button" type="button" data-toast="El ranking completo se abre en Discord.">Ver ranking completo ' + icons.arrow + '</button>')}<div class="ranking-board"><div class="ranking-head"><span>POSICIÓN / JUGADOR</span><span>CLAN</span><span>ELO</span><span>WIN RATE</span><span></span></div>${ranking.map((player, index) => `<div class="ranking-row ${index === 0 ? 'is-first' : ''}"><span class="rank-player"><b class="rank-number">${player.rank}</b><i class="player-avatar avatar-${index}">${player.avatar}</i><span><strong>${player.name}</strong><small>LVL ${51 - index * 4} · ${index === 0 ? 'ON FIRE' : 'ACTIVE'}</small></span></span><span class="rank-clan">${player.clan}</span><span class="rank-elo">${player.elo}</span><span class="rank-win">${player.winrate}</span><span class="rank-arrow">${icons.arrow}</span></div>`).join('')}</div></div></section>`;
}

function tournamentMarkup() {
  return `<section class="tournament-section" id="tournaments"><div class="tournament-glow"></div><div class="shell tournament-layout"><div class="tournament-copy"><span class="section-kicker">03 / SEASON 04</span><div class="live-title"><b class="live-dot"></b><span>REGISTRATION OPEN</span></div><h2>Global Arena<br /><em>Championship.</em></h2><p>64 squads. Una noche. Premios reales. La temporada competitiva que pone a prueba todo lo que has aprendido dentro de la arena.</p><div class="tournament-actions"><button class="button button-primary" type="button" data-toast="Te hemos guardado un hueco. Entra al Discord para confirmar tu squad.">Registrar mi squad ${icons.arrow}</button><a class="text-link" href="https://discord.gg/globalarena" target="_blank" rel="noopener">Consultar reglas ${icons.external}</a></div></div><div class="tournament-card"><div class="tournament-card-top"><span>PRÓXIMO EVENTO</span><span>GA // 04</span></div><div class="event-date"><strong>18</strong><span><b>OCTUBRE</b><small>2026 · 20:00 CET</small></span></div><div class="event-divider"></div><div class="event-info"><span>PREMIO TOTAL</span><strong>2.500 €</strong><small>+ 64 plazas · eliminación directa</small></div><div class="countdown"><div><strong>12</strong><span>DÍAS</span></div><b>:</b><div><strong>08</strong><span>HORAS</span></div><b>:</b><div><strong>42</strong><span>MIN</span></div></div></div></div></section>`;
}

function storeCard(product) {
  return `<article class="product-card product-${product.accent}" data-product="${product.id}"><div class="product-image"><img src="${product.image}" alt="${safe(product.name)}" onerror="this.src='${product.fallbackImage || product.image}'" /><span class="product-badge">${product.badge}</span><button class="quick-view" type="button" aria-label="Ver ${safe(product.name)}">Ver detalle ${icons.arrow}</button></div><div class="product-body"><span class="product-label">${product.label}</span><h3>${product.name}</h3><p>${product.description}</p><div class="product-bottom"><span><strong>${product.price}</strong><small>${product.cadence}</small></span><button class="add-button" type="button" data-add="${product.id}" aria-label="Añadir ${safe(product.name)}">+</button></div></div></article>`;
}

function storeMarkup() {
  return `<section class="section store-section" id="store"><div class="shell">${sectionIntro('04 / LOADOUT YOUR LIFE', 'Todo lo que<br /><em>necesitas para ganar.</em>', 'Membresías, clanes y recompensas de temporada. Compra desde aquí y recibe tu activación abriendo un ticket en nuestro Discord.', '<a class="text-link" href="https://discord.gg/globalarena" target="_blank" rel="noopener">¿Cómo funciona? ' + icons.external + '</a>')}<div class="store-toolbar"><div class="filter-tabs" role="tablist"><button class="filter-tab is-active" type="button" data-filter="all">Todo <span>04</span></button><button class="filter-tab" type="button" data-filter="membresias">Membresías <span>02</span></button><button class="filter-tab" type="button" data-filter="clanes">Clanes <span>01</span></button><button class="filter-tab" type="button" data-filter="extras">Extras <span>01</span></button></div><span class="store-note"><b>●</b> Entrega mediante ticket Discord</span></div><div class="product-grid">${products.map(storeCard).join('')}</div></div></section>`;
}

function teamMarkup() {
  return `<section class="section team-section" id="team"><div class="shell team-layout"><div class="team-copy"><span class="section-kicker">05 / THE PEOPLE BEHIND IT</span><h2>Hecho por<br /><em>jugadores.</em></h2><p>Global Arena nace de una idea muy simple: crear el sitio al que nosotros mismos querríamos entrar cada noche.</p><a class="text-link" href="https://discord.gg/globalarena" target="_blank" rel="noopener">Habla con el equipo ${icons.external}</a></div><div class="team-stack"><div class="team-card"><i class="team-avatar">K</i><div><strong>Kairo</strong><span>Founder · Product</span></div><b>01</b></div><div class="team-card"><i class="team-avatar avatar-pink">V</i><div><strong>Vex</strong><span>Lead Developer</span></div><b>02</b></div><div class="team-card"><i class="team-avatar avatar-gold">N</i><div><strong>Nyra</strong><span>Community & Events</span></div><b>03</b></div><div class="team-card"><i class="team-avatar avatar-blue">O</i><div><strong>Ozzy</strong><span>Tournament Admin</span></div><b>04</b></div></div></div></section>`;
}

function faqMarkup() {
  const questions = [
    ['¿Cómo entro al servidor?', 'Descarga FiveM, pulsa el botón Entrar al servidor de la portada y acepta la conexión. También puedes copiar el comando y pegarlo en tu consola F8.'],
    ['¿Es gratis jugar?', 'Sí. El acceso a todos los modos competitivos es gratuito. La tienda solo ofrece extras opcionales, sin ventajas que rompan el balance.'],
    ['¿Dónde recibo mi compra?', 'Después de comprar, abre un ticket en Discord con tu comprobante. El equipo valida y activa tu producto dentro del servidor.'],
    ['¿Cómo participo en los torneos?', 'Registra tu squad desde la sección de temporada o entra al Discord para consultar las reglas, horarios y plazas disponibles.'],
  ];
  return `<section class="faq-section" id="faq"><div class="shell faq-layout"><div><span class="section-kicker">FAQ / READY?</span><h2>Antes de<br /><em>entrar.</em></h2><p>Si te queda alguna duda, la comunidad está a un clic.</p></div><div class="faq-list">${questions.map(([question, answer], index) => `<div class="faq-item ${index === 0 ? 'is-open' : ''}"><button type="button" aria-expanded="${index === 0}" class="faq-question"><span>0${index + 1}</span><strong>${question}</strong><i>${icons.chevron}</i></button><div class="faq-answer"><p>${answer}</p></div></div>`).join('')}</div></div></section>`;
}

function footerMarkup() {
  return `<footer class="site-footer"><div class="shell footer-main"><div class="footer-brand"><a class="brand" href="/"><span class="brand-mark"><img src="/assets/img/global-arena-logo-raw.png" alt="" /></span><span class="brand-name">GLOBAL<span>ARENA</span></span></a><p>From the player,<br />for the player.</p></div><div class="footer-columns"><div><span>EXPLORE</span><a href="/#modes">Modos de juego</a><a href="/#ranking">Ranking global</a><a href="/#tournaments">Torneos</a><a href="/store">Tienda</a></div><div><span>COMMUNITY</span><a href="https://discord.gg/globalarena" target="_blank" rel="noopener">Discord ${icons.external}</a><a href="https://youtube.com" target="_blank" rel="noopener">YouTube ${icons.external}</a><a href="https://x.com" target="_blank" rel="noopener">Twitter / X ${icons.external}</a></div><div><span>SUPPORT</span><a href="#faq">Preguntas frecuentes</a><a href="https://discord.gg/globalarena" target="_blank" rel="noopener">Abrir un ticket</a><a href="#">Reglas del servidor</a></div></div></div><div class="shell footer-bottom"><span>© 2026 Global Arena. Not affiliated with Mojang or Microsoft.</span><span>BUILT WITH <b>♥</b> IN LOS SANTOS</span></div></footer>`;
}

function modalMarkup() {
  return `<div class="modal-backdrop" data-modal hidden><div class="product-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button class="modal-close" type="button" data-modal-close aria-label="Cerrar">×</button><div class="modal-image"><img data-modal-image alt="" /></div><div class="modal-details"><span class="product-label" data-modal-label></span><h2 id="modal-title" data-modal-name></h2><p data-modal-description></p><div class="modal-perks" data-modal-perks></div><div class="modal-buy"><span><strong data-modal-price></strong><small data-modal-cadence></small></span><a class="button button-primary" href="https://discord.gg/globalarena" target="_blank" rel="noopener">Abrir ticket ${icons.external}</a></div></div></div></div><div class="toast" data-toast-box role="status" aria-live="polite"><b data-toast-title>Copiado</b><span data-toast-message></span></div>`;
}

function appMarkup(isStorePage) {
  return `${navMarkup()}<main>${isStorePage ? `<section class="store-page-hero"><div class="shell"><span class="section-kicker">GLOBAL ARENA / STORE</span><h1>Equipa tu<br /><em>leyenda.</em></h1><p>Extras para jugar más, competir mejor y llevar tu identidad a cada partida.</p></div></section>` : `${heroMarkup()}${tickerMarkup()}${modesMarkup()}${statsMarkup()}${rankingMarkup()}${tournamentMarkup()}`}${storeMarkup()}${isStorePage ? '' : `${teamMarkup()}${faqMarkup()}`}</main>${footerMarkup()}${modalMarkup()}`;
}

function renderApp() {
  const isStorePage = window.location.pathname.startsWith('/store');
  document.title = isStorePage ? 'Tienda — Global Arena' : 'Global Arena — Servidor FiveM PvP competitivo';
  document.body.innerHTML = appMarkup(isStorePage);
  bindInteractions();
  if (isStorePage) document.querySelector('#store')?.scrollIntoView({ block: 'start' });
}

function showToast(title, message) {
  const box = $('[data-toast-box]');
  if (!box) return;
  $('[data-toast-title]', box).textContent = title;
  $('[data-toast-message]', box).textContent = message;
  box.classList.add('is-visible');
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => box.classList.remove('is-visible'), 3500);
}

function updateCart() {
  const cart = JSON.parse(localStorage.getItem('ga-cart') || '[]');
  $$('[data-cart-count]').forEach((element) => { element.textContent = cart.length; });
}

function getProduct(id) { return products.find((product) => product.id === id); }

function openProduct(product) {
  const modal = $('[data-modal]');
  if (!modal || !product) return;
  $('[data-modal-image]').src = product.image;
  $('[data-modal-image]').alt = product.name;
  $('[data-modal-label]').textContent = product.label;
  $('[data-modal-name]').textContent = product.name;
  $('[data-modal-description]').textContent = product.description;
  $('[data-modal-price]').textContent = product.price;
  $('[data-modal-cadence]').textContent = product.cadence;
  $('[data-modal-perks]').innerHTML = product.perks.map((perk) => `<span>✓ ${perk}</span>`).join('');
  modal.hidden = false;
  requestAnimationFrame(() => modal.classList.add('is-visible'));
  document.body.classList.add('modal-open');
}

function closeProduct() {
  const modal = $('[data-modal]');
  if (!modal) return;
  modal.classList.remove('is-visible');
  document.body.classList.remove('modal-open');
  window.setTimeout(() => { modal.hidden = true; }, 220);
}

function bindInteractions() {
  const header = $('[data-header]');
  window.addEventListener('scroll', () => header?.classList.toggle('is-scrolled', window.scrollY > 24), { passive: true });
  const menuToggle = $('[data-menu-toggle]');
  menuToggle?.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!open));
    $('[data-mobile-panel]')?.classList.toggle('is-open', !open);
    document.body.classList.toggle('menu-open', !open);
  });
  $$('[data-mobile-panel] a').forEach((link) => link.addEventListener('click', () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    $('[data-mobile-panel]')?.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  }));

  $('[data-connect]')?.addEventListener('click', () => {
    copyServerCommand();
    showToast('Comando copiado', 'Pégalo en F8 o usa FiveM para conectarte directamente.');
  });
  $('[data-copy]')?.addEventListener('click', () => {
    copyServerCommand();
    showToast('Comando copiado', 'connect cfx.re/join/globalarena');
  });
  $$('[data-toast]').forEach((button) => button.addEventListener('click', () => showToast('Listo', button.dataset.toast)));
  $$('[data-filter]').forEach((button) => button.addEventListener('click', () => {
    $$('[data-filter]').forEach((tab) => tab.classList.toggle('is-active', tab === button));
    const filter = button.dataset.filter;
    $$('.product-card').forEach((card) => { card.hidden = filter !== 'all' && getProduct(card.dataset.product)?.category !== filter; });
  }));
  $$('[data-product], [data-add]').forEach((element) => element.addEventListener('click', (event) => {
    event.stopPropagation();
    const id = element.dataset.product || element.dataset.add;
    const product = getProduct(id);
    if (element.dataset.add) {
      const cart = JSON.parse(localStorage.getItem('ga-cart') || '[]');
      if (!cart.includes(id)) cart.push(id);
      localStorage.setItem('ga-cart', JSON.stringify(cart));
      updateCart();
      showToast('Añadido a tu selección', `${product.name} listo para activar en Discord.`);
    } else openProduct(product);
  }));
  $('[data-modal-close]')?.addEventListener('click', closeProduct);
  $('[data-modal]')?.addEventListener('click', (event) => { if (event.target === $('[data-modal]')) closeProduct(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeProduct(); });
  $$('.faq-question').forEach((button) => button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const open = item.classList.contains('is-open');
    $$('.faq-item').forEach((faq) => { faq.classList.remove('is-open'); $('.faq-question', faq)?.setAttribute('aria-expanded', 'false'); });
    if (!open) { item.classList.add('is-open'); button.setAttribute('aria-expanded', 'true'); }
  }));

  let players = 148;
  let ping = 24;
  window.setInterval(() => {
    players = Math.min(300, Math.max(112, players + Math.floor(Math.random() * 5) - 2));
    ping = Math.min(31, Math.max(18, ping + Math.floor(Math.random() * 3) - 1));
    $$('[data-players]').forEach((element) => { element.textContent = players; });
    $$('[data-ping]').forEach((element) => { element.textContent = ping; });
  }, 4200);
  updateCart();
}

function copyServerCommand() {
  const command = 'connect cfx.re/join/globalarena';
  if (navigator.clipboard?.writeText) navigator.clipboard.writeText(command).catch(() => {});
}

renderApp();
