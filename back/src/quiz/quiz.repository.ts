import sequelize, { PointUp } from "../../models";
import { ClassModels, Users } from "../user/user.repository";

export interface Kind {
    kind?: string;
}

export interface Quizs extends Kind {
    userId?: string;
    command: string;
    answer?: string;
}

interface Points extends Users {
    quizId: number;
}

export interface Optiontype {
    command: string;
    prompt: string;
}

class QuizRepository {
    public Quiz;
    public PointUp;
    public PointDown;
    constructor({ Quiz, PointUp, PointDown }: ClassModels) {
        this.Quiz = Quiz;
        this.PointUp = PointUp;
        this.PointDown = PointDown;
    }

    async getList({ kind }: Kind) {
        try {
            const list = await this.Quiz.findAll({ raw: true, where: { category: kind } });
            return list;
        } catch (error: any) {
            new Error(error);
        }
    }
    async getQuiz({ command }: Quizs): Promise<any> {
        try {
            const [[questions]] = await sequelize.query(
                `SELECT 
        A.id,
        A.exam, 
        A.command, 
        A.answer,
        A.prompt,
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

    async pointUp({ userId, quizId }: Points) {
        try {
            const succeeds = await this.PointUp.findOrCreate({ where: { userId, quizId, point: 10 } });
            return succeeds[1];
        } catch (error: any) {
            throw new Error(error);
        }
    }
}

export default QuizRepository;

