import { connectDB } from "../../../../lib/mongodb.js";
import Payment from "../../../../models/Payment.js";

// GET Single Payment
export async function GET(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const payment = await Payment.findById(id);

    if (!payment) {
      return Response.json(
        { msg: "Payment not found" },
        { status: 404 }
      );
    }

    return Response.json(payment);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// UPDATE Payment
export async function PUT(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const body = await req.json();

    const payment = await Payment.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );

    if (!payment) {
      return Response.json(
        { msg: "Payment not found" },
        { status: 404 }
      );
    }

    return Response.json(payment);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// DELETE Payment
export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const payment = await Payment.findByIdAndDelete(id);

    if (!payment) {
      return Response.json(
        { msg: "Payment not found" },
        { status: 404 }
      );
    }

    return Response.json({
      msg: "Payment deleted successfully",
    });

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}