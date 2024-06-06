
// On initialise 2 variables avec leurs classe

const sushi = document.querySelector('.sushi img');
const count = document.querySelector('.count');

// On créer le compteur

let clickCount = 0;

//on créer l'event

sushi.addEventListener('click', (event) => {
    sushi.classList.toggle('clicked');

    // à chaque clique on aditionne
    clickCount++;

    // on met le nombre de texte dans la variable count (.count)
    count.innerHTML = `Nombre de clics : ${clickCount}`;

    
    setTimeout(() => {
        sushi.classList.remove('clicked');
    }, 200);
});