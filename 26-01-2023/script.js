const cE = (element) => document.createElement(element);
const qS = (type) => document.querySelector(type);

const bodyEl = qS("body");
const titleEl = cE("h1");
const buttonEl = cE("button");

buttonEl.textContent = "stopTimer";
bodyEl.append(buttonEl, titleEl);

buttonEl.addEventListener("click", () => clearInterval(countDown));
let timeout = 6;
const countDown = setInterval(() => {
  if (timeout === 0) {
    bodyEl.style.backgroundColor = "rgb(116, 215, 116)";
    titleEl.remove();
  } else {
    timeout--;
    titleEl.textContent = timeout;
  }
}, 1000);
