const express=require("express");
const mysql2=require("mysql2");
// body-parser : is a module or middleware of node js i.e used to post data from users form on server via body-parser
const bodyParser=require("body-parser");
const path=require("path");
// node js provides flash-session  or pass a flash messages via connect-flash libraries
const session=require('express-session');
const flash=require("connect-flash");
// create express server port 
const app=express();
const port=8000;
// create a body-parser to post data via form on node js server
app.use(bodyParser.urlencoded({
    extended:true
}));

// used session 
app.use(session({
    secret:'secret', //pass secret key
    resave:false,
    saveUninitialized:true
}))

app.use(flash());

// set a default ejs embeded engine for routing 
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

// used express.static('public') to load css | images | fonts | js in your templates 
app.use(express.static('public'));

// create mysql2 database connection 
// const db=mysql2.createConnection({
//     host:'localhost',
//     user:'root', 
//     password:'admin', 
// }); 

// check database is connected or not 
// db.connect((err)=>{
//     if(err) throw err; 
//     db.query("create database task_app_demo",function(err,result){
//         if(err) throw err;
//         console.log('Database  successfully created');

//    });
// });

const db=mysql2.createConnection({
    host:'localhost',
    user:'root', 
    password:'admin', 
    database:'task_app_demo'
});

db.connect((err)=>{
    if(err) throw err;
        console.log('Database  successfully connected');

   });

// create a ejs template engine for setting routing 
// show app data
app.get("/",(req,res) => {
    db.query('select * from tasks',(err,result)=>{
        if(err) throw err;
        res.render('index',{tasks:result,message:req.flash('message')});
           
    });  
});
// create a task routing
app.get('/create-task',function(req,res){
    res.render('create',{
        message:req.flash('message')
    });
    // res.render('index');
});

// create a task for set routing
app.post('/create-task',function(req,res){
    // stored all data in a variables 
    const{taskname,assignto,assigndate,status}=req.body;
    // write a insert query to stored data in database
    const query='insert into tasks(taskname,assignto,assigndate,status) values(?,?,?,?)';
    db.query(query,[taskname,assignto,assigndate,status],(err,result)=>{
        if(err){
            req.flash('message','Errors occured while data add');
            return res.redirect('/create-task');
        }
        else 
        {
         req.flash('message','Task successfully Added');
         res.redirect('/');          
        }

    });

   
});

// edit app data
app.get('/edit/:id',(req,res)=>{
    // stored id in a variables
    const id=req.params.id;
    // write a select query to get data from database
    const query='select * from tasks where taskid=?';
    db.query(query,[id],(err,result)=>{
        if(err) throw err;
        res.render('edit',{task:result[0],message:req.flash('message')});
           
    });  
});
// update app data
app.post('/edit/:id',(req,res)=>{
    // stored all data in a variables
    const{taskname,assignto,assigndate,status}=req.body;
    // stored id in a variables
    const id=req.params.id;
    // write a update query to update data in database
    const query='update tasks set taskname=?, assignto=?, assigndate=?, status=? where taskid=?';
    db.query(query,[taskname,assignto,assigndate,status,id],(err,result)=>{
        if(err){
            req.flash('message','Errors occured while data update');
            return res.redirect('/');
        }
        else 
        {
         req.flash('message','Task successfully updated');
         res.redirect('/');          
        }

        });
    });
// delete app data
app.get('/delete/:id',(req,res)=>{
    // stored id in a variables
    const id=req.params.id;
    // write a delete query to delete data from database
    const query='delete from tasks where taskid=?';
    db.query(query,[id],(err,result)=>{
        if(err){
            req.flash('message','Errors occured while data delete');
            return res.redirect('/');
        }
        else 
        {
         req.flash('message','Task successfully deleted');
         res.redirect('/');          
        }

    });
})

// create a server on port 
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})

