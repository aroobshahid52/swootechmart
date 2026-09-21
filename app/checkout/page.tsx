"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Product = {
  _id: string;
  title: string;
  price: number;
  image?: string;
  images?: string[];
  brand?: string;
  category?: string;
};

type CartItem = {
  _id: string;
  userId: string;
  productId: Product;
  quantity: number;
};

export default function CheckoutPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [placingOrder, setPlacingOrder] = useState(false);
  const [error, setError] = useState("");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const [paymentMethod, setPaymentMethod] =
    useState("Cash on Delivery");

  useEffect(() => {
    loadCart();
  }, []);

  // ==========================================
  // LOAD CART
  // ==========================================
  async function loadCart() {
    try {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("token");

      if (!token) {
        setError("Please login first.");
        setLoading(false);
        return;
      }

      const res = await fetch("/api/cart", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error || "Unable to load cart."
        );
      }

      setCart(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Unable to load cart."
      );
    } finally {
      setLoading(false);
    }
  }

  // ==========================================
  // PRICE CALCULATIONS
  // ==========================================
  const subtotal = cart.reduce(
    (total, item) => {
      const price =
        Number(item.productId?.price) || 0;

      return total + price * item.quantity;
    },
    0
  );

  const shipping = subtotal > 0 ? 800 : 0;

  const tax = subtotal * 0.137;

  const total = subtotal + shipping + tax;

  // ==========================================
  // PLACE ORDER
  // ==========================================
  async function placeOrder() {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    if (
      !fullName.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !address.trim() ||
      !city.trim() ||
      !province.trim() ||
      !postalCode.trim()
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      setPlacingOrder(true);
      setError("");

      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first.");
        return;
      }

      const orderProducts = cart.map((item) => {
        const product = item.productId;

        return {
          productId: product._id,
          title: product.title,
          price: Number(product.price) || 0,
          quantity: item.quantity,
          image:
            product.image ||
            product.images?.[0] ||
            "",
        };
      });

      // const orderData = {
      //   userId: cart[0].userId,

      //   products: orderProducts,

      //   totalPrice: total,

      //   status: "Pending",
      // };

      const orderData = {
  userId: cart[0].userId,

  phone: phone,
  address: address,

  products: orderProducts,

  totalPrice: total,

  status: "Pending",
};
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(orderData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error || "Unable to place order."
        );
      }

      // Clear cart after successful order
      const clearRes = await fetch("/api/cart", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          clearAll: true,
        }),
      });

      if (!clearRes.ok) {
        console.warn(
          "Order created, but cart could not be cleared."
        );
      }

      // Save order ID for success page
      localStorage.setItem(
        "lastOrderId",
        data._id
      );

      // Redirect
      window.location.href = "/order-success";
    } catch (err) {
      console.error("PLACE ORDER ERROR:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Unable to place order."
      );
    } finally {
      setPlacingOrder(false);
    }
  }

  // ==========================================
  // LOADING
  // ==========================================
  if (loading) {
    return (
      <main className="min-h-screen bg-gray-100 px-4 py-16">
        <div className="mx-auto max-w-7xl rounded-lg bg-white p-10 text-center">
          <p className="text-sm text-gray-500">
            Loading checkout...
          </p>
        </div>
      </main>
    );
  }

  // ==========================================
  // EMPTY CART
  // ==========================================
  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-gray-100 px-4 py-10">
        <div className="mx-auto max-w-3xl rounded-lg bg-white px-6 py-20 text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-3xl">
            🛒
          </div>

          <h1 className="mt-5 text-xl font-bold text-gray-900">
            Your Cart is Empty
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Add some products before checkout.
          </p>

          <Link
            href="/products"
            className="mt-6 inline-block rounded bg-green-600 px-6 py-3 text-xs font-bold text-white hover:bg-green-700"
          >
            CONTINUE SHOPPING
          </Link>

        </div>
      </main>
    );
  }

  // ==========================================
  // CHECKOUT PAGE
  // ==========================================
  return (
    <main className="min-h-screen bg-gray-100 px-3 py-4 sm:px-5">

      <div className="mx-auto max-w-7xl">

        {/* Breadcrumb */}
        <div className="mb-4 rounded-lg bg-white px-4 py-3 text-[10px] text-gray-500">

          <Link
            href="/"
            className="hover:text-green-600"
          >
            Home
          </Link>

          <span className="mx-2">/</span>

          <Link
            href="/cart"
            className="hover:text-green-600"
          >
            Cart
          </Link>

          <span className="mx-2">/</span>

          <span className="text-gray-900">
            Checkout
          </span>

        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-4 text-xs text-red-600">
            {error}
          </div>
        )}

        <div className="grid gap-5 lg:grid-cols-[1fr_360px]">

          {/* LEFT SIDE */}
          <div className="space-y-5">

            {/* Customer Information */}
            <div className="rounded-lg bg-white p-5">

              <h1 className="text-base font-bold text-gray-900">
                CUSTOMER INFORMATION
              </h1>

              <p className="mt-1 text-[10px] text-gray-400">
                Enter your delivery information.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">

                {/* Full Name */}
                <div>
                  <label className="mb-1 block text-[10px] font-semibold text-gray-700">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) =>
                      setFullName(e.target.value)
                    }
                    placeholder="Enter your full name"
                    className="w-full rounded border border-gray-200 px-3 py-2.5 text-xs text-gray-900 outline-none focus:border-green-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-1 block text-[10px] font-semibold text-gray-700">
                    Email *
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    placeholder="Enter your email"
                    className="w-full rounded border border-gray-200 px-3 py-2.5 text-xs text-gray-900 outline-none focus:border-green-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-1 block text-[10px] font-semibold text-gray-700">
                    Phone *
                  </label>

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value)
                    }
                    placeholder="03XX XXXXXXX"
                    className="w-full rounded border border-gray-200 px-3 py-2.5 text-xs text-gray-900 outline-none focus:border-green-500"
                  />
                </div>

              </div>

            </div>

            {/* Shipping Address */}
            <div className="rounded-lg bg-white p-5">

              <h2 className="text-base font-bold text-gray-900">
                SHIPPING ADDRESS
              </h2>

              <div className="mt-5 space-y-4">

                {/* Address */}
                <div>
                  <label className="mb-1 block text-[10px] font-semibold text-gray-700">
                    Address *
                  </label>

                  <textarea
                    value={address}
                    onChange={(e) =>
                      setAddress(e.target.value)
                    }
                    placeholder="Enter your complete address"
                    rows={3}
                    className="w-full resize-none rounded border border-gray-200 px-3 py-2.5 text-xs text-gray-900 outline-none focus:border-green-500"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-3">

                  {/* City */}
                  <div>
                    <label className="mb-1 block text-[10px] font-semibold text-gray-700">
                      City *
                    </label>

                    <input
                      type="text"
                      value={city}
                      onChange={(e) =>
                        setCity(e.target.value)
                      }
                      placeholder="Lahore"
                      className="w-full rounded border border-gray-200 px-3 py-2.5 text-xs text-gray-900 outline-none focus:border-green-500"
                    />
                  </div>

                  {/* Province */}
                  <div>
                    <label className="mb-1 block text-[10px] font-semibold text-gray-700">
                      Province *
                    </label>

                    <input
                      type="text"
                      value={province}
                      onChange={(e) =>
                        setProvince(e.target.value)
                      }
                      placeholder="Punjab"
                      className="w-full rounded border border-gray-200 px-3 py-2.5 text-xs text-gray-900 outline-none focus:border-green-500"
                    />
                  </div>

                  {/* Postal Code */}
                  <div>
                    <label className="mb-1 block text-[10px] font-semibold text-gray-700">
                      Postal Code *
                    </label>

                    <input
                      type="text"
                      value={postalCode}
                      onChange={(e) =>
                        setPostalCode(e.target.value)
                      }
                      placeholder="54000"
                      className="w-full rounded border border-gray-200 px-3 py-2.5 text-xs text-gray-900 outline-none focus:border-green-500"
                    />
                  </div>

                </div>

              </div>

            </div>

            {/* Payment */}
            <div className="rounded-lg bg-white p-5">

              <h2 className="text-base font-bold text-gray-900">
                PAYMENT METHOD
              </h2>

              <div className="mt-4">

                <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-green-500 bg-green-50 p-4">

                  <input
                    type="radio"
                    name="payment"
                    value="Cash on Delivery"
                    checked={
                      paymentMethod ===
                      "Cash on Delivery"
                    }
                    onChange={(e) =>
                      setPaymentMethod(
                        e.target.value
                      )
                    }
                  />

                  <div>
                    <p className="text-xs font-bold text-gray-900">
                      Cash on Delivery
                    </p>

                    <p className="mt-1 text-[9px] text-gray-500">
                      Pay when your order arrives.
                    </p>
                  </div>

                </label>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="h-fit rounded-lg border border-green-500 bg-white p-5 lg:sticky lg:top-5">

            <h2 className="text-sm font-bold text-gray-900">
              ORDER SUMMARY
            </h2>

            {/* Products */}
            <div className="mt-5 space-y-3 border-b pb-5">

              {cart.map((item) => {

                const product =
                  item.productId;

                const image =
                  product?.image ||
                  product?.images?.[0];

                const price =
                  Number(product?.price) || 0;

                return (
                  <div
                    key={item._id}
                    className="flex gap-3"
                  >

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded bg-gray-50 p-1">

                      {image ? (
                        <img
                          src={image}
                          alt={product.title}
                          className="max-h-full max-w-full object-contain"
                        />
                      ) : (
                        <span>📦</span>
                      )}

                    </div>

                    <div className="min-w-0 flex-1">

                      <p className="line-clamp-2 text-[10px] font-semibold text-gray-900">
                        {product.title}
                      </p>

                      <p className="mt-1 text-[9px] text-gray-500">
                        Qty: {item.quantity}
                      </p>

                    </div>

                    <p className="text-[10px] font-bold text-gray-900">
                      
                      {(
                        price *
                        item.quantity
                      )}
                    </p>

                  </div>
                );
              })}

            </div>

            {/* Totals */}
            <div className="mt-5 space-y-4">

              <div className="flex justify-between">
                <span className="text-[10px] text-gray-500">
                  Sub Total
                </span>

                <span className="text-[10px] font-semibold text-gray-900">
                  {subtotal}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-[10px] text-gray-500">
                  Shipping
                </span>

                <span className="text-[10px] font-semibold text-gray-900">
                  {shipping}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-[10px] text-gray-500">
                  Tax
                </span>

                <span className="text-[10px] font-semibold text-gray-900">
                  {tax}
                </span>
              </div>

              <div className="border-t pt-4">

                <div className="flex justify-between">

                  <span className="text-xs font-bold text-gray-900">
                    ORDER TOTAL
                  </span>

                  <span className="text-base font-bold text-green-600">
                    {total}
                  </span>

                </div>

              </div>

            </div>

            {/* Place Order */}
            <button
              type="button"
              onClick={placeOrder}
              disabled={placingOrder}
              className="mt-6 w-full rounded bg-green-600 py-3 text-[10px] font-bold text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {placingOrder
                ? "PLACING ORDER..."
                : "PLACE ORDER"}
            </button>

            <Link
              href="/cart"
              className="mt-3 block text-center text-[9px] font-semibold text-gray-500 hover:text-green-600"
            >
              ← Back to Cart
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}