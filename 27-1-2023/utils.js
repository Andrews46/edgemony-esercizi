import { GET } from "./api.js";
const qS = (type) => document.querySelector(type);
const cE = (element) => document.createElement(element);
const modalEl = qS(".modal");
const createCardGen = (data) => {
  const cardEl = cE("div");
  const imageEl = cE("img");

  cardEl.className = "season";
  imageEl.setAttribute(
    "src",
    `https://image.tmdb.org/t/p/w500/${data.poster_path}`
  );
  imageEl.setAttribute("alt", data.title);
  imageEl.className = "images";
  cardEl.appendChild(imageEl);
  cardEl.addEventListener("click", () => {
    GET(data.id).then((selectedMovie) => {
      // console.log(data.id);
      modalEl.appendChild(modalGen(selectedMovie));
      modalEl.style.display = "flex";
    });
  });
  return cardEl;
};

const modalGen = (data) => {
  // console.log(data);
  const modalEl = cE("div");
  const imgEl = cE("img");
  const wrapperTextEl = cE("div");
  const titleEl = cE("h2");
  const overviewEl = cE("p");
  const releaseDateEl = cE("p");
  const voteAverageEl = cE("p");

  modalEl.className = "movie-modal";
  imgEl.setAttribute(
    "src",
    `https://image.tmdb.org/t/p/w500/${data.poster_path}`
  );
  imgEl.setAttribute("alt", data.name);
  titleEl.className = "titleModal";
  titleEl.textContent = data.name;
  overviewEl.textContent = data.overview;
  releaseDateEl.textContent = `Data uscita ${data.first_air_date}`;
  // console.log(data.overview);
  voteAverageEl.textContent = `Vote ${data.vote_average}`;

  wrapperTextEl.append(titleEl, overviewEl, releaseDateEl, voteAverageEl);
  modalEl.append(imgEl, wrapperTextEl);
  return modalEl;
};

export { createCardGen, modalGen };
