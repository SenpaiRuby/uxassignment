// Typewriter effect for homepage
function typeWriter(elementId, text, speed = 100) {
  const element = document.getElementById(elementId);
  let i = 0;
  element.innerHTML = '';
  const typing = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else clearInterval(typing);
  }, speed);
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', () => {
  // Highlight active nav link
  const currentPage = location.pathname.split('/').pop();
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === currentPage);
  });
});