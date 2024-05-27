const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/jwt.js");

const {
  registerUser,
  loginUser,
  getProfile,
  logout,
} = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/logout", logout);
router.get("/profile", verifyToken, getProfile);
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
