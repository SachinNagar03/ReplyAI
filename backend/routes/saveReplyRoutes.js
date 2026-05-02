const express = require("express");
const saveReplyController = require("../controllers/saveReplyController");

const router = express.Router();

router.post("/save-reply", saveReplyController);

module.exports = router;