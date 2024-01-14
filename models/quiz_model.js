const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  userdetails: {
    name: String,
    surname: String,
    email: String,
    phone: String,
  },
  questions: mongoose.Schema.Types.Mixed,
  date: { type: Date, default: Date.now },
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
