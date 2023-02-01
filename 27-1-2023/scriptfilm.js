import { GET } from "./apifilm.js";

const cE = (element) => document.createElement(element);
const qS = (type) => document.querySelector(type);

const popularEl = qS(".popular");
const topRatedEl = qS(".top-rated");

const createCardGenerator = (data) => {
  const cardEl = cE("div");
  const imgEl = cE("img");
  cardEl.className = "movie";
  imgEl.setAttribute(
    "src",
    `https://image.tmdb.org/t/p/w500/${data.poster_path}`
  );
  imgEl.setAttribute("alt", data.title);

  cardEl.appendChild(imgEl);
  return cardEl;
};

Promise.all([GET("movie", "popular"), GET("movie", "top_rated")]).then(
  (data) => {
    data[0].results.map((movie) =>
      popularEl.append(createCardGenerator(movie))
    );
    data[1].results.map((movie) =>
      topRatedEl.append(createCardGenerator(movie))
    );
  }
);
