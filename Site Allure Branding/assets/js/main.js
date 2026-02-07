// Intersection Observer para animar testemunhos na entrada
const onIntersect = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
};

const io = new IntersectionObserver(onIntersect, { threshold: 0.12 });
document.querySelectorAll('[data-anim]').forEach(el => io.observe(el));

// FAQ: manter acessibilidade e controle do botão "+"
document.querySelectorAll('.faq-item').forEach((details) => {
  // Força apenas fade (sem slide de altura)
  const summary = details.querySelector('.faq-summary');
  const answer = details.querySelector('.faq-answer');
  const toggleBtn = details.querySelector('.faq-toggle');

  // Abertura/fechamento por clique na área toda
  summary.addEventListener('click', (e) => {
    // Permite o nativo do <details>, apenas evita seleção de texto estranha
    e.preventDefault();
    details.open = !details.open;
  });

  // Teclado: Enter/Espaço também funciona
  summary.setAttribute('tabindex', '0');
  summary.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      details.open = !details.open;
    }
  });

  // Sincroniza aria-expanded (acessibilidade)
  const syncAria = () => {
    const isOpen = details.hasAttribute('open');
    summary.setAttribute('aria-expanded', String(isOpen));
    if (toggleBtn) toggleBtn.setAttribute('aria-pressed', String(isOpen));
  };
  details.addEventListener('toggle', syncAria);
  syncAria();
});
