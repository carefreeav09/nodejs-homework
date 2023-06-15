const express = require("express");

const port = 5000;
const app = express();

app.use(express.json());

const userRouter = require("./user.router");

app.get("/", (req, res) => {
  res.send("yo homework day 2");
});

app.use("/user", userRouter);

app.listen(port, (req, res) => {
  console.log(`server is up baby at localhost ${port}`);
});
