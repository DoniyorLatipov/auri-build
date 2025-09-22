export default function createServicePageSwipers() {
  const swiperWrappers = document.querySelectorAll('.swiper-wrapper--loop');

  swiperWrappers.forEach((wrapper) => {
    const slides = Array.from(wrapper.children);
    slides.forEach((slide) => {
      wrapper.appendChild(slide.cloneNode(true));
    });
  });

  const methodsSwiper = new Swiper('.methods__slider-wrapper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: '.methods__slider-dots',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button
                    type="button"
                    class="methods__slider-dot slider-dot ${className}"
                    aria-label="Слайд ${index + 1}"
                  ></button>`;
      },
    },
    navigation: {
      nextEl: '.methods__slider-arrow--next',
      prevEl: '.methods__slider-arrow--prev',
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
