import mongoose from "mongoose";

var db = "mongodb://db:27017/todos"; // Use the correct database name;

const connectDb = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      poolSize: 10
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

export default connectDb;
