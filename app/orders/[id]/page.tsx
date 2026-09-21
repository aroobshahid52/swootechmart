"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
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

export default function OrderDetailsPage() {
  const params = useParams();
  const id = params.id;

  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (id) {
      fetchOrder();
    }
  }, [id]);

  async function fetchOrder() {
    try {
      const response = await fetch(`/api/orders/${id}`);

      if (!response.ok) {
        throw new Error("Order not found");
      }

      const data = await response.json();

      setOrder(data);
    } catch (error) {
      setError("Unable to load order.");
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

  if (loading) {
    return (
      <>
        <main className="min-h-screen bg-gray-100 px-3 py-5 sm:px-5">
          <div className="mx-auto max-w-5xl rounded-xl bg-white p-10 text-center">
            <p className="text-sm text-gray-500">
              Loading order...
            </p>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  if (error || !order) {
    return (
      <>
        <main className="min-h-screen bg-gray-100 px-3 py-5 sm:px-5">
          <div className="mx-auto max-w-5xl">

            <div className="rounded-xl bg-white p-10 text-center">

              <h1 className="text-xl font-bold text-gray-900">
                Order Not Found
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                This order could not be found.
              </p>

              <Link
                href="/orders"
                className="mt-6 inline-block rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white"
              >
                BACK TO ORDERS
              </Link>

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
        <div className="mx-auto max-w-5xl">

          {/* Breadcrumb */}
          <div className="mb-5 rounded-lg bg-white px-5 py-3 text-sm text-gray-500">

            <Link
              href="/"
              className="hover:text-green-600"
            >
              Home
            </Link>

            <span className="mx-2">/</span>

            <Link
              href="/orders"
              className="hover:text-green-600"
            >
              Orders
            </Link>

            <span className="mx-2">/</span>

            <span className="text-gray-900">
              Order Details
            </span>

          </div>

          {/* Order Header */}
          <section className="rounded-xl bg-white p-6 shadow-sm sm:p-8">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Order ID
                </p>

                <h1 className="mt-1 text-xl font-bold text-gray-900">
                  #{order._id}
                </h1>

                <p className="mt-2 text-xs text-gray-400">
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

              <span
                className={`w-fit rounded-full px-5 py-2 text-xs font-semibold ${getStatusClass(
                  order.status
                )}`}
              >
                {order.status}
              </span>

            </div>

          </section>

          {/* Products */}
          <section className="mt-5 rounded-xl bg-white shadow-sm">

            <div className="border-b border-gray-100 px-6 py-5">
              <h2 className="text-lg font-bold text-gray-900">
                Ordered Products
              </h2>
            </div>

            <div className="divide-y divide-gray-100">

              {order.products?.map((product, index) => {

                const image =
                  product.image ||
                  product.images?.[0] ||
                  "https://via.placeholder.com/100";

                const name =
                  product.title ||
                  product.name ||
                  "Product";

                return (
                  <div
                    key={index}
                    className="flex gap-4 p-6"
                  >

                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                      <img
                        src={image}
                        alt={name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex-1">

                      <h3 className="text-sm font-semibold text-gray-900">
                        {name}
                      </h3>

                      <p className="mt-2 text-xs text-gray-400">
                        Quantity: {product.quantity || 1}
                      </p>

                      <p className="mt-1 text-sm font-semibold text-green-600">
                        {Number(product.price || 0)}
                      </p>

                    </div>

                  </div>
                );
              })}

            </div>

            {/* Total */}
            <div className="border-t border-gray-100 bg-gray-50 px-6 py-5">

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">
                  Total Amount
                </span>

                <span className="text-xl font-bold text-gray-900">
                  {Number(order.totalPrice || 0)}
                </span>
              </div>

            </div>

          </section>

          {/* Status */}
          <section className="mt-5 rounded-xl bg-white p-6 shadow-sm">

            <h2 className="text-lg font-bold text-gray-900">
              Order Status
            </h2>

            <div className="mt-6 flex items-center justify-between">

              <div className="text-center">
                <div
                  className={`mx-auto h-4 w-4 rounded-full ${
                    ["Pending", "Processing", "Shipped", "Delivered"].includes(
                      order.status
                    )
                      ? "bg-green-600"
                      : "bg-gray-200"
                  }`}
                />

                <p className="mt-2 text-xs text-gray-500">
                  Pending
                </p>
              </div>

              <div className="h-px flex-1 bg-gray-200" />

              <div className="text-center">
                <div
                  className={`mx-auto h-4 w-4 rounded-full ${
                    ["Processing", "Shipped", "Delivered"].includes(
                      order.status
                    )
                      ? "bg-green-600"
                      : "bg-gray-200"
                  }`}
                />

                <p className="mt-2 text-xs text-gray-500">
                  Processing
                </p>
              </div>

              <div className="h-px flex-1 bg-gray-200" />

              <div className="text-center">
                <div
                  className={`mx-auto h-4 w-4 rounded-full ${
                    ["Shipped", "Delivered"].includes(order.status)
                      ? "bg-green-600"
                      : "bg-gray-200"
                  }`}
                />

                <p className="mt-2 text-xs text-gray-500">
                  Shipped
                </p>
              </div>

              <div className="h-px flex-1 bg-gray-200" />

              <div className="text-center">
                <div
                  className={`mx-auto h-4 w-4 rounded-full ${
                    order.status === "Delivered"
                      ? "bg-green-600"
                      : "bg-gray-200"
                  }`}
                />

                <p className="mt-2 text-xs text-gray-500">
                  Delivered
                </p>
              </div>

            </div>

          </section>

          {/* Back */}
          <div className="mt-5 pb-7">
            <Link
              href="/orders"
              className="inline-block rounded-md border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-green-600 hover:text-green-600"
            >
              ← BACK TO ORDERS
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}