// Исправляем год в footer copyRight на текущий
document.querySelector(".copyrightYear").innerHTML = new Date().getFullYear();





// загрузка Swiper
//<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
const swiperCSS = document.createElement('link');
swiperCSS.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
swiperCSS.rel = 'stylesheet';
swiperCSS.setAttribute('defer', 'defer');
document.body.appendChild(swiperCSS);
/*
setTimeout(function() {
const swiperCSS = document.createElement('link');
swiperCSS.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
swiperCSS.rel = 'stylesheet';
document.body.appendChild(swiperCSS);
}, 5000);
*/





// Swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 4000,
        pauseOnMouseEnter: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 3,
        },
    },
    spaceBetween: 30,
    updateOnWindowResize: true,
    speed: 600,

    // centeredSlides: true,
/*
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
*/
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});





// закрытие модального окна по клику вне окна
const closeevent = document.addEventListener('click', function (event) {
    var e = document.querySelector('.amo-wrapper-viewport') ? document.querySelector('.amo-wrapper-viewport') : document.body;
    if (!e.contains(event.target)) {
        e.parentNode.classList.remove('active');
        document.removeEventListener('click', closeevent);        
    }
});
