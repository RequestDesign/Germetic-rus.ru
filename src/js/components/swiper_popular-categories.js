
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


const swiperPopularCategories = () => {
    const swiperOne = new Swiper('.popular-categories__swiper', {
        slidesPerView: '4',
        spaceBetween: 20,
        grabCursor: true,
        updateOnWindowResize: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.popular-categories__swiper-button-next',
            prevEl: '.popular-categories__swiper-button-prev',
        },
    });


}

export default swiperPopularCategories