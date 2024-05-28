const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const {
  registerUser,
  loginUser,
  getProfile,
  logout,
} = require("../controllers/authController");

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.post("/register", registerUser);
app.post("/login", loginUser);
app.get("/profile", getProfile);
app.post("/logout", logout);

module.exports = app;
