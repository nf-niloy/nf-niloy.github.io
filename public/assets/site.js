(() => {
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  const refreshTheme = () => {
    const dark = root.dataset.theme === 'dark';
    button?.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    document.querySelector('#theme-color')?.setAttribute('content', dark ? '#10141c' : '#f4f3ef');
  };
  refreshTheme();
  button?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('niloy-research-theme', root.dataset.theme); } catch (_) {}
    refreshTheme();
  });
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#mobile-nav');
  const setMenu = open => {
    if (!toggle || !menu) return;
    menu.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('span').textContent = open ? '×' : '☰';
  };
  toggle?.addEventListener('click', () => setMenu(menu.hidden));
  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
  document.addEventListener('pointerdown', e => {
    if (!menu?.hidden && !menu?.contains(e.target) && !toggle?.contains(e.target)) setMenu(false);
  });
  window.addEventListener('resize', () => { if (window.innerWidth > 720) setMenu(false); }, {passive:true});
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
