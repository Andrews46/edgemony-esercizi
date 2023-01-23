const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);
const productCard = (data) => {
  const wrapperEl = cE("div");
  const textWrapperEl = cE("div");
  const imageEl = cE("img");
  const quoteEl = cE("p");
  const authorEl = cE("h3");

  wrapperEl.className = "product-quotes";
  wrapperEl.className = "product-card";
  imageEl.setAttribute("src", data.thumbnail);
  imageEl.setAttribute("alt", data.title);
  textWrapperEl.className = "product-quotes__text";
  authorEl.textContent = data.author;
  quoteEl.textContent = data.quotes;

  textWrapperEl.append(authorEl, quoteEl);
  wrapperEl.append(imageEl, textWrapperEl);

  return wrapperEl;
};

// const btn = document.querySelector(".btnRandom");
// btnRandom.addEventListener("click", () => {});

export { cE, qS, productCard };
