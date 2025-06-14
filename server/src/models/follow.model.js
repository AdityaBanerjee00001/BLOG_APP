import mongoose,{Schema} from "mongoose";
const followSchema= new Schema({
 follower :{
  type : Schema.Types.ObjectId,
 
 },

following:{
 type: Schema.Types.ObjectId,
  ref :"User",
},
},
{

timestamp:true,
},
);



const Follow=mongoose.model("Follow",followSchema);
export default Follow;