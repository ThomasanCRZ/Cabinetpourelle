let btnMenu =document.getElementById('menu-btn');
let menuSm = document.getElementById('menu-sm');
let svgBtn = document.querySelector('.img-btn-menu');
let btnNext = document.querySelector('.next');
let btnPrev = document.querySelector('.prev');
let banner = document.querySelector('.banner');
let currentIndex = 0;
const slides = document.querySelector('.carousel-slides');
const totalSlides = document.querySelectorAll('.carousel-item').length;

btnMenu.addEventListener('click', () => {
    menuSm.classList.toggle('hidden');
    menuSm.classList.toggle('show');
    svgBtn.classList.toggle('rotate0');
    svgBtn.classList.toggle('rotate90');
})
btnPrev.addEventListener('click', () => {
    prevSlide();
})
btnNext.addEventListener('click', () => {
    nextSlide();
})

function showSlide(index) {
    
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Initialiser le carrousel à la première diapositive
showSlide(currentIndex);

// Faire défiler les diapositives automatiquement
setInterval(nextSlide, 15000);

