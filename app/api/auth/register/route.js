// import { connectDB } from "../../../../lib/mongodb.js";
// import User from "../../../../models/User.js";
// import bcrypt from "bcryptjs";

// export async function POST(req) {
//   try {
//     await connectDB();

//     const { name, email, password } = await req.json();

//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return Response.json({
//         msg: "User already exists",
//       });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     return Response.json(user);
//   } catch (error) {
//     return Response.json({
//       error: error.message,
//     });
//   }
// }

import { connectDB } from "../../../../lib/mongodb.js";
import User from "../../../../models/User.js";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectDB();

    const { name, email, password } = await req.json();

    // Check empty fields
    if (!name || !email || !password) {
      return Response.json(
        {
          msg: "All fields are required",
        },
        {
          status: 400,
        }
      );
    }

    // Check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return Response.json(
        {
          msg: "User already exists",
        },
        {
          status: 409,
        }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "user",
    });

    return Response.json(
      {
        msg: "User registered successfully",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log("REGISTER ERROR:", error);

    return Response.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}