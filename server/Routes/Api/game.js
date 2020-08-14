const express = require("express");
const router = express.Router();

const { catchErrors } = require("../../Errors/errorHandler");
const newGameController = require("../../Controllers/gameController");

router.post("/cards")

module.exports = router;
