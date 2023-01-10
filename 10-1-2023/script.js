// Esercizio 1
// Sulla base della lezione del giorno, scrivere una funzione che
// generi una hero dinamicamente tramite Javascript. Devono essere presenti i
// seguenti elementi:
// Image di sfondo
// Un titolo principale
// Un sottotitolo descrittivo breve
const heroCreate = () => {
  const bodyEl = document.querySelector("body");
  const heroEl = document.createElement("section");
  const heroImg = document.createElement("img");
  const titleP = document.createElement("h1");
  const descr = document.createElement("p");

  heroEl.className = "hero";

  heroImg.className = "img";
  heroImg.setAttribute("src", "https://picsum.photos/1370/400");
  heroImg.setAttribute("alt", "hero");

  titleP.className = "titolo pagina";
  titleP.textContent = "Benvenuti";

  descr.className = "descr";
  descr.textContent =
    "Prima pagina creata in maniera dinamica con l'utilizzo del DOM";
  heroEl.append(heroImg, titleP, descr);
  bodyEl.appendChild(heroEl);
};
heroCreate();
// Avanzato
// Scrivere un applicazione piu ampia che includa la Hero dell'esercizio 1 e
// aggiunga anche una sezione relativa a dei prodotti (simile a quanto visto
// a lezione), attenzione a creare un contenitore che inglobi tutti i singoli
// prodotti (qualcosa simile a productListEl).
