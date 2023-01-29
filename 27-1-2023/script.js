import { GET } from "./api.js";
import { createCardGen, modalGen } from "./utils.js";

const qS = (type) => document.querySelector(type);
const cE = (element) => document.createElement(element);
const qSA = (type) => document.querySelectorAll(type);
const popularEl = qS(".popular");
const topRatedEl = qS(".top-rated");
const modalEl = qS(".modal");
const modalOverlay = qS(".overlay");

Promise.all([GET("popular"), GET("top_rated")])
  .then((data) => {
    data[0].results.map((movie) => popularEl.append(createCardGen(movie)));
    data[1].results.map((movie) => topRatedEl.append(createCardGen(movie)));
    console.log(document.querySelectorAll(".movie"));
  })
  .then(() => {
    const movieEls = qSA(".movie");
    console.log(movieEls);
    movieEls.forEach((movie) =>
      movie.addEventListener("click", () =>
        GET("movie", movie.id).then((selectedMovie) => {
          modalEl.appendChild(modalGen(selectedMovie));
          modalEl.style.display = "flex";
        })
      )
    );
  });
modalOverlay.addEventListener("click", () => {
  const modalMovieEl = qS(".movie-modal");
  modalEl.style.display = "none";
  modalMovieEl.remove();
});
