const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

const userRouter = require("./Routers/UserRouter");

app.use("/user", userRouter);

server.listen(3002, () => {
  console.log("Server is running on port 3002");
});
