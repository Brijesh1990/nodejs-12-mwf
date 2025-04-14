var mysql2=require('mysql2');
var con=mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"admin",
    database:"patel_icecream_app"
});

// con.connect(function(err){
//     if(err) throw err;
//     // how to create a tables
//     var sql="create table customers(id int,name varchar(255),age int,phone bigInt,address text)";
//     con.query(sql,function(err,result){
//          if(err) throw err;
//          console.log('Tables  successfully created')

//     });
   
// });


con.connect(function(err){
    if(err) throw err;
    // how to create a tables
    var sql="create table contacts(id int,name varchar(255),phone bigInt,subject varchar(255),address text)";
    con.query(sql,function(err,result){
         if(err) throw err;
         console.log('Tables  successfully created')

    });
   
});