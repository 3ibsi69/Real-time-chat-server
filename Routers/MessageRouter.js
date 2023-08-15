const router=require("express").Router();

const messageController=require("../Controllers/MessageController")


router.post("/",messageController.createMessage);
router.get("/:chatId",messageController.getmessages);



module.exports=router;