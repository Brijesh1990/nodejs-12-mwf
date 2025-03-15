var http=require('http');
// http.createServer(function(req,res){

//     res.writeHead(200,{"Content-Type":"text/html"});
//     res.write("Hello world");
//     res.end();

// }).listen(4000);
// console.log('http://127.0.0.1:4000')

// query string ........

// http.createServer(function(req,res){

//     res.writeHead(200,{"Content-Type":"text/html"});
//     res.write(req.url);
//     res.end();

// }).listen(4000);
// console.log('http://127.0.0.1:4000')


// split the query string ...

var url=require("url");
http.createServer(function(req,res){

    res.writeHead(200,{"Content-Type":"text/html"});
    var q=url.parse(req.url,true).query;
    var txt=q.date + " " + q.month + " " + q.year;
    res.end(txt);

}).listen(4000);
console.log('http://127.0.0.1:4000')