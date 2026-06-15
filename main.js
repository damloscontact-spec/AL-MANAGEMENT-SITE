// ── PLAYER DATA ──────────────────────────────────────────────
const PLAYERS = [
  // EA FC
  { id: 'dexxjunior', pseudo: 'Dexxjunior', realname: 'First Last', game: 'eafc', flag: '🏳', age: '—', followers: '—', photo: null, twitter: '#', twitch: '#', instagram: '#' },
  { id: 'xavik',      pseudo: 'XaviK',      realname: 'First Last', game: 'eafc', flag: '🏳', age: '—', followers: '—', photo: null, twitter: '#', twitch: '#', instagram: '#' },
  { id: 'magicien',   pseudo: 'Magicien',   realname: 'First Last', game: 'eafc', flag: '🏳', age: '—', followers: '—', photo: null, twitter: '#', twitch: '#', instagram: '#' },
  { id: 'xerboy',     pseudo: 'XeRBoy',     realname: 'First Last', game: 'eafc', flag: '🏳', age: '—', followers: '—', photo: null, twitter: '#', twitch: '#', instagram: '#' },
  // Fortnite
  { id: 've1ryy',     pseudo: 'Ve1ryy',     realname: 'First Last', game: 'fortnite', flag: '🏳', age: '—', followers: '—', photo: null, twitter: '#', twitch: '#', instagram: '#' },
  { id: 'noia',       pseudo: 'Noia',       realname: 'First Last', game: 'fortnite', flag: '🏳', age: '—', followers: '—', photo: null, twitter: '#', twitch: '#', instagram: '#' },
  { id: 'snaylyx',    pseudo: 'Snaylyx',    realname: 'First Last', game: 'fortnite', flag: '🏳', age: '—', followers: '—', photo: null, twitter: '#', twitch: '#', instagram: '#' },
  { id: 'seekk',      pseudo: 'Seekk',      realname: 'First Last', game: 'fortnite', flag: '🏳', age: '—', followers: '—', photo: null, twitter: '#', twitch: '#', instagram: '#' },
  { id: 'xaizzing',   pseudo: 'Xaizzing',  realname: 'First Last', game: 'fortnite', flag: '🏳', age: '—', followers: '—', photo: null, twitter: '#', twitch: '#', instagram: '#' },
  { id: 'baxo',       pseudo: 'Baxo',       realname: 'First Last', game: 'fortnite', flag: '🏳', age: '—', followers: '—', photo: null, twitter: '#', twitch: '#', instagram: '#' },
  { id: 'milou',      pseudo: 'Milou',      realname: 'First Last', game: 'fortnite', flag: '🏳', age: '—', followers: '—', photo: null, twitter: '#', twitch: '#', instagram: '#' },
  { id: 'skyze',      pseudo: 'Skyze',      realname: 'First Last', game: 'fortnite', flag: '🏳', age: '—', followers: '—', photo: null, twitter: '#', twitch: '#', instagram: '#' },
];

// ── NAV (injected on every page) ─────────────────────────────
function injectNav(activePage) {
  const pages = [
    { href: 'about.html',    label: 'About us' },
    { href: 'talents.html',  label: 'Our Talents' },
    { href: 'services.html', label: 'Our Services' },
  ];
  const links = pages.map(p =>
    `<a href="${p.href}" class="${activePage === p.href ? 'active' : ''}">${p.label}</a>`
  ).join('');
  document.getElementById('nav-placeholder').innerHTML = `
    <nav>
      <a class="nav-logo" href="index.html">AL <span>Management</span></a>
      <div class="nav-links">${links}</div>
      <a href="#contact" class="nav-cta">Work with us</a>
    </nav>`;
}

// ── FOOTER (injected on every page) ──────────────────────────
function injectFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
    <footer>
      <div class="footer-logo">AL <span>Management</span></div>
      <div class="footer-copy">© 2026 AL Management. All rights reserved.</div>
    </footer>`;
}

// ── PLAYER CARD HTML ──────────────────────────────────────────
function playerCardHTML(p, linkToProfile = false) {
  const avatar = p.photo
    ? `<img class="pcard-avatar" src="${p.photo}" alt="${p.pseudo}">`
    : `<div class="pcard-avatar placeholder">Photo</div>`;
  const inner = `
    ${avatar}
    <div class="pcard-flag">${p.flag}</div>
    <div class="pcard-pseudo">${p.pseudo}</div>
    <div class="pcard-realname">${p.realname}</div>
    <div class="pcard-badge">${p.game === 'eafc' ? 'EA FC' : 'Fortnite'}</div>
    <div class="pcard-meta">Age: ${p.age}</div>
    <div class="pcard-meta">Followers: ${p.followers}</div>
    <div class="pcard-socials">
      <a href="${p.twitter}" aria-label="Twitter"><i class="ti ti-brand-x"></i></a>
      <a href="${p.twitch}"  aria-label="Twitch"><i class="ti ti-brand-twitch"></i></a>
      <a href="${p.instagram}" aria-label="Instagram"><i class="ti ti-brand-instagram"></i></a>
    </div>`;
  if (linkToProfile) {
    return `<a class="pcard" data-game="${p.game}" href="talent/${p.id}.html">${inner}</a>`;
  }
  return `<div class="pcard" data-game="${p.game}">${inner}</div>`;
}

// ── FILTER (talents page) ─────────────────────────────────────
function initFilter() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const game = btn.dataset.filter;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.pcard').forEach(card => {
        card.style.display = (game === 'all' || card.dataset.game === game) ? '' : 'none';
      });
    });
  });
}
