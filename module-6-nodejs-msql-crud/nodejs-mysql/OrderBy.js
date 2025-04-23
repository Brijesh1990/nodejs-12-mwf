var express=require("express");
var app=express(); 
// check connect of mysql2 
var mysql2=require('mysql2'); 
var con=mysql2.createConnection({
    host:"localhost", 
    user:"root", 
    password:"admin", 
    database:"patel_icecream_app"
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
    // var sql="select * from contacts order by name"; // order by asc     
    // var sql="select * from contacts order by name desc";
   
    con.query(sql,function(err,result){

        if(err) 
        {
          throw err;
        }
        else 
        {
          console.log('Table deleted successfully');
        }

    });

   }
  
});

app.listen(7000);
console.log('http://localhost:7000');