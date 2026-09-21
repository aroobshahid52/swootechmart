import { connectDB } from "../../../lib/mongodb.js";
import Review from "../../../models/Review.js";

// Create Review
export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const review = await Review.create(body);

    return Response.json(review);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// Get All Reviews
export async function GET() {
  try {
    await connectDB();

    const reviews = await Review.find();

    return Response.json(reviews);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}