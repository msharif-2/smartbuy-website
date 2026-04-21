// SmartBuy Albany — motion layer
// Sticky-nav compression + scroll-reveal (IntersectionObserver).

(function () {
  // ── Sticky nav compression ──
  const nav = document.getElementById('mainNav') || document.querySelector('.navbar');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 80) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── Scroll reveal ──
  let io;
  function ensureObserver() {
    if (io) return io;
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
      return null;
    }
    io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    return io;
  }

  function observeReveals() {
    const obs = ensureObserver();
    if (!obs) return;
    document.querySelectorAll('.reveal:not(.in)').forEach(el => obs.observe(el));
  }

  window.reobserveReveals = observeReveals;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeReveals);
  } else {
    observeReveals();
  }
})();
