//metodo require() => richiamo il modulo built-in

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/")
    //indica la pagina di ingresso del localhost
    //output richiesto
    res.end("pagina iniziale");
  else if (req.url === "/pagina2") res.end("studenti");
  else if (req.url === "/pagina3") res.end("corsi");
  else res.writeHead(404);
  res.end("pagina non trovata");
});

server.listen(3000);
