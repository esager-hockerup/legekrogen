// En varribael (vaærdi kan ændres) Henter formularen ved hjælp af dens id 'become-member'
let form = document.querySelector('#become-member')

// Henter inputfeltet for fulde navn ved hjælp af dets attribut 'name'
let nameFull = document.querySelector('input[name="firstname"]')

// Henter inputfeltet for email ved hjælp af dets attribut 'name'
let email = document.querySelector('input[name="email"]')

// Henter det første <h1> element på siden
let create = document.querySelector('h1')

// Henter det første <p> element på siden
let createInfo = document.querySelector('p')

// Henter det første element med klassenavnet 'msg'
let message = document.querySelector('.msg')

// Tilføjer en event listener til formularen, der lytter efter 'submit'-begivenheden
form.addEventListener('submit', (e) => {
    // Forhindrer formularen i at blive sendt, så siden ikke genindlæses
    e.preventDefault();

    // Tilføjer klassen 'hidden' til formularen, hvilket skjuler den
    form.classList.add('hidden')
    
    // Opdaterer indholdet af beskedsområdet med en velkomstbesked og bruger inputværdien fra fulde navn
    message.innerHTML = `Velkommen til ${nameFull.value}! Du er nu blevet en del af vores kundeklub. 
    Der ligger en overraskelse til dig i indbakken ;) `
})
