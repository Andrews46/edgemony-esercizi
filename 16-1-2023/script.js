const productsElement = document.querySelector(".productsList");
const downloadDataBtn = document.querySelector(".button");
const loaderElement = document.querySelector(".loader");

downloadDataBtn.addEventListener("click", () => {
  loaderElement.textContent = "loading...";
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dataManupulation(data);
    })
    .catch((error) => {
      loaderElement.textContent = "c'è stato un errore";
      console.log(error);
    });
});

const dataManupulation = (data) => {
  loaderElement.textContent = "";

  data.forEach((item, index) => {
    console.log("--------");
    console.log(item.title);
    console.log(item.description);
    const divContainer = document.createElement("div");
    divContainer.className = "card";
    const titleElement = document.createElement("h1");
    titleElement.className = "title";
    titleElement.textContent = item.title;
    const imgEl = document.createElement("img");
    imgEl.className = "images";
    imgEl.src = item.images;
    const indexContainer = document.createElement("p");
    indexContainer.textContent = item.price;
    divContainer.appendChild(titleElement);
    divContainer.appendChild(indexContainer);
    divContainer.appendChild(imgEl);
    productsElement.appendChild(divContainer);
  });
};
