import { connectDB } from "../../../../lib/mongodb.js";
import Wishlist from "../../../../models/Wishlist.js";

// GET Single Wishlist Item
export async function GET(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const wishlist = await Wishlist.findById(id);

    if (!wishlist) {
      return Response.json(
        { msg: "Wishlist item not found" },
        { status: 404 }
      );
    }

    return Response.json(wishlist);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// UPDATE Wishlist
export async function PUT(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const body = await req.json();

    const wishlist = await Wishlist.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );

    if (!wishlist) {
      return Response.json(
        { msg: "Wishlist item not found" },
        { status: 404 }
      );
    }

    return Response.json(wishlist);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// DELETE Wishlist Item
export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const wishlist = await Wishlist.findByIdAndDelete(id);

    if (!wishlist) {
      return Response.json(
        { msg: "Wishlist item not found" },
        { status: 404 }
      );
    }

    return Response.json({
      msg: "Wishlist item deleted successfully",
    });

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}