const express = require("express")
const router = express.Router()
const authRouter = require("../src/authes/auth.route")

router.use("/auth", authRouter)

module.exports = router
