const mongoose=require('mongoose');
const platSchema=mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    chef:{
         type:mongoose.Schema.Types.ObjectId,
         ref:'Chef'
    }
})
 
const platModel=mongoose.model('Plat',platSchema)
module.exports=platModel