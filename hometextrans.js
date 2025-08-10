document.addEventListener('DOMContentLoaded', function() {
  // Text animation for hero section
  const heroText = document.getElementById('hero-text');
  if (heroText) {
    setTimeout(() => {
      heroText.classList.add('animate__animated', 'animate__fadeInUp');
    }, 300);
  }

  // Subtitle animation
  const subtitle = document.querySelector('.transition-subtitle');
  if (subtitle) {
    setTimeout(() => {
      subtitle.classList.add('animate__animated', 'animate__fadeIn');
    }, 600);
  }

  // Button animations
  const buttons = document.querySelectorAll('.hero-buttons a');
  buttons.forEach((btn, index) => {
    setTimeout(() => {
      btn.classList.add('animate__animated', 'animate__fadeInUp');
    }, 800 + (index * 100));
  });

  // Sakura petals animation (same as other pages)
  const petals = document.querySelectorAll('.sakura-petal');
  petals.forEach(petal => {
    petal.style.animationDuration = `${10 + Math.random() * 10}s`;
    petal.style.animationDelay = `${Math.random() * 5}s`;
    petal.style.left = `${Math.random() * 100}%`;
  });
});