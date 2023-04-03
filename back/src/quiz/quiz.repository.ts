import { Model, ModelCtor } from "sequelize-typescript";
import { PointDown, PointUp, Quiz, User } from "../../models";
export interface Kind {
    kind: string;
}

export interface Quizs extends Kind {
    difficulty: string | "easy" | "middle" | "hard";
    idx: string;
}

class QuizRepository {
    public Quiz: ModelCtor<Quiz>;
    constructor(Quiz: ModelCtor<Quiz>) {
        this.Quiz = Quiz;
    }

    async getList({ kind }: Kind) {
        try {
            const list = await this.Quiz.findAll({ raw: true, where: { kind } });
            return list;
        } catch (error: any) {
            new Error(error);
        }
    }
    async getQuiz({ kind, difficulty, idx }: Quizs) {
        try {
            const quiz = await this.Quiz.findAll({ raw: true, where: { kind, difficulty, idx } });
            return quiz;
        } catch (error: any) {
            new Error(error);
        }
    }
}

export default QuizRepository;

