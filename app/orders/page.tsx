"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

type Product = {
  _id?: string;
  title?: string;
  name?: string;
  price?: number;
  quantity?: number;
  image?: string;
  images?: string[];
};

type Order = {
  _id: string;
  userId?: string;
  products: Product[];
  totalPrice: number;
  status: string;
  createdAt: string;
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchOrders();

    // Check for updated order status every 5 seconds
    const interval = setInterval(() => {
      fetchOrders();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  async function fetchOrders() {
    try {
      setError("");

      const response = await fetch("/api/orders", {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Failed to load orders");
      }

      const data = await response.json();

      const savedUser = localStorage.getItem("user");

      if (!savedUser) {
        setOrders([]);
        setLoading(false);
        return;
      }

      const user = JSON.parse(savedUser);

      const currentUserOrders = data
        .filter(
          (order: Order) =>
            String(order.userId) === String(user._id)
        )
        .sort(
          (a: Order, b: Order) =>
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime()
        );

      setOrders(currentUserOrders);
    } catch (error) {
      setError("Unable to load your orders.");
    } finally {
      setLoading(false);
    }
  }

  function getStatusClass(status: string) {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-700";

      case "processing":
        return "bg-blue-100 text-blue-700";

      case "shipped":
        return "bg-purple-100 text-purple-700";

      case "delivered":
        return "bg-green-100 text-green-700";

      case "cancelled":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  }

  function getProductName(product: Product) {
    return product.title || product.name || "Product";
  }

  function getProductImage(product: Product) {
    return (
      product.image ||
      product.images?.[0] ||
      "https://via.placeholder.com/100"
    );
  }

  if (loading) {
    return (
      <>
        <main className="min-h-screen bg-gray-100 px-3 py-5 sm:px-5">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-lg bg-white p-10 text-center">
              <p className="text-sm text-gray-500">
                Loading your orders...
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-gray-100 px-3 py-5 sm:px-5">
        <div className="mx-auto max-w-7xl">

          {/* Breadcrumb */}
          <div className="mb-5 rounded-lg bg-white px-5 py-3 text-sm text-gray-500 shadow-sm">
            <Link
              href="/"
              className="transition hover:text-green-600"
            >
              Home
            </Link>

            <span className="mx-2">/</span>

            <span className="text-gray-900">
              My Orders
            </span>
          </div>

          {/* Header */}
          <div className="mb-5">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              My Orders
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              View and track all your orders.
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-5 rounded-lg bg-red-50 px-5 py-4 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Empty Orders */}
          {!error && orders.length === 0 && (
            <section className="rounded-xl bg-white px-6 py-16 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <span className="text-2xl text-green-600">
                  📦
                </span>
              </div>

              <h2 className="mt-5 text-xl font-bold text-gray-900">
                No Orders Yet
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
                You haven't placed any orders yet. Start shopping
                and your orders will appear here.
              </p>

              <Link
                href="/"
                className="mt-6 inline-block rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                START SHOPPING
              </Link>
            </section>
          )}

          {/* Orders */}
          {orders.length > 0 && (
            <div className="space-y-5">
              {orders.map((order) => (
                <section
                  key={order._id}
                  className="overflow-hidden rounded-xl bg-white shadow-sm"
                >
                  {/* Order Header */}
                  <div className="border-b border-gray-100 px-5 py-5 sm:px-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                          Order ID
                        </p>

                        <p className="mt-1 text-sm font-bold text-gray-900">
                          #{order._id}
                        </p>

                        <p className="mt-1 text-xs text-gray-400">
                          {new Date(order.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </p>
                      </div>

                      <div className="flex items-center justify-between gap-4 sm:justify-end">

                        <span
                          className={`rounded-full px-4 py-2 text-xs font-semibold ${getStatusClass(
                            order.status
                          )}`}
                        >
                          {order.status}
                        </span>

                        <div className="text-right">
                          <p className="text-xs text-gray-400">
                            Total
                          </p>

                          <p className="text-lg font-bold text-gray-900">
                            
                            {Number(
                              order.totalPrice || 0
                            ).toFixed(2)}
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* Products */}
                  <div className="divide-y divide-gray-100">
                    {order.products?.map((product, index) => (
                      <div
                        key={`${order._id}-${index}`}
                        className="flex gap-4 px-5 py-5 sm:px-6"
                      >
                        {/* Product Image */}
                        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                          <img
                            src={getProductImage(product)}
                            alt={getProductName(product)}
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="min-w-0 flex-1">
                          <h3 className="text-sm font-semibold text-gray-900">
                            {getProductName(product)}
                          </h3>

                          <p className="mt-2 text-xs text-gray-400">
                            Quantity: {product.quantity || 1}
                          </p>

                          <p className="mt-1 text-sm font-semibold text-green-600">
                            
                            {Number(
                              product.price || 0
                            )}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 bg-gray-50 px-5 py-4 sm:px-6">

                    <p className="text-xs text-gray-500">
                      {order.products?.length || 0} product
                      {(order.products?.length || 0) !== 1
                        ? "s"
                        : ""}
                    </p>

                    <Link
                      href={`/orders/${order._id}`}
                      className="rounded-md border border-gray-200 bg-white px-5 py-2.5 text-xs font-semibold text-gray-700 transition hover:border-green-600 hover:text-green-600"
                    >
                      VIEW DETAILS
                    </Link>

                  </div>
                </section>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}