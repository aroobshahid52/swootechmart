import { connectDB } from "../../../lib/mongodb.js";
import Payment from "../../../models/Payment.js";

// Create Payment
export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const payment = await Payment.create(body);

    return Response.json(payment);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// Get All Payments
export async function GET() {
  try {
    await connectDB();

    const payments = await Payment.find();

    return Response.json(payments);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}