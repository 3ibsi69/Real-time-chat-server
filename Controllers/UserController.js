var User=require("../Modules/User");
const bcrypt=require("bcrypt");
const e = require("express");
const jwt=require("jsonwebtoken");

const signup=async(req,res)=>{
    var checkUser=await User.findOne({email:req.body.email});
    if(checkUser){
        res.send({msg:"Email already exists"});
    return;
    }
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(req.body.password,salt,async(err,hash)=>{
            var user={
                email:req.body.email,
                password:hash,
                username:req.body.username,
                role:req.body.role
            };
            var createdUser=await User.create(user);
            var token=jwt.sign({id:createdUser._id},"c21")
            res.send([token]);
        });
    });
}

const login=async(req,res)=>{
    var user=await User.findOne({email:req.body.email});
    if(user){
        bcrypt.compare(req.body.password,user.password,(err,result)=>{
            if(result){
                var token=jwt.sign({id:user._id},"c21");    
                res.send([token]);
            }
            else{
                res.send({msg:"Wrong Password"});
            }
        });
        }else{
            res.send({msg:"Wrong Email"});
        }
    };
        
