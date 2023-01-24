import { GET } from "./api.js";

const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);
const quoteCard = (data) => {
  const quoteEl = cE("div");
  const quoteTextEl = cE("p");
  const authorEl = cE("h3");

  quoteEl.className = "quote";
  quoteEl.setAttribute("id", data.id);
  quoteTextEl.textContent = data.quote;
  authorEl.textContent = data.author;

  quoteEl.append(quoteTextEl, authorEl);

  return quoteEl;
};
const onBtnClick = () => {
  document.querySelector(".quote")?.remove();
  randomIndex = Math.floor(Math.random() * 30);

  GET(`quotes/${randomIndex + 1}`).then((quote) =>
    bodyEl.appendChild(quoteCard(quote))
  );
};
let randomIndex = Math.floor(Math.random() * 30);
const bodyEl = document.body;
const quoteBtnEl = document.createElement("button");

quoteBtnEl.className = "btn-quote";
quoteBtnEl.textContent = "Generate";
bodyEl.appendChild(quoteBtnEl);

quoteBtnEl.addEventListener("click", onBtnClick);
export { cE, qS, quoteCard };
