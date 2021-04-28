// 2 - Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Generare numero random giocatore
var randomGiocatore = Math.floor(Math.random() * 6) + 1;
console.log(randomGiocatore);

// Generare numero random PC
var randomPc = Math.floor(Math.random() * 6) + 1;
console.log(randomPc);

if (randomGiocatore > randomPc){
    document.getElementById("messaggio").innerHTML = "Il giocatore vince";
} else{
    document.getElementById("messaggio").innerHTML = "Il PC vince";
}

