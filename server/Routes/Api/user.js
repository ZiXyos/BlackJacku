const express = require("express");
const router = express.Router();

const { catchErrors } = require("../../Errors/errorHandler");
const userController = require("../../Controllers/userController");

router.post("/login", catchErrors(userController.login));
router.post("/register", catchErrors(userController.register));
router.post("/stats", catchErrors(userController.stats));

module.exports = router;