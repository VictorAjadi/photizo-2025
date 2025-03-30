// -------------------------------------
//          Navbar
// ------------------------------------
// Mobile Menu
const menuToggle = document.querySelector(".menu-toggle");
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll('.nav-links a');
let isMenuOpen = false;

menuToggle.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        menuIcon.src = "assets/img/icons/close-w.png"; // Change to close icon
        navLinks.classList.add("active"); // Show menu
    } else {
        menuIcon.src = "assets/img/icons/menu-w.png"; // Change back to menu icon
        navLinks.classList.remove("active"); // Hide menu
    }
});

// Affecting Navbar on scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});



// -------------------------------------
//          Hero
// ------------------------------------

// Set the target date (YYYY, MM - 1, DD, HH, MM, SS)
const eventDate = new Date(2025, 5, 20, 9, 0, 0); // Example: June 20, 2025, 09:00 AM

function updateCountdown() {
    const now = new Date();
    const timeLeft = eventDate - now; // Difference in milliseconds

    if (timeLeft <= 0) {
        document.querySelector(".countdown").innerHTML = "<p>Event Started!</p>";
        return;
    }

    // Convert time to days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update HTML content
    document.querySelector(".countdown").innerHTML = `
        <p><span>${days}</span> Days</p>
        <p><span>${hours}</span> Hours</p>
        <p><span>${minutes}</span> Minutes</p>
        <p><span>${seconds}</span> Seconds</p>
    `;
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initial call to prevent delay
updateCountdown();



// -------------------------------------
//          Registration
// ------------------------------------
// Success Message
function showSuccessAlert() {
    const alertContainer = document.querySelector(".alert-container");
    const successAlert = document.querySelector(".success-alert");

    alertContainer.classList.add("active");
    successAlert.classList.add("active");

    // Hide alert after 3 seconds
    setTimeout(() => {
        alertContainer.classList.remove("active");
        successAlert.classList.remove("active");
    }, 3000);
}

// Call this function when the registration is successful
showSuccessAlert();

// -------------------------------------
//          Testimonial
// ------------------------------------

const swiper = new Swiper(".swiper", {
    loop: true,
    spaceBetween: 10, // Allow a little spacing, not 0
    centeredSlides: false, // Prevent half slides
    slidesPerView: 1, // Default: 1 slide per view
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 1 },
      1024: { slidesPerView: 1 },
    },
});

