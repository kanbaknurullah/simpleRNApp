import * as dotenv from "dotenv";
dotenv.config()
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import authRoutes from "./routes/auth";
import bikeRoutes from "./routes/bike";

import morgan from "morgan";

const app = express();

mongoose.connect(process.env.DATABASE).then(() => console.log("DB connected")).catch((err) => console.log("DB connection error: ", err));

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan("dev"));

//route middlewares
app.use("/api", authRoutes);
app.use("/api", bikeRoutes);

app.listen(8000, () => console.log("Server running on port 8000"));