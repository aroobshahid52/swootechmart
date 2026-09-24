// "use client";


// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function Navbar() {
//   const [languageOpen, setLanguageOpen] = useState(false);
//   const [language, setLanguage] = useState("English");

//   const languages = [
//     { name: "English", flag: "🇬🇧", short: "Eng" },
//     { name: "Urdu", flag: "🇵🇰", short: "اردو" },
//     { name: "Arabic", flag: "🇸🇦", short: "عربي" },
//     { name: "French", flag: "🇫🇷", short: "Fra" },
//     { name: "German", flag: "🇩🇪", short: "Deu" },
//     { name: "Spanish", flag: "🇪🇸", short: "Esp" },
//   ];


//   const selectedLanguage =
//     languages.find((item) => item.name === language) || languages[0];

//     const [isLoggedIn, setIsLoggedIn] = useState(false);
// const [role, setRole] = useState("");
// useEffect(() => {
//   const checkAuth = () => {
//     const token = localStorage.getItem("token");
//     const userRole = localStorage.getItem("role");

//     setIsLoggedIn(!!token);
//     setRole(userRole || "");
//   };

//   checkAuth();

//   window.addEventListener(
//     "authUpdated",
//     checkAuth
//   );

//   return () => {
//     window.removeEventListener(
//       "authUpdated",
//       checkAuth
//     );
//   };
// }, []);

//   return (
//     <>
    
//       {/* Top Bar */}
//       <div className="relative z-[100] hidden border-b bg-white text-[11px] text-gray-900 md:block">
//         <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-4">
//           <div className="flex items-center gap-3">
//             <span className="rounded bg-gray-100 px-3 py-1 hover:text-green-600">
//               Hotline 24/7
//             </span>

//             <span className="hover:text-green-600">
//               (025) 888 26 16
//             </span>
//           </div>

//           <div className="flex items-center gap-5">
//             <span className="cursor-pointer hover:text-green-600">
//               Sell on Swoo
//             </span>

//             <span className="cursor-pointer hover:text-green-600">
//               Order Tracking
//             </span>

//             <span className="cursor-pointer hover:text-green-600">
//               USD
//             </span>

//             {/* Language Dropdown */}
         
// <div className="relative">
//   <button
//     type="button"
//     onClick={() => setLanguageOpen(!languageOpen)}
//     className="flex items-center gap-1 whitespace-nowrap cursor-pointer hover:text-green-600"
//   >
//     <span>{selectedLanguage.flag}</span>
//     <span className="max-w-[55px] truncate">
//   {selectedLanguage.name}
// </span>
//     <span className="text-[9px]">⌄</span>
//   </button>

//   {languageOpen && (
//     <div className="absolute right-0 top-7 z-[100] w-[150px] overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg">
//       {languages.map((item) => (
//         <button
//           key={item.name}
//           type="button"
//           onClick={() => {
//             setLanguage(item.name);
//             setLanguageOpen(false);
//           }}
//           className={`flex w-full items-center gap-3 px-3 py-2.5 text-left text-[11px] whitespace-nowrap transition-colors hover:bg-gray-100 hover:text-green-600 ${
//             language === item.name
//               ? "font-semibold text-green-600"
//               : "text-gray-700"
//           }`}
//         >
//           <span className="w-5 shrink-0 text-center">
//             {item.flag}
//           </span>

//           <span className="min-w-0">
//             {item.name}
//           </span>
//         </button>
//       ))}
//     </div>
//   )}
// </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <header className="relative z-50 border-b bg-white">
//         <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4">
//           {/* Logo */}
//           <Link href="/" className="flex shrink-0 items-center gap-2">
//             <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-600 text-lg font-bold text-white">
//               ✓
//             </div>

//             <div>
//               <div className="text-[18px] font-extrabold leading-4 text-gray-900">
//                 SWOO
//               </div>

//               <div className="mt-1 text-[8px] font-medium tracking-wider text-gray-500">
//                 TECH MART
//               </div>
//             </div>
//           </Link>

//           {/* Desktop Menu */}
//           <nav className="hidden items-center gap-7 lg:flex">
//             <Link
//               href="/"
//               className="text-[12px] font-bold text-gray-900 transition-colors hover:text-green-600"
//             >
//               HOMES
//             </Link>

           

//             {role.toLowerCase() === "admin" && (
//   <Link 
//     href="/admin/dashboard" 
//     className="text-[12px] font-bold text-gray-900 transition-colors hover:text-green-600" 
//   > 
//     DASHBOARD 
//   </Link>
// )}
//    <Link 
//     href="/products" 
//     className="text-[12px] font-bold text-gray-900 transition-colors hover:text-green-600" 
//   > 
//     PRODUCTS 
//   </Link> 
//             <Link
//               href="/contact"
//               className="text-[12px] font-bold text-gray-900 transition-colors hover:text-green-600"
//             >
//               CONTACT
//             </Link>

//             <Link
//               href="/about"
//               className="text-[12px] font-bold text-gray-900 transition-colors hover:text-green-600"
//             >
//               ABOUT
//             </Link>
     

//         </nav>

//           {/* Right Side */}
//           <div className="flex shrink-0 items-center gap-2">
//             {/* Profile */}
//            <Link 
//   href="/profile" 
//   className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 transition-colors hover:text-green-600"
// > 
//   👤 
// </Link>

//             {/* Wishlist */}
//             <Link
//               href="/wishlist"
//               className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:text-green-600"
//             >
//               ♡
//             </Link>
// {/* Authentication */}
// <div className="hidden text-[10px] leading-3 sm:block">

//   {!isLoggedIn ? (
//     <>
//       <span className="text-gray-400">
//         WELCOME
//       </span>

//       <div className="flex items-center gap-1">

//         <Link
//           href="/login"
//           className="font-bold text-gray-900 transition-colors hover:text-green-600"
//         >
//           LOGIN
//         </Link>

//         <span className="text-gray-400">
//           /
//         </span>

//         <Link
//           href="/register"
//           className="font-bold text-gray-900 transition-colors hover:text-green-600"
//         >
//           REGISTER
//         </Link>

//       </div>
//     </>
//   ) : (
//     <div className="flex items-center gap-2">

//       {role === "admin" && (
//         <Link
//           href="/admin/products/add"
//           className="font-bold text-green-600 hover:text-green-700"
//         >
//           ADD PRODUCT
//         </Link>
//       )}

//       <button
//         type="button"
//         onClick={() => {
//           localStorage.removeItem("token");
//           localStorage.removeItem("user");
//           localStorage.removeItem("role");

//           window.dispatchEvent(
//             new Event("authUpdated")
//           );

//           window.location.href = "/login";
//         }}
//         className="font-bold text-gray-900 hover:text-green-600"
//       >
//         LOGOUT
//       </button>

//     </div>
//   )}

// </div>
//             {/* Cart */}
//             <Link
//               href="/cart"
//               className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gray-100"
//             >
//               🛒

//               <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-600 text-[8px] text-white">
//                 0
//               </span>
//             </Link>
//           </div>
//         </div>

//        {/* Mobile Navigation */}
// <div className="border-t border-gray-200 bg-white px-4 py-3 lg:hidden">
//   <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
    
//     <Link
//       href="/"
//       className="text-[11px] font-bold text-gray-900 transition-colors hover:text-green-600"
//     >
//       Home
//     </Link>

//     <Link
//       href="/products"
//       className="text-[11px] font-bold text-gray-900 transition-colors hover:text-green-600"
//     >
//       Products
//     </Link>
// {/* 
//     <Link
//       href="/wishlist"
//       className="text-[11px] font-bold text-gray-900 transition-colors hover:text-green-600"
//     >
//       Wishlist
//     </Link> */}

//     <Link
//       href="/cart"
//       className="text-[11px] font-bold text-gray-900 transition-colors hover:text-green-600"
//     >
//       Cart
//     </Link>

//     {!isLoggedIn ? (
//   <>
//     <Link
//       href="/login"
//       className="text-[11px] font-bold text-gray-900 hover:text-green-600"
//     >
//       Login
//     </Link>

//     <Link
//       href="/register"
//       className="text-[11px] font-bold text-gray-900 hover:text-green-600"
//     >
//       Register
//     </Link>
//   </>
// ) : (
//   <>
//     {role === "admin" && (
//       <Link
//         href="/admin/products/add"
//         className="text-[11px] font-bold text-green-600"
//       >
//         Add Product
//       </Link>
//     )}

//     <button
//       type="button"
//       onClick={() => {
//         localStorage.removeItem("token");
//         localStorage.removeItem("user");
//         localStorage.removeItem("role");

//         window.dispatchEvent(
//           new Event("authUpdated")
//         );

//         window.location.href = "/login";
//       }}
//       className="text-[11px] font-bold text-gray-900 hover:text-green-600"
//     >
//       Logout
//     </button>
//   </>
// )}

//   </div>
// </div>
//       </header>
//     </>
//   );
// }




"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const languages = [
    { name: "English", flag: "🇬🇧", short: "Eng" },
    { name: "Urdu", flag: "🇵🇰", short: "اردو" },
    { name: "Arabic", flag: "🇸🇦", short: "عربي" },
    { name: "French", flag: "🇫🇷", short: "Fra" },
    { name: "German", flag: "🇩🇪", short: "Deu" },
    { name: "Spanish", flag: "🇪🇸", short: "Esp" },
  ];

  const selectedLanguage =
    languages.find((item) => item.name === language) || languages[0];

  useEffect(() => {
    const checkAuth = () => {
      const user = localStorage.getItem("user");
      const userRole = localStorage.getItem("role") || "";

      setIsLoggedIn(!!user);
      setRole(userRole);
    };

    checkAuth();

    window.addEventListener("authUpdated", checkAuth);

    return () => {
      window.removeEventListener("authUpdated", checkAuth);
    };
  }, []);

  // =========================================================
  // LOAD CART COUNT
  // =========================================================
  useEffect(() => {
    const loadCartCount = async () => {
      const token = localStorage.getItem("token");
      const userRole = (localStorage.getItem("role") || "").toLowerCase();

      // Admin ko cart use nahi karna hai
      if (!token || userRole === "admin") {
        setCartCount(0);
        return;
      }

      try {
        const res = await fetch("/api/cart", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          setCartCount(0);
          return;
        }

        const data = await res.json();

        // const items = data.items || data.cart?.items || [];

        const items = Array.isArray(data)
  ? data
  : data.items || data.cart?.items || [];

        // Cart mein jitne products/items hain
        setCartCount(items.length);
      } catch (error) {
        console.error("Failed to load cart count:", error);
        setCartCount(0);
      }
    };

    loadCartCount();

    // Product add/remove/update hone par cart count update hoga
    const handleCartUpdated = () => {
      loadCartCount();
    };  

    window.addEventListener("cartUpdated", handleCartUpdated);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdated);
    };
  }, [isLoggedIn, role]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");

    setCartCount(0);

    window.dispatchEvent(new Event("authUpdated"));

    window.location.href = "/login";
  };

  return (
    <>
      {/* =========================================================
          TOP BAR - ALWAYS SHOW
      ========================================================= */}
      <div className="relative z-[100] hidden border-b bg-white text-[11px] text-gray-900 md:block">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-4">

          {/* Left Side */}
          <div className="flex items-center gap-3">

            <span className="rounded bg-gray-100 px-3 py-1 hover:text-green-600">
              Hotline 24/7
            </span>

            <span className="hover:text-green-600">
              (025) 888 26 16
            </span>

          </div>

          {/* Right Side */}
          <div className="flex items-center gap-5">

            <span className="cursor-pointer hover:text-green-600">
              Sell on Swoo
            </span>

            <span className="cursor-pointer hover:text-green-600">
              Order Tracking
            </span>

            <span className="cursor-pointer hover:text-green-600">
              USD
            </span>

            {/* Language Dropdown */}
            <div className="relative">

              <button
                type="button"
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex cursor-pointer items-center gap-1 whitespace-nowrap hover:text-green-600"
              >
                <span>{selectedLanguage.flag}</span>

                <span className="max-w-[55px] truncate">
                  {selectedLanguage.name}
                </span>

                <span className="text-[9px]">
                  ⌄
                </span>
              </button>

              {languageOpen && (
                <div className="absolute right-0 top-7 z-[100] w-[150px] overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg">

                  {languages.map((item) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => {
                        setLanguage(item.name);
                        setLanguageOpen(false);
                      }}
                      className={`flex w-full items-center gap-3 whitespace-nowrap px-3 py-2.5 text-left text-[11px] transition-colors hover:bg-gray-100 hover:text-green-600 ${
                        language === item.name
                          ? "font-semibold text-green-600"
                          : "text-gray-700"
                      }`}
                    >
                      <span className="w-5 shrink-0 text-center">
                        {item.flag}
                      </span>

                      <span className="min-w-0">
                        {item.name}
                      </span>
                    </button>
                  ))}

                </div>
              )}

            </div>

          </div>
        </div>
      </div>

      {/* =========================================================
          LOGGED OUT NAVBAR
      ========================================================= */}
      {!isLoggedIn ? (
        <header className="relative z-50 border-b bg-white shadow-sm">

          <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6">

            {/* Logo */}
            <Link
              href="/"
              className="flex shrink-0 items-center gap-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white">
                ✓
              </div>

              <div>
                <div className="text-[20px] font-extrabold leading-4 text-gray-900">
                  SWOO
                </div>

                <div className="mt-1 text-[9px] font-medium tracking-wider text-gray-500">
                  TECH MART
                </div>
              </div>
            </Link>

            {/* Login / Register */}
            <div className="flex items-center gap-3 text-[11px] sm:gap-5 sm:text-[12px]">

              <Link
                href="/login"
                className="font-bold text-gray-900 transition-colors hover:text-green-600"
              >
                LOGIN
              </Link>

              <span className="text-gray-300">
                |
              </span>

              <Link
                href="/register"
                className="rounded-md bg-green-600 px-4 py-2 font-bold text-white transition-colors hover:bg-green-700 sm:px-5"
              >
                REGISTER
              </Link>

            </div>

          </div>

        </header>
      ) : (
        <>
          {/* =========================================================
              MAIN NAVBAR - LOGGED IN
          ========================================================= */}
          <header className="relative z-50 border-b bg-white">

            <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4">

              {/* Logo */}
              <Link
                href="/"
                className="flex shrink-0 items-center gap-2"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-600 text-lg font-bold text-white">
                  ✓
                </div>

                <div>
                  <div className="text-[18px] font-extrabold leading-4 text-gray-900">
                    SWOO
                  </div>

                  <div className="mt-1 text-[8px] font-medium tracking-wider text-gray-500">
                    TECH MART
                  </div>
                </div>
              </Link>

              {/* Desktop Menu */}
              <nav className="hidden items-center gap-7 lg:flex">

                <Link
                  href="/"
                  className="text-[12px] font-bold text-gray-900 transition-colors hover:text-green-600"
                >
                  HOMES
                </Link>

                {role.toLowerCase() === "admin" && (
                  <Link
                    href="/admin/dashboard"
                    className="text-[12px] font-bold text-gray-900 transition-colors hover:text-green-600"
                  >
                    DASHBOARD
                  </Link>
                )}

                <Link
                  href="/products"
                  className="text-[12px] font-bold text-gray-900 transition-colors hover:text-green-600"
                >
                  PRODUCTS
                </Link>

                <Link
                  href="/contact"
                  className="text-[12px] font-bold text-gray-900 transition-colors hover:text-green-600"
                >
                  CONTACT
                </Link>

                <Link
                  href="/about"
                  className="text-[12px] font-bold text-gray-900 transition-colors hover:text-green-600"
                >
                  ABOUT
                </Link>

              </nav>

              {/* Right Side */}
              <div className="flex shrink-0 items-center gap-2">

                {/* Profile */}
                <Link
                  href="/profile"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 transition-colors hover:text-green-600"
                >
                  👤
                </Link>

                {/* Wishlist */}
                {/* <Link
                  href="/wishlist"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:text-green-600"
                >
                  ♡
                </Link> */}

               {role.toLowerCase() !== "admin" && (
  <Link 
    href="/wishlist" 
    className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:text-green-600" 
  >
    ♡ 
  </Link>
)}

                {/* Authentication */}
                <div className="hidden text-[10px] leading-3 sm:block">

                  <div className="flex items-center gap-2">

                    {role.toLowerCase() === "admin" && (
                      <Link
                        href="/admin/products/add"
                        className="font-bold text-green-600 hover:text-green-700"
                      >
                        ADD PRODUCT
                      </Link>
                    )}

                    <button
                      type="button"
                      onClick={handleLogout}
                      className="font-bold text-gray-900 hover:text-green-600"
                    >
                      LOGOUT
                    </button>

                  </div>

                </div>

                {/* Cart - USER ONLY */}
                {role.toLowerCase() !== "admin" && (
                  <Link
                    href="/cart"
                    className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gray-100"
                  >
                    🛒

                    <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-600 text-[8px] text-white">
                      {cartCount}
                    </span>
                  </Link>
                )}

              </div>

            </div>

            {/* =====================================================
                MOBILE NAVIGATION - LOGGED IN
            ===================================================== */}
            <div className="border-t border-gray-200 bg-white px-4 py-3 lg:hidden">

              <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">

                <Link
                  href="/"
                  className="text-[11px] font-bold text-gray-900 transition-colors hover:text-green-600"
                >
                  Home
                </Link>

                <Link
                  href="/products"
                  className="text-[11px] font-bold text-gray-900 transition-colors hover:text-green-600"
                >
                  Products
                </Link>

                {/* Mobile Cart - USER ONLY */}
                {role.toLowerCase() !== "admin" && (
                  <Link
                    href="/cart"
                    className="text-[11px] font-bold text-gray-900 transition-colors hover:text-green-600"
                  >
                    Cart ({cartCount})
                  </Link>
                )}

                {role.toLowerCase() === "admin" && (
                  <Link
                    href="/admin/products/add"
                    className="text-[11px] font-bold text-green-600"
                  >
                    Add Product
                  </Link>
                )}

                <button
                  type="button"
                  onClick={handleLogout}
                  className="text-[11px] font-bold text-gray-900 hover:text-green-600"
                >
                  Logout
                </button>

              </div>

            </div>

          </header>
        </>
      )}
    </>
  );
}