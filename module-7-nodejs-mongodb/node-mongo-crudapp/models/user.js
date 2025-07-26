const mongoose=require('mongoose');
// create a collection Schema
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    subject:String,
    phone:String,
    address:String,
    country:String,
    state:String,
    city:String
});

module.exports=mongoose.model('Users',userSchema);

