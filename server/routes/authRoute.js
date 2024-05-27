const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getProfile,
  logout,
} = require("../controllers/authController");

router.post("/register", registerUser);
router.get("/logout", logout);
router.get("/profile", getProfile);
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
