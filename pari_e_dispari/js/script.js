/* Pari e Dispari: L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione). Dichiariamo chi ha vinto. */


// L’utente sceglie pari o dispari
// Creo un prompt per la scelta pari o dispari e salvo il risultato in una variabile

let userChoice = prompt('Pari o dispari?');
console.log(userChoice);


// e inserisce un numero da 1 a 5
// Creo un prompt per inserire un numero da 1 a 5 e salvo il risultato in una variabile

let userNumber = Number(prompt('Inserisci un numero'));
console.log(userNumber);


// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
// Per generare un numero random posso usare la funzione vista oggi:

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

let pcNumber = getRandomInteger(1, 5);

console.log(pcNumber);


// Sommiamo i due numeri
// Sommo la variabile derivata dal prompt al return della funzione e salvo il risultato in un'altra variabile:

let sum = userNumber + pcNumber;

console.log(sum);


// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Devo creare un blocco condizionale:

/*

if (sum % 2 === 0) {
    console.log('Pari');
} else {
    console.log('Dispari');
}; 

*/

// A questo punto copio la logica nel blocco funzione:

function evenOddGame(number) {
    if (number % 2 === 0) {
        return 'pari';
    } else {
        return 'dispari';
    };
};

let evenOrOdd = evenOddGame(sum);

console.log(evenOrOdd);


// Dichiariamo chi ha vinto
// Per dichiarare chi vince devo mettere in relazione l'esito della funzione con la userChoice

if (evenOrOdd == userChoice) {
    console.log(alert('Hai vinto!'));
} else {
    console.log(alert('Hai perso!'));
}; 