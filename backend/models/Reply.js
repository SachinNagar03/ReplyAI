const mongoose = require("mongoose");

const replySchema = new mongoose.Schema({
  originalEmail: {
    type: String,
    required: true,
    trim: true
  },
  generatedReply: {
    type: String,
    required: true,
    trim: true
  },
  tone: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Reply", replySchema);