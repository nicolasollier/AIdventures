const mongoose = require("mongoose");
const Message = require("./Message");

const conversationSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  messages: [Message.schema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Conversation", conversationSchema);
