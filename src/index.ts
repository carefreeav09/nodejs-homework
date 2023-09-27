import express, { Request, Response } from "express";
import appRouter from './config/app.router';
import initiateDatabase from "./config/app.database";

import cors from 'cors';

const port = 5000;
const app = express();

initiateDatabase();

app.use(express.json());
app.use(cors())
//
app.use('/uploads', express.static('uploads'));
app.use('/file', express.static('file'));

app.get("/", (req: Request, res: Response) => {
  res.send("Success");
});

app.use("/api/v1", appRouter);

app.listen(port, () => {
  console.log(`server is up baby at localhost ${port}`);
});

//TODO: setup logger, JWT and middlewares -> also free commit lol