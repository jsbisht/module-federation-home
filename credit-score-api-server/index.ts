import express from "express";

const app = express();
const port = 8888;

app.get("/", (req, res) => {
  res.send("Hello from credit-score-api-server");
});

app.listen(port, () => {
  console.log(`credit-score-api-server listening at http://localhost:${port}`);
});
