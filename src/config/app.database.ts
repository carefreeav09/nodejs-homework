import mongoose from "mongoose";

import dotenv from 'dotenv';

dotenv.config();

const initiateDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error, 'db connection ruined');
  }
}

export default initiateDatabase;