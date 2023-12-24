const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const conversationController = require("../controllers/conversationController");
const { handleRegister } = require("../controllers/registerController");
const { handleLogin } = require("../controllers/loginController");
const { handleLogout } = require("../controllers/logoutController");

// Auth routes
router.get("/auth/verify", authController.verifyToken, (req, res) => {
  res.send({ authenticated: true });
});
router.post("/auth/login", handleLogin);
router.post("/auth/register", handleRegister);
router.post("/auth/logout", handleLogout);

// Conversation routes
router.get("/conversation/", conversationController.getConversation);
router.post("/conversation/", conversationController.createConversation);
router.put("/conversation/", conversationController.updateConversation);
router.delete("/conversation/", conversationController.deleteConversation);

module.exports = router;
