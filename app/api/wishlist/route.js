import { connectDB } from "../../../lib/mongodb.js";
import Wishlist from "../../../models/Wishlist.js";

// Add to Wishlist
export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const wishlist = await Wishlist.create(body);

    return Response.json(wishlist);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// Get All Wishlist Items
export async function GET() {
  try {
    await connectDB();

    const wishlist = await Wishlist.find();

    return Response.json(wishlist);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}