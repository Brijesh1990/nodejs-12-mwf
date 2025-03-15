var http=require("http");
var fs=require("fs");
// // create server and read file
// http.createServer(function(req,res){

//     fs.readFile('demo.html',function(err,data){
//         res.writeHead(200,{'content-Type':'text/html'});
//         res.write(data);
//         return res.end();
//     })
// }).listen(4000);
// console.log('http://127.0.0.1:4000');


// create server and create a file
http.createServer(function(req,res){

    // fs.appendFile('mynewfile.txt','Hello Brijesh',function(err){
    //     if(err) throw err;
    //     console.log('file created successfully');
    // })


    fs.appendFile('nodejs.txt','Hello Brijesh',function(err){
        if(err) throw err;
        console.log('file created successfully');
    })
   

}).listen(4000);
console.log('http://127.0.0.1:4000');