const overlay = document.querySelector(".overlay");
const menutoggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const header = document.querySelector("header");

menutoggle.addEventListener("click", () => {
  overlay.classList.toggle("active");
  nav.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});
const heroSwiper = new Swiper(".hero-slide", {
  navigation: {
    nextEl: ".swiper-button-next",
    pevEl: ".swiper-button-pev",
  },
  navigation: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const featureSwiper = new Swiper(".featured-procduct-swiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    780: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
AOS.init({
  delay: 20,
});
