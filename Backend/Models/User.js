import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    FullName:{
        type:String,
        required:true,
    },
    College:{
        type:String,
        required:true,
    },
    Branch:{
        type:String,
        required:true,
    },
    ProfileImage:{
        data:Buffer,
        contentType:String

    },
    Phone:{
        type:String,
        required:true,
    }, 
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:8,
    },
    

});

export default mongoose.model("User",userSchema);