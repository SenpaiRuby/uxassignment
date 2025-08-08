document.addEventListener('DOMContentLoaded', function() {
  // Event data - ordered chronologically (newest first)
  const upcomingEvents = [
    {
      id: 1,
      title: "JMD Workshop: Wotagei & Traditional Dances",
      date: "December 13, 2025",
      time: "6:30 PM - 8:45 PM",
      location: "T.201, Nanyang Polytechnic",
      image: "jmdws.png",
      description: "Our JMD division is hosting a special workshop to teach you all about Wotagei (concert dance moves) and traditional Japanese dances! This workshop is perfect for anyone interested in Japanese pop culture or traditional performing arts. No prior experience needed - our experienced instructors will guide you through every step.",
      details: `
        <h6 class="mt-3">Workshop Highlights:</h6>
        <ul>
          <li>Learn all the waza (Wotagei moves) used at anime and J-pop concerts</li>
          <li>Try the well-known Bon Odori (Japanese mass dance performed during summer festivals)</li>
          <li>Fun, interactive session with experienced instructors from our JMD division</li>
          <li>Learn about the cultural significance behind each dance</li>
          <li>Opportunity to perform at future SJCC events</li>
        </ul>
        <h6 class="mt-3">What to Bring:</h6>
        <ul>
          <li>Comfortable clothing and shoes</li>
          <li>Water bottle</li>
          <li>Enthusiasm to learn!</li>
        </ul>
      `
    },
    {
      id: 2,
      title: "SJCC Bonding Camp 2025",
      date: "July 25-26, 2025",
      time: "July 25: 1PM-10PM, July 26: 10AM-4:30PM",
      location: "July 25: D1-110, July 26: Indoor Sports Hall",
      image: "sjccbc.png",
      description: "Our annual bonding camp with the theme 'Looking back at SJCC' featuring fun activities and mysteries to solve. This year's camp will focus on team-building through Japanese cultural activities while solving an exciting mystery storyline. Members will work in teams to uncover clues hidden throughout various activities.",
      details: `
        <h6 class="mt-3">Camp Highlights:</h6>
        <ul>
          <li>Team-based mystery solving with Japanese cultural elements</li>
          <li>Traditional Japanese games and activities</li>
          <li>Cosplay showcase on the second day</li>
          <li>Japanese-style barbecue dinner</li>
          <li>Overnight stay option available (limited slots)</li>
        </ul>
        <h6 class="mt-3">Schedule:</h6>
        <p><strong>Day 1 (July 25):</strong></p>
        <ul>
          <li>1:00 PM - Registration and team formation</li>
          <li>2:00 PM - Icebreaker activities</li>
          <li>4:00 PM - Mystery challenge begins</li>
          <li>7:00 PM - Japanese-style barbecue dinner</li>
          <li>9:00 PM - Night activities (optional overnight stay)</li>
        </ul>
        <p><strong>Day 2 (July 26):</strong></p>
        <ul>
          <li>10:00 AM - Morning activities</li>
          <li>12:00 PM - Lunch</li>
          <li>1:00 PM - Final challenge and wrap-up</li>
          <li>3:00 PM - Awards and closing ceremony</li>
        </ul>
      `
    },
    {
      id: 3,
      title: "SJCC JMD SLC Performance",
      date: "April 24, 2025",
      time: "5:05 PM - 5:25 PM",
      location: "Block G, Indoor Sports Hall",
      image: "sjcjmd.png",
      description: "AAAH, SAKURA GA IROZUITARA! Catch the SJCC Japanese Music & Dance division's performance at the Student Life Carnival! Our talented performers have been preparing for months to bring you an unforgettable show featuring both contemporary J-pop dances and traditional Japanese performances.",
      details: `
        <h6 class="mt-3">Song Lineup:</h6>
        <ol>
          <li>Beyond the Way - VIVID BAD SQUAD (High-energy dance performance)</li>
          <li>Sakura Biyori and Time Machine - Ado & Hatsune Miku (Vocal performance with dance)</li>
          <li>Otonoke - Creepy Nuts (Contemporary dance)</li>
          <li>Yocchore (Traditional Japanese folk dance)</li>
          <li>SURPRISE??? (Special performance - you'll have to come see!)</li>
        </ol>
        <h6 class="mt-3">Performance Details:</h6>
        <ul>
          <li>Duration: 20 minutes</li>
          <li>Featuring 15 performers from our JMD division</li>
          <li>Special guest appearance by our cosplay division</li>
          <li>Free SJCC merchandise for the first 50 audience members</li>
        </ul>
      `
    },
    {
      id: 4,
      title: "Student Life Carnival (SLC)",
      date: "April 23-24, 2025",
      time: "All Day",
      location: "NYP Campus",
      image: "slc.png",
      description: "Student Life Carnival (SLC) will be serialized to bring SJCC to you! Looking back at all the amazing SJCC moments during SLC from the incredible cosplays to the breathtaking performances. Our booth will feature interactive Japanese cultural experiences, photo opportunities with our cosplayers, and special performances throughout the day.",
      details: `
        <h6 class="mt-3">Event Details:</h6>
        <p><strong>Genre:</strong> Slice of Life, School Life</p>
        <p><strong>Demographic:</strong> Everyone!</p>
        <p>SLC Volume 1 is serialized to share the unforgettable moments during Student Life Carnival 2025 with you!</p>
        
        <h6 class="mt-3">Booth Activities:</h6>
        <ul>
          <li>Origami workshop (make your own cherry blossom)</li>
          <li>Try on yukata (summer kimono) and take photos</li>
          <li>Japanese calligraphy experience</li>
          <li>Anime trivia challenge with prizes</li>
          <li>Manga drawing demonstration</li>
        </ul>
        
        <h6 class="mt-3">Performance Schedule:</h6>
        <ul>
          <li>April 23: 2:00 PM - Cosplay showcase</li>
          <li>April 24: 12:30 PM - Origami demonstration</li>
          <li>April 24: 5:05 PM - JMD performance (main event)</li>
        </ul>
      `
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: "SP Arts Fiesta 2024",
      date: "October 28, 2024",
      time: "6:30 PM",
      location: "Singapore Polytechnic Convention Centre",
      image: "spartsfiesta.png",
      description: "SJCC participated in the prestigious SP Arts Fiesta 2024, a grand collaborative event with Singapore Polytechnic's Japanese Cultural Club (JCC) and Ngee Ann Polytechnic's JCC. This inter-polytechnic cultural showcase brought together the best of Japanese performing arts from three institutions for an unforgettable evening of cultural exchange and artistic expression.",
      details: `
        <h6 class="mt-3">Event Highlights:</h6>
        <ul>
          <li>Collaborative opening performance featuring all three polytechnics</li>
          <li>SJCC's JMD division presented a stunning medley of J-pop dances</li>
          <li>Traditional Japanese drum performance by NP's JCC</li>
          <li>SP JCC's anime vocal showcase featuring popular theme songs</li>
          <li>Joint finale with all performers</li>
        </ul>
        <h6 class="mt-3">SJCC's Contribution:</h6>
        <p>Our Japanese Music & Dance division worked for months to prepare a special 15-minute performance that blended contemporary J-pop dances with traditional Japanese elements. The performance featured:</p>
        <ul>
          <li>Precision choreography to 'Koi no Dance Site' by Perfume</li>
          <li>Traditional fan dance segment</li>
          <li>Special collaboration with NP's drum team</li>
          <li>Original costume designs by our Cosplay division</li>
        </ul>
        <h6 class="mt-3">Outcome:</h6>
        <p>The event was attended by over 300 students and staff from all three polytechnics, strengthening inter-school relations and showcasing the vibrant Japanese cultural scene in Singapore's polytechnics. The success of this collaboration has paved the way for future joint events between the schools.</p>
      `
    },
    {
      id: 6,
      title: "BJCL Tea Ceremony",
      date: "November 3, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "D1-110, Nanyang Polytechnic",
      image: "sjcctea.png",
      description: "Traditional Japanese tea ceremony event where participants learned about this cultural art form. Our Basic Japanese Culture & Language division hosted this authentic tea ceremony demonstration, followed by hands-on workshops where attendees could try making matcha tea themselves under the guidance of our instructors."
    },
    {
      id: 7,
      title: "SJCC Spectrum Performance",
      date: "November 15, 2024",
      time: "8:00 PM",
      location: "NYP Atrium",
      image: "spectrum.png",
      description: "Our JMD members performed at NYP Arts Festival with amazing Wotagei and vocal performances. The event showcased the diversity of Japanese performing arts, from traditional dances to contemporary J-pop numbers. The performance was part of the annual Spectrum arts festival that highlights student talents across NYP."
    },
    {
      id: 8,
      title: "Origami Workshop",
      date: "March 15, 2025",
      time: "10:00 AM - 12:30 PM",
      location: "Nanyang Polytechnic, CCA Room 5-12",
      image: "origami.png",
      description: "Participants learned various origami techniques from basic to advanced designs in this hands-on workshop. The session covered traditional Japanese origami models like cranes and flowers, as well as more contemporary designs. Attendees left with their own collection of folded creations and the skills to continue practicing at home."
    }
  ];

  // Sort events by date (newest first)
  function sortEventsByDate(events) {
    return events.sort((a, b) => {
      const dateA = new Date(a.date.split('-')[0].split(',')[0].trim());
      const dateB = new Date(b.date.split('-')[0].split(',')[0].trim());
      return dateB - dateA;
    });
  }

  // Initialize the page with sorted events
  loadUpcomingEvents(sortEventsByDate(upcomingEvents));
  loadCalendar(sortEventsByDate([...upcomingEvents, ...pastEvents.filter(e => {
    const eventDate = new Date(e.date.split('-')[0].split(',')[0].trim());
    return eventDate > new Date();
  })]));
  loadPastEvents(sortEventsByDate(pastEvents));

  function loadUpcomingEvents(events) {
    const container = document.getElementById('upcoming-events');
    container.innerHTML = '';
    
    events.forEach(event => {
      const eventCard = `
        <div class="col-md-4">
          <div class="card event-card h-100">
            <img src="${event.image}" class="card-img-top ${event.image === 'spartsfiesta.png' ? 'portrait-image' : ''}" alt="${event.title}">
            <div class="card-body">
              <h5 class="card-title">${event.title}</h5>
              <p class="text-muted"><i class="bi bi-calendar-event me-2"></i>${event.date}</p>
              <p class="card-text">${event.description.substring(0, 100)}...</p>
              <button class="sjcc-btn-outline view-details" data-event-id="${event.id}">View Details</button>
            </div>
          </div>
        </div>
      `;
      container.insertAdjacentHTML('beforeend', eventCard);
    });
  }

  function loadCalendar(events) {
    const calendarBody = document.querySelector('#event-calendar tbody');
    calendarBody.innerHTML = '';
    
    events.forEach(event => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${event.title}</td>
        <td>${event.date}</td>
        <td>${event.time || 'Various'}</td>
        <td>${event.location || 'Various'}</td>
        <td><button class="sjcc-btn-outline btn-sm view-details" data-event-id="${event.id}">Details</button></td>
      `;
      calendarBody.appendChild(row);
    });
  }

  function loadPastEvents(events) {
    const gallery = document.getElementById('past-events-gallery');
    gallery.innerHTML = '';
    
    events.forEach(event => {
      const galleryItem = `
        <div class="col-6 col-md-4 col-lg-3">
          <div class="gallery-item position-relative">
            <img src="${event.image}" class="img-fluid rounded ${event.image === 'spartsfiesta.png' ? 'portrait-image' : ''}" alt="${event.title}">
            <div class="gallery-overlay">
              <h6>${event.title}</h6>
              <small>${event.date}</small>
              <button class="sjcc-btn-outline btn-sm mt-2 view-details" data-event-id="${event.id}">View More</button>
            </div>
          </div>
        </div>
      `;
      gallery.insertAdjacentHTML('beforeend', galleryItem);
    });
  }

  function showEventDetails(event) {
    const modal = new bootstrap.Modal(document.getElementById('eventModal'));
    const registerBtn = document.getElementById('eventRegisterBtn');
    
    document.getElementById('eventModalTitle').textContent = event.title;
    document.getElementById('eventModalImage').src = event.image;
    document.getElementById('eventModalImage').alt = event.title;
    document.getElementById('eventModalDate').textContent = event.date;
    document.getElementById('eventModalTime').textContent = event.time || 'Various';
    document.getElementById('eventModalLocation').textContent = event.location || 'Various';
    document.getElementById('eventModalDescription').textContent = event.description;
    document.getElementById('eventModalDetails').innerHTML = event.details || '';
    
    // Hide register button for past events
    if (pastEvents.some(e => e.id === event.id)) {
      registerBtn.classList.add('d-none');
    } else {
      registerBtn.classList.remove('d-none');
    }
    
    modal.show();
  }

  // Event delegation
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('view-details')) {
      const eventId = parseInt(e.target.getAttribute('data-event-id'));
      const event = [...upcomingEvents, ...pastEvents].find(e => e.id === eventId);
      if (event) showEventDetails(event);
    }
  });
});