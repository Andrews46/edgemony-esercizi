const express = require("express");
const app = express();
const PORT = 8100;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.get("/hobby", (req, res) => {
  res.sendFile(__dirname + "/public/hobby.html");
});
app.get("/interessi", (req, res) => {
  res.sendFile(__dirname + "/public/interessi.html");
});

app.get("/index4", (req, res) => {
  res.send("404 | pagina non trovata");
});

app.listen(PORT, () => {
  console.log(`server attivo ${PORT}`);
});
