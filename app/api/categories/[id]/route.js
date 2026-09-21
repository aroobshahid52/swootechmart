import { connectDB } from "../../../../lib/mongodb.js";
import Category from "../../../../models/Category.js";

// GET Single Category
export async function GET(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const category = await Category.findById(id);

    if (!category) {
      return Response.json(
        { msg: "Category not found" },
        { status: 404 }
      );
    }

    return Response.json(category);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// UPDATE Category
export async function PUT(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const body = await req.json();

    const category = await Category.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );

    if (!category) {
      return Response.json(
        { msg: "Category not found" },
        { status: 404 }
      );
    }

    return Response.json(category);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// DELETE Category
export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const category = await Category.findByIdAndDelete(id);

    if (!category) {
      return Response.json(
        { msg: "Category not found" },
        { status: 404 }
      );
    }

    return Response.json({
      msg: "Category deleted successfully",
    });

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}