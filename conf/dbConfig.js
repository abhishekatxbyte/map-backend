import mongoose from "mongoose";
const connectDB = async () => {
  try {
    console.log("process.env.MONGODB_CONNECTION_URL");

    const conn = await mongoose.connect(process.env.MONGODB_CONNECTION_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export { connectDB };
