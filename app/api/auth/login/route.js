import { connectDB } from "../../../../lib/mongodb.js";
import User from "../../../../models/User.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../../../../utils/generateToken.js";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    const user = await User.findOne({ email });

    if (!user) {
      return Response.json({
        msg: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return Response.json({
        msg: "Invalid credentials",
      });
    }

    const token = generateToken(user);

    return Response.json({
      token,
      user,
    });

  } catch (error) {
    return Response.json({
      error: error.message,
    });
  }
}