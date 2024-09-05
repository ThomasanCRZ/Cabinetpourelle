let btnMenu =document.getElementById('menu-btn');
let menuSm = document.getElementById('menu-sm');
let svgBtn = document.querySelector('.img-btn-menu');
let btnNext = document.querySelector('.next');
let btnPrev = document.querySelector('.prev');
let banner = document.querySelector('.banner');
let currentIndex = 0;
const slides = document.querySelector('.carousel-slides');
const carouselItems = document.querySelectorAll('.carousel-item');
const totalSlides = carouselItems.length;

btnMenu.addEventListener('click', () => {
    menuSm.classList.toggle('hidden');
    menuSm.classList.toggle('show');
    svgBtn.classList.toggle('rotate0');
    svgBtn.classList.toggle('rotate90');
})

// -----------------------------------------CAROUSEL---------------------------------------------------
// Duplique la première et la dernière slide pour une transition infinie
const firstClone = carouselItems[0].cloneNode(true);
const lastClone = carouselItems[totalSlides - 1].cloneNode(true);

slides.appendChild(firstClone); // Ajoute le clone de la première diapo à la fin
slides.insertBefore(lastClone, carouselItems[0]); // Ajoute le clone de la dernière diapo au début

const totalSlidesWithClones = totalSlides + 2;

// Positionne la première slide réelle au démarrage
slides.style.transform = `translateX(-${100}%)`;

function showSlide(index) {
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;

    // Réinitialise la position sans transition à la fin de l'animation pour donner un effet de boucle
    if (currentIndex === totalSlidesWithClones - 1) {
        setTimeout(() => {
            slides.style.transition = "none";
            slides.style.transform = `translateX(-${100}%)`;
            currentIndex = 1;
        }, 500); // Le temps de la transition doit correspondre à la durée de `transition`
    }
    if (currentIndex === 0) {
        setTimeout(() => {
            slides.style.transition = "none";
            slides.style.transform = `translateX(-${(totalSlidesWithClones - 2) * 100}%)`;
            currentIndex = totalSlidesWithClones - 2;
        }, 500); // Le temps de la transition doit correspondre à la durée de `transition`
    }

}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

btnPrev.addEventListener('click', () => {
    prevSlide();
})
btnNext.addEventListener('click', () => {
    nextSlide();
})

// Initialiser le carrousel à la première diapositive
showSlide(currentIndex);

// Faire défiler les diapositives automatiquement
setInterval(nextSlide, 15000);

