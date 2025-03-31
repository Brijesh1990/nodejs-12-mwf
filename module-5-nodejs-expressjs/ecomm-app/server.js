var http=require("http");
var express=require("express");
const path=require("path");
const { title } = require("process");
const app=express();
// set template view directory using ejs template engine
app.set('views',path.join(__dirname,'views'));
// set a static path load in templates
app.use(express.static(path.join(__dirname,'public')));
// set EJS as the default templates engine
app.set('view engine','ejs');

// node js routing....
// define a route to render a template

// app.get('/',(req,res)=>{
//     res.render('index',{title:'My first Home page via ejs template engine in node js',message:'This is a just EJS templates engine',text:'Hey i am just test a ejs templates engine'});
// });

// templates formate 
app.get('/',(req,res)=>{
    res.render('index',{title:'Online shopping for KIds Items',message:'50% of on selected Items',text:'Hurry up Now'});
});
// about us pages routing
app.get('/about-us',(req,res)=>{
    res.render('about',{title:'Online shopping for KIds Items :: About us',message:'About us Page',text:'About us pages'});
});


// start server ......
const PORT=process.env.PORT ||8000;
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})