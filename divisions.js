document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.division-card');
  
  cards.forEach(card => {
    card.addEventListener('click', function() {
      const division = this.dataset.division;
      const title = this.querySelector('.card-title').textContent;
      const description = this.querySelector('.card-text').textContent;
      const imageSrc = this.querySelector('img').src;
      
      let divisionName, fullDescription, activities;
      
      switch(division) {
        case 'origami':
          divisionName = "Origami Division";
          fullDescription = "Learn the traditional Japanese art of paper folding. From simple cranes to complex modular designs, our workshops cater to all skill levels.";
          activities = [
            "Weekly folding sessions",
            "Seasonal projects (cherry blossoms, stars)",
            "Collaborative installations",
            "Exhibition opportunities"
          ];
          break;
          
        case 'maid':
          divisionName = "Manga/Anime Illustration";
          fullDescription = "Develop your unique art style through guided lessons on character design, panel composition, and digital illustration techniques.";
          activities = [
            "Character design workshops",
            "Digital art software training",
            "Manga storytelling techniques",
            "Art showcase events"
          ];
          break;
          
        case 'jmd':
          divisionName = "Japanese Music & Dance";
          fullDescription = "Learn both contemporary J-pop dances and traditional Japanese performing arts in a fun, supportive environment.";
          activities = [
            "Weekly dance practices",
            "Vocal training sessions",
            "Performance opportunities",
            "Cultural exchange events"
          ];
          break;
          
        case 'cosplay':
          divisionName = "Cosplay";
          fullDescription = "From crafting costumes to character portrayal, we cover all aspects of bringing your favorite characters to life.";
          activities = [
            "Costume crafting workshops",
            "Makeup and wig styling",
            "Photoshoot events",
            "Convention participation"
          ];
          break;
          
        case 'film':
          divisionName = "Film";
          fullDescription = "Explore Japanese cinema and develop your filmmaking skills through practical workshops and projects.";
          activities = [
            "Film analysis sessions",
            "Camera technique workshops",
            "Short film projects",
            "Screening events"
          ];
          break;
          
        case 'bjcl':
          divisionName = "Basic Japanese Lessons";
          fullDescription = "Our conversational Japanese program focuses on practical language skills with cultural context.";
          activities = [
            "Monthly themed lessons",
            "Interactive language games",
            "Cultural immersion activities",
            "Conversation practice"
          ];
          break;
      }
      
      const modal = document.createElement('div');
      modal.className = 'modal fade';
      modal.id = 'divisionModal';
      modal.tabIndex = '-1';
      modal.setAttribute('aria-hidden', 'true');
      
      modal.innerHTML = `
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header" style="background: linear-gradient(135deg, var(--sjcc-purple), var(--sjcc-pink)); color: white;">
              <h5 class="modal-title">${divisionName}</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-6 mb-3 mb-md-0">
                  <img src="${imageSrc}" class="img-fluid rounded mb-3" alt="${title}">
                  <p>${fullDescription}</p>
                </div>
                <div class="col-md-6">
                  <h6>Key Activities:</h6>
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
      
      const modalInstance = new bootstrap.Modal(modal);
      modalInstance.show();
      
      modal.addEventListener('hidden.bs.modal', function() {
        document.body.removeChild(modal);
      });
    });
  });
});