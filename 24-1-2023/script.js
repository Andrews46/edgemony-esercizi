import { GET } from "./api.js";

const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);
const bodyEl = qS("body");

const cardCreation = (data) => {
  const { firstName, lastName, age, gender, image } = data;
  const containEl = cE("div");
  const imageEl = cE("img");
  const nameEl = cE("h3");
  const ageEl = cE("p");
  const genderEl = cE("p");

  containEl.className = "contain";
  imageEl.setAttribute = ("src", image);
  imageEl.setAttribute = ("alt", image);
  console.log(image);
  nameEl.textContent = firstName + " " + lastName;
  ageEl.textContent = "Age: " + age;
  genderEl.textContent = "Gender: " + gender;

  containEl.append(imageEl, nameEl, ageEl, genderEl);
  bodyEl.appendChild(containEl);
  return containEl;
};

GET("users").then((data) =>
  data.users.map((users) => bodyEl.appendChild(cardCreation(users)))
);

const checkboxName = qS("form");
