const router=require("express").Router();
var chatController=require("../Controllers/ChatController");



router.post("/",chatController.creatChat)
router.get("/:userId",chatController.findUserChats)
router.get("/find/:firstId/:secondId",chatController.findChat)


module.exports=router;