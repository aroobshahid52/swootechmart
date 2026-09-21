"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";

export default function LoginPage() {
  const router = useRouter();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
   
  useEffect(() => {
  const token = localStorage.getItem("token");

  if (token) {
    router.replace("/");
  }
}, [router]);

  async function handleLogin(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.msg ||
            data?.error ||
            "Login failed"
        );
      }

      if (!data.token) {
        throw new Error(
          data?.msg ||
            "Login failed. Token not received."
        );
      }

      localStorage.setItem(
        "token",
        data.token
      );

      if (data.user) {
        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );

        localStorage.setItem(
          "role",
          data.user.role || "user"
        );
      }

      window.dispatchEvent(
        new Event("authUpdated")
      );

      router.push("/");

    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong"
      );
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

            <Link
              href="/"
              className="hover:text-green-600"
            >
              Home
            </Link>

            <span className="mx-2">
              /
            </span>

            <span className="text-gray-900">
              Login
            </span>

          </div>

        </section>

        {/* Login Section */}
        <section className="mx-auto w-full max-w-7xl px-3 pb-4 sm:px-4 lg:px-5">

          <div className="overflow-hidden rounded-lg bg-white shadow-sm">

            <div className="grid lg:grid-cols-2">

              {/* Left Side */}
              <div className="relative hidden min-h-[430px] items-center justify-center bg-gray-50 p-8 lg:flex">

                <div className="absolute left-10 top-10 h-20 w-20 rounded-full bg-green-100" />

                <div className="absolute bottom-10 right-10 h-24 w-24 rounded-full bg-green-50" />

                <div className="relative z-10 max-w-md text-center">

                  <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100">

                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-3xl text-white">
                      ✓
                    </div>

                  </div>

                  <h2 className="text-2xl font-bold text-gray-900">
                    Welcome to Swoo
                  </h2>

                  <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-500">
                    Sign in to access your account,
                    manage your orders, wishlist and
                    enjoy a better shopping experience.
                  </p>

                  <div className="mt-6 flex justify-center gap-3">

                    <span className="rounded-full bg-white px-4 py-2 text-xs font-medium text-gray-600 shadow-sm">
                      Secure Login
                    </span>

                    <span className="rounded-full bg-white px-4 py-2 text-xs font-medium text-gray-600 shadow-sm">
                      Fast Checkout
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
                      Welcome Back
                    </h1>

                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-gray-400">
                      Login to continue
                    </p>

                  </div>

                  {/* Error */}
                  {error && (
                    <div className="mb-5 rounded-md bg-red-50 px-4 py-3 text-xs text-red-600">
                      {error}
                    </div>
                  )}

                  {/* Login Form */}
                  <form onSubmit={handleLogin}>

                    {/* Email */}
                    <div className="mb-5">

                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-semibold text-gray-700"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(event) =>
                          setEmail(event.target.value)
                        }
                        required
                        className="h-11 w-full rounded-md border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
                      />

                    </div>

                    {/* Password */}
                    <div className="mb-2">

                      <label
                        htmlFor="password"
                        className="mb-2 block text-xs font-semibold text-gray-700"
                      >
                        Password
                      </label>

                      <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(event) =>
                          setPassword(event.target.value)
                        }
                        required
                        className="h-11 w-full rounded-md border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
                      />

                    </div>

                    {/* Forgot Password */}
                    <div className="mb-6 flex justify-end">

                      <Link
                        href="/forgot-password"
                        className="text-xs text-gray-400 transition hover:text-green-600"
                      >
                        Forgot Password?
                      </Link>

                    </div>

                    {/* Login Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="h-11 w-full rounded-md bg-green-600 text-sm font-bold text-white transition hover:bg-green-700 active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-gray-300"
                    >
                      {loading
                        ? "LOGGING IN..."
                        : "LOGIN"}
                    </button>

                  </form>

                  {/* Register */}
                  <p className="mt-5 text-center text-xs text-gray-500">

                    Don't have an account?{" "}

                    <Link
                      href="/register"
                      className="font-semibold text-green-600 hover:text-green-700"
                    >
                      Sign Up
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