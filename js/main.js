// Mobile nav toggle
(function () {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
})();

// Footer year
(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();

// Intake form - DEMO handler only.
// This form has no backend yet. Replace this block once the form posts
// to a real endpoint (Formspree, Netlify Forms, Web3Forms, your own API).
(function () {
  const form = document.getElementById('intake-form');
  const status = document.getElementById('form-status');

  if (!form || !status) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    status.className = 'form-status success';
    status.textContent =
      "Demo only - this form isn't connected to anything yet. " +
      "Wire it to a form service or backend to start receiving real requests.";
  });
})();
