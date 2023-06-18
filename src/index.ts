import express, { Request, Response } from "express";

import userRouter from './user/user.router';

const port = 5000;
const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("yo homework day 2");
});

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`server is up baby at localhost ${port}`);
});
