import mongoose from "mongoose";
const schema = mongoose.Schema;

const UserSchema = new schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
});

export default mongoose.model("User", UserSchema);
