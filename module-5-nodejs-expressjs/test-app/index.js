var http=require("http");
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('Hi Brijesh i am fine');
    res.end();
}).listen(4000);

// create server run
console.log('http://127.0.0.1:4000');