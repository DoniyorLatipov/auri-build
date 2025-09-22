export default function createMainPageSwipers() {
  const swiperWrappers = document.querySelectorAll('.swiper-wrapper--loop');

  swiperWrappers.forEach((wrapper) => {
    const slides = Array.from(wrapper.children);
    slides.forEach((slide) => {
      wrapper.appendChild(slide.cloneNode(true));
    });
  });

  const promotionSwiper = new Swiper('.promotion__slider-wrapper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: '.promotion__slider-dots',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button
                    type="button"
                    class="promotion__slider-dot slider-dot ${className}"
                    aria-label="Слайд ${index + 1}"
                  ></button>`;
      },
    },
    navigation: {
      nextEl: '.promotion__slider-arrow--next',
      prevEl: '.promotion__slider-arrow--prev',
    },
  });

  const teachersSwiper = new Swiper('.teachers__slider-wrapper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    pagination: {
      el: '.teachers__slider-dots',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button
                    type="button"
                    class="teachers__slider-dot slider-dot ${className}"
                    aria-label="Слайд ${index + 1}"
                  ></button>`;
      },
    },
    navigation: {
      nextEl: '.teachers__slider-arrow--next',
      prevEl: '.teachers__slider-arrow--prev',
    },
  });

  const commentsSwiper = new Swiper('.comments__slider-wrapper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: '.comments__slider-dots',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button
                    type="button"
                    class="comments__slider-dot slider-dot ${className}"
                    aria-label="Слайд ${index + 1}"
                  ></button>`;
      },
    },
    navigation: {
      nextEl: '.comments__slider-arrow--next',
      prevEl: '.comments__slider-arrow--prev',
    },
  });
}
