const sushi = document.querySelector('.sushi img');
const count = document.querySelector('.count');
const bonusButton = document.querySelector('.bonus');

let clickCount = 0;
let multiplier = 1;

sushi.addEventListener('click', () => {
    sushi.classList.toggle('clicked');
    
    // Incrémenter le compteur en fonction du multiplicateur
    clickCount += multiplier;
    
    count.innerHTML = `Nombre de clics : ${clickCount}`;

    setTimeout(() => {
        sushi.classList.remove('clicked');
    }, 200);
});

bonusButton.addEventListener('click', () => {
    // Vérifier si le compteur de clics est supérieur à 50
    if (clickCount >= 50) {
        // Soustraire 50 points du compteur de clics
        clickCount -= 50;
        // Multiplier par 2 à chaque clic sur le bouton bonus
        multiplier *= 2;
    }
});


