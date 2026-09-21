"use client";

import Link from "next/link";

type Product = {
  _id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  stock: number;
  category?: string;
  brand?: string;
};

type ProductCardProps = {
  product: Product;
  onAddToCart?: (product: Product) => void;
};

export default function ProductCard({
  product,
  onAddToCart,
}: ProductCardProps) {
  const inStock = product.stock > 0;
 async function addToWishlist(productId: string) {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first.");
      return;
    }

    const payload = JSON.parse(
      atob(token.split(".")[1])
    );

    const userId =
      payload.id ||
      payload._id ||
      payload.userId;

    const res = await fetch("/api/wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        productId,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(
        data.error || "Unable to add to wishlist"
      );
    }

    alert("Product added to wishlist successfully!");
  } catch (error) {
    console.error(error);

    alert(
      error instanceof Error
        ? error.message
        : "Unable to add to wishlist"
    );
  }
}
  return (
    <div className="group min-w-0">

      {/* Product Image */}
      <Link
        href={`/products/${product._id}`}
        className="relative block h-[180px] overflow-hidden rounded-lg bg-gray-50 sm:h-[200px]"
      >
        {/* Stock Badge */}
        <div
          className={`absolute left-2 top-2 z-10 rounded px-2 py-1 text-[8px] font-bold text-white ${
            inStock ? "bg-green-600" : "bg-red-500"
          }`}
        >
          {inStock ? "IN STOCK" : "OUT OF STOCK"}
        </div>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain p-3 transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      {/* Product Information */}
      <div className="px-1">

        {/* Brand */}
        <p className="mt-2 truncate text-[9px] text-gray-600">
          {product.brand || "Brand"}
        </p>

        {/* Title */}
        <Link
          href={`/products/${product._id}`}
          className="mt-1 block min-h-[32px] text-[10px] font-bold leading-4 text-gray-900 hover:text-green-600"
        >
          {product.title}
        </Link>

        {/* Category */}
        {product.category && (
          <p className="mt-1 truncate text-[8px] text-gray-400">
            {product.category}
          </p>
        )}

        {/* Price */}
        <p className="mt-2 text-sm font-bold text-gray-900">
          {Number(product.price || 0)}
        </p>

        {/* Shipping / Stock */}
        <div className="mt-2 flex flex-wrap items-center gap-2">

          <span className="rounded bg-green-100 px-2 py-1 text-[7px] font-medium text-green-700">
            FREE SHIPPING
          </span>

          {inStock ? (
            <span className="flex items-center gap-1 text-[8px] text-gray-500">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              {product.stock} available
            </span>
          ) : (
            <span className="text-[8px] text-red-500">
              Out of stock
            </span>
          )}

        </div>

        {/* Buttons */}
        <div className="mt-3 flex gap-1">

          <button
            type="button"
            disabled={!inStock}
            onClick={() => onAddToCart?.(product)}
            className="flex-1 rounded bg-green-600 py-2 text-[8px] font-bold text-white transition-colors hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            ADD TO CART
          </button>

          {/* Wishlist */}
         <button
  type="button"
  aria-label="Add to wishlist"
  onClick={() => addToWishlist(product._id)}
  className="flex h-7 w-7 shrink-0 items-center justify-center rounded border border-gray-200 text-sm text-gray-500 hover:border-green-500 hover:text-green-600"
>
  ♡
</button>

        </div>

      </div>
    </div>
  );
}