const setupInput = function (connect) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = process.stdin.on("data", (key) => {
    if (key === "\u0003") {
      process.exit();
    }

    if (key.name === "ArrowUp") {
      conn.write("Move: up");
    }
  });

  return stdin;
};

module.exports = setupInput;
