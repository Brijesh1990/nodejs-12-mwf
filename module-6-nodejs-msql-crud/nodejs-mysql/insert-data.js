var mysql2=require('mysql2');
var con=mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"admin",
    database:"patel_icecream_app"
});


// con.connect(function(err){
//     if(err) throw err;
//     // how to insert data in tables
//     var sql="insert into contacts(id,name,age,phone,address) values('1','brijesh','35','9998003879','150 feet ring road rajkot')";
//     con.query(sql,function(err,result){
//          if(err) throw err;
//          console.log('Tables  data inserted successfully')

//     });
   
// });

// inserted multiple data in tables

con.connect(function(err){
    if(err) throw err;
    // how to insert data in tables
    var sql="insert into contacts(id,name,age,phone,address) values ?";
    var values=[
        ['2','prateek','22','63568789','junagad'],
        ['3','rakesh','20','635687854','gandhinagar'],
        ['4','kumar','21','635687856','ahemdabad'],
        ['5','rutwil','25','63564521','jamanagar']
    ];
    con.query(sql,[values],function(err,result){
         if(err) throw err;
         console.log('Tables  data inserted successfully' + result.affectedRows)

    });
   
});