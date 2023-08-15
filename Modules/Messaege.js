const mongoose = require("./Connection");

const messageSchema = new mongoose.Schema(
  {
    chatId: String,
    senderId: String,
    ext: String,
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageSchema);
