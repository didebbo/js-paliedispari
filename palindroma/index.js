// Variabile
let str;

// Funzione Palindroma
const isPal = (str) => {
    for (let i = 0; i < str.length; i++) if (str[i] != str[str.length - i - 1]) return false;
    return true;
};

// Stampo il risultato
(isPal(str = prompt("Inserisci parola")) ? alert("La parola " + str + " è palindroma") : alert("La parola " + str + " non è palindroma"));