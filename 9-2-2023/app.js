const express = require("express");
const hbs = require("hbs");

const app = express();
const PORT = 4000;
const myPreferences = {
  pet: "cane-jack russel",
  color: "chartreuse",
  season: "primavera",
};
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nome: "Andrea",
    titolo: "Corso Node.js",
    animal: "Tigre",
  });
});
app.get("/presentazione", (req, res) => {
  res.render("presentazione", {
    nome: "Andrea",
    cognome: "Cosentino",
    titolo: "Mi presento",
    ...myPreferences,
  });
});
app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.post("/presentazione", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Benvenuto/a ${name}`);
  }
});

app.listen(PORT, () => {
  console.log(`Server attivo alla port ${PORT}`);
});
