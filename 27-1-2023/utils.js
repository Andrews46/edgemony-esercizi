const cE = (element) => document.createElement(element);

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
  return cardEl;
};

const modalGen = (data) => {
  const modalEl = cE("div");
  const imgEl = cE("img");
  const wrapperTextEl = cE("div");
  const titleEl = cE("h2");
  const overviewEl = cE("p");
  const releaseDateEl = cE("p");
  const voteAverageEl = cE("p");

  modalEl.className = "movie-modal";
  imgEl.setAttribute =
    ("src", `https://image.tmdb.org/tv/p/w500/${data.poster_path}`);
  imgEl.setAttribute = ("alt", data.title);
  titleEl.textContent = data.title;
  overviewEl.textContent = data.overview;
  releaseDateEl.textContent = data.release_date;
  voteAverageEl.textContent = data.vote_average;

  wrapperTextEl.append(titleEl, overviewEl, releaseDateEl, voteAverageEl);
  modalEl.append(imgEl, wrapperTextEl);
  return modalEl;
};

export { createCardGen, modalGen };
