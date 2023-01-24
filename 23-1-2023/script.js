import { qS, cE, quoteCard } from "./utils.js";

const bodyEl = qS("body");
const quoteEl = cE("div");
quoteEl.className = "quote";
bodyEl.appendChild(quoteEl);

fetch("https://dummyjson.com/quotes")
  .then((res) => res.json())
  .then((data) => console.log(data.quotes[6]));
