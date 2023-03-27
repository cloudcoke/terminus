const express = require("express")
const router = express.Router()
const { authController: controller } = require("./auth.module")

router.get("/", (req, res, next) => controller.getTest(req, res, next))

module.exports = router
