// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";

// type Product = {
//   _id: string;
//   title: string;
//   price: number;
//   image?: string;
//   images?: string[];
//   brand?: string;
//   category?: string;
// };

// type CartItem = {
//   _id: string;
//   userId: string;
//   productId: Product;
//   quantity: number;
// };

// export default function CartPage() {
//   const [cart, setCart] = useState<CartItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     loadCart();
//   }, []);

//   // ==========================================
//   // LOAD CART
//   // ==========================================
//   async function loadCart() {
//     try {
//       setLoading(true);
//       setError("");

//       const token = localStorage.getItem("token");

//       if (!token) {
//         setError("Please login first.");
//         setLoading(false);
//         return;
//       }

//       const res = await fetch("/api/cart", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(
//           data.error || "Unable to load cart"
//         );
//       }

//       setCart(Array.isArray(data) ? data : []);
//     } catch (err) {
//       console.error(err);

//       setError(
//         err instanceof Error
//           ? err.message
//           : "Unable to load cart"
//       );
//     } finally {
//       setLoading(false);
//     }
//   }

//   // ==========================================
//   // UPDATE QUANTITY
//   // ==========================================
//   async function updateQuantity(
//     cartId: string,
//     quantity: number
//   ) {
//     if (quantity < 1) {
//       await removeItem(cartId);
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         alert("Please login first.");
//         return;
//       }

//       const res = await fetch("/api/cart", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           cartId,
//           quantity,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(
//           data.error || "Unable to update quantity"
//         );
//       }

//       setCart((oldCart) =>
//         oldCart.map((item) =>
//           item._id === cartId
//             ? {
//                 ...item,
//                 quantity,
//               }
//             : item
//         )
//       );
//     } catch (err) {
//       console.error(err);

//       alert(
//         err instanceof Error
//           ? err.message
//           : "Unable to update quantity"
//       );
//     }
//   }

//   // ==========================================
//   // REMOVE ITEM
//   // ==========================================
//   async function removeItem(cartId: string) {
//     try {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         alert("Please login first.");
//         return;
//       }

//       const res = await fetch("/api/cart", {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           cartId,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(
//           data.error || "Unable to remove item"
//         );
//       }

//       setCart((oldCart) =>
//         oldCart.filter(
//           (item) => item._id !== cartId
//         )
//       );
//     } catch (err) {
//       console.error(err);

//       alert(
//         err instanceof Error
//           ? err.message
//           : "Unable to remove item"
//       );
//     }
//   }

//   // ==========================================
//   // CLEAR CART
//   // ==========================================
//   async function clearCart() {
//     if (cart.length === 0) return;

//     const confirmed = window.confirm(
//       "Are you sure you want to clear your cart?"
//     );

//     if (!confirmed) return;

//     try {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         alert("Please login first.");
//         return;
//       }

//       const res = await fetch("/api/cart", {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           clearAll: true,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(
//           data.error || "Unable to clear cart"
//         );
//       }

//       setCart([]);
//     } catch (err) {
//       console.error(err);

//       alert(
//         err instanceof Error
//           ? err.message
//           : "Unable to clear cart"
//       );
//     }
//   }

//   // ==========================================
//   // PRICE CALCULATIONS
//   // ==========================================
//   const subtotal = cart.reduce(
//     (total, item) => {
//       const price =
//         Number(item.productId?.price) || 0;

//       return (
//         total +
//         price * item.quantity
//       );
//     },
//     0
//   );

//   const shipping =
//     subtotal > 0 ? 800 : 0;

//   const tax = subtotal * 0.137;

//   const total =
//     subtotal + shipping + tax;

//   // ==========================================
//   // LOADING
//   // ==========================================
//   if (loading) {
//     return (
//       <main className="min-h-screen bg-gray-100 px-4 py-16">
//         <div className="mx-auto max-w-7xl rounded-lg bg-white p-10 text-center">
//           <p className="text-sm text-gray-500">
//             Loading cart...
//           </p>
//         </div>
//       </main>
//     );
//   }

//   // ==========================================
//   // PAGE
//   // ==========================================
//   return (
//     <main className="min-h-screen bg-gray-100 px-3 py-4 sm:px-5">

//       <div className="mx-auto max-w-7xl">

//         {/* Breadcrumb */}
//         <div className="mb-4 rounded-lg bg-white px-4 py-3 text-[10px] text-gray-500">

//           <Link
//             href="/"
//             className="hover:text-green-600"
//           >
//             Home
//           </Link>

//           <span className="mx-2">/</span>

//           <span className="text-gray-900">
//             Cart
//           </span>

//         </div>

//         {/* Error */}
//         {error && (
//           <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-4 text-xs text-red-600">
//             {error}
//           </div>
//         )}

//         {/* Empty Cart */}
//         {cart.length === 0 ? (

//           <div className="rounded-lg bg-white px-4 py-20 text-center">

//             <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-3xl">
//               🛒
//             </div>

//             <h1 className="mt-5 text-lg font-bold text-gray-900">
//               Your Cart is Empty
//             </h1>

//             <p className="mt-2 text-xs text-gray-500">
//               Add some products to your cart.
//             </p>

//             <Link
//               href="/products"
//               className="mt-6 inline-block rounded bg-green-600 px-6 py-3 text-[10px] font-bold text-white hover:bg-green-700"
//             >
//               CONTINUE SHOPPING
//             </Link>

//           </div>

//         ) : (

//           <div className="grid gap-5 lg:grid-cols-[1fr_320px]">

//             {/* Cart Items */}
//             <div className="rounded-lg bg-white p-4">

//               <div className="mb-5 flex items-center justify-between border-b pb-4">

//                 <div>
//                   <h1 className="text-base font-bold text-gray-900">
//                     SHOPPING CART
//                   </h1>

//                   <p className="mt-1 text-[9px] text-gray-400">
//                     {cart.length}{" "}
//                     {cart.length === 1
//                       ? "item"
//                       : "items"}
//                   </p>
//                 </div>

//                 <button
//                   type="button"
//                   onClick={clearCart}
//                   className="text-[9px] font-bold text-red-500 hover:text-red-600"
//                 >
//                   CLEAR CART
//                 </button>

//               </div>

//               <div className="space-y-3">

//                 {cart.map((item) => {

//                   const product =
//                     item.productId;

//                   const image =
//                     product?.image ||
//                     product?.images?.[0];

//                   const price =
//                     Number(product?.price) || 0;

//                   const itemTotal =
//                     price * item.quantity;

//                   return (

//                     <div
//                       key={item._id}
//                       className="rounded-lg bg-gray-50 p-3"
//                     >

//                       <div className="flex gap-4">

//                         {/* Image */}
//                         <div className="flex h-28 w-24 shrink-0 items-center justify-center rounded-lg bg-white p-2">

//                           {image ? (

//                             <img
//                               src={image}
//                               alt={product.title}
//                               className="max-h-full max-w-full object-contain"
//                             />

//                           ) : (

//                             <span className="text-3xl">
//                               📦
//                             </span>

//                           )}

//                         </div>

//                         {/* Product Details */}
//                         <div className="min-w-0 flex-1">

//                           <div className="flex justify-between gap-2">

//                             <div>

//                               {product.brand && (
//                                 <p className="text-[8px] uppercase text-gray-400">
//                                   {product.brand}
//                                 </p>
//                               )}

//                               <h2 className="mt-1 text-xs font-bold text-gray-900">
//                                 {product.title}
//                               </h2>

//                               {product.category && (
//                                 <p className="mt-1 text-[8px] text-gray-400">
//                                   {product.category}
//                                 </p>
//                               )}

//                             </div>

//                             <button
//                               type="button"
//                               onClick={() =>
//                                 removeItem(
//                                   item._id
//                                 )
//                               }
//                               className="h-7 w-7 rounded-full bg-white text-gray-400 hover:bg-red-50 hover:text-red-500"
//                             >
//                               ×
//                             </button>

//                           </div>

//                           <div className="mt-3 flex items-center justify-between">

//                             <span className="text-sm font-bold text-gray-900">
//                               ${price.toFixed(2)}
//                             </span>

//                             <span className="text-[9px] text-gray-500">
//                               Total: $
//                               {itemTotal.toFixed(
//                                 2
//                               )}
//                             </span>

//                           </div>

//                           {/* Quantity */}
//                           <div className="mt-3 flex items-center gap-2">

//                             <span className="text-[9px] font-semibold text-gray-500">
//                               Quantity
//                             </span>

//                             <div className="flex h-7 rounded border border-gray-200 bg-white">

//                               <button
//                                 type="button"
//                                 onClick={() =>
//                                   updateQuantity(
//                                     item._id,
//                                     item.quantity -
//                                       1
//                                   )
//                                 }
//                                 className="w-7 text-gray-600 hover:bg-gray-50"
//                               >
//                                 −
//                               </button>

//                               <span className="flex min-w-8 items-center justify-center border-x border-gray-200 text-[9px] font-bold text-gray-900">
//                                 {item.quantity}
//                               </span>

//                               <button
//                                 type="button"
//                                 onClick={() =>
//                                   updateQuantity(
//                                     item._id,
//                                     item.quantity +
//                                       1
//                                   )
//                                 }
//                                 className="w-7 text-gray-600 hover:bg-gray-50"
//                               >
//                                 +
//                               </button>

//                             </div>

//                           </div>

//                         </div>

//                       </div>

//                     </div>
//                   );
//                 })}

//               </div>

//               <Link
//                 href="/products"
//                 className="mt-5 inline-block rounded border border-gray-200 px-4 py-2 text-[9px] font-bold text-gray-700 hover:border-green-500 hover:text-green-600"
//               >
//                 ← CONTINUE SHOPPING
//               </Link>

//             </div>

//             {/* Order Summary */}
//             <div className="h-fit rounded-lg border border-green-500 bg-white p-5">

//               <h2 className="text-sm font-bold text-gray-900">
//                 Order Summary
//               </h2>

//               <div className="mt-5 space-y-4">

//                 <div className="flex justify-between">

//                   <span className="text-[10px] text-gray-500">
//                     Sub Total
//                   </span>

//                   <span className="text-[10px] font-semibold text-gray-900">
//                     ${subtotal.toFixed(2)}
//                   </span>

//                 </div>

//                 <div className="flex justify-between">

//                   <span className="text-[10px] text-gray-500">
//                     Shipping estimate
//                   </span>

//                   <span className="text-[10px] font-semibold text-gray-900">
//                     ${shipping.toFixed(2)}
//                   </span>

//                 </div>

//                 <div className="flex justify-between">

//                   <span className="text-[10px] text-gray-500">
//                     Tax estimate
//                   </span>

//                   <span className="text-[10px] font-semibold text-gray-900">
//                     ${tax.toFixed(2)}
//                   </span>

//                 </div>

//                 <div className="border-t pt-4">

//                   <div className="flex justify-between">

//                     <span className="text-xs font-bold text-gray-900">
//                       ORDER TOTAL
//                     </span>

//                     <span className="text-sm font-bold text-green-600">
//                       ${total.toFixed(2)}
//                     </span>

//                   </div>

//                 </div>

//               </div>
// <Link
//   href="/checkout"
//   className="mt-6 block w-full rounded bg-green-600 py-3 text-center text-[10px] font-bold text-white hover:bg-green-700"
// >
//   CHECKOUT
// </Link>

//             </div>

//           </div>
//         )}

//       </div>
//     </main>
//   );
// }





//  new :




"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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

export default function CartPage() {
  const router = useRouter();

  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [checkingLogin, setCheckingLogin] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (!savedUser) {
      sessionStorage.setItem(
        "loginMessage",
        "Please login first to continue."
      );

      router.replace("/login");
      return;
    }

    try {
      JSON.parse(savedUser);

      setCheckingLogin(false);
      loadCart();
    } catch (error) {
      console.log("Unable to load user data");

      localStorage.removeItem("user");

      sessionStorage.setItem(
        "loginMessage",
        "Please login first to continue."
      );

      router.replace("/login");
    }
  }, [router]);

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
          data.error || "Unable to load cart"
        );
      }

      setCart(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Unable to load cart"
      );
    } finally {
      setLoading(false);
    }
  }

  // ==========================================
  // UPDATE QUANTITY
  // ==========================================
  async function updateQuantity(
    cartId: string,
    quantity: number
  ) {
    if (quantity < 1) {
      await removeItem(cartId);
      return;
    }

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first.");
        return;
      }

      const res = await fetch("/api/cart", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          cartId,
          quantity,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error || "Unable to update quantity"
        );
      }

      setCart((oldCart) =>
        oldCart.map((item) =>
          item._id === cartId
            ? {
                ...item,
                quantity,
              }
            : item
        )
      );
    } catch (err) {
      console.error(err);

      alert(
        err instanceof Error
          ? err.message
          : "Unable to update quantity"
      );
    }
  }

  // ==========================================
  // REMOVE ITEM
  // ==========================================
  async function removeItem(cartId: string) {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first.");
        return;
      }

      const res = await fetch("/api/cart", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          cartId,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error || "Unable to remove item"
        );
      }

      setCart((oldCart) =>
        oldCart.filter(
          (item) => item._id !== cartId
        )
      );
    } catch (err) {
      console.error(err);

      alert(
        err instanceof Error
          ? err.message
          : "Unable to remove item"
      );
    }
  }

  // ==========================================
  // CLEAR CART
  // ==========================================
  async function clearCart() {
    if (cart.length === 0) return;

    const confirmed = window.confirm(
      "Are you sure you want to clear your cart?"
    );

    if (!confirmed) return;

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first.");
        return;
      }

      const res = await fetch("/api/cart", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          clearAll: true,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error || "Unable to clear cart"
        );
      }

      setCart([]);
    } catch (err) {
      console.error(err);

      alert(
        err instanceof Error
          ? err.message
          : "Unable to clear cart"
      );
    }
  }

  // ==========================================
  // PRICE CALCULATIONS
  // ==========================================
  const subtotal = cart.reduce(
    (total, item) => {
      const price =
        Number(item.productId?.price) || 0;

      return (
        total +
        price * item.quantity
      );
    },
    0
  );

  const shipping =
    subtotal > 0 ? 800 : 0;

  const tax = subtotal * 0.137;

  const total =
    subtotal + shipping + tax;

  // ==========================================
  // CHECKING LOGIN
  // ==========================================
  if (checkingLogin) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100">
        <p className="text-sm text-gray-500">
          Checking login...
        </p>
      </main>
    );
  }

  // ==========================================
  // LOADING
  // ==========================================
  if (loading) {
    return (
      <main className="min-h-screen bg-gray-100 px-4 py-16">
        <div className="mx-auto max-w-7xl rounded-lg bg-white p-10 text-center">
          <p className="text-sm text-gray-500">
            Loading cart...
          </p>
        </div>
      </main>
    );
  }

  // ==========================================
  // PAGE
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

          <span className="text-gray-900">
            Cart
          </span>

        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-4 text-xs text-red-600">
            {error}
          </div>
        )}

        {/* Empty Cart */}
        {cart.length === 0 ? (

          <div className="rounded-lg bg-white px-4 py-20 text-center">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-3xl">
              🛒
            </div>

            <h1 className="mt-5 text-lg font-bold text-gray-900">
              Your Cart is Empty
            </h1>

            <p className="mt-2 text-xs text-gray-500">
              Add some products to your cart.
            </p>

            <Link
              href="/products"
              className="mt-6 inline-block rounded bg-green-600 px-6 py-3 text-[10px] font-bold text-white hover:bg-green-700"
            >
              CONTINUE SHOPPING
            </Link>

          </div>

        ) : (

          <div className="grid gap-5 lg:grid-cols-[1fr_320px]">

            {/* Cart Items */}
            <div className="rounded-lg bg-white p-4">

              <div className="mb-5 flex items-center justify-between border-b pb-4">

                <div>
                  <h1 className="text-base font-bold text-gray-900">
                    SHOPPING CART
                  </h1>

                  <p className="mt-1 text-[9px] text-gray-400">
                    {cart.length}{" "}
                    {cart.length === 1
                      ? "item"
                      : "items"}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={clearCart}
                  className="text-[9px] font-bold text-red-500 hover:text-red-600"
                >
                  CLEAR CART
                </button>

              </div>

              <div className="space-y-3">

                {cart.map((item) => {

                  const product =
                    item.productId;

                  const image =
                    product?.image ||
                    product?.images?.[0];

                  const price =
                    Number(product?.price) || 0;

                  const itemTotal =
                    price * item.quantity;

                  return (

                    <div
                      key={item._id}
                      className="rounded-lg bg-gray-50 p-3"
                    >

                      <div className="flex gap-4">

                        {/* Image */}
                        <div className="flex h-28 w-24 shrink-0 items-center justify-center rounded-lg bg-white p-2">

                          {image ? (

                            <img
                              src={image}
                              alt={product.title}
                              className="max-h-full max-w-full object-contain"
                            />

                          ) : (

                            <span className="text-3xl">
                              📦
                            </span>

                          )}

                        </div>

                        {/* Product Details */}
                        <div className="min-w-0 flex-1">

                          <div className="flex justify-between gap-2">

                            <div>

                              {product.brand && (
                                <p className="text-[8px] uppercase text-gray-400">
                                  {product.brand}
                                </p>
                              )}

                              <h2 className="mt-1 text-xs font-bold text-gray-900">
                                {product.title}
                              </h2>

                              {product.category && (
                                <p className="mt-1 text-[8px] text-gray-400">
                                  {product.category}
                                </p>
                              )}

                            </div>

                            <button
                              type="button"
                              onClick={() =>
                                removeItem(
                                  item._id
                                )
                              }
                              className="h-7 w-7 rounded-full bg-white text-gray-400 hover:bg-red-50 hover:text-red-500"
                            >
                              ×
                            </button>

                          </div>

                          <div className="mt-3 flex items-center justify-between">

                            <span className="text-sm font-bold text-gray-900">
                              {price}
                            </span>

                            <span className="text-[9px] text-gray-500">
                              Total: 
                              {itemTotal.toFixed(
                                2
                              )}
                            </span>

                          </div>

                          {/* Quantity */}
                          <div className="mt-3 flex items-center gap-2">

                            <span className="text-[9px] font-semibold text-gray-500">
                              Quantity
                            </span>

                            <div className="flex h-7 rounded border border-gray-200 bg-white">

                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(
                                    item._id,
                                    item.quantity -
                                      1
                                  )
                                }
                                className="w-7 text-gray-600 hover:bg-gray-50"
                              >
                                −
                              </button>

                              <span className="flex min-w-8 items-center justify-center border-x border-gray-200 text-[9px] font-bold text-gray-900">
                                {item.quantity}
                              </span>

                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(
                                    item._id,
                                    item.quantity +
                                      1
                                  )
                                }
                                className="w-7 text-gray-600 hover:bg-gray-50"
                              >
                                +
                              </button>

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>
                  );
                })}

              </div>

              <Link
                href="/products"
                className="mt-5 inline-block rounded border border-gray-200 px-4 py-2 text-[9px] font-bold text-gray-700 hover:border-green-500 hover:text-green-600"
              >
                ← CONTINUE SHOPPING
              </Link>

            </div>

            {/* Order Summary */}
            <div className="h-fit rounded-lg border border-green-500 bg-white p-5">

              <h2 className="text-sm font-bold text-gray-900">
                Order Summary
              </h2>

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
                    Shipping estimate
                  </span>

                  <span className="text-[10px] font-semibold text-gray-900">
                    {shipping}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-[10px] text-gray-500">
                    Tax estimate
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

                    <span className="text-sm font-bold text-green-600">
                      {total}
                    </span>

                  </div>

                </div>

              </div>

              <Link
                href="/checkout"
                className="mt-6 block w-full rounded bg-green-600 py-3 text-center text-[10px] font-bold text-white hover:bg-green-700"
              >
                CHECKOUT
              </Link>

            </div>

          </div>
        )}

      </div>

    </main>
  );
}