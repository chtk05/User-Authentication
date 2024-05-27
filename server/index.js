const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
dotenv.config();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`Connected to database successfully`))
  .catch((err) => console.log(err));

app.get("/hello", (req, res) => {
  res.send("hello wolrd");
});

app.listen(process.env.PORT, () => {
  console.log(process.env.PORT);
  console.log("Server is running on port");
});
