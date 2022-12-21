// Esercizio 1
// scrivere una prima funzione che presa un stringa come argomento,
// ritorni la stessa stringa + la parola bootcamp;
function edgemony(msg, informazioni) {
  console.log(msg);
}
edgemony("ciao" + " dal bootcamp");

// Esercizio 2
// scrivere un oggetto col vostro nome che vi identifichi in proprietà
// (nome, cognome, ecc...) e per metodi (es. possono anche essere semplici
// console.log di voi che eseguite un hobby)
const andrewHobbye = {
  name: "Andrea",
  surname: "Cosentino",
  city: "Catania",
};
console.log(andrewHobbye);
console.log("i miei hobbye sono:");
console.log("le arti marziali praticarle ed insegnarle");
console.log("lavorare il legno ecc ecc");
console.log("il mio nome è " + andrewHobbye.name); //prova a richiamare una singola chiave

// Avanzato
// Scrivere una funzione calculator che preso come argomento una operazione e
// due numeri, ritorni alla fine il numero risultato dall'operazione scelta.

// Provare ad aggiungere i due numeri singolarmente (num1, num2) e anche in coppia
// dentro un array ([num1, num2]).

function calculator(operation, num1, num2) {
  if (operation === "+") {
    console.log("risultato addizione" + (num1 + num2));
  } else if (operation === "-") {
    console.log(num1 - num2);
  } else if (operation === "*") {
    console.log(num1 * num2);
  } else if (operation === "/") {
    console.log(num1 / num2);
  }
}
let operazione = prompt("scegli l'operazione da fare");
let num1 = prompt("inserisci il primo numero");
num1 = parseInt(num1);
let num2 = prompt("inserisci il secondo numero");
num2 = parseInt(num2);

calculator(operazione, num1, num2);
