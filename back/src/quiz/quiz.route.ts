import express, { Router, Request, Response, NextFunction } from "express";
import { QuizContoller } from "./quiz.module";
const router: Router = express.Router();

//profile
router.get("/:kind", (req: Request, res: Response, next: NextFunction) => QuizContoller.getCategory(req, res, next));
router.get("/:kind/:difficulty/:idx", (req: Request, res: Response, next: NextFunction) => QuizContoller.getQuiz(req, res, next));

export default router;

