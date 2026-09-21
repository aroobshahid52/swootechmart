// // ===============================
// // FILE: models/Product.js
// // ===============================

// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema(
//   {
//     title: String,

//     price: Number,

//     description: String,

//     image: String,

//     userId: String,
//   },
//   { timestamps: true }
// );

// export default mongoose.models.Product ||
//   mongoose.model("Product", productSchema);



import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    stock: {
      type: Number,
      default: 0,
    },

    category: {
      type: String,
      default: "",
    },

    brand: {
      type: String,
      default: "",
    },

    userId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);