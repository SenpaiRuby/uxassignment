document.addEventListener('DOMContentLoaded', function() {
  // Load gallery items
  const galleryItems = [
    {
      image: 'gallery1.jpg',
      caption: 'Cherry Blossom Festival'
    },
    {
      image: 'gallery2.jpg',
      caption: 'Origami Workshop'
    },
    // Add 4-6 more gallery items
  ];

  const galleryContainer = document.getElementById('gallery-highlights');
  if (galleryContainer) {
    galleryItems.forEach(item => {
      galleryContainer.innerHTML += `
        <div class="gallery-item">
          <img src="assets/${item.image}" alt="${item.caption}" loading="lazy">
          <div class="gallery-caption">${item.caption}</div>
        </div>
      `;
    });
  }

  // Add click handlers for gallery items
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
      // In a real implementation, this would open a lightbox
      window.location.href = 'gallery.html';
    });
  });
});