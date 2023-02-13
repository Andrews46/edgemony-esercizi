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

router.get("/login", (req, res) => {
  res.render("Login");
});

router.post("/login", (req, res) => {
  console.log(`${req.body.name} / ${req.body.password}`);

  //CONTROLLO CHE I DUE CAMPI SONO VUOTI
  if (!req.body.name || !req.body.password) {
    res.status(400);
    res.render("/login", { message: "aggiungi i dati richiesti" });
  }
  //SE I DUE CAMPI SONO PIENI, AVVIENE IL CONTROLLO DELL'UTENTE AUTORIZZATO
  else {
    let name = "Andrea";
    let password = "0000";
    let userAuth = { name: name, password: password };

    if (name == req.body.name && password == req.body.password) {
      req.session.user = userAuth;
      res.redirect("/formazione");
    } else {
      res.redirect("/warning");
    }
  }
});

function check(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/warning");
  }
}
router.get("/formazione", check, (req, res) => {
  res.render("formazione");
});

router.get("/warning", (req, res) => {
  res.render("Warning");
});
router.get("/logout", (req, res) => {
  req.session = null;
  res.redirect("/index");
});

router.get("*", (req, res) => {
  res.send("404 |  errore pagina non trovata");
});

module.exports = router;
