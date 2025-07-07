import mongoose from "mongoose";
import { DB_name } from "../constants.js";
import dotenv from "dotenv";

const connectDB = async () => {
    try {
        const conninstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`,);
        console.log(`MongoDB connected: ${conninstance.connection.host}`);
        return conninstance; 
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the process with failure
    }
}

export default connectDB;