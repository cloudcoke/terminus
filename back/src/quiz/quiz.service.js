class QuizService {
    constructor({ QuizRepository }) {
        this.QuizRepository = QuizRepository
    }

    async refacList({ kind }) {
        try {
            /*예시
            list= [{
                difficulty : "easy"
                command: [{command:"ls"},{command:"cd"}]
            }]*/
            // const List = await this.QuizRepository.getList({ kind });
            let list
            switch (kind) {
                case "linux":
                    list = [
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
                    ]
                    break
                case "sql":
                    list = [
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
                    ]
            }
            return list
        } catch (error) {
            new Error(error)
        }
    }
    async refacPrompt({ kind, command }) {
        try {
            const quiz = await this.QuizRepository.getQuiz({ kind, command })
            return quiz
        } catch (error) {
            new Error(error)
        }
    }
}

module.exports = QuizService
