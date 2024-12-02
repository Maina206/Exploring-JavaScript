/* Show menu on mobile devices */
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/* The menu shows */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* When the menu is hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* Remove the menu on mobile */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => {
  n.addEventListener("click", linkAction);
});

/* Change background of header */
function scrollHeader() {
  const header = document.getElementById("header");
  /* When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag */
  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);

/* Popular Swiper */
// For this section we used a third party module - swiperjs.com site which provided us with all the code needed
let swiperPopular = new Swiper(".popular__container", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: "auto",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    // 640: {
    //   slidesPerView: 2,
    //   spaceBetween: 20,
    // },
    768: {
      slidesPerView: 3,
      // spaceBetween: 40,
    },
    1024: {
      // slidesPerView: 5,
      spaceBetween: 48,
    },
  },
});

/* MixItUp FIlter Featured - this is an external module from mixitup by KunkaLabs. Check PatrickKunka on github the files are there */
let mixerFeatured = mixitup(".featured__content", {
  selectors: {
    target: ".featured__card",
  },
  animation: {
    duration: 400,
    easing: "ease",
  },
  // controls: {
  //   toggleLogic: true,
  // },
});

// Link active featured
const linkFeatured = document.querySelectorAll(".featured__item");

function activeFeatured() {
  linkFeatured.forEach((l) => {
    l.classList.remove("active-featured");
  });
  this.classList.add("active-featured");
}
linkFeatured.forEach((l) => {
  l.addEventListener("click", activeFeatured);
});

/* ====== Scroll up show ====== */
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is greater than 350 viewport height, add the show-scroll-up class to the scroll-up tag
  if (this.scrollY >= 350) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollUp);

/* ====== Scroll Section Active Link ====== */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");
    // Add the active class to the link that corresponds to the section
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);
