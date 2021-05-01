import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    userId:{type:String},
    firstName:{type:String},
    lastName:{type:String}
});

const user = mongoose.model("user",userSchema,"user");

export default user;
