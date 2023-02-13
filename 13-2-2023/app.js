const express = require("express");
const router = require("./router");
const app = express();
const session = require("cookie-session");
const bodyParser = require("body-parser");
const hbs = require("hbs");

app.use("/", router);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: "la mia sessione" }));
app.set("view engine", "hbs");
app.use(express.static("public"));

hbs.registerPartials(__dirname + "/views/partials");

router.get("/index", (req, res) => {
  res.render("Index");
});

app.listen(4000, () => {
  console.log("server attivo");
});
