const formSubmit = document.querySelector("form");
const formTitle = document.querySelector(".titles");
const formDescription = document.querySelector(".descriptions");
const formPrice = document.querySelector(".price");
const formCategory = document.querySelector(".category");
const formImage = document.querySelector(".image");
formSubmit.addEventListener("submit", (event) => {
  event.preventDefault();

  const addSubmit = {
    title: formTitle.value,
    price: parseInt(formPrice.value),
    description: formDescription.value,
    categoryId: parseInt(formCategory.value),
    images: [formImage.value],
  };
  functionForm(addSubmit);
});

const functionForm = (objBody) => {
  fetch("https://api.escuelajs.co/api/v1/products", {
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
