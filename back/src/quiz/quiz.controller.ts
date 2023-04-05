import { Request, Response, NextFunction } from "express";
import { globaltype } from "../../@types/global";
import { QuizService } from "./quiz.service";

interface ServiceType {
    QuizService: QuizService;
}

interface QuizContollerMethods {
    getCategory: globaltype.Controller;
    getQuiz: globaltype.Controller;
}

class QuizContoller implements QuizContollerMethods {
    public QuizService: QuizService;
    constructor({ QuizService }: ServiceType) {
        this.QuizService = QuizService;
    }

    getCategory: globaltype.Controller = async (req, res, next) => {
        try {
            const { kind } = req.params;
            const list = await this.QuizService.refacList({ kind });
            res.json(list);
        } catch (error) {
            next(error);
        }
    };

    async getQuiz(req: Request, res: Response, next: NextFunction) {
        try {
            const { kind, command } = req.params;
            const Quiz = await this.QuizService.refacPrompt({ kind, command });
            res.json(Quiz);
        } catch (error) {
            next(error);
        }
    }

    async answer(req: Request, res: Response, next: NextFunction) {
        try {
            const { command, userId, answer } = req.body;
            const check = await this.QuizService.answerCheck({ command, userId, answer });
            if (check) res.json({ data: check, status: 200 });
            else res.json({ data: check, status: 401, messege: "정답이 아닙니다" });
        } catch (error) {
            next(error);
        }
    }
}

export default QuizContoller;

