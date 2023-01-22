const formSubmit = document.querySelector("#postform");
const formTitle = document.querySelector("#titles");
const formDescription = document.querySelector(".descriptions");
const formPrice = document.querySelector("#prices");
const formCategory = document.querySelector("#category");
const formImage = document.querySelector("#images");

const formCategorys = document.querySelector(".containForm");
const formCatName = document.querySelector(".categoryName");
const formCatImage = document.querySelector(".categoryImage");
const deleteForm = document.querySelector(".eliminaForm");
const deleteInputProduct = document.querySelector("#productId");

const keyCat1 = document.querySelector("#cat-1");
const keyCat2 = document.querySelector("#cat-2");
const keyCat3 = document.querySelector("#cat-3");

let listaProdotti;
const select = document.querySelector("#categorySelect");

select.addEventListener("change", (e) => {
  console.log(select.value);
  filterByCategort(select.value);
});

keyCat1.addEventListener("click", () => {
  const filteredProducts = listaProdotti
    .filter((item) => item.category.id === 1)
    .filter((item) => item.price < 50);

  cardCreator(filteredProducts, ".products");
});
keyCat2.addEventListener("click", () => {
  const filteredProducts = listaProdotti
    .filter((item) => item.category.id === 2)
    .filter((item) => item.price < 50);

  cardCreator(filteredProducts, ".products");
});

keyCat3.addEventListener("click", () => {
  const filteredProducts = listaProdotti
    .filter((item) => item.category.id === 3)
    .filter((item) => item.price < 50);

  cardCreator(filteredProducts, ".products");
});

const filterByCategort = (idCat) => {
  const fiteredProducts = listaProdotti.filter(
    (item) => item.category.id === parseInt(idCat)
  );
  cardCreator(fiteredProducts, ".products");
};

const creazioneSelectCategories = (arrayCat) => {
  arrayCat.forEach((item) => {
    const optionValue = document.createElement("option");
    optionValue.textContent = item.name;
    optionValue.setAttribute("value", item.id);
    select.appendChild(optionValue);
  });
};

formCategorys.addEventListener("submit", (event) => {
  event.preventDefault();

  const newObj = {
    name: formCatName.value,
    image: [formCatImage.value],
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

const functionDelete = (callType, idProduct) => {
  fetch(`https://api.escuelajs.co/api/v1/` + callType + `/` + idProduct, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data !== true) {
        alert(`${callType} Non cancellato per i seguenti motivi: ` + data.name);
      } else {
        alert(`${callType} Cancellato correttamente`);
      }
    })
    .catch((e) => console.log("ERRORE: ", e));
};
deleteForm.addeEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  functionDelete("products", deleteInputProduct.value);
});

const funzionePost = (objBody, param, method, idProduct = "") => {
  fetch(`https://api.escuelajs.co/api/v1/` + param + idProduct, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objBody),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.statusCode >= 400 && data.statusCode < 500) {
        alert(`${param} Non caricato per i seguenti motivi ` + data.message[0]);
      } else {
        alert(`${param} Caricato correttamente`);
        console.log(data);
      }
    })
    .catch((e) => console.log("ERRORE: ", e));
};
