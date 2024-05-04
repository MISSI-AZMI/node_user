const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
      name:{
        type:String,
        required:true
      },
      age:{
        type:Number,
        required:true
      },
      username:
      {
        type:String,
        required:true,
        unique:true
      },
      rank:{
        type:String,
        required:true,
        enum:["low","medium","high"]
      }
})


const User = mongoose.model("User",userSchema)

module.exports = User;