const express = require("express");
const router = express.Router();

const { catchErrors } = require("../../Errors/errorHandler");
const cardController = require("../../Controllers/cardController");

router.use("/getShuffledCard", catchErrors(cardController.getShuffledCard));
router.use("/create", catchErrors(cardController.setCard));

module.exports = router;