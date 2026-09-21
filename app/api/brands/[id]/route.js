import { connectDB } from "../../../../lib/mongodb.js";
import Brand from "../../../../models/Brand.js";

// GET Single Brand
export async function GET(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const brand = await Brand.findById(id);

    if (!brand) {
      return Response.json(
        { msg: "Brand not found" },
        { status: 404 }
      );
    }

    return Response.json(brand);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// UPDATE Brand
export async function PUT(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const body = await req.json();

    const brand = await Brand.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );

    if (!brand) {
      return Response.json(
        { msg: "Brand not found" },
        { status: 404 }
      );
    }

    return Response.json(brand);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// DELETE Brand
export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const brand = await Brand.findByIdAndDelete(id);

    if (!brand) {
      return Response.json(
        { msg: "Brand not found" },
        { status: 404 }
      );
    }

    return Response.json({
      msg: "Brand deleted successfully",
    });

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}