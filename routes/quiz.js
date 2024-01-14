const express = require("express");
const { createQuiz, getAllQuizes } = require("../services/quizService");

const router = express.Router();

router.post("/create", createQuiz);
router.get("/", getAllQuizes);

module.exports = router;
// MONGO PW 3d1Uhl0ezlNmNrJM

// admin pw: Z1fLX8J0f5qZHgDl

//mongodb+srv://admin:Z1fLX8J0f5qZHgDl@cluster0.5q9vhcr.mongodb.net/?retryWrites=true&w=majority
