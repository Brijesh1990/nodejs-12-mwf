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
    var sql="insert into contacts values (null,'sameer',25,9998003879,'150 feet ring road rajkot'),(null,'prateek',25,9998003879,'150 feet ring road rajkot'),(null,'sunil',25,9998003568,'150 feet ring road rajkot'),(null,'nitesh',25,9998003878,'150 feet ring road rajkot')";

    con.query(sql,function(err,result){

        if(err) 
        {
          throw err;
        }
        else 
        {
          console.log('Table data inserted successfully');
        }

    });

   }
  
});

app.listen(7000);
console.log('http://localhost:7000');