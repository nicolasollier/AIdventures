const Conversation = require("../models/Conversation");
const Message = require("../models/Message");

const conversationController = {
  getAllMessages: async (req, res) => {
    try {
      const conversationId = req.params.conversationId;
      const conversation = await Conversation.findById(conversationId);

      if (!conversation) {
        return res.status(404).send("Conversation not found");
      }

      res.json(conversation.messages);
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  },

  createConversation: async (req, res) => {
    try {
      const { id, messages } = req.body;

      const conversation = await Conversation.create({
        _id: id,
        messages,
      });

      res.json(conversation);
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  },

  addMessage: async (req, res) => {
    try {
      const { id, messages } = req.body;
      const conversation = await Conversation.findById(id);

      if (!conversation) {
        console.log('error')
        return res.status(404).send("Conversation not found");
      }

      conversation.messages = [...messages];
      await conversation.save();

      res.send();
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  },
};

module.exports = conversationController;
