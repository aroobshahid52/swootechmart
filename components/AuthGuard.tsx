// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// type AuthGuardProps = {
//   children: React.ReactNode;
// };

// export default function AuthGuard({
//   children,
// }: AuthGuardProps) {
//   const router = useRouter();

//   const [checking, setChecking] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       router.replace("/login");
//       return;
//     }

//     setChecking(false);
//   }, [router]);

//   if (checking) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-gray-100">
//         <p className="text-sm text-gray-500">
//           Loading...
//         </p>
//       </div>
//     );
//   }

//   return <>{children}</>;
// }



// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// type AuthGuardProps = {
//   children: React.ReactNode;
// };

// export default function AuthGuard({
//   children,
// }: AuthGuardProps) {
//   const router = useRouter();
//   const [checking, setChecking] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const user = localStorage.getItem("user");

//     if (!token || !user) {
//       router.replace("/login");
//       return;
//     }

//     setChecking(false);
//   }, [router]);

//   if (checking) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-gray-100">
//         <p className="text-sm text-gray-500">
//           Checking login...
//         </p>
//       </div>
//     );
//   }

//   return <>{children}</>;
// }


"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type AuthGuardProps = {
  children: React.ReactNode;
};

export default function AuthGuard({
  children,
}: AuthGuardProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setMounted(true);

    const token = localStorage.getItem("token");

    const publicRoutes = [
      "/login",
      "/register",
    ];

    const isPublicRoute =
      publicRoutes.includes(pathname);

    if (!token && !isPublicRoute) {
      router.replace("/login");
      return;
    }

    setLoggedIn(true);
  }, [pathname, router]);

  // Server aur first client render same rahega
  if (!mounted) {
    return null;
  }

  // Login nahi hai aur protected route hai
  if (!loggedIn) {
    return null;
  }

  return <>{children}</>;
}