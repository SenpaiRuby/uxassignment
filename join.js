document.addEventListener('DOMContentLoaded', function() {
  // Load benefits dynamically
  const benefits = [
    {
      icon: 'bi-people-fill',
      title: 'Make Friends',
      description: 'Connect with 500+ members who share your interests in Japanese culture'
    },
    {
      icon: 'bi-star-fill',
      title: 'Develop Skills',
      description: 'Learn from experts in various Japanese cultural arts and improve your abilities'
    },
    {
      icon: 'bi-calendar-event',
      title: 'Exclusive Events',
      description: 'Access members-only workshops, cultural activities, and special performances'
    },
    {
      icon: 'bi-trophy-fill',
      title: 'Competitions',
      description: 'Participate in inter-school competitions and showcase your talents'
    },
    {
      icon: 'bi-book-fill',
      title: 'Cultural Learning',
      description: 'Deep dive into authentic Japanese traditions, language, and modern culture'
    },
    {
      icon: 'bi-camera-fill',
      title: 'Portfolio Building',
      description: 'Build an impressive portfolio of cultural projects and performances'
    }
  ];

  const benefitsContainer = document.getElementById('benefits-container');
  if (benefitsContainer) {
    benefits.forEach(benefit => {
      const benefitCard = document.createElement('div');
      benefitCard.className = 'col-md-4';
      benefitCard.innerHTML = `
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body text-center p-4">
            <div class="benefit-icon mb-3">
              <i class="bi ${benefit.icon} fs-1 text-purple"></i>
            </div>
            <h5 class="card-title">${benefit.title}</h5>
            <p class="card-text">${benefit.description}</p>
          </div>
        </div>
      `;
      benefitsContainer.appendChild(benefitCard);
    });
  }

  // Load testimonials
  const testimonials = [
    {
      name: 'Sarah Lim',
      role: 'Cosplay Division Member',
      text: 'SJCC helped me discover my passion for Japanese culture while making lifelong friends! The cosplay division taught me so much about costume making and performance.',
      rating: 5
    },
    {
      name: 'Marcus Tan',
      role: 'JMD Division Member',
      text: 'The dance workshops are amazing! I never thought I could learn Japanese dances, but the instructors are so patient and encouraging.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'BJCL Division Member',
      text: 'Learning Japanese through SJCC has been an incredible journey. The cultural context makes everything so much more meaningful and fun to learn.',
      rating: 5
    }
  ];

  const testimonialsContainer = document.getElementById('testimonials-container');
  if (testimonialsContainer) {
    testimonials.forEach(testimonial => {
      const testimonialCard = document.createElement('div');
      testimonialCard.className = 'col-md-4';
      testimonialCard.innerHTML = `
        <div class="testimonial-card">
          <div class="testimonial-rating">
            ${'<i class="bi bi-star-fill"></i>'.repeat(testimonial.rating)}
          </div>
          <p class="testimonial-text">"${testimonial.text}"</p>
          <div class="testimonial-author">
            <h6 class="mb-1">${testimonial.name}</h6>
            <small class="text-muted">${testimonial.role}</small>
          </div>
        </div>
      `;
      testimonialsContainer.appendChild(testimonialCard);
    });
  }

  // Form submission handling
  const joinForm = document.getElementById('joinForm');
  if (joinForm) {
    joinForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        studentId: document.getElementById('studentId').value,
        divisions: Array.from(document.getElementById('division').selectedOptions).map(option => option.text),
        experience: document.getElementById('experience').value || 'Not specified',
        message: document.getElementById('message').value || 'No additional message',
        newsletter: document.getElementById('newsletter').checked,
        submittedAt: new Date().toLocaleString()
      };
      
      // Validate form
      if (!validateForm(formData)) {
        return;
      }
      
      // Display success response
      displaySubmissionResponse(formData);
      
      // Hide form section and show response section
      document.querySelector('.bg-light').style.display = 'none';
      document.getElementById('responseSection').style.display = 'block';
      
      // Scroll to response section
      document.getElementById('responseSection').scrollIntoView({ behavior: 'smooth' });
    });
  }

  function validateForm(formData) {
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.studentId) {
      alert('Please fill in all required fields.');
      return false;
    }
    
    if (formData.divisions.length === 0) {
      alert('Please select at least one division.');
      return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return false;
    }
    
    // Phone validation (Singapore format)
    const phoneRegex = /^[689]\d{7}$/;
    const cleanPhone = formData.phone.replace(/\s+/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      alert('Please enter a valid Singapore phone number (8 digits starting with 6, 8, or 9).');
      return false;
    }
    
    return true;
  }

  function displaySubmissionResponse(formData) {
    const responseDiv = document.getElementById('submittedData');
    const divisionsList = formData.divisions.join(', ');
    
    responseDiv.innerHTML = `
      <div class="row">
        <div class="col-md-6">
          <h6>Personal Information:</h6>
          <p><strong>Name:</strong> ${formData.fullName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Student ID:</strong> ${formData.studentId}</p>
        </div>
        <div class="col-md-6">
          <h6>Application Details:</h6>
          <p><strong>Selected Division(s):</strong> ${divisionsList}</p>
          <p><strong>Experience Level:</strong> ${formData.experience}</p>
          <p><strong>Newsletter:</strong> ${formData.newsletter ? 'Subscribed' : 'Not subscribed'}</p>
          <p><strong>Submitted:</strong> ${formData.submittedAt}</p>
        </div>
      </div>
      ${formData.message !== 'No additional message' ? `
        <div class="mt-3">
          <h6>Your Message:</h6>
          <p class="fst-italic">"${formData.message}"</p>
        </div>
      ` : ''}
    `;
  }
});