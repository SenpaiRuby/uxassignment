document.addEventListener('DOMContentLoaded', function() {
  // Form submission handler
  const joinForm = document.getElementById('joinForm');
  
  if (joinForm) {
    joinForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Form validation
      const requiredFields = ['fullName', 'email', 'phone', 'studentId', 'division'];
      let isValid = true;
      
      requiredFields.forEach(field => {
        const element = document.getElementById(field);
        if (!element.value) {
          element.classList.add('is-invalid');
          isValid = false;
        } else {
          element.classList.remove('is-invalid');
        }
      });
      
      if (!document.getElementById('agreeTerms').checked) {
        alert('Please agree to the Terms & Conditions');
        return;
      }
      
      if (isValid) {
        // Simulate form submission
        alert('Application submitted successfully! We will contact you soon.');
        joinForm.reset();
        
        // In a real implementation, you would add AJAX code here
        // fetch('submit-form.php', { method: 'POST', body: new FormData(joinForm) })
        //   .then(response => response.json())
        //   .then(data => { ... });
      }
    });
  }
  
  // Clear validation errors when typing
  document.querySelectorAll('#joinForm input, #joinForm select').forEach(element => {
    element.addEventListener('input', function() {
      this.classList.remove('is-invalid');
    });
  });
});