const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
app.use(express.json());

const userRouter = require('./Routers/UserRouter');
const chatRoute=require("./Routers/ChatRouter");
const MessageRoute=require("./Routers/MessageRouter");

app.use(cors(
    {
        origin: '*',
        credentials: true
    }
));


app.use('/user', userRouter);
app.use('/chat',chatRoute);
app.use('/message',MessageRoute);





app.listen(3002, () => {
    console.log('server started at 3002');
}
);