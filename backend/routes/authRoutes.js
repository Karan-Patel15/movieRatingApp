import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  let response = { auth: 0, user: null, token: null };
  try {
    const user = await User.findOne({ username: username });
    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        const token = jwt.sign({ username }, "SECRET_KEY", {
          expiresIn: 86400,
        }); // change secret key to secure key in .env file
        response = {
          auth: 1,
          user: username,
          token: token,
        };
        return res.json(response);
      }
    }
  } catch (err) {
    console.log(err);
  }
  res.json(response);
});

router.post("/register", async (req, res) => {
  console.log("/register");
  const { username, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = new User({
    username: username,
    password: hashedPassword,
    salt: salt,
  });
  user.save();
  const token = jwt.sign({ username }, "SECRET_KEY", {
    expiresIn: 86400,
  }); // change secret key to secure key in .env file
  const response = {
    user: username,
    token: token,
  };
  res.json(response);
});

export default router;
