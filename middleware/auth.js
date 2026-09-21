// ===============================
// FILE: middleware/auth.js
// ===============================

import jwt from "jsonwebtoken";

export const verifyToken = (req) => {
  try {
    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      return null;
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    return decoded;
  } catch (error) {
    return null;
  }
};

// export const verifyAdmin = (req) => {
//   const user = verifyToken(req);

//   if (!user) {
//     return null;
//   }

//   if (user.role !== "admin") {
//     return null;
//   }

//   return user;
// };

export const verifyAdmin = (req) => {
  const user = verifyToken(req);

  console.log("Decoded User:", user);

  if (!user) {
    return null;
  }

  if (user.role !== "admin") {
    return null;
  }

  return user;
};