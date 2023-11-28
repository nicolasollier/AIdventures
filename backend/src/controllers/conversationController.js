const Message = require("../models/Message");

const conversationController = {
  async createMessage(req, res) {
    try {
      const { content } = req.body;
      const newMessage = await Message.create({ content });

      res.status(201).json(newMessage);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getAllMessages(req, res) {
    try {
      const messages = await Message.find();

      res.status(200).json(messages);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = conversationController;
