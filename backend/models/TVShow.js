import mongoose from "mongoose";
const schema = mongoose.Schema;
import Review from "./Review.js";

const TVShowSchema = new schema({
  ShowID: {
    type: String,
    required: true,
  },
  reviews: [{ type: schema.Types.ObjectId, ref: "Review" }],
});

export default mongoose.model("TVShow", TVShowSchema);
