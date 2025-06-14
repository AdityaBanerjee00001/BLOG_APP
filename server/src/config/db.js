import mongoose from "mongoose";
import logger from "./logger.js";

const connectDB = async () =>{
 try{
 await mongoose.connect(process.env.MONGO_URI);
  logger.info("MONGODB CONNECTED SUCCESSFUL");

 } catch(error){
  logger.error("MONGODB Connection Failed",error);
  process.exit(1);
 }
};
export default connectDB;