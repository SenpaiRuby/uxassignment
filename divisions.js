// Enhanced division cards with detailed modal popups
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.division-card');
  
  cards.forEach(card => {
    card.addEventListener('click', function() {
      const division = this.dataset.division;
      const title = this.querySelector('.card-title').textContent;
      const imageSrc = this.querySelector('img').src;
      
      // Division-specific content
      let divisionName, description, activities, specialNote;
      
      switch(division) {
        case 'origami':
          divisionName = "Origami Division";
          description = "From sakura to orchids, learn to make anything you could possibly dream of with just paper! A beginner? No worries, we got you covered with our simple origami tutorials. Slowly hone your skills from folding simple origami to complex ones in our Origami division!";
          activities = [
            "Weekly origami workshops",
            "Special seasonal origami (cherry blossoms, Christmas themes)",
            "Collaborative large-scale origami projects",
            "Origami competitions"
          ];
          specialNote = "All materials provided for beginners!";
          break;
          
        case 'maid':
          divisionName = "Manga Anime Illustration Drawings (MAID)";
          description = "Ever wanted to try drawing but not knowing where to start? Well in Manga Anime Illustration Drawings, you get to pick up new skills to hone from human anatomy to backgrounds.";
          activities = [
            "Weekly drawing sessions",
            "Character design workshops",
            "Manga paneling and storytelling",
            "Digital art tutorials"
          ];
          specialNote = "Open to all skill levels - from complete beginners to advanced artists!";
          break;
          
        case 'jmd':
          divisionName = "Japanese Music & Dance (JMD)";
          description = "Want to be your own Jpop Idol? Our Japanese Music & Dance Division is the perfect place for you! Welcoming everyone regardless of your background, get a chance to learn various styles such as Jpop, Hip hop and even traditional!";
          activities = [
            "Jpop dance covers",
            "Vocal training sessions",
            "Traditional Japanese dance",
            "Performance opportunities at school events"
          ];
          specialNote = "No prior experience needed - just enthusiasm!";
          break;
          
        case 'cosplay':
          divisionName = "Cosplay Anonymous";
          description = "Have you ever wondered what it would be like to be someone else for a day? Now, you can! From outfits to makeup, our Cosplay Anonymous Division will guide you through, so you can be your favorite character any day.";
          activities = [
            "Cosplay crafting workshops",
            "Makeup tutorials",
            "Photoshoot events",
            "Convention group outings"
          ];
          specialNote = "Costume rental available for first-timers!";
          break;
          
        case 'film':
          divisionName = "Film Addicts";
          description = "Interested in film? Wish to take up photography? Well then, it's time to come home to our Film Addicts Division! Our beginner-friendly lessons will not only teach you how to use a camera but also how to tell your great stories through film and Photography.";
          activities = [
            "Cinematography basics",
            "Short film projects",
            "Japanese film appreciation",
            "Photography outings"
          ];
          specialNote = "Equipment provided for workshops!";
          break;
          
        case 'bjcl':
          divisionName = "Basic Japanese Conversation Lessons (BJCL)";
          description = "BJCLs are monthly lessons that teach you how to speak and converse in basic Japanese. You'll get to learn some basic phrases that you can use in daily conversations. Each month covers a different topic that surrounds the overarching theme of Japanese culture and society.";
          activities = [
            "Monthly themed lessons",
            "Conversation practice with native speakers",
            "Cultural context for language",
            "Fun language games"
          ];
          specialNote = "Perfect for complete beginners!";
          break;
      }
      
      // Create modal content
      const modalContent = `
        <div class="modal fade" id="divisionModal" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
              <div class="modal-header ${'modal-' + division} text-white">
                <h5 class="modal-title">${divisionName}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-6 mb-3 mb-md-0">
                    <img src="${imageSrc}" class="img-fluid rounded mb-3" alt="${title}">
                    <p class="lead">${description}</p>
                  </div>
                  <div class="col-md-6">
                    <h6>Activities:</h6>
                    <ul class="mb-3">
                      ${activities.map(activity => `<li>${activity}</li>`).join('')}
                    </ul>
                    ${specialNote ? `<div class="alert alert-info">${specialNote}</div>` : ''}
                    <a href="join.html" class="sjcc-btn">Join This Division</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      
      // Add modal to body if not already there
      if (!document.getElementById('divisionModal')) {
        document.body.insertAdjacentHTML('beforeend', modalContent);
      } else {
        document.getElementById('divisionModal').outerHTML = modalContent;
      }
      
      // Show the modal
      const modal = new bootstrap.Modal(document.getElementById('divisionModal'));
      modal.show();
    });
  });
});