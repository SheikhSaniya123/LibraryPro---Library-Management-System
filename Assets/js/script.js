
  // Toggle Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
// Sample Book Data
const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "fiction",
    image: "https://via.placeholder.com/400x300", // Replace with actual image URL
    available: true,
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "non-fiction",
    image: "https://via.placeholder.com/400x300", // Replace with actual image URL
    available: false,
  },
  {
    title: "The Martian",
    author: "Andy Weir",
    genre: "science",
    image: "https://via.placeholder.com/400x300", // Replace with actual image URL
    available: true,
  },
  {
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    genre: "biography",
    image: "https://via.placeholder.com/400x300", // Replace with actual image URL
    available: true,
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "fiction",
    image: "https://via.placeholder.com/400x300", // Replace with actual image URL
    available: false,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "fiction",
    image: "https://via.placeholder.com/400x300", // Replace with actual image URL
    available: true,
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    genre: "science",
    image: "https://via.placeholder.com/400x300", // Replace with actual image URL
    available: true,
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    genre: "biography",
    image: "https://via.placeholder.com/400x300", // Replace with actual image URL
    available: false,
  },
];

// Function to render books
function renderBooks(filteredBooks) {
  const bookGrid = document.getElementById("bookGrid");
  bookGrid.innerHTML = ""; // Clear existing content

  filteredBooks.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    bookCard.innerHTML = `
      <img src="${book.image}" alt="${book.title}">
      <div class="content">
        <h4>${book.title}</h4>
        <p>By ${book.author}</p>
        <p class="availability">${
          book.available ? "Available" : "Not Available"
        }</p>
      </div>
    `;

    bookGrid.appendChild(bookCard);
  });
}

// Initial render
renderBooks(books);

// Search and Filter Functionality
const searchBar = document.getElementById("searchBar");
const genreFilter = document.getElementById("genreFilter");
const availabilityFilter = document.getElementById("availabilityFilter");

searchBar.addEventListener("input", filterBooks);
genreFilter.addEventListener("change", filterBooks);
availabilityFilter.addEventListener("change", filterBooks);

function filterBooks() {
  const searchTerm = searchBar.value.toLowerCase();
  const selectedGenre = genreFilter.value;
  const selectedAvailability = availabilityFilter.value;

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm) ||
      book.genre.toLowerCase().includes(searchTerm);

    const matchesGenre =
      selectedGenre === "all" || book.genre === selectedGenre;

    const matchesAvailability =
      selectedAvailability === "all" ||
      (selectedAvailability === "available" && book.available) ||
      (selectedAvailability === "unavailable" && !book.available);

    return matchesSearch && matchesGenre && matchesAvailability;
  });

  renderBooks(filteredBooks);
}// Sample Member Data
const members = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    membership: "Active",
    image: "https://via.placeholder.com/400x300", // Replace with actual image URL
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    membership: "Expired",
    image: "https://via.placeholder.com/400x300", // Replace with actual image URL
  },
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    membership: "Active",
    image: "https://via.placeholder.com/400x300", // Replace with actual image URL
  },
];

// Sample Borrowed Items Data
const borrowedItems = [
  {
    title: "The Great Gatsby",
    member: "John Doe",
    dueDate: "2023-11-15",
    image: "https://via.placeholder.com/400x300", // Replace with actual image URL
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    member: "Jane Smith",
    dueDate: "2023-11-10",
    image: "https://via.placeholder.com/400x300", // Replace with actual image URL
  },
  {
    title: "The Martian",
    member: "Alice Johnson",
    dueDate: "2023-11-20",
    image: "https://via.placeholder.com/400x300", // Replace with actual image URL
  },
];

// Function to render member profiles
function renderMemberProfiles() {
  const profilesGrid = document.getElementById("profilesGrid");
  profilesGrid.innerHTML = ""; // Clear existing content

  members.forEach((member) => {
    const profileCard = document.createElement("div");
    profileCard.classList.add("profile-card");

    profileCard.innerHTML = `
      <img src="${member.image}" alt="${member.name}">
      <div class="content">
        <h4>${member.name}</h4>
        <p>Email: ${member.email}</p>
        <p>Membership: ${member.membership}</p>
      </div>
    `;

    profilesGrid.appendChild(profileCard);
  });
}

// Function to render borrowed items
function renderBorrowedItems() {
  const itemsGrid = document.getElementById("itemsGrid");
  itemsGrid.innerHTML = ""; // Clear existing content

  borrowedItems.forEach((item) => {
    const itemCard = document.createElement("div");
    itemCard.classList.add("item-card");

    itemCard.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="content">
        <h4>${item.title}</h4>
        <p>Borrowed by: ${item.member}</p>
        <p>Due Date: ${item.dueDate}</p>
      </div>
    `;

    itemsGrid.appendChild(itemCard);
  });
}

// Function to calculate fine
function calculateFine(dueDate, returnDate) {
  const due = new Date(dueDate);
  const returned = new Date(returnDate);
  const diffTime = returned - due;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) return 0; // No fine if returned on or before due date
  return diffDays * 2; // $2 per day fine
}

// Fine Calculator Form Submission
const fineForm = document.getElementById("fineForm");
const fineResult = document.getElementById("fineResult");

fineForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const dueDate = document.getElementById("dueDate").value;
  const returnDate = document.getElementById("returnDate").value;

  const fine = calculateFine(dueDate, returnDate);
  fineResult.textContent = `Total Fine: $${fine}`;
});

// Initial Render
renderMemberProfiles();
renderBorrowedItems();
// Sample Events Data
const events = [
  {
    title: "Book Club Meeting",
    description: "Join us for a discussion on 'The Great Gatsby'.",
    date: "2023-11-25",
    image: "https://via.placeholder.com/400x300", // Replace with actual image URL
  },
  {
    title: "Author Talk: Yuval Noah Harari",
    description: "A special session with the author of 'Sapiens'.",
    date: "2023-12-05",
    image: "https://via.placeholder.com/400x300", // Replace with actual image URL
  },
  {
    title: "Library Workshop",
    description: "Learn how to use our online resources effectively.",
    date: "2023-12-10",
    image: "https://via.placeholder.com/400x300", // Replace with actual image URL
  },
];

// Sample Announcements Data
const announcements = [
  {
    title: "Holiday Closure",
    description: "The library will be closed on December 25th for Christmas.",
    date: "2023-12-25",
    image: "https://via.placeholder.com/400x300", // Replace with actual image URL
  },
  {
    title: "New Arrivals",
    description: "Check out our latest collection of science fiction books.",
    date: "2023-11-30",
    image: "https://via.placeholder.com/400x300", // Replace with actual image URL
  },
  {
    title: "Membership Renewal",
    description: "Renew your membership before December 31st to avoid interruptions.",
    date: "2023-12-31",
    image: "https://via.placeholder.com/400x300", // Replace with actual image URL
  },
];

// Function to render events
function renderEvents() {
  const eventsGrid = document.getElementById("eventsGrid");
  eventsGrid.innerHTML = ""; // Clear existing content

  events.forEach((event) => {
    const eventCard = document.createElement("div");
    eventCard.classList.add("event-card");

    eventCard.innerHTML = `
      <img src="${event.image}" alt="${event.title}">
      <div class="content">
        <h4>${event.title}</h4>
        <p>${event.description}</p>
        <p class="event-date">Date: ${event.date}</p>
      </div>
    `;

    eventsGrid.appendChild(eventCard);
  });
}

// Function to render announcements
function renderAnnouncements() {
  const announcementsGrid = document.getElementById("announcementsGrid");
  announcementsGrid.innerHTML = ""; // Clear existing content

  announcements.forEach((announcement) => {
    const announcementCard = document.createElement("div");
    announcementCard.classList.add("announcement-card");

    announcementCard.innerHTML = `
      <img src="${announcement.image}" alt="${announcement.title}">
      <div class="content">
        <h4>${announcement.title}</h4>
        <p>${announcement.description}</p>
        <p class="announcement-date">Date: ${announcement.date}</p>
      </div>
    `;

    announcementsGrid.appendChild(announcementCard);
  });
}

// Initial Render
renderEvents();
renderAnnouncements();
// Countdown Timer
function startCountdown(eventDate) {
  setInterval(() => {
    let now = new Date().getTime();
    let distance = new Date(eventDate) - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("eventCountdown").innerText = days + " Days";
  }, 1000);
}

// Live Search
function searchEvents() {
  let input = document.getElementById("eventSearch").value.toLowerCase();
  let events = document.querySelectorAll(".event-card");
  events.forEach(event => {
    event.style.display = event.innerText.toLowerCase().includes(input) ? "block" : "none";
  });
}

// Start Countdown
startCountdown("2025-04-10");
// "Read More" Expand Feature
document.querySelectorAll(".read-more").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    let content = this.previousElementSibling;
    content.style.display =
      content.style.display === "none" ? "block" : "none";
    this.textContent = content.style.display === "none" ? "📖 Read More" : "🔽 Show Less";
  });
});

// GSAP Animations
gsap.from(".timeline-event", {
  opacity: 0,
  x: -50,
  duration: 1,
  stagger: 0.3,
});

gsap.from(".announcement-card", {
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.3,
});
// Scroll-Based Timeline Activation
window.addEventListener("scroll", function () {
  let historyEvents = document.querySelectorAll(".history-event");
  historyEvents.forEach((event) => {
    let rect = event.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      event.style.opacity = "1";
      event.style.transform = "translateY(0)";
    }
  });
});

// WWII Image Parallax Effect
document.addEventListener("mousemove", function (e) {
  let xOffset = (window.innerWidth / 2 - e.pageX) / 50;
  let yOffset = (window.innerHeight / 2 - e.pageY) / 50;
  document.querySelector(".ww2-image img").style.transform = `translate(${xOffset}px, ${yOffset}px)`;
});
// Scroll-Based Zig-Zag Animation
window.addEventListener("scroll", function () {
  let zigzagRows = document.querySelectorAll(".zigzag-row");
  zigzagRows.forEach((row) => {
    let rect = row.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      row.style.opacity = "1";
      row.style.transform = "translateY(0)";
    }
  });
});

// Image Depth Effect
document.addEventListener("mousemove", function (e) {
  let xOffset = (window.innerWidth / 2 - e.pageX) / 50;
  let yOffset = (window.innerHeight / 2 - e.pageY) / 50;
  document.querySelectorAll(".zigzag-image img").forEach((img) => {
    img.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
  });
});

