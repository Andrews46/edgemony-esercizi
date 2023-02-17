const express = require("express");
let routerLibri = express.Router();

//const mongoose = require('mongoose');

//const Libro = mongoose.model('libroModel');

routerLibri.get("/", (req, res) => {
  res.render("addupbook", {
    viewTitle: "Inserisci un libro",
  });
});

routerLibri.get("/bookList", (req, res) => {
  res.render("listBook", {
    viewTitle: "vedi i libri",
  });
});
routerLibri.post("/", (req, res) => {
  if (req.body._id == "") insertRecord(req, res);
  else updateRecord(req, res);
});

routerLibri.delete("/:id", getSub, async (req, res) => {
  try {
    await res.sub.remove();
    res.json({ message: "utente cancellato" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

async function getSub(req, res, next) {
  let sub;
  try {
    sub = await Subscriber.findById(req.params.id);
    if (sub == null) {
      return res.status(404).json({ message: "Utente non trovato" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.sub = sub;
  next();
}

module.exports = routerLibri;
