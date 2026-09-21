// import { connectDB } from "../../../../lib/mongodb.js";
// import Product from "../../../../models/Product.js";

// // GET Single Product
// export async function GET(req, { params }) {
//   try {
//     await connectDB();

//     const { id } = await params;

//     const product = await Product.findById(id);

//     if (!product) {
//       return Response.json(
//         { msg: "Product not found" },
//         { status: 404 }
//       );
//     }

//     return Response.json(product);

//   } catch (error) {
//     return Response.json(
//       { error: error.message },
//       { status: 500 }
//     );
//   }
// }

// // UPDATE Product
// export async function PUT(req, { params }) {
//   try {
//     await connectDB();

//     const { id } = await params;

//     const body = await req.json();

//     const product = await Product.findByIdAndUpdate(
//       id,
//       body,
//       { new: true }
//     );

//     if (!product) {
//       return Response.json(
//         { msg: "Product not found" },
//         { status: 404 }
//       );
//     }

//     return Response.json(product);

//   } catch (error) {
//     return Response.json(
//       { error: error.message },
//       { status: 500 }
//     );
//   }
// }

// // DELETE Product
// export async function DELETE(req, { params }) {
//   try {
//     await connectDB();

//     const { id } = await params;

//     const product = await Product.findByIdAndDelete(id);

//     if (!product) {
//       return Response.json(
//         { msg: "Product not found" },
//         { status: 404 }
//       );
//     }

//     return Response.json({
//       msg: "Product deleted successfully",
//     });

//   } catch (error) {
//     return Response.json(
//       { error: error.message },
//       { status: 500 }
//     );
//   }
// }



import { connectDB } from "../../../../lib/mongodb.js";
import Product from "../../../../models/Product.js";
import { verifyAdmin } from "../../../../middleware/auth.js";

// GET Single Product
export async function GET(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const product = await Product.findById(id);

    if (!product) {
      return Response.json(
        { msg: "Product not found" },
        { status: 404 }
      );
    }

    return Response.json(product);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// UPDATE Product (Admin Only)
export async function PUT(req, { params }) {
  try {
    await connectDB();

    const user = verifyAdmin(req);

    if (!user) {
      return Response.json(
        { msg: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await params;

    const body = await req.json();

    const product = await Product.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );

    if (!product) {
      return Response.json(
        { msg: "Product not found" },
        { status: 404 }
      );
    }

    return Response.json(product);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// DELETE Product (Admin Only)
export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const user = verifyAdmin(req);

    if (!user) {
      return Response.json(
        { msg: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return Response.json(
        { msg: "Product not found" },
        { status: 404 }
      );
    }

    return Response.json({
      msg: "Product deleted successfully",
    });

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}