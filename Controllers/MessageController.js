
const messageModel=require("../Modules/Message")
// create Message
const createMessage = async (req, res) => {
    
    const { chatId, senderId, text } = req.body;
    console.log("Request Body:", req.body);
    const message = new messageModel({
      chatId,
      senderId,
      text,
    });
    
    try {
        console.log("Saving message:", message); // Add this line to log the message before saving

      await message.save();
      res.status(200).json({ message: "message created successfully" });
    } catch (error) {
      res.status(500).json({ message: "message not created" });
    }
  };
  

// get all messages

const getmessages = async (req, res) => {
  const { chatId } = req.params;

  try {
    const messages = await messageModel.find({ chatId });
    res.status(200).json({ messages });
  } catch (error) {
    res.status(500).json({ message: "messages not found" });
  }
};

module.exports = {
  createMessage,
    getmessages,
};
