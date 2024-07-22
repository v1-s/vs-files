document.addEventListener('DOMContentLoaded', function () {
    // Sticky navbar on scroll
    window.addEventListener('scroll', function () {
      const navbar = document.querySelector('.navbar');
      const scrollUpBtn = document.querySelector('.scroll-up-btn');
      
      if (window.scrollY > 20) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
  
      if (window.scrollY > 500) {
        scrollUpBtn.classList.add('show');
      } else {
        scrollUpBtn.classList.remove('show');
      }
    });
  
    // Scroll-up button click event
    const scrollUpBtn = document.querySelector('.scroll-up-btn');
    scrollUpBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'auto' });
    });
  
    // Smooth scroll on menu item click
    const menuLinks = document.querySelectorAll('.navbar .menu li a');
    menuLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        document.documentElement.style.scrollBehavior = 'smooth';
      });
    });
  
    // Toggle Navbar
    const menuBtn = document.querySelector('.menu-btn');
    menuBtn.addEventListener('click', function () {
      const menu = document.querySelector('.navbar .menu');
      const menuIcon = menuBtn.querySelector('i');
      menu.classList.toggle('active');
      menuIcon.classList.toggle('active');
    });
  
    // Typing Text Animation
    function createTypingAnimation(elementSelector, strings) {
      const element = document.querySelector(elementSelector);
      let index = 0;
      let text = '';
      let isDeleting = false;
  
      function type() {
        const currentString = strings[index];
        if (isDeleting) {
          text = currentString.substring(0, text.length - 1);
        } else {
          text = currentString.substring(0, text.length + 1);
        }
  
        element.textContent = text;
  
        if (!isDeleting && text === currentString) {
          setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && text === '') {
          isDeleting = false;
          index = (index + 1) % strings.length;
          setTimeout(type, 500);
          return;
        }
  
        setTimeout(type, isDeleting ? 60 : 100);
      }
  
      type();
    }
  
    createTypingAnimation('.typing', [
      "Fullstack Developer",
      "Software WebDeveloper",
      "WebApplication Developer",
      
    ]);
  
    createTypingAnimation('.typing-2', [
      "Fullstack Developer",
      "Software Web Developer",
      " Developer"
    ]);
  
    // Owl Carousel equivalent in pure JavaScript
    function initializeCarousel() {
      const carousel = document.querySelector('.carousel');
      const items = carousel.querySelectorAll('.item');
      let currentIndex = 0;
  
      function showNextItem() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
      }
  
      setInterval(showNextItem, 2000);
    }
  
    initializeCarousel();
  });
  
// -----------------Projects----------------------
const mixer = mixitup(".portfolio__container", {
    selectors: {
      target: ".portfolio__content"
    },
    animation: {
      duration: 400
    }
  });
  
  /* Link active portfolio */
  const linkPortfolio = document.querySelectorAll(".portfolio__item");
  
  function activePortfolio() {
    if (linkPortfolio) {
      linkPortfolio.forEach((l) => l.classList.remove("active-portfolio"));
      this.classList.add("active-portfolio");
    }
  }
  linkPortfolio.forEach((l) => l.addEventListener("click", activePortfolio));
  