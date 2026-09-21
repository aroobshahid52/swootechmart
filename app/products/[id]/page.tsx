"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

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

type CartItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  brand: string;
  category: string;
  quantity: number;
};

export default function ProductDetailPage() {
  const params = useParams();

  const id = params?.id as string;

  const [product, setProduct] = useState<Product | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [quantity, setQuantity] = useState(1);

  // ==========================================
  // GET PRODUCT
  // ==========================================

  useEffect(() => {
    if (!id) return;

    async function getProduct() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `/api/products/${id}`,
          {
            method: "GET",
            cache: "no-store",
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data?.msg || "Product not found"
          );
        }

        setProduct(data);

      } catch (err) {
        console.error(err);

        setError(
          err instanceof Error
            ? err.message
            : "Unable to load product"
        );

      } finally {
        setLoading(false);
      }
    }

    getProduct();
  }, [id]);

  // ==========================================
  // ADD TO CART
  // ==========================================
 async function addToCart() {
  if (!product) return;

  if (product.stock <= 0) {
    alert("This product is out of stock.");
    return;
  }

  try {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first.");
      return false;
    }

    const res = await fetch("/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        productId: product._id,
        quantity,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(
        data.error || "Unable to add product to cart."
      );
    }

    window.dispatchEvent(
      new Event("cartUpdated")
    );

    alert("Product added to cart successfully!");

    return true;
  } catch (err) {
    console.error("Cart error:", err);

    alert(
      err instanceof Error
        ? err.message
        : "Unable to add product to cart."
    );

    return false;
  }
}

  // ==========================================
  // BUY NOW
  // ==========================================
async function buyNow() {
  if (!product) return;

  if (product.stock <= 0) {
    alert("This product is out of stock.");
    return;
  }

  const added = await addToCart();

  if (added) {
    window.location.href = "/cart";
  }
}
  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-100">
        <div className="mx-auto max-w-7xl px-3 py-6 sm:px-4">

          <div className="animate-pulse rounded-lg bg-white p-5">

            <div className="grid gap-8 lg:grid-cols-2">

              <div className="h-[400px] rounded-lg bg-gray-200" />

              <div>
                <div className="h-3 w-20 rounded bg-gray-200" />

                <div className="mt-4 h-8 w-3/4 rounded bg-gray-200" />

                <div className="mt-5 h-6 w-32 rounded bg-gray-200" />

                <div className="mt-6 space-y-2">
                  <div className="h-3 rounded bg-gray-200" />
                  <div className="h-3 rounded bg-gray-200" />
                  <div className="h-3 w-2/3 rounded bg-gray-200" />
                </div>

              </div>

            </div>

          </div>

        </div>
      </main>
    );
  }

  // ==========================================
  // ERROR
  // ==========================================

  if (error || !product) {
    return (
      <main className="min-h-screen bg-gray-100">

        <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-4">

          <div className="rounded-lg bg-white p-10 text-center">

            <div className="text-5xl">
              📦
            </div>

            <h1 className="mt-4 text-lg font-bold text-gray-900">
              Product Not Found
            </h1>

            <p className="mt-2 text-xs text-gray-500">
              {error ||
                "This product does not exist."}
            </p>

            <Link
              href="/products"
              className="mt-5 inline-block rounded bg-green-600 px-6 py-3 text-xs font-bold text-white hover:bg-green-700"
            >
              BACK TO PRODUCTS
            </Link>

          </div>

        </div>

      </main>
    );
  }

  const totalPrice =
    Number(product.price) * quantity;

  const canBuy = product.stock > 0;

  return (
    <main className="min-h-screen bg-gray-100">

      {/* =====================================
          BREADCRUMB
      ===================================== */}

      <section className="mx-auto w-full max-w-7xl px-3 pt-4 sm:px-4 lg:px-5">

        <div className="rounded-lg bg-white px-4 py-3">

          <div className="flex flex-wrap items-center gap-2 text-[10px] text-gray-400">

            <Link
              href="/"
              className="hover:text-green-600"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              href="/products"
              className="hover:text-green-600"
            >
              Products
            </Link>

            <span>/</span>

            <span className="truncate text-gray-600">
              {product.title}
            </span>

          </div>

        </div>

      </section>


      {/* =====================================
          PRODUCT DETAIL
      ===================================== */}

      <section className="mx-auto w-full max-w-7xl px-3 py-3 sm:px-4 lg:px-5">

        <div className="rounded-lg bg-white p-4 sm:p-6 lg:p-8">

          <div className="grid gap-8 lg:grid-cols-2">


            {/* =================================
                PRODUCT IMAGE
            ================================= */}

            <div>

              <div className="relative flex min-h-[350px] items-center justify-center overflow-hidden rounded-lg bg-gray-50 sm:min-h-[450px]">

                {/* Stock */}
                <div
                  className={`absolute left-4 top-4 z-10 rounded px-3 py-1.5 text-[9px] font-bold text-white ${
                    canBuy
                      ? "bg-green-600"
                      : "bg-red-500"
                  }`}
                >
                  {canBuy
                    ? "IN STOCK"
                    : "OUT OF STOCK"}
                </div>

                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full max-h-[450px] w-full object-contain p-6 transition-transform duration-300 hover:scale-105"
                />

              </div>

            </div>


            {/* =================================
                PRODUCT INFORMATION
            ================================= */}

            <div className="flex flex-col justify-center">

              {/* Brand */}

              <p className="text-xs font-medium uppercase tracking-wide text-green-600">
                {product.brand ||
                  "Featured Product"}
              </p>


              {/* Title */}

              <h1 className="mt-2 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
                {product.title}
              </h1>


              {/* Category */}

              {product.category && (
                <p className="mt-2 text-[10px] text-gray-400">
                  Category:{" "}
                  <span className="font-medium text-gray-600">
                    {product.category}
                  </span>
                </p>
              )}


              {/* Rating */}

              <div className="mt-4 flex items-center gap-2">

                <div className="text-sm text-yellow-400">
                  ★★★★★
                </div>

                <span className="text-[10px] text-gray-400">
                  Customer Reviews
                </span>

              </div>


              {/* Price */}

              <div className="mt-5 border-y border-gray-100 py-5">

                <p className="text-3xl font-bold text-red-500">
            
                  {Number(
                    product.price
                  )}
                </p>

                <p className="mt-1 text-[10px] text-gray-400">
                  Price includes standard
                  product pricing.
                </p>

              </div>


              {/* Description */}

              <div className="mt-5">

                <h2 className="text-xs font-bold uppercase text-gray-900">
                  Description
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {product.description}
                </p>

              </div>


              {/* Features */}

              <div className="mt-5 grid grid-cols-2 gap-2">

                <div className="rounded bg-green-50 p-3">
                  <p className="text-[9px] font-bold text-green-700">
                    ✓ FREE SHIPPING
                  </p>
                </div>

                <div className="rounded bg-gray-50 p-3">
                  <p className="text-[9px] font-bold text-gray-900">
                    ✓ SECURE SHOPPING
                  </p>
                </div>

              </div>


              {/* Stock */}

              <div className="mt-5">

                {canBuy ? (
                  <p className="text-[10px] text-green-600">
                    ✓ {product.stock} items
                    available
                  </p>
                ) : (
                  <p className="text-[10px] font-bold text-red-500">
                    Currently out of stock
                  </p>
                )}

              </div>


              {/* Quantity */}

              <div className="mt-5 flex flex-wrap items-center gap-4">

                <div>

                  <p className="mb-2 text-[9px] font-bold uppercase text-gray-900">
                    Quantity
                  </p>

                  <div className="flex h-10 items-center rounded border text-black border-gray-200">

                    <button
                      type="button"
                      disabled={
                        !canBuy ||
                        quantity <= 1
                      }
                      onClick={() =>
                        setQuantity(
                          (current) =>
                            Math.max(
                              1,
                              current - 1
                            )
                        )
                      }
                      className="h-full w-9 text-gray-900 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      −
                    </button>

                    <span className="flex h-full w-10 items-center justify-center border-x border-gray-200 text-xs font-bold">
                      {quantity}
                    </span>

                    <button
                      type="button"
                      disabled={
                        !canBuy ||
                        quantity >=
                          product.stock
                      }
                      onClick={() =>
                        setQuantity(
                          (current) =>
                            Math.min(
                              product.stock,
                              current + 1
                            )
                        )
                      }
                      className="h-full w-9 text-gray-900 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      +
                    </button>

                  </div>

                </div>


                {/* Total */}

                <div>

                  <p className="mb-2 text-[9px] font-bold uppercase text-gray-800">
                    Total
                  </p>

                  <p className="text-lg font-bold text-gray-900">
                    
                    {totalPrice.toFixed(
                      2
                    )}
                  </p>

                </div>

              </div>


              {/* Buttons */}

              <div className="mt-6 grid gap-2 sm:grid-cols-2">

                <button
                  type="button"
                  disabled={!canBuy}
                  onClick={addToCart}
                  className="rounded-lg bg-green-600 py-3 text-xs font-bold text-white transition-colors hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  ADD TO CART
                </button>

                <button
                  type="button"
                  disabled={!canBuy}
                  onClick={buyNow}
                  className="rounded-lg bg-gray-900 py-3 text-xs font-bold text-white transition-colors hover:bg-black disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  BUY NOW
                </button>

              </div>


              {/* Back */}

              <Link
                href="/products"
                className="mt-4 text-center text-[10px] text-gray-800 hover:text-green-600"
              >
                ← Continue Shopping
              </Link>

            </div>

          </div>

        </div>


        {/* =====================================
            EXTRA INFORMATION
        ===================================== */}

        <div className="mt-3 grid gap-3 sm:grid-cols-3">

          <div className="rounded-lg bg-white p-5 text-center">

            <div className="text-2xl">
              🚚
            </div>

            <h3 className="mt-2 text-xs text-black font-bold">
              FREE SHIPPING
            </h3>

            <p className="mt-1 text-[9px] text-gray-800">
              Fast and reliable delivery
            </p>

          </div>


          <div className="rounded-lg bg-white p-5 text-center">

            <div className="text-2xl">
              🔒
            </div>

            <h3 className="mt-2 text-xs text-black font-bold">
              SECURE PAYMENT
            </h3>

            <p className="mt-1 text-[9px] text-gray-800">
              Safe and secure shopping
            </p>

          </div>


          <div className="rounded-lg bg-white p-5 text-center">

            <div className="text-2xl">
              ↩️
            </div>

            <h3 className="mt-2 text-xs text-black font-bold">
              EASY RETURNS
            </h3>

            <p className="mt-1 text-[9px] text-gray-800">
              Simple return process
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}