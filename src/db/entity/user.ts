import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    email:{type:String, required:true, unique:true},
    firstName:{type:String, required:true},
    lastName:{type:String, required:true}
}).index({email:1});

const user = mongoose.model("user",userSchema,"user");

export default user;
