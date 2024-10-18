import express from "express";
const app = express();
const PORT = 3000;
import mongoose from "mongoose";
import authRouter from "./routes/authRoutes.js";
import movieRouter from "./routes/movieRoutes.js";
import cors from "cors";

//Middle wares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

console.log("BEFORE ROUTERS");

app.use("/getReviews", movieRouter);
app.use("/", authRouter);

mongoose
  .connect("mongodb://127.0.0.1:27017/movieRatingApp")
  .then(() => {
    console.log("Mongo Connection Open");
  })
  .catch((err) => {
    console.log("Mongo Connection Error");
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Listening On Port ${PORT}`);
});

app.get("*", (req, res) => {
  console.log("PAGE NOT FOUND");
});
