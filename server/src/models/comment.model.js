import mongoose,{Schema} from "mongoose";
const commentSchema= new Schema({
 comments:{
  type :String,
  required : true,
 },
 author :{
  type : Schema.Types.ObjectId,
  ref :"User",
 },

 like :[{
type:Schema.Types.ObjectId,
ref :"Like"
 },],

  totallikes :{
type:Number,
required:true,
default:0,
 },

 blog :{
  type: Schema.Types.ObjectId,
  ref :"Blog",
 },
},
{timestamp:true},
);



const Comment=mongoose.model("Comment",commentSchema);
export default Comment;