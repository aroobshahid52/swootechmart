 
//  import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     if (mongoose.connections[0].readyState) {
//       return;
//     }

//     await mongoose.connect(process.env.MONGODB_URI);

//     console.log("MongoDB Connected");
//   } catch (error) {
//     console.log(error);
//   }
// };


import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      return;
    }

    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error("MONGODB_URI is not defined");
    }

    await mongoose.connect(uri);

    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    throw error;
  }
};