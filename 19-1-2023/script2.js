const formSubmit = document.querySelector("form");
const formTitle = document.querySelector(".titles");
const formDescription = document.querySelector(".descriptions");
const formPrice = document.querySelector(".price");
const formCategory = document.querySelector(".category");
const formImage = document.querySelector(".image");

const formCategory2 = document.querySelector(".categoryForm");
const formCatName = document.querySelector(".categoryName");
const formCatImage = document.querySelector(".categoryImage");
const formSport = document.querySelector(".categorySport");
const formAutoMoto = document.querySelector(".categoryAutoMoto");
formCategory2.addEventListener("submit", (event) => {
  event.preventDefault();
  const newObj = {
    name: formCatName.value,
    image: formCatImage.value,
    sport: formSport.value,
    automoto: formAutoMoto.value,
  };
  console.log(newObj);
  functionForm(newObj, "categories");
});

formSubmit.addEventListener("submit", (event) => {
  event.preventDefault();

  const addSubmit = {
    title: formTitle.value,
    price: parseInt(formPrice.value),
    description: formDescription.value,
    categoryId: parseInt(formCategory.value),
    images: [formImage.value],
  };
  functionForm(addSubmit, "product");
});

const functionForm = (objBody, param) => {
  fetch("https://api.escuelajs.co/api/v1/categories" + param, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objBody),
  })
    .then((res) => res.json())
    .then((data) => console.log("RISPOSTA POST: ", data))
    .catch((e) => console.log("ERRORE: ", e));
};
