import { connectDB } from "../../../../lib/mongodb.js";
import Notification from "../../../../models/Notification.js";

// GET Single Notification
export async function GET(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const notification = await Notification.findById(id);

    if (!notification) {
      return Response.json(
        { msg: "Notification not found" },
        { status: 404 }
      );
    }

    return Response.json(notification);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// UPDATE Notification
export async function PUT(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const body = await req.json();

    const notification = await Notification.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );

    if (!notification) {
      return Response.json(
        { msg: "Notification not found" },
        { status: 404 }
      );
    }

    return Response.json(notification);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// DELETE Notification
export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const notification = await Notification.findByIdAndDelete(id);

    if (!notification) {
      return Response.json(
        { msg: "Notification not found" },
        { status: 404 }
      );
    }

    return Response.json({
      msg: "Notification deleted successfully",
    });

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}