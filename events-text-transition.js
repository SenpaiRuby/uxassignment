document.addEventListener('DOMContentLoaded', function() {
  const heroSection = document.querySelector('.sjcc-hero');
  const heroText = document.getElementById('hero-text');
  const textBlock = heroText ? heroText.querySelector('.text-block') : null;
  const subtitle = document.querySelector('.transition-subtitle');
  
  if (!heroText || !textBlock) return;

  const phrases = [
    {text: "SJCC Events", lang: "en"},
    {text: "イベント", lang: "ja"},
    {text: "Upcoming Activities", lang: "en"},
    {text: "今後の予定", lang: "ja"}
  ];
  
  let currentIndex = 0;
  
  function animateTextOut() {
    heroSection.classList.remove('active');
    textBlock.style.animation = 'none';
    void textBlock.offsetWidth;
  }
  
  function updateText() {
    textBlock.textContent = phrases[currentIndex].text;
    textBlock.setAttribute('lang', phrases[currentIndex].lang);
    
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
    
    setTimeout(transitionText, 4000);
  }
  
  // Initial setup
  textBlock.textContent = phrases[0].text;
  textBlock.setAttribute('lang', phrases[0].lang);
  setTimeout(() => heroSection.classList.add('active'), 300);
  setTimeout(transitionText, 3000);
});