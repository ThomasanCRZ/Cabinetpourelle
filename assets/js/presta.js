import '../scss/main.scss';
let btnMenu =document.getElementById('menu-btn');
let menuSm = document.getElementById('menu-sm');
let svgBtn = document.querySelector('.img-btn-menu');

btnMenu.addEventListener('click', () => {
    menuSm.classList.toggle('hidden');
    menuSm.classList.toggle('show');
    svgBtn.classList.toggle('rotate0');
    svgBtn.classList.toggle('rotate90');
})