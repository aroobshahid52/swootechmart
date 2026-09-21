"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function OrderSuccessPage() {
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    const id = localStorage.getItem("lastOrderId");

    if (id) {
      setOrderId(id);
    }
  }, []);
  const [isAdmin, setIsAdmin] = useState(false);

useEffect(() => {
  const role = localStorage.getItem("role");
  setIsAdmin(role?.toLowerCase() === "admin");
}, []);

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-16">

      <div className="mx-auto max-w-lg rounded-lg bg-white px-6 py-16 text-center">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl text-green-600">
          ✓
        </div>

        <h1 className="mt-6 text-2xl font-bold text-gray-900">
          Order Placed Successfully!
        </h1>

        <p className="mt-3 text-sm text-gray-500">
          Thank you for your order. Your order has
          been received successfully.
        </p>

        {orderId && (
          <div className="mt-6 rounded-lg bg-gray-50 p-4">
            <p className="text-[10px] text-gray-500">
              ORDER ID
            </p>

            <p className="mt-2 break-all text-xs font-bold text-gray-900">
              {orderId}
            </p>
          </div>
        )}

        <div className="mt-12 flex justify-center gap-4">
  <Link
    href="/"
    className="flex items-center justify-center rounded-md bg-green-600 px-8 py-4 text-sm font-bold text-white transition hover:bg-green-700"
  >
    CONTINUE SHOPPING
  </Link>

  {isAdmin ? (
    <Link
      href="/cart"
      className="flex items-center justify-center rounded-md border border-gray-300 px-8 py-4 text-sm font-bold text-gray-800 transition hover:border-green-600 hover:text-green-600"
    >
      VIEW CART
    </Link>
  ) : (
    <Link
      href="/orders"
      className="flex items-center justify-center rounded-md border border-gray-300 px-8 py-4 text-sm font-bold text-gray-800 transition hover:border-green-600 hover:text-green-600"
    >
      MY ORDERS
    </Link>
  )}
</div>

      </div>

    </main>
  );
}