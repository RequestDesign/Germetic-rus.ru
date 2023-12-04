
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


const swiperCertificates = () => {
    const swiperOne = new Swiper('.certificates__swiper', {
        slidesPerView: '1.23',
        spaceBetween: 10,
        grabCursor: true,
        updateOnWindowResize: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.certificates__swiper-button-next',
            prevEl: '.certificates__swiper-button-prev',
        },
        pagination: {
            el: '.certificates__swiper-pagination',
          },


        breakpoints: {
            768: {
                slidesPerView: '4',
                spaceBetween: 20,
            }
        
        },
    });


}

export default swiperCertificates