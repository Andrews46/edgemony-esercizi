const mongoose = require("mongoose");

// creazione di un oggetto della classe schema per gestire i miei dati
var autoSchema = new mongoose.Schema({
  marca: {
    type: String,
  },
  modello: {
    type: String,
  },
  cilindrata: {
    type: String,
  },
  provenienza: {
    type: String,
  },
  motorizzazione: {
    type: String,
  },
  consumo: {
    type: String,
  },
  velocità_max: {
    type: String,
  },
});

// collezione notaModel viene messa al plurale dal sistema Mongoose
mongoose.model("autoModel", autoSchema);
