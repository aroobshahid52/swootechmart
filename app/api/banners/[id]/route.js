import { connectDB } from "../../../../lib/mongodb.js";
import Banner from "../../../../models/Banner.js";

// GET Single Banner
export async function GET(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const banner = await Banner.findById(id);

    if (!banner) {
      return Response.json(
        { msg: "Banner not found" },
        { status: 404 }
      );
    }

    return Response.json(banner);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// UPDATE Banner
export async function PUT(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const body = await req.json();

    const banner = await Banner.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );

    if (!banner) {
      return Response.json(
        { msg: "Banner not found" },
        { status: 404 }
      );
    }

    return Response.json(banner);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// DELETE Banner
export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const banner = await Banner.findByIdAndDelete(id);

    if (!banner) {
      return Response.json(
        { msg: "Banner not found" },
        { status: 404 }
      );
    }

    return Response.json({
      msg: "Banner deleted successfully",
    });

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}