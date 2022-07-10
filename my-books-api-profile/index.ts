import express from "express";

const app = express();
const port = 9003;

app.get("/", (req, res) => {
  res.send("Hello from my-books-api-profile");
});

app.listen(port, () => {
  console.log(`my-books-api-profile listening at http://localhost:${port}`);
});
