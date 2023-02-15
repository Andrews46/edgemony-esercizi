const { Collection } = require("mongodb");

const MongoClient = require("mongodb").MongoClient;
let url =
  "mongodb+srv://Andrea:V96oxA08nOHMP6k2@cluster0.e6ou1m6.mongodb.net/school/retryWrites=true";
//connessione al database
MongoClient.connect(url)
  .then((db) => {
    accountDb = db;
    collection = accountDb.db("school");
    console.log("database connesso");
  })
  .catch((err) => {
    console.log(err);
  });
// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   let dbase = db.db("school");
//   dbase.collection("courses", function (err, res) {
//     if (err) throw err;
//     console.log("Collection creata");
//     db.close();
//   });
// });

// await db.collection("school").insertOne({
//   nome: "courses",
// });
// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   let dbase = db.db("school");
//   db.school.insertOne(Collection),
//     {
//       nome: "courses",
//     };
// });
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("school");
  dbase.Collection("coursers", (err, res) => {
    if (err) throw err;
    console.log("Collezione creata");
    db.close();
  });
});

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("school");
  let myObj = [
    { nome: "Pippo", cognome: "disnay", matricola: "1" },
    { nome: "Sara", cognome: "walker", matricola: "2" },
    { nome: "Alex", cognome: "black", matricola: "3" },
    { nome: "Lara", cognome: "luna", matricola: "4" },
    { nome: "Pietro", cognome: "walk", matricola: "5" },
  ];
  dbase.collection("students").insertMany(myObj, (err, res) => {
    if (err) throw err;
    console.log(`Numero di record inseriti:${res.insertedCount}`);
    db.close;
  });
});

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("school");
  let myObj = [
    { nome_corso: "informatica" },
    { materia: "elettronica" },
    { materia: "sistemi" },
    { materia: "telecomunicazioni" },
    { nome_docente: "Pippo" },
    { nome_docente: "Pluto" },
    { nome_docente: "Paperino" },
  ];
  dbase.collection("coursers").insertMany(myObj, (err, res) => {
    if (err) throw err;
    db.close;
  });
});

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("school");
  dbase.collection("students").findOne({}, (err, res) => {
    if (err) throw err;
    console.log(res.nome);
    db.close();
  });
});

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("school");
  let query = { nome: "pippo" };
  dbase.collection("students").deleteMany(query, (err, obj) => {
    if (err) throw err;
    console.log(`${obj.result}records cancellati`);
    db.close();
  });
});
