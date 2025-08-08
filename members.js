document.addEventListener('DOMContentLoaded', function() {
  // Member data
  const members = [
    {
      id: 1,
      name: "Ethan Lim",
      role: "President",
      division: "Executive Committee",
      image: "ethan.png",
      phone: "+65 9123 4567",
      email: "ethan.sjcc@gmail.com",
      about: "As President, Ethan oversees all club operations and ensures smooth coordination between divisions. With 3 years of experience in SJCC, he's passionate about sharing Japanese culture with NYP students."
    },
    {
      id: 2,
      name: "Calcifer Tan",
      role: "Vice President",
      division: "Executive Committee",
      image: "calcifer.png",
      phone: "+65 8234 5678",
      email: "calcifer.sjcc@gmail.com",
      about: "Calcifer supports the President and manages internal club affairs. Specializing in event planning, he ensures all SJCC activities run seamlessly and members have great experiences."
    },
    {
      id: 3,
      name: "Roushan Kumar",
      role: "Origami Head",
      division: "Origami Division",
      image: "roushan.png",
      phone: "+65 9345 6789",
      email: "roushan.origami@gmail.com",
      about: "Roushan leads our Origami division with incredible paper-folding skills. He creates unique workshop programs that teach both traditional and modern origami techniques."
    },
    {
      id: 4,
      name: "Naureen Ali",
      role: "M.A.I.D Head",
      division: "Manga/Anime Illustration Division",
      image: "naureen.png",
      phone: "+65 8456 7890",
      email: "naureen.maid@gmail.com",
      about: "Naureen guides our artists in developing their manga and anime styles. She organizes drawing workshops and coordinates our annual art exhibition."
    },
    {
      id: 5,
      name: "Mykel Chen",
      role: "J.M.D Head",
      division: "Japanese Music & Dance Division",
      image: "mykel.png",
      phone: "+65 9567 8901",
      email: "mykel.jmd@gmail.com",
      about: "Mykel choreographs our dance performances and leads vocal training sessions. With experience in both traditional and contemporary Japanese performing arts, he brings diversity to our shows."
    },
    {
      id: 6,
      name: "Renae Wong",
      role: "Cosplay Head",
      division: "Cosplay Division",
      image: "renae.png",
      phone: "+65 8678 9012",
      email: "renae.cosplay@gmail.com",
      about: "Renae specializes in costume crafting and character portrayal. She leads workshops on makeup, wig styling, and performance techniques for cosplayers."
    },
    {
      id: 7,
      name: "Ray Ng",
      role: "Film Head",
      division: "Film Division",
      image: "ray.png",
      phone: "+65 9789 0123",
      email: "ray.film@gmail.com",
      about: "Ray curates our Japanese film screenings and teaches filmmaking techniques. He organizes short film projects that explore Japanese storytelling styles."
    },
    {
      id: 8,
      name: "Xinyu Zhao",
      role: "Senior Logistics",
      division: "Logistics Team",
      image: "xinyu.png",
      phone: "+65 8901 2345",
      email: "xinyu.logistics@gmail.com",
      about: "Xinyu manages equipment and venue bookings for all SJCC activities. With excellent organizational skills, she ensures we have everything needed for successful events."
    },
    {
      id: 9,
      name: "Paul Goh",
      role: "Logistics",
      division: "Logistics Team",
      image: "paul.png",
      phone: "+65 9012 3456",
      email: "paul.logistics@gmail.com",
      about: "Paul assists with event setup and manages our inventory of cultural props and materials. He's the go-to person for any technical or equipment needs."
    },
    {
      id: 10,
      name: "Darron Teo",
      role: "Treasurer",
      division: "Finance Team",
      image: "darron.png",
      phone: "+65 8123 4567",
      email: "darron.finance@gmail.com",
      about: "Darron handles all club finances, from budgeting to expense tracking. He ensures SJCC manages its funds responsibly for maximum member benefit."
    },
    {
      id: 11,
      name: "Amelia Koh",
      role: "Secretary",
      division: "Administration",
      image: "amelia.png",
      phone: "+65 9234 5678",
      email: "amelia.admin@gmail.com",
      about: "Amelia keeps detailed records of meetings and manages official club correspondence. Her organizational skills keep all SJCC documentation in perfect order."
    },
    {
      id: 12,
      name: "Isaac Lim",
      role: "Public Relations",
      division: "Marketing Team",
      image: "isaac.png",
      phone: "+65 8345 6789",
      email: "isaac.pr@gmail.com",
      about: "Isaac manages our social media presence and creates promotional materials. He's responsible for increasing SJCC's visibility across NYP."
    },
    {
      id: 13,
      name: "Kaiyang Tan",
      role: "Human Resources",
      division: "Membership Team",
      image: "kaiyang.png",
      phone: "+65 9456 7890",
      email: "kaiyang.hr@gmail.com",
      about: "Kaiyang oversees member recruitment and welfare. He organizes bonding activities and ensures all members feel welcomed in SJCC."
    },
    {
      id: 14,
      name: "Cruz Abdullah",
      role: "M.A.I.D Sub-Head",
      division: "Manga/Anime Illustration Division",
      image: "cruz.png",
      phone: "+65 8567 8901",
      email: "cruz.maid@gmail.com",
      about: "Cruz assists the M.A.I.D Head in running workshops and provides individual art guidance to members looking to improve their illustration skills."
    },
    {
      id: 15,
      name: "Zild Tan",
      role: "Wotagei Sub-Head",
      division: "Japanese Music & Dance Division",
      image: "zild.png",
      phone: "+65 9678 9012",
      email: "zild.jmd@gmail.com",
      about: "Zild specializes in teaching wotagei (concert dance moves) and coordinates our JMD division's participation in external performances."
    }
  ];

  // Initialize the page
  loadMembers(members);

  // Search functionality
  document.getElementById('memberSearch').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredMembers = members.filter(member => 
      member.name.toLowerCase().includes(searchTerm) || 
      member.role.toLowerCase().includes(searchTerm) ||
      member.division.toLowerCase().includes(searchTerm)
    );
    loadMembers(filteredMembers);
  });

  // Filter functionality
  document.getElementById('roleFilter').addEventListener('change', function() {
    const filterValue = this.value;
    if (!filterValue) {
      loadMembers(members);
      return;
    }

    let filteredMembers = [];
    if (filterValue === "Division Head") {
      filteredMembers = members.filter(member => member.role.includes("Head") && !member.role.includes("Sub-Head"));
    } else if (filterValue === "Logistics") {
      filteredMembers = members.filter(member => member.division.includes("Logistics") || member.division.includes("Finance"));
    } else if (filterValue === "Other") {
      filteredMembers = members.filter(member => 
        !member.role.includes("President") &&
        !member.role.includes("Vice President") &&
        !member.role.includes("Head") &&
        !member.division.includes("Logistics") &&
        !member.division.includes("Finance")
      );
    } else {
      filteredMembers = members.filter(member => member.role === filterValue);
    }

    loadMembers(filteredMembers);
  });

  function loadMembers(membersToDisplay) {
    const container = document.getElementById('membersContainer');
    container.innerHTML = '';

    membersToDisplay.forEach(member => {
      const memberCard = `
        <div class="col-6 col-md-4 col-lg-3">
          <div class="card member-card h-100" data-member-id="${member.id}">
            <div class="member-img-container">
              <img src="${member.image}" class="card-img-top member-img" alt="${member.name}">
              <div class="member-overlay">
                <button class="sjcc-btn-outline btn-sm view-member" data-member-id="${member.id}">View Profile</button>
              </div>
            </div>
            <div class="card-body text-center">
              <h5 class="card-title mb-1">${member.name}</h5>
              <p class="text-muted small mb-1">${member.role}</p>
              <p class="text-purple small">${member.division}</p>
            </div>
          </div>
        </div>
      `;
      container.insertAdjacentHTML('beforeend', memberCard);
    });

    // Add event listeners
    document.querySelectorAll('.view-member').forEach(button => {
      button.addEventListener('click', function(e) {
        e.stopPropagation();
        const memberId = parseInt(this.getAttribute('data-member-id'));
        const member = members.find(m => m.id === memberId);
        showMemberDetails(member);
      });
    });

    document.querySelectorAll('.member-card').forEach(card => {
      card.addEventListener('click', function() {
        const memberId = parseInt(this.getAttribute('data-member-id'));
        const member = members.find(m => m.id === memberId);
        showMemberDetails(member);
      });
    });
  }

  function showMemberDetails(member) {
    const modal = new bootstrap.Modal(document.getElementById('memberModal'));
    
    document.getElementById('memberModalTitle').textContent = member.name;
    document.getElementById('memberModalImage').src = member.image;
    document.getElementById('memberModalImage').alt = member.name;
    document.getElementById('memberModalRole').textContent = member.role;
    document.getElementById('memberModalDivision').textContent = member.division;
    document.getElementById('memberModalAbout').textContent = member.about;
    
    const phoneLink = document.getElementById('memberModalPhone');
    phoneLink.textContent = member.phone;
    phoneLink.href = `tel:${member.phone.replace(/\s+/g, '')}`;
    
    const emailLink = document.getElementById('memberModalEmail');
    emailLink.textContent = member.email;
    emailLink.href = `mailto:${member.email}`;
    
    modal.show();
  }
});