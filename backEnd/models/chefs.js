const mongoose = require('mongoose');

const chefSchema = mongoose.Schema({
    name:String,
    speciality:String,
    experience:Number,
    plat:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Plat'
    }
})

const chef= mongoose.model('Chef' , chefSchema)
module.exports=chef