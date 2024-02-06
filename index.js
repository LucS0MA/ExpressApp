const app = require("./app");

const port = 5000;

app
  .listen(port, () => {
    console.info(`Server is listening on port localhost:${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
