const { generateReply } = require("../services/geminiService");

async function generateReplyController(req, res) {
  try {
    const { email, tone } = req.body;

    if (!email || !tone) {
      return res.status(400).json({
        error: "Email and tone are required"
      });
    }

    const reply = await generateReply(email, tone);

    res.status(200).json({
      reply
    });

  } catch (error) {
    console.error(error.response?.data || error.message);

    res.status(500).json({
      error: "Failed to generate reply"
    });
  }
}

module.exports = { generateReplyController };