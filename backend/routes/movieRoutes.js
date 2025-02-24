import express from "express";
import Movie from "../models/Movie.js";
import Review from "../models/Review.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.find({ MovieId: `${id}` }).populate("reviews");
    if (movie) {
      res.json(movie[0]);
    } else {
      res.json({ reviews: [] });
    }
  } catch (err) {
    console.log(err);
  }
});

export default router;
