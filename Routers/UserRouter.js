const router=express.Router();
var userController=require("../Controllers/UserController");


router.post("/signup",userController.signup);
router.post("/login",userController.login);
router.post("/verify",userController.verify);

module.exports=router;