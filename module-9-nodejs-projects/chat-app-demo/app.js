// install app dependencies

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const {Server} =require('socket.io');
const http = require('http');
const server=http.createServer(app);
const io=new Server(server);

// middleware for parsing JSON request bodies

app.use(express.json());

// create a routing for sending messages
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
}); 

io.on('connection',(socket)=>{
    socket.on('send name',(username)=>{
        io.emit('send name',username);
    });

    socket.on('send message',(message)=>{
        io.emit('send message',message);
    })
});

// start the server

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});