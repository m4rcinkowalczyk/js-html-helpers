document.querySelectorAll('.navbar-nav .nav-link[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const id = this.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return console.warn(`Brak elementu #${id}`);
    
    // obliczamy pozycję docelową minus 50px
    const y = target.getBoundingClientRect().top + window.pageYOffset - 50;
    window.scrollTo({ top: y, behavior: 'smooth' });
    
    // opcjonalnie: ustawiamy hash w URL
    history.pushState(null, "", `#${id}`);
  });
});
