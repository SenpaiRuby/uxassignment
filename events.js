document.addEventListener('DOMContentLoaded', function() {
  // Event data - now ordered chronologically
  const upcomingEvents = [
    {
      id: 1,
      title: "SJCC JMD SLC Performance",
      date: "April 24, 2025",
      time: "5:05 PM - 5:25 PM",
      location: "Block G, Indoor Sports Hall",
      image: "sjcjmd.png",
      description: "AAAH, SAKURA GA IROZUITARA! Catch the SJCC JMD performance at SLC!",
      details: `
        <h6 class="mt-3">Song Lineup:</h6>
        <ol>
          <li>Beyond the Way - VIVID BAD SQUAD</li>
          <li>Sakura Biyori and Time Machine - Ado & Hatsune Miku</li>
          <li>Otonoke - Creepy Nuts</li>
          <li>Yocchore</li>
          <li>SURPRISE???</li>
        </ol>
      `
    },
    {
      id: 2,
      title: "Student Life Carnival (SLC)",
      date: "April 23-24, 2025",
      time: "All Day",
      location: "NYP Campus",
      image: "slc.png",
      description: "Student Life Carnival (SLC) will be serialised to bring SJCC to you! Looking back at all the amazing SJCC moments during SLC from the incredible cosplays to the breathtaking performances.",
      details: `
        <h6 class="mt-3">Event Details:</h6>
        <p><strong>Genre:</strong> Slice of Life, School Life</p>
        <p><strong>Demographic:</strong> Everyone!</p>
        <p>SLC Volume 1 is serialised to share the unforgettable moments during Student Life Carnival 2025 with you!</p>
      `
    },
    {
      id: 3,
      title: "JMD Workshop: Wotagei & Traditional Dances",
      date: "December 13, 2025",
      time: "6:30 PM - 8:45 PM",
      location: "T.201",
      image: "jmdws.png",
      description: "Our JMD division is hosting a special workshop to teach you all about Wotagei and traditional dances!",
      details: `
        <h6 class="mt-3">Workshop Highlights:</h6>
        <ul>
          <li>Learn all the waza (Wotagei moves)</li>
          <li>Try the well known Bon Odori (Japanese mass dance)</li>
          <li>Fun, interactive session with experienced instructors</li>
        </ul>
      `
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Origami Workshop",
      date: "March 15, 2025",
      image: "origami.png",
      description: "Participants learned various origami techniques from basic to advanced designs."
    },
    {
      id: 5,
      title: "SJCC Spectrum Performance",
      date: "November 15, 2024",
      image: "spectrum.png",
      description: "Our JMD members performed at NYP Arts Festival with amazing Wotagei and vocal performances."
    },
    {
      id: 6,
      title: "SJCC Bonding Camp 2025",
      date: "July 25-26, 2025",
      image: "sjccbc.png",
      description: "Annual bonding camp with the theme 'Looking back at SJCC' featuring fun activities and mysteries to solve."
    },
    {
      id: 7,
      title: "BJCL Tea Ceremony",
      date: "November 3, 2025",
      image: "sjcctea.png",
      description: "Traditional Japanese tea ceremony event where participants learned about this cultural art form."
    }
  ];

  // Sort events by date
  function sortEventsByDate(events) {
    return events.sort((a, b) => {
      const dateA = new Date(a.date.split(',')[0]);
      const dateB = new Date(b.date.split(',')[0]);
      return dateA - dateB;
    });
  }

  // Initialize the page with sorted events
  loadUpcomingEvents(sortEventsByDate(upcomingEvents));
  loadCalendar(sortEventsByDate([...upcomingEvents, ...pastEvents.filter(e => new Date(e.date.split(',')[0]) > new Date())]));
  loadPastEvents(sortEventsByDate(pastEvents));

  function loadUpcomingEvents(events) {
    const container = document.getElementById('upcoming-events');
    container.innerHTML = ''; // Clear existing content
    
    events.forEach(event => {
      const eventCard = `
        <div class="col-md-4">
          <div class="card event-card h-100">
            <img src="${event.image}" class="card-img-top" alt="${event.title}">
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
    calendarBody.innerHTML = ''; // Clear existing content
    
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
    gallery.innerHTML = ''; // Clear existing content
    
    events.forEach(event => {
      const galleryItem = `
        <div class="col-6 col-md-4 col-lg-3">
          <div class="gallery-item position-relative">
            <img src="${event.image}" class="img-fluid rounded" alt="${event.title}">
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
    
    document.getElementById('eventModalTitle').textContent = event.title;
    document.getElementById('eventModalImage').src = event.image;
    document.getElementById('eventModalImage').alt = event.title;
    document.getElementById('eventModalDate').textContent = event.date;
    document.getElementById('eventModalTime').textContent = event.time || 'Various';
    document.getElementById('eventModalLocation').textContent = event.location || 'Various';
    document.getElementById('eventModalDescription').textContent = event.description;
    document.getElementById('eventModalDetails').innerHTML = event.details || '';
    
    modal.show();
  }

  // Event delegation for dynamically loaded elements
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('view-details')) {
      const eventId = parseInt(e.target.getAttribute('data-event-id'));
      const event = [...upcomingEvents, ...pastEvents].find(e => e.id === eventId);
      if (event) showEventDetails(event);
    }
  });
});