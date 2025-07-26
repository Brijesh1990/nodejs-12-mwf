const mongoose=require('mongoose');
// create a collection Schema
const itemSchema=new mongoose.Schema({
    name:String,
    description:String
});

module.exports=mongoose.model('Item',itemSchema);

