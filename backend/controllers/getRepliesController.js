const Reply = require("../models/Reply");

async function getRepliesController(req, res) {
  try {
    const replies = await Reply.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      replies
    });

  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      error: "Failed to fetch replies"
    });
  }
}

module.exports = getRepliesController;