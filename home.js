document.addEventListener('DOMContentLoaded', function() {
  // Video background fallback
  const video = document.querySelector('.video-background video');
  if (video) {
    video.play().catch(e => {
      const fallback = document.querySelector('.video-background img');
      if (fallback) {
        fallback.style.display = 'block';
        document.querySelector('.video-overlay').style.backgroundColor = 'rgba(0,0,0,0.6)';
      }
    });
  }

  // Simple gallery lightbox functionality
  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', function() {
      // In a real implementation, this would open a lightbox
      window.location.href = 'gallery.html';
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});