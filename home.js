document.addEventListener('DOMContentLoaded', function() {
  // Gallery items from events - using event images
  const galleryItems = [
    { image: 'jmdws.png', caption: 'JMD Workshop', description: 'Wotagei & Traditional Dances' },
    { image: 'sjccbc.png', caption: 'Bonding Camp', description: 'Annual Team Building' },
    { image: 'sjcjmd.png', caption: 'JMD Performance', description: 'Student Life Carnival' },
    { image: 'slc.png', caption: 'Student Life Carnival', description: 'Campus Event Participation' },
    { image: 'spartsfiesta.png', caption: 'Arts Fiesta', description: 'Inter-Polytechnic Showcase' },
    { image: 'sjcctea.png', caption: 'Tea Ceremony', description: 'Traditional Cultural Experience' }
  ];

  // Load gallery highlights
  const galleryContainer = document.getElementById('gallery-highlights');
  if (galleryContainer) {
    galleryItems.forEach((item, index) => {
      const galleryItem = document.createElement('div');
      galleryItem.className = 'col-6 col-md-4 col-lg-2';
      galleryItem.innerHTML = `
        <div class="gallery-item" data-event="${index}">
          <img src="${item.image}" alt="${item.caption}" class="img-fluid">
          <div class="gallery-caption">
            <h6 class="mb-1">${item.caption}</h6>
            <small>${item.description}</small>
          </div>
        </div>
      `;
      galleryContainer.appendChild(galleryItem);
    });
  }

  // Add click handlers for gallery items
  document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.addEventListener('click', function() {
      // Store selected event info and redirect to events page
      sessionStorage.setItem('selectedEvent', JSON.stringify(galleryItems[index]));
      window.location.href = 'events.html';
    });
  });

  // Initialize sakura petal animation
  initializeSakuraPetals();

  // Initialize hero text animation
  initializeHeroAnimation();
});

function initializeSakuraPetals() {
  const petals = document.querySelectorAll('.sakura-petal');
  petals.forEach((petal, index) => {
    // Randomize animation timing
    petal.style.animationDuration = `${8 + Math.random() * 6}s`;
    petal.style.animationDelay = `${Math.random() * 5}s`;
    
    // Randomize position slightly
    const currentLeft = parseInt(petal.style.left) || 0;
    const currentRight = parseInt(petal.style.right) || 0;
    
    if (currentLeft) {
      petal.style.left = `${currentLeft + (Math.random() - 0.5) * 20}%`;
    }
    if (currentRight) {
      petal.style.right = `${currentRight + (Math.random() - 0.5) * 20}%`;
    }
  });
}

function initializeHeroAnimation() {
  const heroSection = document.querySelector('.sjcc-hero');
  const subtitle = document.querySelector('.transition-subtitle');
  
  // Trigger hero animations after a short delay
  setTimeout(() => {
    if (heroSection) {
      heroSection.classList.add('active');
    }
  }, 500);

  // Animate buttons
  const buttons = document.querySelectorAll('.hero-buttons a');
  buttons.forEach((btn, index) => {
    setTimeout(() => {
      btn.style.opacity = '0';
      btn.style.transform = 'translateY(20px)';
      btn.style.transition = 'all 0.5s ease';
      
      setTimeout(() => {
        btn.style.opacity = '1';
        btn.style.transform = 'translateY(0)';
      }, 100);
    }, 1000 + (index * 200));
  });
}