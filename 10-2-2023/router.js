const express = require("express");

const router = express.Router();

router.use(express.static("./public"));

router.get("/index", (req, res) => {
  res.render("index", {
    titolo: "HoMe PaGe",
  });
});
router.get("/about", (req, res) => {
  res.render("About");
});

router.get("/formazione", (req, res) => {
  res.render("Formazione", {
    titolo: "Formazione1",
  });
});

router.get("/web-design", (req, res) => {
  res.render("Web-design", {
    titolo: "Web-Design",
  });
});
router.get("/contatti", (req, res) => {
  res.render("Contatti", {
    titolo: "CoNtAtTi",
  });
});

router.get("*", (req, res) => {
  res.send("404 |  errore pagina non trovata");
});

module.exports = router;
