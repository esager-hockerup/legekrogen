/* Variabler oprettes */

const slide = document.querySelector('.slider-slide')
const btnNext = document.querySelector('.next')
const btnPrevious = document.querySelector('.previous')

let currentImageIndex = 0;

/* array med billeder oprettes. her sættes billederne ind */

let images = [
    'assets/img/slider1.jpg',
    'assets/img/slider2.jpg',
    'assets/img/slider3.jpg'
]

/* setactiveslide funktionen, sørger for at give image tag <img> en source src attribute -  hvergang funktionens kørers opdateres scr attributten */
function setActiveSlide(index){
 /* setattribute gør at jeg finde i min billede fil, kan sætte en billede inde. */
    slide.src = images [index]
}

/* funktionen kaldes, og currentImageIndex sendes med i parameterområdet. og indsættes, hvor der står index oppe i setactiveslide funktionen... () da dens værdi skal erstatte index oppe i funktion.  */
setActiveSlide(currentImageIndex)

/* hvis currentImageIndex er større eller det samme som længden på image array'et, 
        currentImageIndex = 0;
 */
// hvis vi er nået til det sidste billede i image array'et skal den starte forfra når der trykkes på "frem" knappen
// Ellers currentImageIndex += 1 vis det næste billede i rækken. 

function next(){
    if(currentImageIndex >= images.length - 1){
        currentImageIndex = 0;
        } else {
            currentImageIndex += 1;
        }

    setActiveSlide(currentImageIndex)
}

// Når der trykkes på knappen next, kørers next funktionen, så billedet skifter.
btnNext.addEventListener('click', next);


// hvis der vises det første billede i images arrayet og der trykkes tilbage - vis det sidste billede i rækken. 
// ellers vises billedet før 
function previous(){
    if(currentImageIndex == 0){
        currentImageIndex = images.length -1;
        } else {
            currentImageIndex -= 1;
        }

    setActiveSlide(currentImageIndex)
}
// Når der trykkes på knappen previous, kørers previious funktionen, så billedet skifter.

btnPrevious.addEventListener('click', previous);



// Automatisk billedskift med et tidsinterval på 3 sekunder

//kører next funktionen hver 3 sekund. 
setInterval(next, 3000);

// Stop intervallet, når der klikkes på næste eller forrige knap
btnNext.addEventListener('click', function () {
    clearInterval(intervalId);
});

btnPrevious.addEventListener('click', function () {
    clearInterval(intervalId);
});



//eventlistener lytter på om der bliver trykket på en tast på tastaturet. 
// hvis der trykkes på arrowLeft, så kører previous funktionen 
//hvis der trykkes på arrowright, så kører next funktionen

/* følgende gør det muligt, at skifte mellem billederne med piletasterne */
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        // Piletast mod højre
        next();
    } else if (event.key === 'ArrowLeft') {
        // Piletast mod venstre
        previous();
    }
});
