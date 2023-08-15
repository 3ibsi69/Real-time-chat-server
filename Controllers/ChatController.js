const Chat = require('..//Modules/Chat');


const creatChat=async(req,res)=>{
    const {firstId,secondId}=req.body;

    try{
        const chat=await Chat.findOne({
            members:{$all:[firstId,secondId]}
        })
        if(chat) res.status(200).json(chat);

        const newChat=new Chat({
            members:[firstId,secondId]
        })

        const response=await newChat.save();
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).send({msg:"Server Error"});
    }

}

const findUserChats=async(req,res)=>{
    const userId=req.params.userId;
    try{
        const chats=await Chat.find({
            members:{$in:[userId]}
        })
        res.status(200).json(chats);
    }
    catch(err){
        console.log(err);
        res.status(500).send({msg:"Server Error"});
    }
}

const findChat=async(req,res)=>{
    const {firstId,secondId}=req.params;
   
    try{
        const chat=await Chat.findOne({
            members:{$all:[firstId,secondId]}
        })
        res.status(200).json(chat);
}
catch(err){
    console.log(err);
    res.status(500).send({msg:"Server Error"});
}
}

module.exports={
    creatChat,
    findUserChats,
    findChat
}
