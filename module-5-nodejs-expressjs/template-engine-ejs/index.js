var http=require("http");
var express=require("express");
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html"});
    res.write("Hello i am Prateek i am just learn ejs templates engine");
    res.end();
}).listen(4000);
// create server run ...
console.log('server is running on http://127.0.0.1:4000');