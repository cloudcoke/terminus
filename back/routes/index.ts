import express from "express"
import userRouter from "../src/user/user.route"
import authRouter from "../src/auth/auth.route"
import quizRouter from "../src/quiz/quiz.route"
import commentRouter from "../src/comment/comment.route"

const router = express.Router()

router.use("/quiz", quizRouter)
router.use("/user", userRouter)
router.use("/auth", authRouter)
router.use("/comment", commentRouter)

export default router
