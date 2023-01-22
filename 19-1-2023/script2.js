import { functionForm, elimina } from "./fetch.js";
const formSubmit = document.querySelector("#postForm");
const formTitle = document.querySelector(".titles");
const formDescription = document.querySelector(".descriptions");
const formPrice = document.querySelector(".price");
const formCategory = document.querySelector(".category");
const formImage = document.querySelector(".image");

const formCategory2 = document.querySelector(".categoryForm");
const formCatName = document.querySelector(".categoryName");
const formCatImage = document.querySelector(".categoryImage");
// const formSport = document.querySelector(".categorySport");
// const formAutoMoto = document.querySelector(".categoryAutoMoto");
const deleteProductForm = document.querySelector(".form3");
const inputIdProduct = document.querySelector("#productId");
formCategory2.addEventListener("submit", (event) => {
  event.preventDefault();

  const newObj = {
    name: formCatName.value,
    image: formCatImage.value,
    // sport: formSport.value,
    // automoto: formAutoMoto.value,
  };
  console.log(newObj);
  functionForm(newObj, "categories");
});

formSubmit.addEventListener("submit", (event) => {
  event.preventDefault();
  const method = event.target[0].value;
  const idProduct = "/" + event.target[1].value;

  if (parseInt(formCategory.value) < 1) {
    alert("la categoria deve essere maggiore di 0");
    return;
  }

  const addSubmit = {
    title: formTitle.value,
    price: parseInt(formPrice.value),
    description: formDescription.value,
    categoryId: parseInt(formCategory.value),
    images: [formImage.value],
  };
  if (method === "POST") {
    funzionePost(newObj, "products", method);
  } else {
    functionForm(addSubmit, "products", method, idProduct);
  }
});
deleteProductForm.addEventListener("submit", (event) => {
  event.preventDefault();
  elimina("products", inputIdProduct.value);
});
