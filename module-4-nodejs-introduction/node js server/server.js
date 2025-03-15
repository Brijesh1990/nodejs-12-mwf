var http=require("http");
// http is called module
http.createServer(function(request,response){

    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('My name is Prateek');
}).listen(8000);

// print server 
// console.log('Server is running on  http://localhost:8000');
console.log('Server is running on  http://127.0.0.1:8000');