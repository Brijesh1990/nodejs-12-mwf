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

//Be Icecream ejs templates routing  Customer panel Routing
app.get('/',(req,res)=>{
    res.render('index',{title:'Online shopping for KIds Items',message:'50% of on selected Items',text:'Hurry up Now'});
});
// about us pages routing
app.get('/about-us',(req,res)=>{
    res.render('about',{title:'Online shopping for KIds Items :: About us'});
});
// services pages routing
app.get('/services',(req,res)=>{
    res.render('services',{title:'Online shopping for KIds Items :: Services'});
});
// products pages ruting
app.get('/products',(req,res)=>{
    res.render('products',{title:'Online shopping for KIds Items :: About us'});
});
// contact us pages routing
app.get('/contact-us',(req,res)=>{
    res.render('contact',{title:'Online shopping for KIds Items :: Contact us'});
});

//Be Icecream ejs templates routing  Admin panel Routing

// Admin Login pages routing
app.get('/admin-login',(req,res)=>{
    res.render('admin/login',{title:'Be-Icecream Admin Login Page'});
});
// admin dashboard routing
app.get('/admin-login/dashboard',(req,res)=>{
    res.render('admin/dashboard',{title:'Be-Icecream Admin Login Page :: Dashboard'});
});
// admin add category routing
app.get('/admin-login/addcategory',(req,res)=>{
    res.render('admin/addcategory',{title:'Be-Icecream Admin Add Category :: Category'});
});
// admin manage category routing
app.get('/admin-login/managecategory',(req,res)=>{
    res.render('admin/managecategory',{title:'Be-Icecream Admin Manage Category :: Category'});
});
// start server ......
const PORT=process.env.PORT ||8000;
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})