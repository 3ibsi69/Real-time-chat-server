const router=require("express").Router();

const {createMessage,getAllMessages}=require("..//Controllers/MessageController");


router.post("/",createMessage);
router.get("/:chatId",getAllMessages);


module.exports=router;