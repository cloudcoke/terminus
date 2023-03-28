const express = require("express");
const router = express.Router();
const { QuizContoller: controller } = require("./quiz.module");

router.get("/:kind", (req, res, next) => controller.getCategory(req, res, next));
router.get("/:kind/:command", (req, res, next) => controller.getQuiz(req, res, next));

module.exports = router;

