import mongoose from "mongoose";
const schema = mongoose.Schema;
import Review from "./Review.js";

const MovieSchema = new schema({
  MovieID: {
    type: String,
    required: true,
  },
  reviews: [{ type: schema.Types.ObjectId, ref: "Review" }],
});

export default mongoose.model("Movie", MovieSchema);
