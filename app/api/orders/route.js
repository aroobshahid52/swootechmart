import { connectDB } from "../../../lib/mongodb.js";
import Order from "../../../models/Order.js";

// Create Order
export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const order = await Order.create(body);

    return Response.json(order);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// Get All Orders
export async function GET() {
  try {
    await connectDB();

    const orders = await Order.find();

    return Response.json(orders);

  } catch (error) {
  console.log(error);

  return Response.json(
    { error: error.message },
    { status: 500 }
  );
}
}