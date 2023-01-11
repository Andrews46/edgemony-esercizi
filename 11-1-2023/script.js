// Esercizio 1
// Creare una singola card tutto in statico (via HTML), inserire gli elementi a
// piacere, come immagini, testo o titoli, indispensabile pero aggiungere un button
//  una X come testo.
// Aggiungere un evento al cui click del mouse sulla class intera:
// Cambi il colore del testo di tutta la card
// Aggiungere un secondo evento al cui click del mouse sul pulsante con la X -
// Elimini la card stessa

function changeColor() {
  titleEl.style.color = "chartreuse";
  cardEl.remove("click");
}
const btnClickEl = document.querySelector(".btn");
const cardEl = document.querySelector("div");
const titleEl = document.querySelector("h1");
cardEl.addEventListener("click", changeColor);
btnClickEl.addEventListener("click", changeColor);
titleEl.addEventListener("click", changeColor);

// Esercizio 2
// Completare la funzione quoteGen al fine di avere delle quotes che mostrino
//  tanto il testo che l'autore del testo stesso.
function quoteGen(quoteText) {
  const quoteEl = document.createElement("div");
  const textEl = document.createElement("p");
  const quoteListEl = document.querySelector(".quote-list");

  quoteEl.className = "quote";
  textEl.textContent = quoteText;

  quoteEl.appendChild(textEl);
  quoteListEl.appendChild(quoteEl);
}

const quotes = [
  {
    id: 1,
    quote: "testo",
    author: "Martin",
  },
];
quotes.forEach((item) => console.log(item.author));
quotes.forEach((item) => console.log(item.quote));
