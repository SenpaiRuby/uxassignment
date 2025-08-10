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
          fullDescription = "Learn the traditional Japanese art of paper folding. From simple cranes to complex modular designs, our workshops cater to all skill levels. Our Origami division focuses on both traditional Japanese designs and modern creative expressions through paper art.";
          activities = [
            "Weekly folding sessions with guided tutorials",
            "Seasonal projects (cherry blossoms, stars, holiday themes)",
            "Collaborative large-scale origami installations",
            "Exhibition opportunities to showcase your work",
            "Guest workshops by professional origami artists"
          ];
          break;
          
        case 'maid':
          divisionName = "Manga/Anime Illustration Division (MAID)";
          fullDescription = "Develop your unique art style through guided lessons on character design, panel composition, and digital illustration techniques. Whether you're a beginner or advanced artist, MAID provides a supportive environment to grow your manga and anime drawing skills.";
          activities = [
            "Character design workshops (anatomy, expressions, costumes)",
            "Digital art software training (Clip Studio, Photoshop)",
            "Manga storytelling techniques (panel layout, pacing)",
            "Monthly art challenges with peer feedback",
            "Annual art showcase and exhibition"
          ];
          break;
          
        case 'jmd':
          divisionName = "Japanese Music & Dance Division (JMD)";
          fullDescription = "Learn both contemporary J-pop dances and traditional Japanese performing arts in a fun, supportive environment. JMD covers everything from modern idol dances to traditional festival performances, with opportunities to perform at school events.";
          activities = [
            "Weekly dance practices covering various styles",
            "Vocal training sessions for J-pop songs",
            "Performance opportunities at school events",
            "Cultural exchange events with traditional arts",
            "Workshops on concert culture (wotagei, call-and-response)"
          ];
          break;
          
        case 'cosplay':
          divisionName = "Cosplay Division";
          fullDescription = "From crafting costumes to character portrayal, we cover all aspects of bringing your favorite characters to life. Our division helps members develop skills in costume making, prop building, makeup, and performance to fully embody their chosen characters.";
          activities = [
            "Costume crafting workshops (sewing, armor making)",
            "Makeup and wig styling tutorials",
            "Photoshoot events with professional setups",
            "Convention participation as a group",
            "Character performance workshops"
          ];
          break;
          
        case 'film':
          divisionName = "Film Division";
          fullDescription = "Explore Japanese cinema and develop your filmmaking skills through practical workshops and projects. We study various Japanese film genres and techniques while creating our own short films inspired by Japanese storytelling styles.";
          activities = [
            "Film analysis sessions (classic and contemporary Japanese cinema)",
            "Camera technique and cinematography workshops",
            "Short film projects with crew roles for all members",
            "Screening events with audience feedback",
            "Collaborations with other divisions for creative projects"
          ];
          break;
          
        case 'bjcl':
          divisionName = "Basic Japanese Culture & Language Division (BJCL)";
          fullDescription = "Our conversational Japanese program focuses on practical language skills with cultural context. BJCL makes learning Japanese fun and accessible, with lessons tailored to different proficiency levels and cultural immersion activities.";
          activities = [
            "Monthly themed lessons (travel phrases, anime terms, etc.)",
            "Interactive language games and activities",
            "Cultural immersion activities (tea ceremony, calligraphy)",
            "Conversation practice with native speakers",
            "JLPT preparation for interested members"
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
                  <a href="joinus.html" class="sjcc-btn">Join This Division</a>
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