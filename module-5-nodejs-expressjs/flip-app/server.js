var http=require("http");
var express=require("express");
const path=require("path");
const { title } = require("process");
const app=express();

//set template view directory using ejs template engine
app.set('views',path.join(__dirname,'views'));
//set ejs as the default a template engine
app.set('view engine','ejs');
//nodejs routing....
//difine a route to render a template
app.get('/',(req,res)=>{
    res.render('index',{title:'my first home page via ejs template engine in node js',message:'this is a ejs template engine'});
});

//start server..
const PORT=process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
});