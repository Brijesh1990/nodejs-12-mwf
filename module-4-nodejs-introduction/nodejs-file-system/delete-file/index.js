var http=require("http");
var fs=require("fs");

// file should be open using its mode 

// w => write on file
// r=> read a file
// 


// create a server
// http.createServer(function(req,res){
//     res.writeHead(200,{"Content-Type":"text/html"});
//     res.write("Hello Prateek");
//     res.end();
// }).listen(5000);
// console.log('server successfully created http://127.0.0.1:5000');


// create a new file...
// fs.appendFile('ajax.txt','Hello i am ajax',function(err){
//     if(err) throw err;
//     console.log('File is created');
// })


// open a file .....

// fs.open('ajax.txt','w',function(err){
//     if(err) throw err;
//     console.log('File is created');
// })


// write on file 


// fs.writeFile('ajax.txt','i am ajax',function(err){
//     if(err) throw err;
//     console.log('File is created');
// })


// update on file

// fs.appendFile('ajax.txt','New text updated in file',function(err){
//     if(err) throw err;
//     console.log('File is updated');
// })

// text replaced 
// fs.writeFile('ajax.txt','New text is replaced on file',function(err){
//     if(err) throw err;
//     console.log('File is updated');
// })


// delete a files 

// fs.unlink('ajax.txt',function(err){
//     if(err) throw err;
//     console.log('File is deleted');
// })


// rename the file 


fs.rename('ajax.txt','name.txt',function(err){
    if(err) throw err;
    console.log('File is renamed');
})



// created new file

// fs.appendFile('ajax.txt','hey i am brijesh kumar pandey',function(err){
//     if(err) throw err;
//     console.log('File is appended');
// })
