
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


const swiperCertificates = () => {
    const swiperOne = new Swiper('.certificates__swiper', {
        slidesPerView: '4',
        spaceBetween: 10,
        grabCursor: true,
        updateOnWindowResize: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.certificates__swiper-button-next',
            prevEl: '.certificates__swiper-button-prev',
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

export default swiperCertificates