import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const swiperReviews = () => {
  const swiperOne = new Swiper(".reviews__swiper", {
    slidesPerView: "1",
    grabCursor: true,
    updateOnWindowResize: true,
    navigation: {
      nextEl: ".reviews__swiper-button-next",
      prevEl: ".reviews__swiper-button-prev",
    },

    // breakpoints: {
    //     1170: {
    //         slidesPerView: '3',
    //         spaceBetween: 20,
    //     },
    //     700: {
    //         slidesPerView: '2',
    //         spaceBetween: 30,
    //     },
    // },
  });

  const reviewsSwiperWrapper = document.querySelector(
    ".reviews__swiper-wrapper"
  );

  reviewsSwiperWrapper.addEventListener("click", (e) => {
    let target = e.target;

    if (target.classList.contains("reviews__swiper-content-button")) {
      let parent = target.parentElement.parentElement;
      parent.classList.toggle("isActive");
    }
  });
};

export default swiperReviews;
