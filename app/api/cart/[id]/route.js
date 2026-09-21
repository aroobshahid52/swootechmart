import { connectDB } from "../../../../lib/mongodb.js";
import Cart from "../../../../models/Cart.js";

// GET Single Cart Item
export async function GET(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const cart = await Cart.findById(id);

    if (!cart) {
      return Response.json(
        { msg: "Cart item not found" },
        { status: 404 }
      );
    }

    return Response.json(cart);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// UPDATE Cart Item
export async function PUT(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const body = await req.json();

    const cart = await Cart.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );

    if (!cart) {
      return Response.json(
        { msg: "Cart item not found" },
        { status: 404 }
      );
    }

    return Response.json(cart);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// DELETE Cart Item
export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const cart = await Cart.findByIdAndDelete(id);

    if (!cart) {
      return Response.json(
        { msg: "Cart item not found" },
        { status: 404 }
      );
    }

    return Response.json({
      msg: "Cart item deleted successfully",
    });

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}