// Variabile
let str;

// Funzione Palindroma
const isPal = (str) => {
    if (str === str.split("").reverse().join("")) return true;
    return false;
};

// Stampo il risultato
(isPal(str = prompt("Inserisci parola")) ? alert("La parola " + str + " è palindroma") : alert("La parola " + str + " non è palindroma"));