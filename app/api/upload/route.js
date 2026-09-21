// ===============================
// FILE: app/api/upload/route.js
// ===============================
import cloudinary from "../../../lib/cloudinary";
import streamifier from "streamifier";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const file = formData.get("file");

    const bytes = await file.arrayBuffer();

    const buffer = Buffer.from(bytes);

    const result = await new Promise(
      (resolve, reject) => {
        const stream =
          cloudinary.uploader.upload_stream(
            {
              folder: "ecommerce",
            },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          );

        streamifier
          .createReadStream(buffer)
          .pipe(stream);
      }
    );

    return Response.json(result);
  } catch (error) {
    return Response.json({
      error: error.message,
    });
  }
}