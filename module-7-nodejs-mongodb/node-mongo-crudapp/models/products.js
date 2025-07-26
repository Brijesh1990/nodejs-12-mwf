const mongoose=require('mongoose');
// create a collection Schema
const productSchema=new mongoose.Schema({
    productname:String,
    oldprice:String,
    newprice:String,
    qty:String,
    desriptions:String,
    addeddate:String
});

module.exports=mongoose.model('products',productSchema);

