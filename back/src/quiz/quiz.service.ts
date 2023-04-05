import { response } from "express";
import repository, { Kind, Quizs, Optiontype } from "./quiz.repository";

interface ServiceType {
    Repository: repository;
}

interface CommandList {
    idx?: number;
    command: string;
}

interface Lists {
    difficulty: "easy" | "middle" | "hard";
    command: CommandList[];
}

export class QuizService {
    public Repository: repository;
    constructor({ Repository }: ServiceType) {
        this.Repository = Repository;
    }

    async refacList({ kind }: Kind) {
        try {
            const response = await this.Repository.getList({ kind });
            if (response) {
                const CommandList = (difficulty: string) => {
                    let a: CommandList[] = [];

                    response.filter((v) => v.difficulty === difficulty).map((v) => a.push({ command: v.command }));
                    return a;
                };
                let list: Lists[] = [
                    { difficulty: "easy", command: CommandList("easy") },
                    { difficulty: "middle", command: CommandList("middle") },
                    { difficulty: "hard", command: CommandList("hard") },
                ];
                return list;
            } else throw "잘못된 요청입니다.";
        } catch (error: any) {
            new Error(error);
        }
    }

    async refacPrompt({ kind, command }: Quizs) {
        try {
            const quiz = await this.Repository.getQuiz({ kind, command });
            if (quiz && quiz.options) {
                quiz.options = quiz.options.split(",").map((v: any) => {
                    const [command, prompt] = v.split(".");
                    return { command, prompt };
                });
            } else {
                delete quiz.options;
            }
            return quiz;
        } catch (error: any) {
            new Error(error);
        }
    }
}

//erService(UserRepository, jwt);
export default QuizService;

