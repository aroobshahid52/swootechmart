import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    fullName: String,
    phone: String,
    city: String,
    address: String,
    zipCode: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Address ||
  mongoose.model("Address", addressSchema);