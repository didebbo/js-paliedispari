// DOM

const btn_pari = document.getElementById("btn_pari");
const btn_dispari = document.getElementById("btn_dispari");

// Chiedo all'utente un numero
const askNumber = (min, max) => {

    let num;

    do num = parseInt(prompt("Inserisci un numero fra " + min + " e " + max));
    while (isNaN(num) || num < min || num > max);

    return num;
}

// Genero numero casuale
const genNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Controllo se è dispari
const isOdd = (num) => {
    if (num % 2) return true;
    return false;
}

// COntrollo se giocatore ha vinto
const isWinner = (arg1, num) => {

    if (isOdd(num) == arg1) return true;
    return false;
}

// Main
const main = (arg1) => {

    let min = 1;
    let max = 5;
    let sum = 0;
    let log = "";

    (arg1 ? log += "Hai scelto Dispari" : log += "Hai scelto Pari");


    // Chiedo all'utente un numero
    let num1 = askNumber(min, max);

    log += "\nHai scelto il numero " + num1;

    // Genero numero casuale
    let num2 = genNumber(min, max);

    log += "\nComputer sceglie " + num2;

    // Eseguo la somma
    sum = num1 + num2;

    log += "\nTotale " + sum;

    // Controllo se è dispari
    ((isOdd(sum)) ? log += "\nLa somma è dispari" : log += "\nLa somma è pari");

    // COntrollo se giocatore ha vinto
    ((isWinner(arg1, sum)) ? log += "\nHai vinto!" : log += "\nHai perso!");

    // Stampo il risultato
    alert(log);

}

// Scelta pari dell'utente
btn_pari.onclick = () => {

    main(0);
}

// Scelta dispari dell'utente
btn_dispari.onclick = () => {

    main(1);
}