let userOperation = prompt("inserisci il tipo di operazione che vuoi fare");
let firstNumber = prompt("inserisci il primo numero");
let secNumber = prompt("inserisci il secondo numero");
firstNumber = parseInt(firstNumber);
secNumber = parseInt(secNumber);
if (userOperation === "addizione") {
  console.log(firstNumber + secNumber);
} else if (userOperation === "sottrazione") {
  console.log(firstNumber - secNumber);
} else if (userOperation === "moltiplicazione") {
  console.log(firstNumber * secNumber);
} else if (userOperation === "divisione") {
  console.log(firstNumber / secNumber);
} else {
  console.log("devi selezionare una delle operazioni");
}
