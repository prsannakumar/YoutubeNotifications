const functions = require("firebase-functions");
const fetch = require("node-fetch");

// Store your Telegram Bot Token and Chat ID in environment variables for security
const TELEGRAM_BOT_TOKEN = functions.config().telegram.token;
const TELEGRAM_CHAT_ID = functions.config().telegram.chatid;

exports.sendTelegramMessage = functions.https.onRequest(async (req, res) => {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).send("Message is required");
  }

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const payload = {
    chat_id: TELEGRAM_CHAT_ID,
    text: message
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    return res.status(200).send(data);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error sending message");
  }
});
