// 1 - Mail
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.

// 2 - Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Esercizio 1

// Lista indirizzi email autorizzati
var emailAutorizzate = ["pippo@tiscali.it", "paperino@tiscali.it", "gianni@yahoo.it", "damianotrifone@gmail.com",
"booleancareers@info.it"];

// Inserimento dell'indirizzo email da parte dell'utente
var email = prompt("Inserisci qui il tuo indirizzo email");
console.log(email);

// Verifica autorizzazione email
