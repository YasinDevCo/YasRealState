import mongoose from "mongoose";

async function connectDB() {

  try {
    if (mongoose.connections[0].readyState) return;
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB");
  } catch (error) {
    log.error("Error connecting to DB", error);
   }


}

export default connectDB;
// lib/connectDB.js
// import mongoose from "mongoose";

// const connectDB = async () => {
//   if (mongoose.connections[0].readyState) return;

//   try {
//     mongoose.set("strictQuery", false);
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("✅ Connected to MongoDB");
//   } catch (err) {
//     console.error("❌ MongoDB connection error:", err);
//   }
// };

// export default connectDB;
