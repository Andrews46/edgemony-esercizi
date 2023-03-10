const express = require("express");
const { users } = require("./data");
const app = express();
const PORT = 3000;

//middleware per risorse statiche
app.use(express.static("./public"));
//middleware middleware estendono l'uso degli url a tutti gli oggetti compresi sorgenti di dati
//da oggetti innestati e da form
//middleware json estende la gestione del formato per tutti i metodi a livello globale dell'applicazione
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTING applicazione
app.get("/api/users", (req, res) => {
  res.status(200).json({ success: true, data: users });
});

//Inviamo i dati alla nostra applicazione
app.post("/api/users", (req, res) => {
  const { id, name } = req.body; //contenuto della richiesta post

  if (!id || !name) {
    return res.status(400).json({ success: false, msg: "non trovo il dato" });
  }
  return res
    .status(200)
    .json({ success: true, person: { id: id, name: name } });
});

app.listen(PORT, () => {
  console.log(`Server in funzione alla porta ${PORT}`);
});
