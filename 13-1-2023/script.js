const images = [
  "wp5609833-500x500-wallpapers.jpg",
  "wp5609581-500x500-wallpapers.jpg",
  "wp5609509-500x500-wallpapers.jpg",
];
const sliderImgEl = document.querySelector(".slider__img");
const leftBtnEl = document.querySelector(".left-btn");
const centerBtnEl = document.querySelector(".center-btn");
const rightBtnEl = document.querySelector(".right-btn");
let sliderState = 0;
rightBtnEl.addEventListener("click", () => {
  sliderState = 2;
  sliderImgEl.setAttribute("src", images[sliderState]);
});

leftBtnEl.addEventListener("click", () => {
  sliderState = 0;
  sliderImgEl.setAttribute("src", images[sliderState]);
});
centerBtnEl.addEventListener("click", () => {
  sliderState = 1;
  sliderImgEl.setAttribute("src", images[sliderState]);
});
