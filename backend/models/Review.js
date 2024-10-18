import mongoose from "mongoose";
const schema = mongoose.Schema;

const ReviewSchema = new schema({
  username: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Review", ReviewSchema);
