const express = require("express");

const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/:id", (req, res) => {
  res.send(`L'id indicato è:${req.params.id}`);
});

app.get("/users/:name/:id", (req, res) => {
  res.send(
    `l'utente ha il seguente id:${req.params.id} e si chiama ${req.params.name}`
  );
});

app.get("/login/:id([0-9]{4})", (req, res) => {
  res.send(`id ${req.params.id}inserito è lungo 4 caratteri`);
});

app.get("/users/:valore", (req, res) => {
  res.send(`valore = ${req.params.valore}`);
});

app.listen(PORT, () => {
  console.log(`server attivo sulla porta ${PORT}`);
});
