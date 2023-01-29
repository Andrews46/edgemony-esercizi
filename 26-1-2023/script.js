const cE = (element) => document.createElement(element);
const qS = (type) => document.querySelector(type);

const bodyEl = qS("body");
const titleEl = cE("h1");
const buttonEl = cE("button");

buttonEl.textContent = "stopTimer";
bodyEl.append(buttonEl, titleEl);

buttonEl.addEventListener("click", () => clearTimeout(countDown));
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

// prova orologio
// const today = setInterval(() => new Date());
// const todayEl = cE("div");
// const orologio = cE("h1");
// const btn = cE("button");
// btn.textContent = "stop-btn";
// setInterval(() => {
//   orologio.textContent = `${new Date().getHours()}h - ${new Date().getMinutes()}m - ${new Date().getSeconds()}s`;
// }, 1000);
// bodyEl.append(todayEl, today, orologio, btn);

// btn.addEventListener("click", () => clearInterval(orologio));
