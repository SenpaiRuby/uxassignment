document.addEventListener('DOMContentLoaded', function() {
  // Text animation for hero section
  const heroText = document.getElementById('hero-text');
  const textBlock = heroText ? heroText.querySelector('.text-block') : null;
  const subtitle = document.querySelector('.transition-subtitle');
  const heroSection = document.querySelector('.sjcc-hero');
  
  if (!heroText || !textBlock) return;

  const phrases = [
    {text: "Discover Japanese Culture", lang: "en"},
    {text: "日本文化を発見", lang: "ja"},
    {text: "Join SJCC Today", lang: "en"},
    {text: "桜蘭文化会", lang: "ja"}
  ];
  
  let currentIndex = 0;
  
  function animateTextOut() {
    heroSection.classList.remove('active');
    textBlock.style.animation = 'none';
    void textBlock.offsetWidth; // Force reflow
  }
  
  function updateText() {
    textBlock.textContent = phrases[currentIndex].text;
    textBlock.setAttribute('lang', phrases[currentIndex].lang);
    
    // Apply random animation
    const animations = ['fadeIn', 'slideUp', 'zoomIn'];
    const randomAnim = animations[Math.floor(Math.random() * animations.length)];
    textBlock.style.animation = `${randomAnim} 0.8s ease forwards`;
    
    heroSection.classList.add('active');
  }
  
  function transitionText() {
    animateTextOut();
    
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % phrases.length;
      updateText();
    }, 800);
    
    // Schedule next transition
    setTimeout(transitionText, 4000);
  }
  
  // Initial setup
  textBlock.textContent = phrases[0].text;
  textBlock.setAttribute('lang', phrases[0].lang);
  
  // Start initial animation
  setTimeout(() => {
    heroSection.classList.add('active');
  }, 300);
  
  // Start text transitions
  setTimeout(transitionText, 3000);

  // Subtitle animation
  if (subtitle) {
    setTimeout(() => {
      subtitle.style.opacity = '1';
      subtitle.style.transform = 'translateY(0)';
    }, 600);
  }
});