const express = require("express");
const { generateReplyController } = require("../controllers/replyController");

const router = express.Router();

router.post("/generate-reply", generateReplyController);

module.exports = router;