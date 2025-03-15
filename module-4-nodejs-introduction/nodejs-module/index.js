var http=require('http');
// var dt=require('./firstmodule');
// create a server 
// http.createServer(function(req,res){

//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.write("The date and time of systems is :"+dt.myDateTime());
//     res.end();
// }).listen(5000);


// add two numbers 
var ad=require('./add');
http.createServer(function(req,res){

    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("The additions of two numbers is :"+ad.addFunction());
    res.end();
}).listen(5000);

// create a server run on 
console.log('server is running on : http://127.0.0.1:5000');