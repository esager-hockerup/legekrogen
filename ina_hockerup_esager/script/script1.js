// Vælg det første CONST har en FAST værdi -  med klassen 'slider-slide' og gem det i variablen 'slide'
const slide = document.querySelector('.slider-slide');

// Vælg det første element med klassen 'next' og gem det i variablen 'btnNext'
const btnNext = document.querySelector('.next');

// Vælg det første element med klassen 'previous' og gem det i variablen 'btnPrevious'
const btnPrevious = document.querySelector('.previous');

// Initialiser variablen giver en start startværdi 'currentImageIndex' til 0, dette bruges til at spore det aktuelle billede i slideren
let currentImageIndex = 0;

// Array med sti til billeder
let images = [
    'assets/img/slider1.jpg',
    'assets/img/slider2.jpg',
    'assets/img/slider3.jpg'
];

// opretter en Funktion der indstiller kilden for det aktuelle billede i slideren baseret på det givne index
function setActiveSlide(index) {
    slide.src = images[index];
}

// Initialiser slideren med det første billede
setActiveSlide(currentImageIndex);

// Funktion der skifter til næste billede i slideren
function next() {
    if (currentImageIndex >= images.length - 1) {
        currentImageIndex = 0;
    } else {
        currentImageIndex += 1;
    }

    // Opdater slideren med det nye billede
    setActiveSlide(currentImageIndex);
}

// Lyt efter klik på næste-knappen og kald funktionen 'next'
btnNext.addEventListener('click', next);

// Funktion der skifter til det forrige billede i slideren
function previous() {
    if (currentImageIndex === 0) {
        currentImageIndex = images.length - 1;
    } else {
        currentImageIndex -= 1;
    }

    // Opdater slideren med det nye billede
    setActiveSlide(currentImageIndex);
}

// Lyt efter klik på forrige-knappen og kald funktionen 'previous'
btnPrevious.addEventListener('click', previous);

// Automatisk skift til næste billede hvert 3000 millisekunder (3 sekunder)
const intervalId = setInterval(next, 3000);

// Lyt efter klik på næste-knappen og stop intervallet
btnNext.addEventListener('click', function () {
    clearInterval(intervalId);
});

// Lyt efter klik på forrige-knappen og stop intervallet
btnPrevious.addEventListener('click', function () {
    clearInterval(intervalId);
});

// Lyt efter tastetryk, og skift billede baseret på venstre/højre piletast
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        next();
    } else if (event.key === 'ArrowLeft') {
        previous();
    }
});
