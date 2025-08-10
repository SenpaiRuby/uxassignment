document.addEventListener('DOMContentLoaded', function() {
  // Load benefits dynamically
  const benefits = [
    {
      icon: 'bi-people-fill',
      title: 'Make Friends',
      description: 'Connect with 500+ members who share your interests'
    },
    {
      icon: 'bi-star-fill',
      title: 'Develop Skills',
      description: 'Learn from experts in various Japanese cultural arts'
    },
    {
      icon: 'bi-calendar-event',
      title: 'Exclusive Events',
      description: 'Access members-only workshops and activities'
    }
  ];

  const benefitsContainer = document.getElementById('benefits-container');
  if (benefitsContainer) {
    benefits.forEach(benefit => {
      benefitsContainer.innerHTML += `
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body text-center p-4">
              <div class="benefit-icon mb-3">
                <i class="bi ${benefit.icon} fs-3"></i>
              </div>
              <h5>${benefit.title}</h5>
              <p>${benefit.description}</p>
            </div>
          </div>
        </div>
      `;
    });
  }

  // Load testimonials
  const testimonials = [
    {
      name: 'Sarah Lim',
      role: 'Cosplay Division',
      text: 'SJCC helped me discover my passion for Japanese culture while making lifelong friends!',
      rating: 5
    },
    // Add 2 more testimonials
  ];

  const testimonialsContainer = document.getElementById('testimonials-container');
  if (testimonialsContainer) {
    testimonials.forEach(testimonial => {
      testimonialsContainer.innerHTML += `
        <div class="col-md-4">
          <div class="testimonial-card">
            <div class="testimonial-rating">
              ${'<i class="bi bi-star-fill"></i>'.repeat(testimonial.rating)}
            </div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-author">
              <h6>${testimonial.name}</h6>
              <small>${testimonial.role}</small>
            </div>
          </div>
        </div>
      `;
    });
  }

  // Form submission
  const joinForm = document.getElementById('joinForm');
  if (joinForm) {
    joinForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Add form validation and submission logic
      alert('Application submitted successfully!');
      this.reset();
    });
  }
});