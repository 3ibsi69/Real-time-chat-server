const router=require("express").Router();
var userController=require("../Controllers/UserController");


router.post("/signup",userController.signup);
router.post("/login",userController.login);
router.post("/verify",userController.verify);
router.delete("/delete",userController.DELETEALL);


module.exports=router;