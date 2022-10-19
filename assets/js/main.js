// seleziono l'elemento della DOM dove mostrare i numeri
const containerEl = document.querySelector('.container');

// creo una variabile per i secondi
let seconds = 3 * 1000;


// genero 5 numeri casuali con un ciclo for
for (let i = 0; i < 5; i++) {
    const numGen = getRndInteger(1, 100);
    // creo un elemento nella DOM dove salvare i numeri generati
    const numbers = document.createElement('div');
    numbers.classList.add('numbers');
    numbers.innerHTML = `<div class="numbers">${numGen}</div>`;

    // inserisco l'elemento appena creato nella DOM
    containerEl.appendChild(numbers);

    // imposto un timer che fa scomparire i numeri dopo 30s
    setTimeout(function () {
        numbers.classList.add('hidden');
        for (let i = 0; i < 5; i++) {
            Number(prompt(`Inserisci il ${i + 1}° numero`)) 
        }
    }, seconds);    
}




// FUNCTIONS

// funzione per generare numeri casuali
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};