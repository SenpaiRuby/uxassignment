document.addEventListener('DOMContentLoaded', function() {
  const heroSection = document.querySelector('.sjcc-hero');
  const heroText = document.getElementById('hero-text');
  const textBlock = heroText.querySelector('.text-block');
  const subtitle = document.querySelector('.transition-subtitle');
  
  if (!heroText) return;

  const phrases = [
    {text: "SJCC Events", lang: "en"},
    {text: "イベント", lang: "ja"},
    {text: "SJCC 活動", lang: "ja"},
    {text: "SJCC 行事", lang: "ja"}
  ];
  
  let currentIndex = 0;
  
  function animateTextOut() {
    heroSection.classList.remove('active');
    textBlock.style.animation = 'none';
    void textBlock.offsetWidth;
  }
  
  function updateText() {
    textBlock.textContent = phrases[currentIndex].text;
    textBlock.lang = phrases[currentIndex].lang;
    
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
  textBlock.lang = phrases[0].lang;
  heroSection.classList.add('active');
  
  setTimeout(transitionText, 3000);
});