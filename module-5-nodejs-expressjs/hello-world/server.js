var http=require("http");
var fs=require("fs");
// create server
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("Hey Prateek how are you");
    res.end();
}).listen(4000);
// create & print server
console.log('server is live on http://127.0.0.1:4000');