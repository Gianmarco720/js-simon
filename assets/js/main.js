// dichiarazione variabili
let seconds = 3 * 1000;
let rndNum = [];


// seleziono l'elemento della DOM dove mostrare i numeri
const containerEl = document.querySelector('.container');


// genero 5 numeri casuali con un ciclo for
for (let i = 0; i < 5; i++) {
    const numGen = getRndInteger(1, 100);
    rndNum.push(numGen);

    // creo un elemento nella DOM dove salvare i numeri generati
    let numbers = document.createElement('div');
    numbers.classList.add('numbers');
    numbers.innerHTML = `<div class="numbers">${numGen}</div>`;

    // inserisco l'elemento appena creato nella DOM
    containerEl.appendChild(numbers);

    // imposto un timer che fa scomparire i numeri dopo 30s
    setTimeout(function() {
        numbers.classList.add('hidden')
    }, seconds);
}







// FUNCTIONS

// funzione per generare numeri casuali
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

// funzione per mostrare il prompt
function start() {
    let userNumbers = [];
    for (let i = 0; i < 5; i++) {
        const userAnswer = Number(prompt(`Inserisci il ${i + 1}° numero mostrato`));
        userNumbers.push(userAnswer);
    }
}