import { connectDB } from "../../../lib/mongodb.js";
import Cart from "../../../models/Cart.js";
import { verifyToken } from "../../../middleware/auth.js";

// ==========================================
// ADD TO CART
// ==========================================
export async function POST(req) {
  try {
    await connectDB();

    const user = verifyToken(req);

    if (!user) {
      return Response.json(
        { error: "Unauthorized. Please login first." },
        { status: 401 }
      );
    }

    const body = await req.json();

    const { productId, quantity = 1 } = body;

    if (!productId) {
      return Response.json(
        { error: "Product ID is required." },
        { status: 400 }
      );
    }

    const qty = Number(quantity);

    if (!Number.isFinite(qty) || qty < 1) {
      return Response.json(
        { error: "Quantity must be at least 1." },
        { status: 400 }
      );
    }

    // Check whether this product is already
    // in this user's cart
    const existingCart = await Cart.findOne({
      userId: user.id,
      productId,
    });

    let cart;

    if (existingCart) {
      existingCart.quantity += qty;
      cart = await existingCart.save();
    } else {
      cart = await Cart.create({
        userId: user.id,
        productId,
        quantity: qty,
      });
    }

    return Response.json(cart, { status: 201 });
  } catch (error) {
    console.error("ADD CART ERROR:", error);

    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// ==========================================
// GET CURRENT USER CART
// ==========================================
export async function GET(req) {
  try {
    await connectDB();

    const user = verifyToken(req);

    if (!user) {
      return Response.json(
        { error: "Unauthorized. Please login first." },
        { status: 401 }
      );
    }

    const carts = await Cart.find({
      userId: user.id,
    })
      .populate("productId")
      .sort({ createdAt: -1 });

    return Response.json(carts);
  } catch (error) {
    console.error("GET CART ERROR:", error);

    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// ==========================================
// UPDATE QUANTITY
// ==========================================
export async function PUT(req) {
  try {
    await connectDB();

    const user = verifyToken(req);

    if (!user) {
      return Response.json(
        { error: "Unauthorized. Please login first." },
        { status: 401 }
      );
    }

    const body = await req.json();

    const { cartId, quantity } = body;

    if (!cartId) {
      return Response.json(
        { error: "Cart ID is required." },
        { status: 400 }
      );
    }

    const qty = Number(quantity);

    if (!Number.isFinite(qty) || qty < 1) {
      return Response.json(
        { error: "Quantity must be at least 1." },
        { status: 400 }
      );
    }

    const cart = await Cart.findOneAndUpdate(
      {
        _id: cartId,
        userId: user.id,
      },
      {
        quantity: qty,
      },
      {
        new: true,
      }
    );

    if (!cart) {
      return Response.json(
        { error: "Cart item not found." },
        { status: 404 }
      );
    }

    return Response.json(cart);
  } catch (error) {
    console.error("UPDATE CART ERROR:", error);

    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// ==========================================
// DELETE CART ITEM / CLEAR CART
// ==========================================
export async function DELETE(req) {
  try {
    await connectDB();

    const user = verifyToken(req);

    if (!user) {
      return Response.json(
        { error: "Unauthorized. Please login first." },
        { status: 401 }
      );
    }

    const body = await req.json();

    // Clear complete cart
    if (body.clearAll === true) {
      await Cart.deleteMany({
        userId: user.id,
      });

      return Response.json({
        message: "Cart cleared successfully.",
      });
    }

    // Delete one item
    const { cartId } = body;

    if (!cartId) {
      return Response.json(
        { error: "Cart ID is required." },
        { status: 400 }
      );
    }

    const deleted = await Cart.findOneAndDelete({
      _id: cartId,
      userId: user.id,
    });

    if (!deleted) {
      return Response.json(
        { error: "Cart item not found." },
        { status: 404 }
      );
    }

    return Response.json({
      message: "Product removed from cart.",
    });
  } catch (error) {
    console.error("DELETE CART ERROR:", error);

    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}