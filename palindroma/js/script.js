/* Palindroma
Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma */

// Chiedere all'utente di inserire una parola

// let userWord = prompt('Inserisci una parola');


// Creare una funzione per capire se la parola inserita è palindroma
// Come capisco se una parola è palindroma? La versione normale di quella parola dev'essere uguale alla versione capovolta. Dovrò quindi creare due variabili, una con la parola normale e una con la parola capovolta.

// let word = 'paprika', reversedWord = '';


// La variabile della parola capovolta dev'essere ottenuta invertendo l'ordine in cui si trovano le lettere che la compongono.

/* 

for (let i = word.length; i >= 0; i--) {
    let currentLetter = word.charAt(i);
    reversedWord = reversedWord + currentLetter;
};

*/


// Per verificare se la parola originaria è palindroma, devo verificare l'uguaglianza tra word e reversedWord:

/* 

if (word == reversedWord) {
    console.log(alert('Questa parola è un palindromo!'));
} else {
    console.log(alert('Questa parola non è un palindromo!'));
}; 

*/


// Porto quindi questa logica all'interno della funzione:

let reversedString = '';

function verifyPalyndrome(string) {
    let palyndrome = 'Questa parola è un palindromo!', notPalyndrome = 'Questa parola non è un palindromo!';
    for (let i = string.length; i >= 0; i--) {
        let currentLetter = string.charAt(i);
        reversedString = reversedString + currentLetter;
    };
    if (string == reversedString) {
        return alert(palyndrome);
    } else {
        return alert(notPalyndrome);
    };
};

// Riporto il prompt 

let userWord = prompt('Inserisci una parola');

// Invoco la funzione con il parametro ottenuto dal prompt

console.log(verifyPalyndrome(userWord));