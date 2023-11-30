
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


const swiperPopularGoods = () => {
    const swiperOne = new Swiper('.popular-goods__swiper', {
        slidesPerView: '1',
        spaceBetween: 20,
        grabCursor: true,
        updateOnWindowResize: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.popular-goods__swiper-button-next',
            prevEl: '.popular-goods__swiper-button-prev',
        },



        breakpoints: {
            768: {
                slidesPerView: '4',
                spaceBetween: 20,
            },
        },
    });


}

export default swiperPopularGoods