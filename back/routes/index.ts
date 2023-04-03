import express from "express";
import userRouter from "../src/user/user.route";
import authRouter from "../src/auth/auth.route";
import quizRouter from "../src/quiz/quiz.route";

const router = express.Router();

router.use("/quiz", quizRouter);
router.use("/user", userRouter);
router.use("/auth", authRouter);

export default router;

