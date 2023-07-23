/* Funcion de configuracion de Swiper.js */
const swiper = new Swiper('.swiper', {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

/* Funcion para cambiar el background del sticky menu */
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

/* Funcion para cambiar el icono del botón Dark Mode y activar la clase darkMode */
function cambiarIcono() {
    var body = document.querySelector('body');
    var icono = document.getElementById('darkmode');
    var nombreIcono = icono.getAttribute('name');

    if (nombreIcono === 'moon') {
        icono.setAttribute('name', 'sunny');
    } else {
        icono.setAttribute('name', 'moon');
    }

    body.classList.toggle('darkMode');
}

/* Funcion para activar el menú responsive */
function toggleMenu() {
    var menuToggle = document.querySelector('.menuToggle');
    var navbar = document.querySelector('.nav');
    menuToggle.classList.toggle('active');
    navbar.classList.toggle('active');
}