
// ── PLAYER DATA ──────────────────────────────────────────────
const PLAYERS = [
  { id: 'dexxjunior', pseudo: 'Dexxjunior', realname: 'Moustapha Thiam', game: 'eafc', region: 'emea', flag: 'sn', age: '—', followers: '—', photo: 'https://i.imgur.com/6FIUwG3.jpeg', twitter: 'https://x.com/dexxjunior03', twitch: 'https://t.co/kxuwTxpf9K' },
  { id: 'xavik',      pseudo: 'XaviK',      realname: 'Xavier Riera',     game: 'eafc', region: 'emea', flag: 'es', age: '—', followers: '—', photo: 'https://i.imgur.com/AH8HIf2.jpeg', twitter: 'https://x.com/xavik_05', twitch: 'https://t.co/iqfumTDIz2' },
  { id: 'magicien',   pseudo: 'Magicien',   realname: 'Tony Desree',      game: 'eafc', region: 'emea', flag: 'fr', age: '—', followers: '—', photo: 'https://i.imgur.com/RNAfj5P.jpeg', twitter: 'https://x.com/DesreeTony', twitch: 'https://www.twitch.tv/eg_magiciennn' },
  { id: 'xerboy',     pseudo: 'XeRBoy',     realname: 'Yoni Boisgontier', game: 'eafc', region: 'emea', flag: 'fr', age: '—', followers: '—', photo: 'https://i.imgur.com/5SJVTrH.jpeg', twitter: 'https://x.com/XeRBoy_', twitch: 'https://t.co/18PGGMPInV' },
  { id: 've1ryy',     pseudo: 'Ve1ryy',     realname: 'First Last',       game: 'fortnite', region: 'cis',  flag: 'ua', age: '—', followers: '—', photo: null, twitter: 'https://x.com/ve1ryy', twitch: 'https://www.twitch.tv/ve1ryy' },
  { id: 'noia',       pseudo: 'Noia',       realname: 'First Last',       game: 'fortnite', region: 'emea', flag: 'fr', age: '—', followers: '—', photo: 'https://i.imgur.com/TTDchys.jpeg', twitter: 'https://x.com/noia_gg', twitch: 'https://t.co/RtLJw0TMux' },
  { id: 'snaylyx',    pseudo: 'Snaylyx',    realname: 'First Last',       game: 'fortnite', region: 'emea', flag: 'fr', age: '—', followers: '—', photo: null, twitter: 'https://x.com/snaylyx_', twitch: 'https://www.twitch.tv/snaylyxftnn' },
  { id: 'seekk',      pseudo: 'Seekk',      realname: 'First Last',       game: 'fortnite', region: 'emea', flag: 'fr', age: '—', followers: '—', photo: null, twitter: 'https://x.com/Seekkfn', twitch: 'https://t.co/5r3dfcxdaB' },
  { id: 'xaizzing',   pseudo: 'Xaizzing',  realname: 'First Last',       game: 'fortnite', region: 'emea', flag: 'es', age: '—', followers: '—', photo: null, twitter: 'https://x.com/Xaizzing', twitch: 'https://www.twitch.tv/xaizzing' },
  { id: 'baxo',       pseudo: 'Baxo',       realname: 'First Last',       game: 'fortnite', region: 'emea', flag: 'fr', age: '—', followers: '—', photo: 'https://i.imgur.com/X3pyswX.jpeg', twitter: 'https://x.com/baxofnbr', twitch: 'https://www.twitch.tv/baxoftn' },
  { id: 'milou',      pseudo: 'Milou',      realname: 'First Last',       game: 'fortnite', region: 'emea', flag: 'fr', age: '—', followers: '—', photo: 'https://i.imgur.com/Z12iryO.jpeg', twitter: 'https://x.com/Miloufnr', twitch: 'https://www.twitch.tv/miloufnr' },
  { id: 'skyze',      pseudo: 'Skyze',      realname: 'First Last',       game: 'fortnite', region: 'emea', flag: 'fr', age: '—', followers: '—', photo: null, twitter: 'https://x.com/Skyzefn7', twitch: 'https://t.co/tEVf3S3RrP' },
];
 
// ── NAV ──────────────────────────────────────────────────────
function injectNav(activePage) {
  const pages = [
    { href: 'about.html',    label: 'About us' },
    { href: 'talents.html',  label: 'Our Talents' },
    { href: 'services.html', label: 'Our Services' },
  ];
 
  const links = pages.map(p =>
    `<a href="${p.href}" class="${activePage === p.href ? 'active' : ''}">${p.label}</a>`
  ).join('');
 
  const mobileLinks = pages.map(p =>
    `<a href="${p.href}" class="${activePage === p.href ? 'active' : ''}">${p.label}</a>`
  ).join('');
 
  document.getElementById('nav-placeholder').innerHTML = `
    <nav>
      <a class="nav-logo" href="home.html"><img src="logo.png" alt="AL Management" style="height:36px;width:auto;object-fit:contain;vertical-align:middle;margin-right:8px">AL <span>Management</span></a>
      <div class="nav-links">${links}</div>
      <a href="#contact" class="nav-cta">Work with us</a>
      <div class="nav-hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </div>
    </nav>
    <div class="nav-mobile" id="nav-mobile">
      ${mobileLinks}
      <a href="#contact" class="nav-cta-mobile" onclick="closeMobileMenu()">Work with us</a>
    </div>`;
 
  document.getElementById('hamburger').addEventListener('click', () => {
    const ham = document.getElementById('hamburger');
    const menu = document.getElementById('nav-mobile');
    ham.classList.toggle('open');
    menu.classList.toggle('open');
  });
}
 
function closeMobileMenu() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('nav-mobile').classList.remove('open');
}
 
// ── FOOTER ───────────────────────────────────────────────────
function injectFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
    <footer>
      <div class="footer-logo"><img src="logo.png" alt="AL Management" style="height:28px;width:auto;object-fit:contain;vertical-align:middle;margin-right:8px">AL <span>Management</span></div>
      <div class="footer-copy">© 2026 AL Management. All rights reserved.</div>
    </footer>`;
}
 
// ── PLAYER CARD HTML ──────────────────────────────────────────
function playerCardHTML(p, linkToProfile = false) {
  const avatar = p.photo
    ? `<img src="${p.photo}" alt="${p.pseudo}" style="width:100%;height:100%;object-fit:cover">`
    : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:var(--muted)"><i class="ti ti-user"></i></div>`;
 
  const inner = `
    ${avatar}
    <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(8,6,18,0.97) 0%,rgba(8,6,18,0.45) 55%,transparent 100%)"></div>
    <div style="position:absolute;bottom:0;left:0;right:0;padding:14px 12px">
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:5px">
        <span style="font-size:9px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--purple-light);background:var(--purple-dim);padding:2px 8px;border-radius:20px;border:1px solid rgba(180,139,250,0.2)">${p.game === 'eafc' ? 'EA FC' : 'Fortnite'}</span>
        <img src="https://flagcdn.com/w20/${p.flag}.png" style="width:18px;height:13px;border-radius:2px;object-fit:cover" alt="${p.flag}">
      </div>
      <div style="font-family:'Syne',sans-serif;font-size:14px;font-weight:800;color:#ede9ff;margin-bottom:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${p.pseudo}</div>
      <div style="font-size:10px;color:var(--muted);margin-bottom:8px">${p.realname}</div>
      <div style="display:flex;gap:6px">
        <a href="${p.twitter}" target="_blank" style="width:26px;height:26px;border-radius:6px;background:rgba(42,26,94,0.85);display:flex;align-items:center;justify-content:center;font-size:12px;color:var(--purple-light)"><i class="ti ti-brand-x"></i></a>
        <a href="${p.twitch}" target="_blank" style="width:26px;height:26px;border-radius:6px;background:rgba(42,26,94,0.85);display:flex;align-items:center;justify-content:center;font-size:12px;color:var(--purple-light)"><i class="ti ti-brand-twitch"></i></a>
      </div>
    </div>`;
 
  const style = `position:relative;border-radius:var(--radius-lg);overflow:hidden;border:1px solid var(--border);background:var(--purple-dim);cursor:pointer;transition:border-color 0.25s,transform 0.25s`;
 
  if (linkToProfile) {
    return `<a class="pcard" data-game="${p.game}" data-region="${p.region}" href="talent/${p.id}.html" style="${style}">${inner}</a>`;
  }
  return `<div class="pcard" data-game="${p.game}" data-region="${p.region}" style="${style}">${inner}</div>`;
}
 
// ── FILTER ───────────────────────────────────────────────────
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
 
