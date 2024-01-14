const Quiz = require("../models/quiz_model");

const createQuiz = async (req, res, next) => {
  try {
    const { userdetails, questions } = req.body;
    const formattedQuestions = Object.entries(questions).map(
      ([question, answer]) => ({ question, answer })
    );

    const savedQuiz = await new Quiz({
      userdetails,
      questions: formattedQuestions,
    }).save();

    res.status(201).json({
      userDetails: savedQuiz.userdetails,
      questions: savedQuiz.questions.map(({ question, answer }) => ({
        question,
        answer,
      })),
      quizId: savedQuiz._id,
      date: savedQuiz.date,
    });
  } catch (err) {
    next(err);
  }
};

const getAllQuizes = async (req, res, next) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createQuiz,
  getAllQuizes,
};
