
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


const swiperArticle = () => {
    const swiperOne = new Swiper('.popular__swiper', {
        slidesPerView: '4',
        spaceBetween: 20,
        grabCursor: true,
        updateOnWindowResize: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.popular__swiper-button-next',
            prevEl: '.popular__swiper-button-prev',
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


}

export default swiperArticle