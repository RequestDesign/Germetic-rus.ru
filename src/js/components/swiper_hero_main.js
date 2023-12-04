import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiperHeroMain = () => {
    const swiperContainer = document.querySelector('.hero__swiper');
    const nextButton = document.querySelector('.hero__swiper-button-next');
    const prevButton = document.querySelector('.hero__swiper-button-prev');
    const paginationContainer = document.querySelector('.swiper-pagination');

    const swiperOne = new Swiper(swiperContainer, {
        slidesPerView: 1,
        direction: 'horizontal',
        loop: true,
        grabCursor: true,
        updateOnWindowResize: true,
        watchSlidesProgress: true,
        mousewheel: true,
        navigation: {
            nextEl: nextButton,
            prevEl: prevButton,
        },
        pagination: {
            el: paginationContainer,
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + pad(index + 1) + '</span>';
            },
    
        },
        on: {
            init: function () {
                updatePagination(this);
            },
            slideChange: function () {
                updatePagination(this);
            },
        },

        breakpoints: {
            768: {
                direction: 'vertical',
            },
        },
    });

    function updatePagination(swiper) {
        const bullets = paginationContainer.querySelectorAll('.swiper-pagination-bullet');
        const numSlides = swiper.slides.length;
        const activeIndex = swiper.realIndex;

        bullets.forEach((bullet, index) => {
            bullet.classList.remove('custom-bullet-active', 'custom-bullet-active-next', 'custom-bullet-active-prev');

            let position = index - activeIndex + 1;

            if (position < 0) {
                position += numSlides;
            } else if (position >= numSlides) {
                position -= numSlides;
            }

            if (position > 2 || position < 0) {
                bullet.style.display = 'none';
            } else {
                bullet.style.display = 'block';
            }

            if (position === 0) {
                bullet.classList.add('custom-bullet-active');
            } else if (position === 1) {
                bullet.classList.add('custom-bullet-active-next');
            } else if (position === 2) {
                bullet.classList.add('custom-bullet-active-prev');
            }
        });
    }

    function pad(number) {
        return (number < 10) ? '0' + number : number;
    }


}

export default swiperHeroMain;



















// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

// const swiperHeroMain = () => {
//     const swiperContainer = document.querySelector('.hero__swiper');
//     const nextButton = document.querySelector('.hero__swiper-button-next');
//     const prevButton = document.querySelector('.hero__swiper-button-prev');
//     const paginationContainer = document.querySelector('.swiper-pagination');

//     const swiperOne = new Swiper(swiperContainer, {
//         slidesPerView: 1,
//         direction: 'vertical',
//         loop: true,
//         grabCursor: true,
//         updateOnWindowResize: true,
//         watchSlidesProgress: true,
//         navigation: {
//             nextEl: nextButton,
//             prevEl: prevButton,
//         },
//         pagination: {
//             el: paginationContainer,
//             clickable: true,
//             renderBullet: function (index, className) {
//                 return '<span class="' + className + '">' + pad(index) + '</span>';
//             },
//         },
//         on: {
//             init: function () {
//                 updatePagination(this);
//             },
//             slideChange: function () {
//                 updatePagination(this);
//             },
//         },
//     });

//     function updatePagination(swiper) {
//         const bullets = paginationContainer.querySelectorAll('.swiper-pagination-bullet');
//         const numSlides = swiper.slides.length;
//         const activeIndex = swiper.realIndex;

//         bullets.forEach((bullet, index) => {
//             bullet.classList.remove('custom-bullet-active', 'custom-bullet-active-next', 'custom-bullet-active-prev');

//             let position = index - activeIndex + 1;

//             if (position < 0) {
//                 position += numSlides;
//             } else if (position >= numSlides) {
//                 position -= numSlides;
//             }

//             if (position > 2 || position < 0) {
//                 bullet.style.display = 'none';
//             } else {
//                 bullet.style.display = 'block';
//             }

//             if (position === 0) {
//                 bullet.classList.add('custom-bullet-active');
//             } else if (position === 1) {
//                 bullet.classList.add('custom-bullet-active-next');
//             } else if (position === 2) {
//                 bullet.classList.add('custom-bullet-active-prev');
//             }
//         });

//         const firstBullet = paginationContainer.querySelector('.swiper-pagination-bullet:first-child');
//         const lastBullet = paginationContainer.querySelector('.swiper-pagination-bullet:last-child');

//         if (firstBullet) {
//             firstBullet.innerHTML = pad((activeIndex === 0) ? numSlides : 1);
//         }

//         if (lastBullet) {
//             lastBullet.innerHTML = pad((activeIndex === numSlides - 1) ? 1 : numSlides);
//         }
//     }

//     function pad(number) {
//         return (number < 10) ? '0' + number : number;
//     }
// }

// export default swiperHeroMain;




