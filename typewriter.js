// Enhanced typewriter effect with multiple phrases
document.addEventListener('DOMContentLoaded', function() {
  const element = document.getElementById('typewriter-text');
  if (!element) return;

  const phrases = [
    "Our Divisions & Activities",
    "日本の文化クラブ", 
    "Discover Japanese Culture"
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeWriter() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      element.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      element.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 1500; // Pause at end of phrase
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 500; // Pause before next phrase
    }

    setTimeout(typeWriter, typingSpeed);
  }

  // Start the typewriter effect
  setTimeout(typeWriter, 1000);
});