import { connectDB } from "../../../lib/mongodb.js";
import Notification from "../../../models/Notification.js";

// Create Notification
export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const notification = await Notification.create(body);

    return Response.json(notification);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// Get All Notifications
export async function GET() {
  try {
    await connectDB();

    const notifications = await Notification.find();

    return Response.json(notifications);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}