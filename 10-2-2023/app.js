const express = require("express");
const router = require("./router");
const app = express();

app.use("/", router);

app.set("view engine", "hbs");
// hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public"));

router.get("/index", (req, res) => {
  res.render("Index");
});

app.listen(4000, () => {
  console.log("server attivo");
});
