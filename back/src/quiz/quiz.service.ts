import repository, { Kind, Quizs } from "./quiz.repository";

interface ServiceType {
    Repository: repository;
}

interface CommandList {
    idx?: number;
    command: string;
}

interface Checks {
    answer: string;
    quizAnswer: string;
    userId: string | undefined;
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

    // async checkid({ answer, quizAnswer, userId }: Checks) {
    //     if (answer === quizAnswer) {
    //         if (userId) await this.Repository.pointUp({ userId });
    //         return true;
    //     }
    //     return false;
    // }

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
                quiz.options = quiz.options.split("!@#").map((v: any) => {
                    const [command, prompt] = v.split("#@");
                    return { command, prompt };
                });
            } else {
                delete quiz.options;
            }
            return quiz;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    async answerCheck({ command, userId, answer }: Quizs) {
        try {
            const quiz = await this.Repository.getQuiz({ command });
            if (answer === quiz.answer) {
                let secceced;
                if (userId) {
                    secceced = await this.Repository.pointUp({ userId, quizId: quiz.id });
                    return secceced ? true : "이미 처리된 정답입니다.";
                }
                return true;
            }
            return false;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}

//erService(UserRepository, jwt);
export default QuizService;

