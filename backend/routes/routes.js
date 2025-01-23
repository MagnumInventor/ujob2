const express = require("express");
const router = express.Router();
const catalogueController = require("../controllers/catalogueController");

router.get("/", catalogueController.getCatalogue);

module.exports = router;
