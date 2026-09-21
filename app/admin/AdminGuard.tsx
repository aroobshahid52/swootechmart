// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// export default function AdminGuard({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const router = useRouter();
//   const [checking, setChecking] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const role = localStorage.getItem("role");

//     if (!token || role?.toLowerCase() !== "admin") {
//       router.replace("/");
//       return;
//     }

//     setChecking(false);
//   }, [router]);

//   if (checking) {
//     return (
//       <main className="flex min-h-screen items-center justify-center bg-gray-100">
//         <div className="rounded-xl bg-white px-8 py-6 shadow-sm">
//           <p className="text-sm text-gray-500">
//             Checking access...
//           </p>
//         </div>
//       </main>
//     );
//   }

//   return <>{children}</>;
// }


"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (!token || !userData) {
      router.replace("/login");
      return;
    }

    try {
      const user = JSON.parse(userData);

      if (user?.role?.toLowerCase() !== "admin") {
        router.replace("/");
        return;
      }

      setChecking(false);
    } catch {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("role");

      router.replace("/login");
    }
  }, [router]);

  if (checking) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="rounded-xl bg-white px-8 py-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Checking access...
          </p>
        </div>
      </main>
    );
  }

  return <>{children}</>;
}