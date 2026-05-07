/*
  Mobile navigation controller:
  - Only active below 768px where the hamburger is visible.
  - Toggles a touch-friendly dropdown so users can quickly access About, Locations,
    and the primary booking CTA without inline link clutter.
*/
(function () {
  var toggle = document.querySelector('.mobile-nav-toggle');
  var nav = document.querySelector('.site-nav');

  if (!toggle || !nav) return;

  function closeMenu() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  nav.addEventListener('click', function (event) {
    if (event.target.closest('a')) closeMenu();
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) closeMenu();
  });
})();
