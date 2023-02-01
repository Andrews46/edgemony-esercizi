const http = require("http");
const os = require("os");
let utente = os.userInfo();
let piattaforma = os.platform();
let data = new Date();

let messaggio = `<!doctype html>
<html>
<head>
</head>
<body>
l'utente <b>${utente.username} </b> 
ha avviato l'app il giorno 
<b>${data}</b> usando la piattaforma: ${piattaforma}
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === "/") res.end(messaggio);
  else if (req.url === "/index") res.end("prodotti");
  else if (req.url === "/index2") res.end("cliente");
  else res.writeHead(404);
  res.end("pagina non trovata");
});

server.listen(3001);
console.log(messaggio);
