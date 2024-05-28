const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
dotenv.config();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// mongoose
//   .connect(process.env.MONGODB_URL)
//   .then(() => console.log(`Connected to database successfully`))
//   .catch((err) => console.log(err));
if (process.env.NODE_ENV !== "test") {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`Connected to database successfully`);
      app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
      });
    })
    .catch((err) => console.log(err));
}

app.use("/", require("./routes/authRoute"));

app.listen(process.env.PORT, () => {
  console.log(process.env.PORT);
  console.log("Server is running on port");
});
