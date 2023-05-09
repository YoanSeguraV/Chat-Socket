import express from "express";
import cors from "cors";
import http from "http";
import socket from './Socket/Socket.js'
import { Server as WebServer } from "socket.io";


const app = express();
const Server = http.createServer(app);
const io = new WebServer(Server,{
    cors:{
        origin:"*"
    }
});
app.use(express.json())

socket(io)

Server.listen(4000);
console.log("server on port " + 4000);
