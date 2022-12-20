// // Esercizio 1
// // Sulla base della lezione del giorno, scrivere un array inizialmente vuoto,
//  e aggiungere al suo interno dieci elementi di tipo a scelta, rispettando i
//  seguenti punti:string

// // utilizzare il ciclo per classico

// // sarà l'utente ad inserire queste stringhe (prompt)

// // alla fine, quando l'utente avrà inserito tutte e 10 le parole,
// stamparle in console
let devices1 = [];
for (let i = 0; i <= 9; i++)
  devices1.push(prompt("inserisci i componenti di un device"));
console.log(devices1);

// // Avanzato
// // Riscrivere l'esercizio sopra utilizzando le altre due versioni minimal
// del ciclo for ( e for infor of)
let devices2 = [];
for (let devices2Value of devices2) {
  console.log(devices2Value);
}
