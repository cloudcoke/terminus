import { Model, ModelCtor } from "sequelize-typescript";
import sequelize, { PointDown, PointUp, Quiz, User } from "../../models";
import Options from "../../models/option.model";
export interface Kind {
    kind: string;
}

export interface Quizs extends Kind {
    command: string;
}

export interface Optiontype {
    command: string;
    prompt: string;
}

interface Quiztype {
    id: number;
    exam: string;
    command: string;
    answer: string | undefined;
    setting: string | undefined;
    hint: string | undefined;
    difficulty: "easy" | "middle" | "hard";
    category: "linux" | "mysql";
    options: Optiontype[] | undefined;
}

class QuizRepository {
    public Quiz: ModelCtor<Quiz>;
    constructor(Quiz: ModelCtor<Quiz>) {
        this.Quiz = Quiz;
    }

    async getList({ kind }: Kind) {
        try {
            const list = await this.Quiz.findAll({ raw: true, where: { category: kind } });
            return list;
        } catch (error: any) {
            new Error(error);
        }
    }
    async getQuiz({ kind, command }: Quizs): Promise<any> {
        try {
            const [[questions]] = await sequelize.query(
                `SELECT 
        A.id,
        A.exam, 
        A.command, 
        A.answer,
        A.setting, 
        A.hint,
        A.difficulty,
        A.category,
        GROUP_CONCAT(B.optioncommand,".", B.prompt SEPARATOR ', ') AS options
    FROM Quiz AS A
    LEFT JOIN Options AS B ON A.command = B.command
    WHERE A.command = "${command}"
    GROUP BY A.command;
`,
                { logging: false }
            );
            // this.Quiz.findAll({
            //     raw: true,
            //     where: { command },
            //     group: command,
            //     include: [
            //         {
            //             model: Options,
            //             required: true,
            //             attributes: ["prompt", "optioncommand"],
            //         },
            //     ],
            // });
            return questions;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}

export default QuizRepository;

