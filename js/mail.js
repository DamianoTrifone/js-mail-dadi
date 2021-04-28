// 1 - Mail
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.

// 2 - Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Esercizio 1

// Inserimento dell'indirizzo email da parte dell'utente
var email = prompt("Inserisci qui il tuo indirizzo email");
console.log(email);

// Lista indirizzi email autorizzati
var emailAutorizzate = ["pippo@tiscali.it", "paperino@tiscali.it", "gianni@yahoo.it", "trifone.damiano@gmail.com",
"booleancareers@info.it"];
console.log(emailAutorizzate);

for (var i=0; i < emailAutorizzate.length; i++) {
    // Verifica autorizzazione email
    if (email == emailAutorizzate[i]){
       var verifica = 1;
    }
    if (verifica == 1) {
        document.getElementById("messaggio").innerHTML = "Complimenti! L'indirizzo " + email + " è autorizzato a partecipare."
    } else{
        document.getElementById("messaggio").innerHTML = "Mi dispiace, l'indirizzo " + email + " non è autorizzato a partecipare"
    }
}

