import mongoose from "mongoose";

export const connectMongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODBURI)
        console.log("CONNECTED TO MONGODB");
    } catch (error) {
        console.log(`ERROR CONNECTING TO DATABASE: ${error}`);
    }
}