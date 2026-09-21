import { connectDB } from "../../../lib/mongodb.js";
import Category from "../../../models/Category.js";

// Add Category
export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const category = await Category.create(body);

    return Response.json(category);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// Get All Categories
export async function GET() {
  try {
    await connectDB();

    const categories = await Category.find();

    return Response.json(categories);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}