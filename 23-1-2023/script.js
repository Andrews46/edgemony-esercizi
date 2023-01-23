import { qS, cE, productCard } from "./utils.js";

const bodyEl = qS("body");
const wrapperEl = cE("div");
wrapperEl.className = "wrapper";
bodyEl.appendChild(wrapperEl);

fetch("https://dummyjson.com/quotes")
  .then((res) => res.json())
  .then((data) => console.log(data.quotes[6]));
