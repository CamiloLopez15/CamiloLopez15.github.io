let container_responsive_button = document.querySelector('.header__nav-responsive-menu__button');
let container_responsive_img_1 = document.querySelector('.header__nav-responsive-menu__button-img-1');
let container_responsive_img_2 = document.querySelector('.header__nav-responsive-menu__button-img-2');
let container_responsive_items = document.querySelector('.header__nav-responsive-menu__items');
let header__nav_responsive = document.querySelector('.header__nav-responsive');
let glitch_wrapper = document.querySelector('#containerNombre');
let glitch = document.querySelector('#nombre');



container_responsive_button.onclick = () => {
    container_responsive_img_1.classList.toggle('hidden');
    container_responsive_img_2.classList.toggle('hidden');
    container_responsive_items.classList.toggle('toggle');
    header__nav_responsive.classList.toggle('cambiarFondoResponsive');
    glitch_wrapper.classList.toggle('cambiarFondoResponsive');
    glitch.classList.toggle('cambiarFondoResponsive');
}