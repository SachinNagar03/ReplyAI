const Reply = require("../models/Reply");

async function saveReplyController(req, res) {
  try {
    const { originalEmail, generatedReply, tone } = req.body;

    if (!originalEmail || !generatedReply || !tone) {
      return res.status(400).json({
        error: "All fields are required"
      });
    }

    const savedReply = await Reply.create({
      originalEmail,
      generatedReply,
      tone
    });

    res.status(201).json({
      message: "Reply saved successfully",
      saved: true,
      reply: savedReply
    });

  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      error: "Failed to save reply"
    });
  }
}

module.exports = saveReplyController;