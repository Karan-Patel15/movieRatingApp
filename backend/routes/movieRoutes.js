import express from "express";
import Movie from "../models/Movie.js";
import Review from "../models/Review.js";

const router = express.Router();
console.log("INSIDE MOVIE ROUTES");
router.get("/:id", async (req, res) => {
  console.log("BACKEND GET REVIEWS");
  const { id } = req.params;
  try {
    const movie = await Movie.find({ MovieId: `${id}` }).populate("reviews");
    console.log(id);
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
