import { connectDB } from "../../../lib/mongodb.js";
import Brand from "../../../models/Brand.js";

// Add Brand
export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const brand = await Brand.create(body);

    return Response.json(brand);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// Get All Brands
export async function GET() {
  try {
    await connectDB();

    const brands = await Brand.find();

    return Response.json(brands);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}