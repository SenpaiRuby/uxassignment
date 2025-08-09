// home.js
document.addEventListener('DOMContentLoaded', function() {
  // Animated stats counter
  const animateCounters = () => {
    const counters = document.querySelectorAll('.counter-number');
    const speed = 200;
    
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(animateCounters, 1);
      } else {
        counter.innerText = target;
      }
    });
  };

  // Trigger counters when scrolled to
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.querySelector('.sjcc-counter');
  if (statsSection) observer.observe(statsSection);

  // Auto-scroll gallery (optional)
  const gallery = document.querySelector('.gallery-grid');
  if (gallery) {
    let scrollAmount = 0;
    setInterval(() => {
      scrollAmount += 300;
      if (scrollAmount >= gallery.scrollWidth) scrollAmount = 0;
      gallery.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }, 3000);
  }
});