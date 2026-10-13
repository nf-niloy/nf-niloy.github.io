/* NILOY_CRYSTAL_TOP_V1 — lightweight crystal back-to-top widget shared by all pages. */
(() => {
  if (document.getElementById('crystal-back-to-top')) return;

  // The stylesheet is loaded by the layout; the host persists across Astro navigation.
  const button = document.createElement('button');
  button.type = 'button';
  button.id = 'crystal-back-to-top';
  button.className = 'crystal-top';
  button.setAttribute('aria-label', 'Return to top of page');
  button.title = 'Return to top';
  button.disabled = true;
  button.innerHTML = `
    <svg class="crystal-top-symbol" viewBox="0 0 48 48" aria-hidden="true" fill="none">
      <path class="cage" d="M24 5.5 40 14.75v18.5L24 42.5 8 33.25v-18.5Z" />
      <path class="bonds" d="M24 5.5v18.5m16-9.25L24 24 8 14.75M8 33.25 24 24l16 9.25M24 24v18.5" />
      <path class="bonds-faint" d="m8 14.75 32 18.5M40 14.75 8 33.25" />
      <circle class="node-primary" cx="24" cy="24" r="3.5" />
      <circle class="node-secondary" cx="24" cy="5.5" r="2.2" />
      <circle class="node-secondary" cx="40" cy="14.75" r="2.2" />
      <circle class="node-secondary" cx="8" cy="33.25" r="2.2" />
      <circle class="node-secondary" cx="24" cy="42.5" r="2.2" />
      <circle class="node-accent" cx="8" cy="14.75" r="2.2" />
      <circle class="node-accent" cx="40" cy="33.25" r="2.2" />
    </svg>
    <span class="crystal-top-label" aria-hidden="true">TOP</span>`;
  (document.getElementById('crystal-top-host') || document.body).appendChild(button);

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let queued = false;
  function updateVisibility() {
    queued = false;
    const shown = window.scrollY > Math.max(420, window.innerHeight * 0.65);
    button.disabled = !shown;
    button.classList.toggle('is-visible', shown);
  }
  function queueVisibility() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(updateVisibility);
  }
  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
  });
  window.addEventListener('scroll', queueVisibility, { passive: true });
  window.addEventListener('resize', queueVisibility, { passive: true });
  updateVisibility();
})();
