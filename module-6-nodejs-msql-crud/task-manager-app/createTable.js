var express=require("express");
var app=express(); 
// check connect of mysql2 
var mysql2=require('mysql2'); 
var con=mysql2.createConnection({
    host:"localhost", 
    user:"root", 
    password:"admin", 
    database:"task_app_demo"
});
// check connection via conditions 
con.connect(function(err){
  if(err)
    { 
        throw err;
    }
   else 
   {
    console.log('connected successfully');
    // create a table con.query();
    // var sql="create table tbl_contacts(id int AUTO_INCREMENT PRIMARY KEY, name varchar(255), email varchar(255), mobile bigInt, subject varchar(255),message text)";
    // var sql="create table tbl_country(cid int AUTO_INCREMENT PRIMARY KEY, countryname varchar(255))";

    var sql="create table tasks(taskid int AUTO_INCREMENT PRIMARY KEY, taskname varchar(255), assignto varchar(255), assigndate varchar(255), status varchar(255))";

    con.query(sql,function(err,result){

        if(err) 
        {
          throw err;
        }
        else 
        {
          console.log('Table successfully  created');
        }

    });

   }
  
});

app.listen(7000);
console.log('http://localhost:7000');