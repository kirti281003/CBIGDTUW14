const mongoose=require("mongoose");
const postSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:"true"
    },
    heading:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("Post",postSchema);