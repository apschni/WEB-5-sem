const swiper = new Swiper(".swiper", {
  // позволяет бесконечно свайпать слайдер
  loop: true,
  // сколько слайдов в будет отображаться за раз
  slidesPerView: 1,
  // куда свайпать слайдер
  direction: "horizontal",
  // на какие элементы будет назначена навигация между слайдами
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});