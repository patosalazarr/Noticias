document.querySelector('.menu-btn').addEventListener('click', () => { /* Hacer aparecer y desaparecer la barra de navegacion a dar click en el menu*/
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {delay: 500});/* Hacer que aparescan los iconos con forme damos scrol*/ 
ScrollReveal().reveal('.cards-banner-one', {delay: 500});
ScrollReveal().reveal('.cards-banner-two', {delay: 500});
