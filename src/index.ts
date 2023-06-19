import express, { Request, Response } from "express";

import appRouter from './config/app.router';
import initiateDatabase from "./config/app.database";

const port = 5000;
const app = express();

initiateDatabase();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("yo homework day 2");
});

app.use("/api/v1", appRouter);

app.listen(port, () => {
  console.log(`server is up baby at localhost ${port}`);
});
