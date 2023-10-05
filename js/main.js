// COUNTDOWN

function handleCountdown() {
  const endDate = new Date('2023-10-12 00:00:00').getTime();
  const now = new Date().getTime();
  const timeRemaining = endDate - now;

  if (timeRemaining > 0) {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  } else {
    document.getElementById('countdown').textContent = 'Countdown expired!';
  }
}

function startCountdown() {
  handleCountdown();
  setInterval(handleCountdown, 1000);
}

window.onload = startCountdown;



// RESPONSIVE NAVBAR AND HAMBURGER MENU

const hamburgerButton = document.querySelector(".hamburger");
const navLinksContainer = document.querySelector(".nav-menu");

function toggleMenu() {
  hamburgerButton.classList.toggle("active");
  navLinksContainer.classList.toggle("active");
}

hamburgerButton.addEventListener("click", toggleMenu);

navLinksContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav-link")) {
    toggleMenu();
  }
});

document.addEventListener("click", (e) => {
  const dropdownButton = e.target.closest("[data-dropdown-button]");
  const dropdown = e.target.closest("[data-dropdown]");

  if (!dropdownButton && dropdown !== null) return;

  if (dropdownButton) {
    dropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((otherDropdown) => {
    if (otherDropdown !== dropdown) {
      otherDropdown.classList.remove("active");
    }
  });
});



// ANIMATION OF DATA

const numberElements = document.querySelectorAll('.hero-banner-number');

function animateNumber(element) {
  const initialValue = parseFloat(element.textContent);
  const targetValue = parseFloat(element.getAttribute('data-count'));
  const duration = 2000;
  const startTime = performance.now();

  function updateNumber(timestamp) {
    const elapsedTime = timestamp - startTime;
    if (elapsedTime < duration) {
      const currentValue = initialValue + (targetValue - initialValue) * (elapsedTime / duration);
      element.textContent = Math.floor(currentValue);
      requestAnimationFrame(updateNumber);
    } else {
      element.textContent = Math.floor(targetValue);
    }
  }
  requestAnimationFrame(updateNumber);
}

numberElements.forEach(animateNumber);


// FAQ ACCORDION
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    // Toggle the 'active' class on the clicked question
    faq.classList.toggle('active');

    // Hide the answers of all other questions
    faqs.forEach(otherFaq => {
      if (otherFaq !== faq) {
        otherFaq.classList.remove('active');
      }
    });
  });
});

