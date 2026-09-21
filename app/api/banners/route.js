import { connectDB } from "../../../lib/mongodb.js";
import Banner from "../../../models/Banner.js";

// Create Banner
export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const banner = await Banner.create(body);

    return Response.json(banner);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// Get All Banners
export async function GET() {
  try {
    await connectDB();

    const banners = await Banner.find();

    return Response.json(banners);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}