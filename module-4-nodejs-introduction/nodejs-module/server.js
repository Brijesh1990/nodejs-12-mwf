var http=require("http");
// http is a module
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('Hello i am Prateek')
}).listen(4000);
// create a server 
console.log('server running on http://127.0.0.1:4000');