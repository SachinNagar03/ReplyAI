const axios = require("axios");

const API_KEY = process.env.GEMINI_API_KEY;
const MODEL = "gemini-flash-latest";

async function generateReply(email, tone) {
  const prompt = `Write a ${tone} and concise email reply to the following message:\n"${email}"`;

  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
    {
      contents: [
        {
          parts: [{ text: prompt }]
        }
      ]
    },
    {
      headers: {
        "Content-Type": "application/json",
        "X-goog-api-key": API_KEY
      }
    }
  );

  return response.data.candidates?.[0]?.content?.parts?.[0]?.text;
}

module.exports = { generateReply };