//PRELOADER

window.onload = function(){
    var contenedor = document.getElementById('contenedor-carga')
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';}

var swiper = new Swiper(".mySwiper", {
     effect: "cube",
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      slidesPerView: "1.1",
      cubeEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});