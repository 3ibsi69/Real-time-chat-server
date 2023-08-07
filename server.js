const express=require("express");
const app=express();
const http=require("http");
const {Server}=require("socket.io");
const server=http.createServer(app);
const io=new Server(server,{
    cors:{
        origin:"*",
        methods:["GET","POST","PUT","DELETE"]
    }
});







server.listen(3002,()=>{
    console.log("Server is running on port 3002");
}
);