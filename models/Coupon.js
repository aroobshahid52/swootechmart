import mongoose from "mongoose";

const couponSchema = new mongoose.Schema(
  {
    code: String,

    discount: Number,

    expireDate: Date,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Coupon ||
  mongoose.model("Coupon", couponSchema);