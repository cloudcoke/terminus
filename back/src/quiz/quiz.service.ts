import repository, { Kind, Quizs } from "./quiz.repository";

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
            let list: Lists[];
            switch (kind) {
                case "linux":
                    return (list = [
                        {
                            difficulty: "easy",
                            command: [
                                { command: "1" },
                                { command: "2" },
                                { command: "3" },
                                { command: "4" },
                                { command: "5" },
                                { command: "6" },
                                { command: "7" },
                                { command: "8" },
                                { command: "9" },
                                { command: "10" },
                            ],
                        },
                        {
                            difficulty: "middle",
                            command: [
                                { idx: 1, command: "11" },
                                { command: "12" },
                                { command: "13" },
                                { command: "14" },
                                { command: "15" },
                                { command: "16" },
                                { command: "17" },
                                { command: "18" },
                                { command: "19" },
                                { command: "20" },
                            ],
                        },
                        {
                            difficulty: "hard",
                            command: [
                                { command: "21" },
                                { command: "22" },
                                { command: "23" },
                                { command: "24" },
                                { command: "25" },
                                { command: "26" },
                                { command: "27" },
                                { command: "28" },
                                { command: "29" },
                                { command: "30" },
                            ],
                        },
                    ]);
                case "sql":
                    return (list = [
                        {
                            difficulty: "easy",
                            command: [
                                { command: "sql1" },
                                { command: "sql2" },
                                { command: "3" },
                                { command: "4" },
                                { command: "5" },
                                { command: "6" },
                                { command: "7" },
                                { command: "8" },
                                { command: "9" },
                                { command: "10" },
                            ],
                        },
                        {
                            difficulty: "middle",
                            command: [
                                { command: "11" },
                                { command: "12" },
                                { command: "13" },
                                { command: "14" },
                                { command: "15" },
                                { command: "16" },
                                { command: "17" },
                                { command: "18" },
                                { command: "19" },
                                { command: "20" },
                            ],
                        },
                        {
                            difficulty: "hard",
                            command: [
                                { command: "21" },
                                { command: "22" },
                                { command: "23" },
                                { command: "24" },
                                { command: "25" },
                                { command: "26" },
                                { command: "27" },
                                { command: "28" },
                                { command: "29" },
                                { command: "30" },
                            ],
                        },
                    ]);
            }
            return list!;
        } catch (error: any) {
            new Error(error);
        }
    }
    async refacPrompt({ kind, difficulty, idx }: Quizs) {
        try {
            const quiz = await this.Repository.getQuiz({ kind, difficulty, idx });
            return quiz;
        } catch (error: any) {
            new Error(error);
        }
    }
}

// export const Service = new UserService(UserRepository, jwt);
export default QuizService;

