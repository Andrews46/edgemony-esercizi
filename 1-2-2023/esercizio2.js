const http = require("http");
const os = require("os");
let utente = os.userInfo();
let articoli = "articoli";
let utenti = "utenti";
let commenti = "commenti";
const PORT = 3001;

let messaggio = `<!doctype html>
<html>
<head>
</head>
<body>
l'utente <b>${utente.username} </b> 
<h1>${articoli}</h1>
<h1>${commenti}</h1>
<h1>${utenti}</h1>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === "/") res.end(messaggio);
  else if (req.url === "/index") res.end("prodotti");
  else if (req.url === "/index2") res.end("cliente");
  else res.writeHead(404);
  res.end("pagina non trovata");
  server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.end("server avviato");
    console.log("server avviato");
  });
});

server.listen(3001);
console.log("utenti", "commenti", "articoli");
