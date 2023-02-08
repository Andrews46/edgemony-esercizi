const express = require("express");
const articoli = require("./articoli");
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

//METODO HTTP = GET
app.get("/api/articoli", (req, res) => {
  res.status(200).json({ success: true, data: articoli });
});

//METODO HTTP POST
//Inviamo i dati alla nostra applicazione
app.post("/api/articoli", (req, res) => {
  const { id, title } = req.body;

  if (!id || !title) {
    return res
      .status(400)
      .json({ success: false, msg: "non trovo un dato necessario" });
  }
  return res
    .status(200)
    .json({ success: true, articoli: { id: id, title: title } });
});

// METODO HTTP POST
app.post("/api/articoli/new", (req, res) => {
  const { id, title } = req.body;
  if (!id || !title) {
    return res
      .status(400)
      .json({ success: false, msg: "non trovo un dato necessario" });
  }
  return res
    .status(201)
    .json({ success: true, data: [...articoli, { id: id, title: title }] });
});

//METODO POST CON DATO RICEVUTO DA FORM
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Benvenuto/a ${name}`);
  } else !name;
  return res
    .status(400)
    .json({ success: false, msg: `non c'è nessuno con questo: ${name}` });
});

//METODO HTTP PUT => /api/people/3
app.put("/api/articoli/:id", (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;

  const object = articoli.find((object) => object.id === Number(id));

  if (!object) {
    return res
      .status(400)
      .json({ success: false, msg: `non c'è nessuno con id: ${id}` });
  }

  const newObject = articoli.map((articoli) => {
    if (articoli.id === Number(id)) {
      articoli.title = title;
    } else if (articoli.id === Number(id)) {
      articoli.body = body;
    }
    return articoli;
  });
  res.status(200).json({ success: true, data: newObject });
});

//METODO HTTP DELETE => /api/people/3
app.delete("/api/articoli/:id", (req, res) => {
  const obj = articoli.find((item) => item.id === Number(req.params.id));

  if (!obj) {
    return res.status(400).json({
      success: false,
      msg: `non c'è nessuno con id: ${req.params.id}`,
    });
  }

  const newObj = articoli.filter((pippo) => pippo.id !== Number(req.params.id));
  return res.status(200).json({ success: true, data: newObj });
});

app.listen(PORT, () => {
  console.log(`Server ascolta su porta ${PORT}`);
});
