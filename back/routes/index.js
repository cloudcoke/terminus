const express = require("express");
const router = express.Router();
const userRouter = require("../src/user/user.route");
const authRouter = require("../src/auth/auth.route");
const quizRouter = require("../src/quiz/quiz.route");

router.use("/quiz", quizRouter);
router.use("/user", userRouter);
router.use("/auth", authRouter);

module.exports = router;
