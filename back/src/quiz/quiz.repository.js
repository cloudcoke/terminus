class QuizRepository {
    constructor({ Quiz }) {
        this.Quiz = Quiz;
    }

    async getList({ kind }) {
        try {
            const list = await this.Quiz.findAll({ raw: true, where: { kind } });
            return list;
        } catch (error) {
            new Error(error);
        }
    }
    async getQuiz({ kind, command }) {
        try {
            const quiz = await this.Quiz.findAll({ raw: true, where: { kind, command } });
            return quiz;
        } catch (error) {
            new Error(error);
        }
    }
}

module.exports = QuizRepository;

