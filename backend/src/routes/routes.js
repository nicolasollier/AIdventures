const express = require("express");
const router = express.Router();
const conversationController = require("../controllers/conversationController");

// Handle messages routing
router.get("/messages", (req, res) => {
  conversationController.getAllMessages(req, res);
});

router.post("/messages", (req, res) => {
  conversationController.createMessage(req, res);
});

module.exports = router;
