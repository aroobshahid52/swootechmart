import { connectDB } from "../../../lib/mongodb.js";
import Coupon from "../../../models/Coupon.js";

// Create Coupon
export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const coupon = await Coupon.create(body);

    return Response.json(coupon);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// Get All Coupons
export async function GET() {
  try {
    await connectDB();

    const coupons = await Coupon.find();

    return Response.json(coupons);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}