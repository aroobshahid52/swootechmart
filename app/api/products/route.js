// // // // ===============================
// // // // FILE: app/api/products/route.js
// // // // ===============================

// // // import { connectDB } from "../../../lib/mongodb.js";
// // // import Product from "../../../models/Product.js";
// // // import { verifyToken } from "../../../middleware/auth.js";
// // // export async function POST(req) {
// // //   try {
// // //     await connectDB();

// // //     const user = verifyToken(req);

// // //     if (!user) {
// // //       return Response.json(
// // //         { msg: "Unauthorized" },
// // //         { status: 401 }
// // //       );
// // //     }
  
// // //     const body = await req.json();

// // //     const product = await Product.create({
// // //       ...body,
// // //       userId: user.id,
// // //     });

// // //     return Response.json(product);
// // //   } catch (error) {
// // //     return Response.json({
// // //       error: error.message,
// // //     });
// // //   }
// // // }

// // // export async function GET() {
// // //   try {
// // //     await connectDB();

// // //     const products = await Product.find();

// // //     return Response.json(products);
// // //   } catch (error) {
// // //     return Response.json({
// // //       error: error.message,
// // //     });
// // //   }
// // // }

// // // =

// // import { connectDB } from "../../../lib/mongodb.js";
// // import Product from "../../../models/Product.js";
// // import { verifyToken } from "../../../middleware/auth.js";

// // export async function POST(req) {
// //   try {
// //     await connectDB();

// //     const user = verifyToken(req);

// //     if (!user) {
// //       return Response.json(
// //         { msg: "Unauthorized" },
// //         { status: 401 }
// //       );
// //     }

// //     const body = await req.json();

// //     const product = await Product.create({
// //       ...body,
// //       userId: user.id,
// //     });

// //     return Response.json(product);
// //   } catch (error) {
// //     return Response.json({
// //       error: error.message,
// //     });
// //   }
// // }
// // export async function GET(req) {
// //   try {
// //     await connectDB();

// //     const { searchParams } = new URL(req.url);

// //     const search = searchParams.get("search");

// //     let query = {};

// //     if (search) {
// //       query = {
// //         title: {
// //           $regex: search,
// //           $options: "i",
// //         },
// //       };
// //     }

// //     const products = await Product.find(query);

// //     return Response.json(products);

// //   } catch (error) {
// //     return Response.json(
// //       { error: error.message },
// //       { status: 500 }
// //     );
// //   }
// // }

// import { connectDB } from "../../../lib/mongodb.js";
// import Product from "../../../models/Product.js";
// import { verifyToken } from "../../../middleware/auth.js";

// // ====================
// // CREATE PRODUCT
// // ====================
// export async function POST(req) {
//   try {
//     await connectDB();

//     const user = verifyToken(req);

//     if (!user) {
//       return Response.json(
//         { msg: "Unauthorized" },
//         { status: 401 }
//       );
//     }

//     const body = await req.json();

//     const product = await Product.create({
//       ...body,
//       userId: user.id,
//     });

//     return Response.json(product);

//   } catch (error) {
//     return Response.json(
//       { error: error.message },
//       { status: 500 }
//     );
//   }
// }

// // ====================
// // GET PRODUCTS
// // ====================
// export async function GET(req) {
//   try {
//     await connectDB();

//     const { searchParams } = new URL(req.url);

//     const search = searchParams.get("search");
//     const category = searchParams.get("category");
//     const brand = searchParams.get("brand");
//     const minPrice = searchParams.get("minPrice");
//     const maxPrice = searchParams.get("maxPrice");

//     const page = Number(searchParams.get("page")) || 1;
//     const limit = Number(searchParams.get("limit")) || 10;
//     const sort = searchParams.get("sort");

//     let query = {};

//     // Search
//     if (search) {
//       query.title = {
//         $regex: search,
//         $options: "i",
//       };
//     }

//     // Category Filter
//     if (category) {
//       query.category = category;
//     }

//     // Brand Filter
//     if (brand) {
//       query.brand = brand;
//     }

//     // Price Filter
//     if (minPrice || maxPrice) {
//       query.price = {};

//       if (minPrice) {
//         query.price.$gte = Number(minPrice);
//       }

//       if (maxPrice) {
//         query.price.$lte = Number(maxPrice);
//       }
//     }

//     // Sorting
//     let sortOption = {};

//     if (sort === "price_asc") {
//       sortOption.price = 1;
//     } else if (sort === "price_desc") {
//       sortOption.price = -1;
//     } else if (sort === "latest") {
//       sortOption.createdAt = -1;
//     } else if (sort === "oldest") {
//       sortOption.createdAt = 1;
//     }

//     const products = await Product.find(query)
//       .sort(sortOption)
//       .skip((page - 1) * limit)
//       .limit(limit);

//     return Response.json(products);

//   } catch (error) {
//     return Response.json(
//       { error: error.message },
//       { status: 500 }
//     );
//   }
// }

import { connectDB } from "../../../lib/mongodb.js";
import Product from "../../../models/Product.js";
import { verifyToken } from "../../../middleware/auth.js";

// ====================
// CREATE PRODUCT
// ====================
export async function POST(req) {
  try {
    await connectDB();

    const user = verifyToken(req);

    if (!user) {
      return Response.json(
        { msg: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();

    const product = await Product.create({
      ...body,
      userId: user.id,
    });

    return Response.json(product);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}


// ====================
// GET PRODUCTS
// ====================
export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);

    const search = searchParams.get("search");
    const category = searchParams.get("category");
    const brand = searchParams.get("brand");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");

    // ====================
    // PAGINATION
    // ====================

    const page = Number(searchParams.get("page")) || 1;

    // 15 products per page
    const limit = Number(searchParams.get("limit")) || 15;

    const sort = searchParams.get("sort");


    // ====================
    // QUERY
    // ====================

    const query = {};


    // ====================
    // SEARCH
    // ====================

    if (search) {
      query.title = {
        $regex: search,
        $options: "i",
      };
    }


    // ====================
    // CATEGORY FILTER
    // ====================

    // Agar category "All" nahi hai
    // tab hi category filter lagega

    if (category && category !== "All") {
      query.category = category;
    }


    // ====================
    // BRAND FILTER
    // ====================

    if (brand && brand !== "All") {
      query.brand = brand;
    }


    // ====================
    // PRICE FILTER
    // ====================

    if (minPrice || maxPrice) {
      query.price = {};

      if (minPrice) {
        query.price.$gte = Number(minPrice);
      }

      if (maxPrice) {
        query.price.$lte = Number(maxPrice);
      }
    }


    // ====================
    // SORTING
    // ====================

    let sortOption = {};

    if (sort === "price_asc") {
      sortOption.price = 1;

    } else if (sort === "price_desc") {
      sortOption.price = -1;

    } else if (sort === "latest") {
      sortOption.createdAt = -1;

    } else if (sort === "oldest") {
      sortOption.createdAt = 1;

    } else {
      // Default sorting
      sortOption.createdAt = -1;
    }


    // ====================
    // TOTAL PRODUCTS
    // ====================

    const totalProducts =
      await Product.countDocuments(query);


    // ====================
    // TOTAL PAGES
    // ====================

    const totalPages =
      Math.ceil(totalProducts / limit);


    // ====================
    // GET PRODUCTS
    // ====================

    const products = await Product.find(query)
      .sort(sortOption)
      .skip((page - 1) * limit)
      .limit(limit);


    // ====================
    // RESPONSE
    // ====================

    return Response.json({
      products,
      totalProducts,
      totalPages,
      currentPage: page,
      limit,
    });

  } catch (error) {

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