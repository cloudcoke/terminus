class QuizService {
    constructor({ QuizRepository }) {
        this.QuizRepository = QuizRepository;
    }

    async refacList({ kind }) {
        try {
            /*예시
            list= [{
                difficulty : "easy"
                command: [{command:"ls"},{command:"cd"}]
            }]*/
            const List = await this.QuizRepository.getList({ kind });
            const list = [
                {
                    difficulty: "easy",
                    command: [{ command: "ls" }, { command: "cd" }],
                },
            ];
            return list;
        } catch (error) {
            new Error(error);
        }
    }
    async refacPrompt({ kind, command }) {
        try {
            const quiz = await this.QuizRepository.getQuiz({ kind, command });
            return quiz;
        } catch (error) {
            new Error(error);
        }
    }
}

module.exports = QuizService;

