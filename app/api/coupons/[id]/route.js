import { connectDB } from "../../../../lib/mongodb.js";
import Coupon from "../../../../models/Coupon.js";

// GET Single Coupon
export async function GET(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const coupon = await Coupon.findById(id);

    if (!coupon) {
      return Response.json(
        { msg: "Coupon not found" },
        { status: 404 }
      );
    }

    return Response.json(coupon);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// UPDATE Coupon
export async function PUT(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const body = await req.json();

    const coupon = await Coupon.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );

    if (!coupon) {
      return Response.json(
        { msg: "Coupon not found" },
        { status: 404 }
      );
    }

    return Response.json(coupon);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// DELETE Coupon
export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const coupon = await Coupon.findByIdAndDelete(id);

    if (!coupon) {
      return Response.json(
        { msg: "Coupon not found" },
        { status: 404 }
      );
    }

    return Response.json({
      msg: "Coupon deleted successfully",
    });

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}