const express = require("express");
const router = express.Router();
const { UserContoller: controller } = require("./user.module");

router.get("/", (req, res, next) => controller.profile(req, res, next));
router.put("/", (req, res, next) => controller.fixProfile(req, res, next));
router.post("/", (req, res, next) => controller.signUp(req, res, next));
router.post("/check", (req, res, next) => controller.checkId(req, res, next));

module.exports = router;

