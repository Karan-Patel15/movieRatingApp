import express from "express";
import TVShow from "../models/TVShow.js";
import Review from "../models/Review.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const show = await Movie.find({ ShowID: `${id}` }).populate("reviews");
    if (show) {
      res.json(show[0]);
    } else {
      res.json({ reviews: [] });
    }
  } catch (err) {
    console.log(err);
  }
});

export default router;
