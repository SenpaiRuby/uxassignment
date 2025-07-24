document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.division-card');
  
  cards.forEach(card => {
    card.addEventListener('click', function() {
      const division = this.dataset.division;
      const title = this.querySelector('.card-title').textContent;
      const description = this.querySelector('.card-text').textContent;
      const imageSrc = this.querySelector('img').src;
      
      // Division-specific content
      let divisionName, fullDescription, activities;
      
      switch(division) {
        case 'origami':
          divisionName = "Origami Division";
          fullDescription = "From sakura to orchids, learn to make anything with paper! Beginners welcome with our step-by-step tutorials. Progress from simple to complex origami creations.";
          activities = [
            "Weekly origami workshops",
            "Seasonal theme folding",
            "Collaborative large-scale projects",
            "Exhibition opportunities"
          ];
          break;
          
        case 'maid':
          divisionName = "Manga/Anime Illustration (MAID)";
          fullDescription = "Learn drawing techniques from human anatomy to background art. Our workshops cover both traditional and digital illustration methods for manga and anime styles.";
          activities = [
            "Character design fundamentals",
            "Manga paneling and storytelling",
            "Digital art software tutorials",
            "Art showcase events"
          ];
          break;
          
        case 'jmd':
          divisionName = "Japanese Music & Dance (JMD)";
          fullDescription = "Learn various dance styles from J-pop to traditional Japanese forms. No experience needed - just enthusiasm! Performance opportunities available.";
          activities = [
            "Weekly dance practice",
            "Vocal training workshops",
            "Performance opportunities",
            "Collaborations with other CCAs"
          ];
          break;
          
        case 'cosplay':
          divisionName = "Cosplay Anonymous";
          fullDescription = "Transform into your favorite characters with our costume and makeup guides. We cover everything from simple costumes to advanced prop-making techniques.";
          activities = [
            "Costume crafting workshops",
            "Character portrayal techniques",
            "Photoshoot events",
            "Convention group outings"
          ];
          break;
          
        case 'film':
          divisionName = "Film Addicts";
          fullDescription = "Learn photography and filmmaking to tell Japanese-inspired stories. Covers camera fundamentals, composition, and storytelling techniques.";
          activities = [
            "Camera fundamentals",
            "Short film projects",
            "Japanese cinema studies",
            "Photo walks"
          ];
          break;
          
        case 'bjcl':
          divisionName = "Basic Japanese (BJCL)";
          fullDescription = "Monthly conversational Japanese lessons with cultural context. Perfect for beginners wanting to learn practical phrases for daily conversations.";
          activities = [
            "Monthly themed lessons",
            "Conversation practice",
            "Cultural context explanations",
            "Language games"
          ];
          break;
      }
      
      // Create modal
      const modal = document.createElement('div');
      modal.className = 'modal fade';
      modal.id = 'divisionModal';
      modal.tabIndex = '-1';
      modal.setAttribute('aria-hidden', 'true');
      
      modal.innerHTML = `
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${divisionName}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-6 mb-3 mb-md-0">
                  <img src="${imageSrc}" class="img-fluid rounded mb-3" alt="${title}">
                  <p>${fullDescription}</p>
                </div>
                <div class="col-md-6">
                  <h6>Activities:</h6>
                  <ul class="mb-3">
                    ${activities.map(a => `<li>${a}</li>`).join('')}
                  </ul>
                  <a href="join.html" class="sjcc-btn">Join This Division</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      
      document.body.appendChild(modal);
      
      // Show modal
      const modalInstance = new bootstrap.Modal(modal);
      modalInstance.show();
      
      // Clean up after modal closes
      modal.addEventListener('hidden.bs.modal', function() {
        document.body.removeChild(modal);
      });
    });
  });
});