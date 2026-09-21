import Link from "next/link";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <main className="min-h-screen bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[70vh] max-w-6xl items-center justify-center">
          <div className="relative w-full overflow-hidden rounded-2xl bg-white px-6 py-14 text-center shadow-sm sm:px-12 sm:py-20">

            {/* Background Decoration */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-52 w-52 rounded-full bg-green-100 opacity-70 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-green-100 opacity-70 blur-3xl" />

            <div className="relative">

              {/* 404 */}
              <div className="flex items-center justify-center">
                <span className="text-[100px] font-black leading-none tracking-tight text-gray-100 sm:text-[150px]">
                  404
                </span>
              </div>

              {/* Icon */}
              <div className="mx-auto -mt-12 flex h-20 w-20 items-center justify-center rounded-full bg-green-50 ring-8 ring-white sm:-mt-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-9 w-9 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75h.008v.008H9.75V9.75Zm4.5 0h.008v.008h-.008V9.75ZM8.25 15.25c1.05.85 2.25 1.25 3.75 1.25s2.7-.4 3.75-1.25"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
                  />
                </svg>
              </div>

              {/* Heading */}
              <h1 className="mt-7 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Page Not Found
              </h1>

              <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-gray-500 sm:text-base">
                The page you are looking for does not exist, has been moved,
                or the link may be incorrect.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

                {/* Home */}
                <Link
                  href="/"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-green-600 px-7 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-green-700 hover:shadow-md sm:w-auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="mr-2 h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10.5 12 3l9 7.5"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 9.75v9.75h13.5V9.75"
                    />
                  </svg>

                  BACK TO HOME
                </Link>

                {/* Products */}
                <Link
                  href="/products"
                  className="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-7 py-3 text-sm font-semibold text-gray-700 transition duration-200 hover:border-green-600 hover:text-green-600 sm:w-auto"
                >
                  VIEW PRODUCTS
                </Link>

              </div>

              {/* Bottom Text */}
              <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-3 text-xs text-gray-400">
                <span className="h-px flex-1 bg-gray-100" />

                <span>SWOO TECH MART</span>

                <span className="h-px flex-1 bg-gray-100" />
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}