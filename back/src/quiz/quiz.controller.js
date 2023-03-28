class QuizContoller {
    constructor({ QuizService }) {
        this.QuizService = QuizService;
    }

    async getCategory(req, res, next) {
        try {
            const { kind } = req.params;
            const list = await this.QuizService.refacList({ kind });
            res.json(list);
        } catch (error) {
            next(error);
        }
    }
    async getQuiz(req, res, next) {
        try {
            const { kind, command } = req.params;
            const Quiz = await this.QuizService.refacPrompt({ kind, command });
            res.json(Quiz);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = QuizContoller;

