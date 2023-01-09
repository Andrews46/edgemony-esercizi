// Esercizio 1
// Sulla base della lezione del giorno, ricreare la calcolatrice fatta in
// passato utilizzando solo arrow functions.

// nb. ogni singola operazione sara una arrow function

// Alla fine combinare le varie operazioni in una funzione piu ampia, dove
// all'utente viene data la possibilita di scegliere quale operazione effettuare.
// Siate liberi di aggiungere gli argomenti a piacere, come per esempio i numeri,
//  se chiederli all'utente o meno.

const sumCalculator = (num1, num2) => num1 + num2;
const sottCalculator = (num1, num2) => num1 - num2;
const molCalculator = (num1, num2) => num1 * num2;
const divCalculator = (num1, num2) => num1 / num2;
const calculator = () => {
  let calculator = prompt("inserisci l'operazione da effettuare");
  let num1 = prompt("inserisci il primo numero");
  num1 = parseInt(num1);
  let num2 = prompt("inserisci il secondo numero");
  num2 = parseInt(num2);
  if (calculator === "+") {
    console.log(sumCalculator(num1, num2));
  } else if (calculator === "-") {
    console.log(sottCalculator(num1, num2));
  } else if (calculator === "*") {
    console.log(molCalculator(num1, num2));
  } else if (calculator === "/") {
    console.log(divCalculator(num1, num2));
  }
};
calculator();

// Avanzato
// Provare a completare l'esercizio sopra applicando qualche callback.
// Anche qui non importa l'impostazione, siate creativi, l'importante
// che si verifichi il caso di una callback.

// Ho riscritto l'esercizio precedente aggiungendo un altra funzione

// const result1 = (risultato) => risultato;
// const sumCalculator = (num1, num2) => num1 + num2;
// const sottCalculator = (num1, num2) => num1 - num2;
// const molCalculator = (num1, num2) => num1 * num2;
// const divCalculator = (num1, num2) => num1 / num2;
// const calculator = () => {
//   let calculator = prompt("inserisci l'operazione da effettuare");
//   let num1 = prompt("inserisci il primo numero");
//   num1 = parseInt(num1);
//   let num2 = prompt("inserisci il secondo numero");
//   num2 = parseInt(num2);
//   if (calculator === "+") {
//     console.log(sumCalculator(num1, num2));
//   } else if (calculator === "-") {
//     console.log(sottCalculator(num1, num2));
//   } else if (calculator === "*") {
//     console.log(molCalculator(num1, num2));
//   } else if (calculator === "/") {
//     console.log(divCalculator(num1, num2));
//   }
// };
// const result = result1("", "");
// calculator(result);
