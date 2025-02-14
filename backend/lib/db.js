import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connect: ${conn.connection.host}`);
    } catch (error) {
        console.log("Error connecting MONGODB", error.message);
        process.exit(1);
    }
}