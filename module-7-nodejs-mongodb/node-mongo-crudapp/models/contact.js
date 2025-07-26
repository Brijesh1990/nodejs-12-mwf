const mongoose=require('mongoose');
// create a collection Schema
const contactSchema=new mongoose.Schema({
    name:String,
    email:String,
    subject:String,
    phone:String,
    message:String
});

module.exports=mongoose.model('Contact',contactSchema);

