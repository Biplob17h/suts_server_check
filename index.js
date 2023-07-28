import express from "express";
import colors from "colors";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/mongoDB.js";

//init express
const app = express();

//config dotenv
dotenv.config();
const PORT = process.env.PORT || 4040;

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// homepage
app.get("/", (req, res) => {
  res.send(`<h1>Wellcome to S.U.T.S server</h1>`);
});

//server run
connectDB();
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`.bgGreen);
});
