// import { connectDB } from "../../../../lib/mongodb.js";
// import Order from "../../../../models/Order.js";

// // GET Single Order
// export async function GET(req, { params }) {
//   try {
//     await connectDB();

//     const { id } = await params;

//     const order = await Order.findById(id);

//     if (!order) {
//       return Response.json(
//         { msg: "Order not found" },
//         { status: 404 }
//       );
//     }

//     return Response.json(order);

//   } catch (error) {
//     return Response.json(
//       { error: error.message },
//       { status: 500 }
//     );
//   }
// }

// // UPDATE Order
// export async function PUT(req, { params }) {
//   try {
//     await connectDB();

//     const { id } = await params;

//     const body = await req.json();

//     const order = await Order.findByIdAndUpdate(
//       id,
//       body,
//       { new: true }
//     );

//     if (!order) {
//       return Response.json(
//         { msg: "Order not found" },
//         { status: 404 }
//       );
//     }

//     return Response.json(order);

//   } catch (error) {
//     return Response.json(
//       { error: error.message },
//       { status: 500 }
//     );
//   }
// }

// // DELETE Order
// export async function DELETE(req, { params }) {
//   try {
//     await connectDB();

//     const { id } = await params;

//     const order = await Order.findByIdAndDelete(id);

//     if (!order) {
//       return Response.json(
//         { msg: "Order not found" },
//         { status: 404 }
//       );
//     }

//     return Response.json({
//       msg: "Order deleted successfully",
//     });

//   } catch (error) {
//     return Response.json(
//       { error: error.message },
//       { status: 500 }
//     );
//   }
// }





import { connectDB } from "../../../../lib/mongodb.js";
import Order from "../../../../models/Order.js";

// GET Single Order
export async function GET(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const order = await Order.findById(id)
      .populate("userId", "name email");

    if (!order) {
      return Response.json(
        { msg: "Order not found" },
        { status: 404 }
      );
    }

    return Response.json(order);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// UPDATE Order
export async function PUT(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const body = await req.json();

    const order = await Order.findByIdAndUpdate(
      id,
      body,
      { new: true }
    ).populate("userId", "name email");

    if (!order) {
      return Response.json(
        { msg: "Order not found" },
        { status: 404 }
      );
    }

    return Response.json(order);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// DELETE Order
export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const order = await Order.findByIdAndDelete(id);

    if (!order) {
      return Response.json(
        { msg: "Order not found" },
        { status: 404 }
      );
    }

    return Response.json({
      msg: "Order deleted successfully",
    });

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}