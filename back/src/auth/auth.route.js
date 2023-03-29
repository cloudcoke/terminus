const express = require("express");
const router = express.Router();
const { AuthContoller: controller } = require("./auth.module");

router.post("/", (req, res, next) => controller.logIn(req, res, next));
router.get("/", (req, res, next) => controller.logIn(req, res, next));

module.exports = router;

