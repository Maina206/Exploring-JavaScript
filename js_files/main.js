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
