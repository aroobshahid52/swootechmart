// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import Footer from "@/components/Footer";

// type User = {
//   _id?: string;
//   name?: string;
//   email?: string;
//   role?: string;
//   createdAt?: string;
// };

// export default function ProfilePage() {
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     const savedUser = localStorage.getItem("user");

//     if (savedUser) {
//       try {
//         const userData = JSON.parse(savedUser);
//         setUser(userData);
//       } catch (error) {
//         console.log("Unable to load user data");
//       }
//     }
//   }, []);

//   const firstLetter = user?.name
//     ? user.name.charAt(0).toUpperCase()
//     : "U";

//   const memberSince = user?.createdAt
//     ? new Date(user.createdAt).toLocaleDateString("en-US", {
//         month: "long",
//         year: "numeric",
//       })
//     : "Recently";

//   const isAdmin = user?.role?.toLowerCase() === "admin";

//   return (
//     <>
//       <main className="min-h-screen bg-gray-100 px-3 py-5 sm:px-5">
//         <div className="mx-auto max-w-7xl">

//           {/* Breadcrumb */}
//           <div className="mb-5 rounded-lg bg-white px-4 py-3 text-xs text-gray-500 shadow-sm sm:px-5 sm:text-sm">
//             <Link
//               href="/"
//               className="transition hover:text-green-600"
//             >
//               Home
//             </Link>

//             <span className="mx-2">/</span>

//             <span className="text-gray-900">
//               Profile
//             </span>
//           </div>

//           {/* Profile */}
//           <section className="overflow-hidden rounded-xl bg-white shadow-sm">

//             {/* Green Header */}
//             <div className="bg-green-600 px-5 py-7 sm:px-10 sm:py-9">
//               <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-5">

//                 {/* Avatar */}
//                 <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-2xl font-bold text-green-600 shadow-md sm:h-24 sm:w-24 sm:text-3xl">
//                   {firstLetter}
//                 </div>

//                 {/* User Info */}
//                 <div className="text-center sm:text-left">

//                   <h1 className="text-xl font-bold text-white sm:text-3xl">
//                     {user?.name || "User"}
//                   </h1>

//                   <p className="mt-1 text-xs text-green-100 sm:text-sm">
//                     {user?.email || "Email not available"}
//                   </p>

//                   <span className="mt-2 inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-medium capitalize text-white sm:mt-3 sm:px-4 sm:text-xs">
//                     {user?.role || "user"}
//                   </span>

//                 </div>

//               </div>
//             </div>

//             {/* Information */}
//             <div className="p-5 sm:p-10">

//               <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
//                 Personal Information
//               </h2>

//               <p className="mt-1 text-xs text-gray-400 sm:text-sm">
//                 Your account information
//               </p>

//               {/* Info Grid */}
//               <div className="mt-6 grid gap-4 sm:mt-7 sm:grid-cols-2 sm:gap-5">

//                 {/* Name */}
//                 <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 sm:p-5">
//                   <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 sm:text-xs">
//                     Full Name
//                   </p>

//                   <p className="mt-2 text-sm font-semibold text-gray-900 sm:text-base">
//                     {user?.name || "Not available"}
//                   </p>
//                 </div>

//                 {/* Email */}
//                 <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 sm:p-5">
//                   <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 sm:text-xs">
//                     Email Address
//                   </p>

//                   <p className="mt-2 break-all text-sm font-semibold text-gray-900 sm:text-base">
//                     {user?.email || "Not available"}
//                   </p>
//                 </div>

//                 {/* Role */}
//                 <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 sm:p-5">
//                   <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 sm:text-xs">
//                     Account Type
//                   </p>

//                   <p className="mt-2 text-sm font-semibold capitalize text-gray-900 sm:text-base">
//                     {user?.role || "User"}
//                   </p>
//                 </div>

//                 {/* Member Since */}
//                 <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 sm:p-5">
//                   <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 sm:text-xs">
//                     Member Since
//                   </p>

//                   <p className="mt-2 text-sm font-semibold text-gray-900 sm:text-base">
//                     {memberSince}
//                   </p>
//                 </div>

//               </div>

//               {/* Account Status */}
//               <div className="mt-4 rounded-lg border border-green-100 bg-green-50 p-4 sm:mt-5 sm:p-5">

//                 <div className="flex items-center gap-3">

//                   <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-600 sm:h-10 sm:w-10">
//                     <span className="text-base text-white sm:text-lg">
//                       ✓
//                     </span>
//                   </div>

//                   <div>
//                     <p className="text-xs font-semibold text-gray-900 sm:text-sm">
//                       Account Active
//                     </p>

//                     <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
//                       Your account is currently active.
//                     </p>
//                   </div>

//                 </div>

//               </div>

//               {/* Buttons */}
//               <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-7 sm:gap-3">

//                 <button
//                   type="button"
//                   className="rounded-md bg-green-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-green-700 sm:px-6 sm:py-3 sm:text-sm"
//                 >
//                   Edit Profile
//                 </button>

//                 {isAdmin && (
//                   <Link
//                     href="/orders"
//                     className="rounded-md border border-gray-200 bg-white px-4 py-2.5 text-xs font-semibold text-gray-700 transition hover:border-green-600 hover:text-green-600 sm:px-6 sm:py-3 sm:text-sm"
//                   >
//                     My Orders
//                   </Link>
//                 )}

//                 <Link
//                   href="/wishlist"
//                   className="rounded-md border border-gray-200 bg-white px-4 py-2.5 text-xs font-semibold text-gray-700 transition hover:border-green-600 hover:text-green-600 sm:px-6 sm:py-3 sm:text-sm"
//                 >
//                   Wishlist
//                 </Link>

//                 {/* Admin Dashboard */}
//                 {isAdmin && (
//                   <Link
//                     href="/admin/dashboard"
//                     className="rounded-md bg-gray-900 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-gray-800 sm:px-6 sm:py-3 sm:text-sm"
//                   >
//                     Admin Dashboard
//                   </Link>
//                 )}

//               </div>

//             </div>
//           </section>

//           {/* Bottom Cards */}
//           <section className="mt-5 grid gap-4 pb-7 sm:grid-cols-3">

//             {/* User My Orders */}
//             {!isAdmin && (
//               <Link
//                 href="/orders"
//                 className="flex items-center justify-between rounded-xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:block sm:p-6"
//               >
//                 <div>
//                   <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 sm:mb-4 sm:h-11 sm:w-11">
//                     <span className="text-base text-green-600 sm:text-lg">
//                       📦
//                     </span>
//                   </div>

//                   <h3 className="text-sm font-bold text-gray-900 sm:text-base">
//                     My Orders
//                   </h3>

//                   <p className="mt-1 text-xs leading-5 text-gray-400 sm:mt-2 sm:text-sm sm:leading-6">
//                     View your orders and track your deliveries.
//                   </p>
//                 </div>

//                 <span className="text-sm font-bold text-green-600 sm:hidden">
//                   →
//                 </span>
//               </Link>
//             )}

//             {/* Admin My Orders */}
//             {isAdmin && (
//               <Link
//                 href="/orders"
//                 className="rounded-xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6"
//               >
//                 <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 sm:mb-4 sm:h-11 sm:w-11">
//                   <span className="text-base text-green-600 sm:text-lg">
//                     📦
//                   </span>
//                 </div>

//                 <h3 className="text-sm font-bold text-gray-900 sm:text-base">
//                   My Orders
//                 </h3>

//                 <p className="mt-1 text-xs leading-5 text-gray-400 sm:mt-2 sm:text-sm sm:leading-6">
//                   View your orders and track your deliveries.
//                 </p>
//               </Link>
//             )}

//             {/* Wishlist */}
//             <Link
//               href="/wishlist"
//               className="rounded-xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6"
//             >
//               <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 sm:mb-4 sm:h-11 sm:w-11">
//                 <span className="text-base text-green-600 sm:text-lg">
//                   ♡
//                 </span>
//               </div>

//               <h3 className="text-sm font-bold text-gray-900 sm:text-base">
//                 My Wishlist
//               </h3>

//               <p className="mt-1 text-xs leading-5 text-gray-400 sm:mt-2 sm:text-sm sm:leading-6">
//                 View products you have saved for later.
//               </p>
//             </Link>

//             {/* Account Security */}
//             <div className="rounded-xl bg-white p-5 shadow-sm sm:p-6">

//               <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 sm:mb-4 sm:h-11 sm:w-11">
//                 <span className="text-base text-green-600 sm:text-lg">
//                   🔒
//                 </span>
//               </div>

//               <h3 className="text-sm font-bold text-gray-900 sm:text-base">
//                 Account Security
//               </h3>

//               <p className="mt-1 text-xs leading-5 text-gray-400 sm:mt-2 sm:text-sm sm:leading-6">
//                 Your account information is protected.
//               </p>

//             </div>

//           </section>

//         </div>
//       </main>

//       <Footer />
//     </>
//   );
// }




//  new :
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";

type User = {
  _id?: string;
  name?: string;
  email?: string;
  role?: string;
  createdAt?: string;
};

export default function ProfilePage() {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [checkingLogin, setCheckingLogin] = useState(true);

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
      const userData = JSON.parse(savedUser);
      setUser(userData);
      setCheckingLogin(false);
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

  const firstLetter = user?.name
    ? user.name.charAt(0).toUpperCase()
    : "U";

  const memberSince = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : "Recently";

  const isAdmin = user?.role?.toLowerCase() === "admin";

  if (checkingLogin) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100">
        <p className="text-sm text-gray-500">
          Checking login...
        </p>
      </main>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-gray-100 px-3 py-5 sm:px-5">
        <div className="mx-auto max-w-7xl">

          {/* Breadcrumb */}
          <div className="mb-5 rounded-lg bg-white px-4 py-3 text-xs text-gray-500 shadow-sm sm:px-5 sm:text-sm">
            <Link
              href="/"
              className="transition hover:text-green-600"
            >
              Home
            </Link>

            <span className="mx-2">/</span>

            <span className="text-gray-900">
              Profile
            </span>
          </div>

          {/* Profile */}
          <section className="overflow-hidden rounded-xl bg-white shadow-sm">

            {/* Green Header */}
            <div className="bg-green-600 px-5 py-7 sm:px-10 sm:py-9">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-5">

                {/* Avatar */}
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-2xl font-bold text-green-600 shadow-md sm:h-24 sm:w-24 sm:text-3xl">
                  {firstLetter}
                </div>

                {/* User Info */}
                <div className="text-center sm:text-left">

                  <h1 className="text-xl font-bold text-white sm:text-3xl">
                    {user?.name || "User"}
                  </h1>

                  <p className="mt-1 text-xs text-green-100 sm:text-sm">
                    {user?.email || "Email not available"}
                  </p>

                  <span className="mt-2 inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-medium capitalize text-white sm:mt-3 sm:px-4 sm:text-xs">
                    {user?.role || "user"}
                  </span>

                </div>

              </div>
            </div>

            {/* Information */}
            <div className="p-5 sm:p-10">

              <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                Personal Information
              </h2>

              <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                Your account information
              </p>

              {/* Info Grid */}
              <div className="mt-6 grid gap-4 sm:mt-7 sm:grid-cols-2 sm:gap-5">

                {/* Name */}
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 sm:p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 sm:text-xs">
                    Full Name
                  </p>

                  <p className="mt-2 text-sm font-semibold text-gray-900 sm:text-base">
                    {user?.name || "Not available"}
                  </p>
                </div>

                {/* Email */}
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 sm:p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 sm:text-xs">
                    Email Address
                  </p>

                  <p className="mt-2 break-all text-sm font-semibold text-gray-900 sm:text-base">
                    {user?.email || "Not available"}
                  </p>
                </div>

                {/* Role */}
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 sm:p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 sm:text-xs">
                    Account Type
                  </p>

                  <p className="mt-2 text-sm font-semibold capitalize text-gray-900 sm:text-base">
                    {user?.role || "User"}
                  </p>
                </div>

                {/* Member Since */}
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 sm:p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 sm:text-xs">
                    Member Since
                  </p>

                  <p className="mt-2 text-sm font-semibold text-gray-900 sm:text-base">
                    {memberSince}
                  </p>
                </div>

              </div>

              {/* Account Status */}
              <div className="mt-4 rounded-lg border border-green-100 bg-green-50 p-4 sm:mt-5 sm:p-5">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-600 sm:h-10 sm:w-10">
                    <span className="text-base text-white sm:text-lg">
                      ✓
                    </span>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-900 sm:text-sm">
                      Account Active
                    </p>

                    <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
                      Your account is currently active.
                    </p>
                  </div>

                </div>

              </div>

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-7 sm:gap-3">

                <button
                  type="button"
                  className="rounded-md bg-green-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-green-700 sm:px-6 sm:py-3 sm:text-sm"
                >
                  Edit Profile
                </button>

                {!isAdmin && (
                  <Link
                    href="/orders"
                    className="rounded-md border border-gray-200 bg-white px-4 py-2.5 text-xs font-semibold text-gray-700 transition hover:border-green-600 hover:text-green-600 sm:px-6 sm:py-3 sm:text-sm"
                  >
                    My Orders
                  </Link>
                )}

                <Link
                  href="/wishlist"
                  className="rounded-md border border-gray-200 bg-white px-4 py-2.5 text-xs font-semibold text-gray-700 transition hover:border-green-600 hover:text-green-600 sm:px-6 sm:py-3 sm:text-sm"
                >
                  Wishlist
                </Link>

                {/* Admin Dashboard */}
                {isAdmin && (
                  <Link
                    href="/admin/dashboard"
                    className="rounded-md bg-gray-900 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-gray-800 sm:px-6 sm:py-3 sm:text-sm"
                  >
                    Admin Dashboard
                  </Link>
                )}

              </div>

            </div>
          </section>

          {/* Bottom Cards */}
          <section className="mt-5 grid gap-4 pb-7 sm:grid-cols-3">

            {/* User My Orders */}
            {!isAdmin && (
              <Link
                href="/orders"
                className="flex items-center justify-between rounded-xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:block sm:p-6"
              >
                <div>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 sm:mb-4 sm:h-11 sm:w-11">
                    <span className="text-base text-green-600 sm:text-lg">
                      📦
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-gray-900 sm:text-base">
                    My Orders
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-gray-400 sm:mt-2 sm:text-sm sm:leading-6">
                    View your orders and track your deliveries.
                  </p>
                </div>

                <span className="text-sm font-bold text-green-600 sm:hidden">
                  →
                </span>
              </Link>
            )}

            {/* Admin My Orders */}
            {isAdmin && (
              <Link
                href="/orders"
                className="rounded-xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 sm:mb-4 sm:h-11 sm:w-11">
                  <span className="text-base text-green-600 sm:text-lg">
                    📦
                  </span>
                </div>

                <h3 className="text-sm font-bold text-gray-900 sm:text-base">
                  My Orders
                </h3>

                <p className="mt-1 text-xs leading-5 text-gray-400 sm:mt-2 sm:text-sm sm:leading-6">
                  View your orders and track your deliveries.
                </p>
              </Link>
            )}

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="rounded-xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 sm:mb-4 sm:h-11 sm:w-11">
                <span className="text-base text-green-600 sm:text-lg">
                  ♡
                </span>
              </div>

              <h3 className="text-sm font-bold text-gray-900 sm:text-base">
                My Wishlist
              </h3>

              <p className="mt-1 text-xs leading-5 text-gray-400 sm:mt-2 sm:text-sm sm:leading-6">
                View products you have saved for later.
              </p>
            </Link>

            {/* Account Security */}
            <div className="rounded-xl bg-white p-5 shadow-sm sm:p-6">

              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 sm:mb-4 sm:h-11 sm:w-11">
                <span className="text-base text-green-600 sm:text-lg">
                  🔒
                </span>
              </div>

              <h3 className="text-sm font-bold text-gray-900 sm:text-base">
                Account Security
              </h3>

              <p className="mt-1 text-xs leading-5 text-gray-400 sm:mt-2 sm:text-sm sm:leading-6">
                Your account information is protected.
              </p>

            </div>

          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}






