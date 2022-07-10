import express from "express";

const app = express();
const port = 9002;

app.get("/", (req, res) => {
  res.send("Hello from my-books-api-upsell");
});

app.listen(port, () => {
  console.log(`my-books-api-upsell listening at http://localhost:${port}`);
});
