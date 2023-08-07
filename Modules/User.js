const mongoose = require('./Connection');

const User=mongoose.model("User",{
    username:String,
    password:String,
    email:String,
    role:{
        type:String,
        default:"admin",
        enum:["user","admin"]
    }
});


module.exports=User;