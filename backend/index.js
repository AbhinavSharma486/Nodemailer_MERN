import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/api/auth', authRoutes);
app.use('/api/user', userRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
  connectDB();
});