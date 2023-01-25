// Esercizio 1
// Sulla base della lezione del giorno, creare un mock in formato JSON.
// Riprendere uno degli esercizi passati (es. generatore di una card prodotto),
// eliminare eventuale chiamata fetch ed utilizzare il mock JSON creato per popolare
// i dati.

import myJson from "./mock.json" assert { type: "json" };
const mock = {};
const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);
const bodyEl = qS("body");

const cardCreation = (myJson) => {
  const { firstName, lastName, age, gender } = myJson;
  const containEl = cE("div");
  const nameEl = cE("h3");
  const ageEl = cE("p");
  const genderEl = cE("p");

  containEl.className = "contain";
  nameEl.textContent = firstName + " " + lastName;
  ageEl.textContent = "Age: " + age;
  genderEl.textContent = "Gender: " + gender;

  containEl.append(nameEl, ageEl, genderEl);
  bodyEl.appendChild(containEl);
  return containEl;
};

myJson.users.map((users) => bodyEl.appendChild(cardCreation(users)));

// Avanzato
// Creare un grafico a piacere basato su una api a scelta oppure su un mock
// costruito ad hoc.

const GET = async (endpoint) => {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  return data;
};

const graficGruppS = (value, usersBloodGroup) => {
  const wrapper = cE(div);
  const textEl = cE(h3);
  const status = cE(div);

  wrapper.className = "statusGroup";
  textEl.textContent = value;
  status.className = "statusBloodGroup";
  status.style.height = `${usersBloodGroup * 10}px`;

  wrapper.append(textEl, status);
  return wrapper;
};
const BASE_URL = "https://dummyjson.com/users";
const wrapperEL = qS(".wrapper");
let bloodApositivo,
  bloodAnegativo,
  bloodBpositivo,
  bloodBnegativo,
  bloodAbpositivo,
  bloodAbnegativo,
  zeroPositivo,
  zeroNegativo;

let count = [];
GET("users").then(({ users }) => {
  const usersBlood = users.map((users) => usersBlood);
});
graficGruppS(usersBloodGroup);
