// import Link from "next/link";
// import Footer from "@/components/Footer";

// export default function RegisterPage() {
//   return (
//     <>
//       <main className="bg-gray-100">

//         {/* Breadcrumb */}
//         <section className="mx-auto w-full max-w-7xl px-3 py-3 sm:px-4 lg:px-5">
//           <div className="rounded-lg bg-white px-4 py-3 text-[11px] text-gray-500 shadow-sm sm:text-xs">
//             <Link
//               href="/"
//               className="hover:text-green-600"
//             >
//               Home
//             </Link>

//             <span className="mx-2">/</span>

//             <span className="text-gray-900">
//               Register
//             </span>
//           </div>
//         </section>


//         {/* Register Section */}
//         <section className="mx-auto w-full max-w-7xl px-3 pb-4 sm:px-4 lg:px-5">
//           <div className="overflow-hidden rounded-lg bg-white shadow-sm">

//             <div className="grid lg:grid-cols-2">

//               {/* Left Side */}
//               <div className="relative hidden min-h-[500px] items-center justify-center bg-gray-50 p-8 lg:flex">

//                 {/* Decorative circles */}
//                 <div className="absolute left-10 top-10 h-20 w-20 rounded-full bg-green-100" />

//                 <div className="absolute bottom-10 right-10 h-24 w-24 rounded-full bg-green-50" />

//                 <div className="relative z-10 max-w-md text-center">

//                   <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
//                     <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-3xl text-white">
//                       ✓
//                     </div>
//                   </div>

//                   <h2 className="text-2xl font-bold text-gray-900">
//                     Join Swoo
//                   </h2>

//                   <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-500">
//                     Create your account and enjoy a better shopping
//                     experience with easy checkout, order tracking and
//                     personalized features.
//                   </p>

//                   <div className="mt-6 flex justify-center gap-3">
//                     <span className="rounded-full bg-white px-4 py-2 text-xs font-medium text-gray-600 shadow-sm">
//                       Easy Shopping
//                     </span>

//                     <span className="rounded-full bg-white px-4 py-2 text-xs font-medium text-gray-600 shadow-sm">
//                       Secure Account
//                     </span>
//                   </div>

//                 </div>
//               </div>


//               {/* Right Side */}
//               <div className="flex items-center justify-center p-5 sm:p-8 lg:p-12">

//                 <div className="w-full max-w-md">

//                   {/* Heading */}
//                   <div className="mb-6 text-center">

//                     <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
//                       <span className="text-xl text-green-600">
//                         👤
//                       </span>
//                     </div>

//                     <h1 className="text-2xl font-bold text-gray-900">
//                       Create Account
//                     </h1>

//                     <p className="mt-2 text-xs uppercase tracking-[0.18em] text-gray-400">
//                       Register to continue
//                     </p>

//                   </div>


//                   {/* Full Name */}
//                   <div className="mb-4">
//                     <label
//                       htmlFor="name"
//                       className="mb-2 block text-xs font-semibold text-gray-700"
//                     >
//                       Full Name
//                     </label>

//                     <input
//                       id="name"
//                       type="text"
//                       placeholder="Enter your full name"
//                       className="h-11 w-full rounded-md border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
//                     />
//                   </div>


//                   {/* Email */}
//                   <div className="mb-4">
//                     <label
//                       htmlFor="email"
//                       className="mb-2 block text-xs font-semibold text-gray-700"
//                     >
//                       Email Address
//                     </label>

//                     <input
//                       id="email"
//                       type="email"
//                       placeholder="Enter your email"
//                       className="h-11 w-full rounded-md border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
//                     />
//                   </div>


//                   {/* Password */}
//                   <div className="mb-4">
//                     <label
//                       htmlFor="password"
//                       className="mb-2 block text-xs font-semibold text-gray-700"
//                     >
//                       Password
//                     </label>

//                     <input
//                       id="password"
//                       type="password"
//                       placeholder="Create a password"
//                       className="h-11 w-full rounded-md border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
//                     />
//                   </div>


//                   {/* Confirm Password */}
//                   <div className="mb-4">
//                     <label
//                       htmlFor="confirmPassword"
//                       className="mb-2 block text-xs font-semibold text-gray-700"
//                     >
//                       Confirm Password
//                     </label>

//                     <input
//                       id="confirmPassword"
//                       type="password"
//                       placeholder="Confirm your password"
//                       className="h-11 w-full rounded-md border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
//                     />
//                   </div>


//                   {/* Terms */}
//                   <label className="mb-5 flex cursor-pointer items-start gap-2">
//                     <input
//                       type="checkbox"
//                       className="mt-0.5 h-4 w-4 accent-green-600"
//                     />

//                     <span className="text-xs leading-5 text-gray-500">
//                       I agree to the{" "}
//                       <Link
//                         href="/terms"
//                         className="text-green-600 hover:text-green-700"
//                       >
//                         Terms & Conditions
//                       </Link>
//                     </span>
//                   </label>


//                   {/* Register Button */}
//                   <button
//                     type="button"
//                     className="h-11 w-full rounded-md bg-green-600 text-sm font-bold text-white transition hover:bg-green-700 active:scale-[0.99]"
//                   >
//                     CREATE ACCOUNT
//                   </button>


//                   {/* Login Link */}
//                   <p className="mt-5 text-center text-xs text-gray-500">
//                     Already have an account?{" "}
//                     <Link
//                       href="/login"
//                       className="font-semibold text-green-600 hover:text-green-700"
//                     >
//                       Login
//                     </Link>
//                   </p>

//                 </div>
//               </div>

//             </div>
//           </div>
//         </section>

//       </main>

//       {/* Footer */}
//       <Footer />
//     </>
//   );
// }


"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    setError("");
    setSuccess("");

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!agree) {
      setError("Please agree to the Terms & Conditions.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.msg || data.error || "Registration failed.");
        return;
      }

      setSuccess("Account created successfully!");

      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAgree(false);

      setTimeout(() => {
        router.push("/login");
      }, 1000);
    } catch (error) {
      console.log(error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <main className="bg-gray-100">
        {/* Breadcrumb */}
        <section className="mx-auto w-full max-w-7xl px-3 py-3 sm:px-4 lg:px-5">
          <div className="rounded-lg bg-white px-4 py-3 text-[11px] text-gray-500 shadow-sm sm:text-xs">
            <Link href="/" className="hover:text-green-600">
              Home
            </Link>

            <span className="mx-2">/</span>

            <span className="text-gray-900">
              Register
            </span>
          </div>
        </section>

        {/* Register Section */}
        <section className="mx-auto w-full max-w-7xl px-3 pb-4 sm:px-4 lg:px-5">
          <div className="overflow-hidden rounded-lg bg-white shadow-sm">
            <div className="grid lg:grid-cols-2">

              {/* Left Side */}
              <div className="relative hidden min-h-[500px] items-center justify-center bg-gray-50 p-8 lg:flex">

                <div className="absolute left-10 top-10 h-20 w-20 rounded-full bg-green-100" />

                <div className="absolute bottom-10 right-10 h-24 w-24 rounded-full bg-green-50" />

                <div className="relative z-10 max-w-md text-center">

                  <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-3xl text-white">
                      ✓
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900">
                    Join Swoo
                  </h2>

                  <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-500">
                    Create your account and enjoy a better shopping
                    experience with easy checkout, order tracking and
                    personalized features.
                  </p>

                  <div className="mt-6 flex justify-center gap-3">
                    <span className="rounded-full bg-white px-4 py-2 text-xs font-medium text-gray-600 shadow-sm">
                      Easy Shopping
                    </span>

                    <span className="rounded-full bg-white px-4 py-2 text-xs font-medium text-gray-600 shadow-sm">
                      Secure Account
                    </span>
                  </div>

                </div>
              </div>

              {/* Right Side */}
              <div className="flex items-center justify-center p-5 sm:p-8 lg:p-12">

                <div className="w-full max-w-md">

                  {/* Heading */}
                  <div className="mb-6 text-center">

                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <span className="text-xl text-green-600">
                        👤
                      </span>
                    </div>

                    <h1 className="text-2xl font-bold text-gray-900">
                      Create Account
                    </h1>

                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-gray-400">
                      Register to continue
                    </p>

                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="mb-4 rounded-md bg-red-50 px-4 py-3 text-xs font-medium text-red-600">
                      {error}
                    </div>
                  )}

                  {/* Success Message */}
                  {success && (
                    <div className="mb-4 rounded-md bg-green-50 px-4 py-3 text-xs font-medium text-green-600">
                      {success}
                    </div>
                  )}

                  {/* Full Name */}
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-semibold text-gray-700"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      className="h-11 w-full rounded-md border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-semibold text-gray-700"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="h-11 w-full rounded-md border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
                    />
                  </div>

                  {/* Password */}
                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="mb-2 block text-xs font-semibold text-gray-700"
                    >
                      Password
                    </label>

                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create a password"
                      className="h-11 w-full rounded-md border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
                    />
                  </div>

                  {/* Confirm Password */}
                  <div className="mb-4">
                    <label
                      htmlFor="confirmPassword"
                      className="mb-2 block text-xs font-semibold text-gray-700"
                    >
                      Confirm Password
                    </label>

                    <input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) =>
                        setConfirmPassword(e.target.value)
                      }
                      placeholder="Confirm your password"
                      className="h-11 w-full rounded-md border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
                    />
                  </div>

                  {/* Terms */}
                  <label className="mb-5 flex cursor-pointer items-start gap-2">
                    <input
                      type="checkbox"
                      checked={agree}
                      onChange={(e) => setAgree(e.target.checked)}
                      className="mt-0.5 h-4 w-4 accent-green-600"
                    />

                    <span className="text-xs leading-5 text-gray-500">
                      I agree to the{" "}
                      <Link
                        href="/terms"
                        className="text-green-600 hover:text-green-700"
                      >
                        Terms & Conditions
                      </Link>
                    </span>
                  </label>

                  {/* Register Button */}
                  <button
                    type="button"
                    onClick={handleRegister}
                    disabled={loading}
                    className="h-11 w-full rounded-md bg-green-600 text-sm font-bold text-white transition hover:bg-green-700 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading
                      ? "CREATING ACCOUNT..."
                      : "CREATE ACCOUNT"}
                  </button>

                  {/* Login Link */}
                  <p className="mt-5 text-center text-xs text-gray-500">
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      className="font-semibold text-green-600 hover:text-green-700"
                    >
                      Login
                    </Link>
                  </p>

                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}