const express = require("express");
const router = express.Router();
const conversationController = require("../controllers/conversationController");

// Conversation routes
router.post('/conversations', conversationController.createConversation);
router.get('/conversations/:conversationId', conversationController.getAllMessages);
router.post('/conversations/:conversationId', conversationController.addMessage);

module.exports = router;
