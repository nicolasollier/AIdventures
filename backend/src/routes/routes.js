const express = require("express");
const router = express.Router();
const conversationController = require("../controllers/conversationController");

// Conversation routes
router.get('/conversation/', conversationController.getConversation);
router.post('/conversation/', conversationController.createConversation);
router.put('/conversation/', conversationController.updateConversation);

module.exports = router;
