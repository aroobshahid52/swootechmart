import { connectDB } from "../../../../lib/mongodb.js";
import Review from "../../../../models/Review.js";

// GET Single Review
export async function GET(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const review = await Review.findById(id);

    if (!review) {
      return Response.json(
        { msg: "Review not found" },
        { status: 404 }
      );
    }

    return Response.json(review);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// UPDATE Review
export async function PUT(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const body = await req.json();

    const review = await Review.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );

    if (!review) {
      return Response.json(
        { msg: "Review not found" },
        { status: 404 }
      );
    }

    return Response.json(review);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// DELETE Review
export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const review = await Review.findByIdAndDelete(id);

    if (!review) {
      return Response.json(
        { msg: "Review not found" },
        { status: 404 }
      );
    }

    return Response.json({
      msg: "Review deleted successfully",
    });

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}