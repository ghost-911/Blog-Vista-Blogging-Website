const mongoose = require("mongoose")

// user schema

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique : true
    },

    email:{
        type:String,
        required:true,
        unique : true
    }, password:{
        type:String,
        required:true,
        
    }, profilPic:{
        type:String,
        default:""
    }, 
},
    {timestamps:true}
);

// exporting the above mongoose model and schema

module.exports = mongoose.model("User", UserSchema);
