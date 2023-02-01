const net = require("net");

const HOSTNAME = "localhost";
const PORT = 5000;

const socket = net.connect(PORT, HOSTNAME);

socket.write("Andrea");

socket.on("data", (data) => {
  console.log(data.toString());
});
