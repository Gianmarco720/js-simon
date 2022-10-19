/* 
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi. 
Dopo 30 secondi i numeri scompaiono
l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). 
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// seleziono l'elemento della DOM dove mostrare i numeri
const containerEl = document.querySelector('.container');

// seleziono i pulsanti 
const startEl = document.querySelector('.start');
const stopEl = document.querySelector('.stop');

// creo una variabile per i secondi
let seconds = 30 * 1000;

// aggiungo un eventlistener per i pulsanti
startEl.addEventListener('click', function() {
    // genero 5 numeri casuali con un ciclo for
    for (let i = 0; i < 5; i++) {
        let numGen = getRndInteger(1, 100);
    
        // creo un elemento nella DOM dove salvare i numeri generati
        const numbers = document.createElement('div');
        numbers.classList.add('numbers');
        numbers.innerHTML = `<div class="numbers">${numGen}</div>`;
    
        // inserisco l'elemento appena creato nella DOM
        containerEl.appendChild(numbers);

        setTimeout(() => {
            numbers.style.display = 'none';
        }, seconds)
    }
})




// FUNCTIONS

// funzione per generare numeri casuali
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
};