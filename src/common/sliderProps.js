import SwiperCore, {
  A11y,
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  HashNavigation,
  History,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
  Virtual,
} from "swiper";

SwiperCore.use([
  Mousewheel,
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  EffectCreative,
  Virtual,
  Pagination,
  HashNavigation,
  History,
  Thumbs,
  Scrollbar,
  Keyboard,
  A11y,
]);

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const sliderProps = {
  milInstagramSlider: {
    slidesPerView: 2,
    spaceBetween: 0,
    speed: 3000,
    autoplay: true,
    autoplay: {
        delay: 0,
    },
    loop: true,
    freeMode: true,
    breakpoints: {
        992: {
            slidesPerView: 6,
        },
        768: {
            slidesPerView: 3,
        },
    },
    wrapperClass: "mil-instagram",
  },
  milInfinitySlider: {
    slidesPerView: 2,
    spaceBetween: 0,
    speed: 3000,
    autoplay: true,
    autoplay: {
        delay: 0,
    },
    loop: true,
    freeMode: true,
    breakpoints: {
        992: {
            slidesPerView: 4,
        },
    },
    wrapperClass: "mil-partners mil-partners-slider mil-partners-with-hover",
  },
  milReviSlider: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 450,
    touchStartPreventDefault: false,
    longSwipes: true,
    pagination: {
        el: ".mil-slider-pagination",
        clickable: true,
    },
    breakpoints: {
        992: {
            slidesPerView: 2,
        },
    },
    wrapperClass: "swiper-wrapper mil-icon-1-trigger",
  },
  milPortfolioSlider: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 450,
    slidesPerView: "auto",
    touchStartPreventDefault: false,
    longSwipes: true,
    navigation: {
        prevEl: '.mil-about-prev',
        nextEl: '.mil-about-next',
    },
    breakpoints: {
        992: {
            slidesPerView: 2,
        },
    },
  },
  milGallerySlider: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 450,
    slidesPerView: "auto",
    touchStartPreventDefault: false,
    longSwipes: true,
    breakpoints: {
        992: {
            slidesPerView: 2,
        },
    },
  }
};
