document.getElementById('joinForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Basic validation
  const name = this.elements[0].value;
  const email = this.elements[1].value;
  const division = this.elements[2].value;
  
  if (!name || !email || !division) {
    alert('Please fill all fields!');
    return;
  }
  
  // Success action
  alert(`Thanks ${name}! We'll contact you about ${division} soon.`);
  this.reset();
});