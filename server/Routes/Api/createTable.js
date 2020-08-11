const express = require("express");
const router = express.Router();

const { catchErrors } = require("../../Errors/errorHandler");
const tableController = require("../../Controllers/tableController");
const auth = require("../../Middlewares/Auth");

router.post("/Create-Table/", catchErrors(tableController.createTable));

module.exports = router;