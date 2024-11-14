import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const URI = process.env.MONGODB_URI;
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit if the connection fails
  }
};

export default connectToDB;
