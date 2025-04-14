var mysql2=require('mysql2');
var con=mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"admin"
});

// con.connect(function(err){
//     if(err) throw err;
//     // how to create a database
//     con.query("create database patel_icecream_app",function(err,result){
//          if(err) throw err;
//          console.log('Database  successfully created')

//     });
   
// });



con.connect(function(err){
    if(err) throw err;
    // how to create a database
    con.query("create database patelicecreamapp",function(err,result){
         if(err) throw err;
         console.log('Database  successfully created')

    });
   
});