const mongoose = require('./Connection');


const messageSchema = new mongoose.Schema({
    chatId:String,
    senderId:String,
    ext:String
});

const Message = mongoose.model('Message',messageSchema);