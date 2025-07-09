import mongoose from "mongoose";

// connect to mongodb database

export const connectDB = async () => {
  try {

     if (!process.env.MONGODB_URI) throw new Error("❌ MONGODB_URI is undefined");
    const connectInstance = await mongoose.connect(process.env.MONGODB_URI);

    console.log(
      `\n Mongodb connected!! DB HOST:${connectInstance.connection.host}`
    );
  } catch (error) {
    console.log(`mongodb connection error:${error}`);
    process.exit(1);
  }
};
