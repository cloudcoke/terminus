const express = require("express");
const router = express.Router();

router.get("/:kind", (req, res, next));
router.get("/:kind/:command", (req, res, next));

module.exports = router;

