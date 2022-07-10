import express from "express";

const app = express();
const port = 9001;

app.get("/", (req, res) => {
  res.send("Hello from my-books-api-home");
});

app.listen(port, () => {
  console.log(`my-books-api-home listening at http://localhost:${port}`);
});
