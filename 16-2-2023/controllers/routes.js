const express = require("express");
let router = express.Router();

const mongoose = require("mongoose");
const Auto = mongoose.model("autoModel");

router.get("/", (req, res) => {
  res.render("addupdate", {
    viewTitle: "Inserisci una auto",
  });
});

router.post("/", (req, res) => {
  if (req.body._id == "") insertRecord(req, res);
  else updateRecord(req, res);
});

function insertRecord(req, res) {
  // collegamento con lo schema mongoose
  let auto = new Auto();
  auto.marca = req.body.marca;
  auto.modello = req.body.modello;
  auto.cilindrata = req.body.cilindrata;
  auto.provenienza = req.body.provenienza;
  auto.motorizzazione = req.body.motorizzazione;
  auto.consumo = req.body.consumo;
  auto.velocita_max = req.body.velocita_max;
  auto.save((err, doc) => {
    if (!err) res.redirect("list");
    else console.log(`Errore nell' inserimento: ${err}`);
  });
}

function updateRecord(req, res) {
  Auto.updateOne({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
    if (!err) {
      res.redirect("list");
    } else {
      console.log("Errore durante l' update : " + err);
    }
  });
}

router.get("/list", (req, res) => {
  Auto.find((err, docs) => {
    if (!err) {
      res.render("list", {
        autolist: docs,
      });
    } else {
      console.log(`Errore ${err}`);
    }
  });
});

router.get("/:id", (req, res) => {
  Auto.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.render("addupdate", {
        viewTitle: "Aggiornamento",
        auto: doc,
      });
    }
  });
});

router.get("/delete/:id", (req, res) => {
  Auto.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect("/list");
    } else {
      console.log(`Errore ${err}`);
    }
  });
});

module.exports = router;
