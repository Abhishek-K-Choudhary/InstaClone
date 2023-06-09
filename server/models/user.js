const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    pic:{
        type:String,
        default:"https://res.cloudinary.com/di4eqhwzy/image/upload/v1685592723/240_F_202609972_LzxAtp2czOpFxkarMLdLNMYB1ZiEM0hY_g9tocd.jpg"
    },
    followers:[{type:ObjectId,ref:"User"}],
    following:[{type:ObjectId,ref:"User"}]
})

mongoose.model("User", userSchema)