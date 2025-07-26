const express=require("express");
const mongoose=require("mongoose");
const item=require('./models/item'); //import item collection or Model
const user=require('./models/user'); //import user collection or Model
const contact=require('./models/contact'); //import contact collection or Model
const category=require('./models/category'); //import category collection or Model
const product=require('./models/products'); //import products collection or Model
// import body-parser
const bodyParser = require("body-parser"); //check form submission on server
const dotenv=require('dotenv');
const app=express();
// add middleware 
app.use(bodyParser.urlencoded({extended:true}));
// set routing ejs engine  list of temp engine (ejs or pug or html or jade )
app.set('view engine','ejs'); 

// mongo db connection with localhost
// mongoose.connect('mongodb://localhost:27017/crudAppDB',{useNewUrlParser:true,useUnifiedTopology:true})
// .then(()=>console.log('Your applications successfully connected with database'))
// .catch(err=>console.log('Could not connect with MongoDb....',err));

// ID address IP4 or IP6
mongoose.connect('mongodb://127.0.0.1:27017/crudAppDB',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('Your applications successfully connected with database'))
.catch(err=>console.log('Could not connect with MongoDb....',err));

// setting ur applications Routing


// start app server 
app.listen(3000,()=>{console.log('Server is running on http://localhost:3000');

});


