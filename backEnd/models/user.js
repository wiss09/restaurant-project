const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    phone:Number,
    password:String,
    confirm:String,
    role:String,
    speciality:String,
    experience:Number,
    avatar:String,
    cv:String,
    plat:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Plat'
    }
})
const user=mongoose.model('User' , userSchema);
module.exports = user;


