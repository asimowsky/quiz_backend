const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
mongoose.connect(process.env.MONGODB_URL);

const quizRoutes = require("./routes/quiz");

app.use("/api/quiz", quizRoutes);

const port = process.env.PORT || 8085;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
