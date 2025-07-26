const mongoose=require('mongoose');
// create a collection Schema
const categorySchema=new mongoose.Schema({
    categoryname:String,
    descriptions:String,
    addeddate:String
    
});

module.exports=mongoose.model('categories',categorySchema);

