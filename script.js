var mySwiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    767: {
      slidesPerView: 1.7,
    },
  },
});
