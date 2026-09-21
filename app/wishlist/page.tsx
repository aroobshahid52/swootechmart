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

// type WishlistItem = {
//   _id: string;
//   userId: string;
//   productId: string;
//   createdAt?: string;
// };

// export default function WishlistPage() {
//   const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
//   const [products, setProducts] = useState<Record<string, Product>>({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     loadWishlist();
//   }, []);

//   // Get user ID from JWT token
//   function getUserIdFromToken() {
//     try {
//       const token = localStorage.getItem("token");

//       if (!token) return null;

//       const payload = JSON.parse(
//         atob(token.split(".")[1])
//       );

//       return payload.id || payload._id || payload.userId;
//     } catch (error) {
//       console.error("TOKEN ERROR:", error);
//       return null;
//     }
//   }

//   // ==========================================
//   // LOAD WISHLIST
//   // ==========================================
//   async function loadWishlist() {
//     try {
//       setLoading(true);
//       setError("");

//       const userId = getUserIdFromToken();

//       if (!userId) {
//         setError("Please login first.");
//         return;
//       }

//       const res = await fetch("/api/wishlist");

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(
//           data.error || "Unable to load wishlist"
//         );
//       }

//       // Only show current user's wishlist
//     const userWishlist = Array.isArray(data)
//   ? data.filter(
//       (item: WishlistItem) =>
//         String(item.userId) === String(userId)
//     )
//   : [];

//       setWishlist(userWishlist);

//       // Get product details
//       const productResults = await Promise.all(
//         userWishlist.map(async (item: WishlistItem) => {
//           try {
//             const productRes = await fetch(
//               `/api/products/${item.productId}`
//             );

//             if (!productRes.ok) return null;

//             const productData =
//               await productRes.json();

//             return {
//               id: item.productId,
//               product: productData,
//             };
//           } catch (error) {
//             console.error(
//               "PRODUCT ERROR:",
//               error
//             );

//             return null;
//           }
//         })
//       );

//       const productMap: Record<string, Product> = {};

//       productResults.forEach((result) => {
//         if (result) {
//           productMap[result.id] =
//             result.product;
//         }
//       });

//       setProducts(productMap);
//     } catch (error) {
//       console.error(error);

//       setError(
//         error instanceof Error
//           ? error.message
//           : "Unable to load wishlist"
//       );
//     } finally {
//       setLoading(false);
//     }
//   }

//   // ==========================================
//   // REMOVE FROM WISHLIST
//   // ==========================================
//   async function removeFromWishlist(
//     wishlistId: string
//   ) {
//     try {
//       const res = await fetch(
//         `/api/wishlist/${wishlistId}`,
//         {
//           method: "DELETE",
//         }
//       );

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(
//           data.error ||
//             "Unable to remove wishlist item"
//         );
//       }

//       setWishlist((oldWishlist) =>
//         oldWishlist.filter(
//           (item) => item._id !== wishlistId
//         )
//       );
//     } catch (error) {
//       console.error(error);

//       alert(
//         error instanceof Error
//           ? error.message
//           : "Unable to remove item"
//       );
//     }
//   }

//   // ==========================================
//   // LOADING
//   // ==========================================
//   if (loading) {
//     return (
//       <main className="min-h-screen bg-gray-100 px-4 py-16">
//         <div className="mx-auto max-w-7xl rounded-lg bg-white p-10 text-center">
//           <p className="text-sm text-gray-500">
//             Loading wishlist...
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
//             Wishlist
//           </span>

//         </div>

//         {/* Error */}
//         {error && (
//           <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-4 text-xs text-red-600">
//             {error}
//           </div>
//         )}

//         {/* Empty Wishlist */}
//         {wishlist.length === 0 ? (

//           <div className="rounded-lg bg-white px-4 py-20 text-center">

//             <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-3xl">
//               ♡
//             </div>

//             <h1 className="mt-5 text-lg font-bold text-gray-900">
//               Your Wishlist is Empty
//             </h1>

//             <p className="mt-2 text-xs text-gray-500">
//               Save your favorite products here.
//             </p>

//             <Link
//               href="/products"
//               className="mt-6 inline-block rounded bg-green-600 px-6 py-3 text-[10px] font-bold text-white hover:bg-green-700"
//             >
//               CONTINUE SHOPPING
//             </Link>

//           </div>

//         ) : (

//           <div className="rounded-lg bg-white p-5">

//             {/* Header */}
//             <div className="mb-5 flex items-center justify-between border-b pb-4">

//               <div>
//                 <h1 className="text-base font-bold text-gray-900">
//                   MY WISHLIST
//                 </h1>

//                 <p className="mt-1 text-[9px] text-gray-400">
//                   {wishlist.length}{" "}
//                   {wishlist.length === 1
//                     ? "item"
//                     : "items"}
//                 </p>
//               </div>

//             </div>

//             {/* Wishlist Products */}
//             <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

//               {wishlist.map((item) => {

//                 const product =
//                   products[item.productId];

//                 if (!product) {
//                   return (
//                     <div
//                       key={item._id}
//                       className="rounded-lg bg-gray-50 p-4"
//                     >
//                       <p className="text-xs text-gray-400">
//                         Product unavailable
//                       </p>
//                     </div>
//                   );
//                 }

//                 const image =
//                   product.image ||
//                   product.images?.[0];

//                 return (

//                   <div
//                     key={item._id}
//                     className="relative rounded-lg border border-gray-100 bg-gray-50 p-3"
//                   >

//                     {/* Remove */}
//                     <button
//                       type="button"
//                       onClick={() =>
//                         removeFromWishlist(
//                           item._id
//                         )
//                       }
//                       className="absolute right-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-red-50 hover:text-red-500"
//                     >
//                       ×
//                     </button>

//                     {/* Image */}
//                     <div className="flex h-48 items-center justify-center rounded-lg bg-white p-4">

//                       {image ? (
//                         <img
//                           src={image}
//                           alt={product.title}
//                           className="max-h-full max-w-full object-contain"
//                         />
//                       ) : (
//                         <span className="text-4xl">
//                           📦
//                         </span>
//                       )}

//                     </div>

//                     {/* Details */}
//                     <div className="mt-3">

//                       {product.brand && (
//                         <p className="text-[8px] uppercase text-gray-400">
//                           {product.brand}
//                         </p>
//                       )}

//                       <h2 className="mt-1 line-clamp-2 text-xs font-bold text-gray-900">
//                         {product.title}
//                       </h2>

//                       {product.category && (
//                         <p className="mt-1 text-[8px] text-gray-400">
//                           {product.category}
//                         </p>
//                       )}

//                       <div className="mt-3 flex items-center justify-between">

//                         <span className="text-sm font-bold text-gray-900">
//                           ${Number(product.price).toFixed(2)}
//                         </span>

//                         <Link
//                           href={`/products/${product._id}`}
//                           className="rounded bg-green-600 px-3 py-2 text-[8px] font-bold text-white hover:bg-green-700"
//                         >
//                           VIEW
//                         </Link>

//                       </div>

//                     </div>

//                   </div>
//                 );
//               })}

//             </div>

//           </div>
//         )}

//       </div>
//     </main>
//   );
// }




//  new 




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

type WishlistItem = {
  _id: string;
  userId: string;
  productId: string;
  createdAt?: string;
};

export default function WishlistPage() {
  const router = useRouter();

  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [products, setProducts] = useState<Record<string, Product>>({});
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
      loadWishlist();
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
  // GET USER ID FROM JWT TOKEN
  // ==========================================
  function getUserIdFromToken() {
    try {
      const token = localStorage.getItem("token");

      if (!token) return null;

      const payload = JSON.parse(
        atob(token.split(".")[1])
      );

      return payload.id || payload._id || payload.userId;
    } catch (error) {
      console.error("TOKEN ERROR:", error);
      return null;
    }
  }

  // ==========================================
  // LOAD WISHLIST
  // ==========================================
  async function loadWishlist() {
    try {
      setLoading(true);
      setError("");

      const userId = getUserIdFromToken();

      if (!userId) {
        setError("Please login first.");
        setLoading(false);
        return;
      }

      const res = await fetch("/api/wishlist");

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error || "Unable to load wishlist"
        );
      }

      // Only show current user's wishlist
      const userWishlist = Array.isArray(data)
        ? data.filter(
            (item: WishlistItem) =>
              String(item.userId) === String(userId)
          )
        : [];

      setWishlist(userWishlist);

      // Get product details
      const productResults = await Promise.all(
        userWishlist.map(
          async (item: WishlistItem) => {
            try {
              const productRes = await fetch(
                `/api/products/${item.productId}`
              );

              if (!productRes.ok) return null;

              const productData =
                await productRes.json();

              return {
                id: item.productId,
                product: productData,
              };
            } catch (error) {
              console.error(
                "PRODUCT ERROR:",
                error
              );

              return null;
            }
          }
        )
      );

      const productMap: Record<string, Product> = {};

      productResults.forEach((result) => {
        if (result) {
          productMap[result.id] =
            result.product;
        }
      });

      setProducts(productMap);
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error
          ? error.message
          : "Unable to load wishlist"
      );
    } finally {
      setLoading(false);
    }
  }

  // ==========================================
  // REMOVE FROM WISHLIST
  // ==========================================
  async function removeFromWishlist(
    wishlistId: string
  ) {
    try {
      const res = await fetch(
        `/api/wishlist/${wishlistId}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error ||
            "Unable to remove wishlist item"
        );
      }

      setWishlist((oldWishlist) =>
        oldWishlist.filter(
          (item) => item._id !== wishlistId
        )
      );
    } catch (error) {
      console.error(error);

      alert(
        error instanceof Error
          ? error.message
          : "Unable to remove item"
      );
    }
  }

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
  // LOADING WISHLIST
  // ==========================================
  if (loading) {
    return (
      <main className="min-h-screen bg-gray-100 px-4 py-16">
        <div className="mx-auto max-w-7xl rounded-lg bg-white p-10 text-center">
          <p className="text-sm text-gray-500">
            Loading wishlist...
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
            Wishlist
          </span>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-4 text-xs text-red-600">
            {error}
          </div>
        )}

        {/* Empty Wishlist */}
        {wishlist.length === 0 ? (
          <div className="rounded-lg bg-white px-4 py-20 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-3xl">
              ♡
            </div>

            <h1 className="mt-5 text-lg font-bold text-gray-900">
              Your Wishlist is Empty
            </h1>

            <p className="mt-2 text-xs text-gray-500">
              Save your favorite products here.
            </p>

            <Link
              href="/products"
              className="mt-6 inline-block rounded bg-green-600 px-6 py-3 text-[10px] font-bold text-white hover:bg-green-700"
            >
              CONTINUE SHOPPING
            </Link>
          </div>
        ) : (
          <div className="rounded-lg bg-white p-5">

            {/* Header */}
            <div className="mb-5 flex items-center justify-between border-b pb-4">
              <div>
                <h1 className="text-base font-bold text-gray-900">
                  MY WISHLIST
                </h1>

                <p className="mt-1 text-[9px] text-gray-400">
                  {wishlist.length}{" "}
                  {wishlist.length === 1
                    ? "item"
                    : "items"}
                </p>
              </div>
            </div>

            {/* Wishlist Products */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {wishlist.map((item) => {
                const product =
                  products[item.productId];

                if (!product) {
                  return (
                    <div
                      key={item._id}
                      className="rounded-lg bg-gray-50 p-4"
                    >
                      <p className="text-xs text-gray-400">
                        Product unavailable
                      </p>
                    </div>
                  );
                }

                const image =
                  product.image ||
                  product.images?.[0];

                return (
                  <div
                    key={item._id}
                    className="relative rounded-lg border border-gray-100 bg-gray-50 p-3"
                  >

                    {/* Remove */}
                    <button
                      type="button"
                      onClick={() =>
                        removeFromWishlist(
                          item._id
                        )
                      }
                      className="absolute right-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-red-50 hover:text-red-500"
                    >
                      ×
                    </button>

                    {/* Image */}
                    <div className="flex h-48 items-center justify-center rounded-lg bg-white p-4">
                      {image ? (
                        <img
                          src={image}
                          alt={product.title}
                          className="max-h-full max-w-full object-contain"
                        />
                      ) : (
                        <span className="text-4xl">
                          📦
                        </span>
                      )}
                    </div>

                    {/* Details */}
                    <div className="mt-3">

                      {product.brand && (
                        <p className="text-[8px] uppercase text-gray-400">
                          {product.brand}
                        </p>
                      )}

                      <h2 className="mt-1 line-clamp-2 text-xs font-bold text-gray-900">
                        {product.title}
                      </h2>

                      {product.category && (
                        <p className="mt-1 text-[8px] text-gray-400">
                          {product.category}
                        </p>
                      )}

                      <div className="mt-3 flex items-center justify-between">

                        <span className="text-sm font-bold text-gray-900">
                          $
                          {Number(
                            product.price
                          ).toFixed(2)}
                        </span>

                        <Link
                          href={`/products/${product._id}`}
                          className="rounded bg-green-600 px-3 py-2 text-[8px] font-bold text-white hover:bg-green-700"
                        >
                          VIEW
                        </Link>

                      </div>

                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        )}
      </div>
    </main>
  );
}