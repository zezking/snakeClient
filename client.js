const net = require("net");
const { setInterval } = require("timers");
const server = net.createServer();
/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: "192.168.1.66",
    port: 50541,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    console.log("Game Connected");
  });

  conn.on("connect", () => {
    conn.write("Name: ZEZ");
  });

  return conn;
};

module.exports = connect;
