const mongoose = require('./Connection');

const Chat=new mongoose.Schema({
    members:Array,

},{timestamps:true});



module.exports=mongoose.model("Chat",Chat);

