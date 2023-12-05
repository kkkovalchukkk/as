const burger = document.querySelector('.burger');
const menu = document.querySelector('.mobile-menu');
const burgerBtn = document.querySelector('.burger__btn');

burger.addEventListener('click', function() {
    burgerBtn.classList.toggle('--active');
    burgerBtn.classList.toggle('--notActive');
    menu.classList.toggle('active');
    document.querySelector('html').classList.toggle('no-scroll')
})