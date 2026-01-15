import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "perfume-shop",   // 🔥 FORCE DB NAME
    });

    console.log("MongoDB connected to perfume-shop");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    process.exit(1);
  }
};
export default connectDB;