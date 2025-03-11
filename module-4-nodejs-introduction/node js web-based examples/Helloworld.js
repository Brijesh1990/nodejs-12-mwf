// var http=require("http");
// http.createServer(function(request,response){
//     response.writeHead(200,{'Content-Type':'text/plain'});
//     response.end('Hello World');
// }).listen(8081);

// // print messages 
// console.log('Server is running at http://localhost:8081');



// var http=require("http");
// http.createServer(function(request,response){
//     response.writeHead(200,{'Content-Type':'text/plain'});
//     response.end('Hello World');
// }).listen(80);

// // print messages 
// console.log('Server is running at http://localhost:80');


// var http=require("http");
// http.createServer(function(request,response){
//     response.writeHead(200,{'Content-Type':'text/plain'});
//     response.end('Hello World');
// }).listen(8000);

// // print messages 
// console.log('Server is running at http://localhost:8000');


var http=require("http");
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Hello Prateek');
}).listen(8000);

// print messages 
console.log('Server is running at http://localhost:8000');