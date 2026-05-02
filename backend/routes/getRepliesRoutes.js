const express = require("express");
const getRepliesController = require("../controllers/getRepliesController");

const router = express.Router();

router.get("/replies", getRepliesController);

module.exports = router;