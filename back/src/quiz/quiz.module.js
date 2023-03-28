const {
    sequelize: {
        models: { Quiz },
    },
} = require("../../models");

const repository = require("./quiz.repository");
const service = require("./quiz.service");
const controller = require("./quiz.controller");

const QuizRepository = new repository({ Quiz });
const QuizService = new service({ QuizRepository });
const QuizContoller = new controller({ QuizService });

module.exports = {
    QuizContoller,
};

