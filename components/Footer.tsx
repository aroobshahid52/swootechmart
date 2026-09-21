import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white text-gray-400">

      {/* Main Footer */}
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-5 lg:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">

          {/* Company */}
          <div>
            <h3 className="mb-5 text-sm font-bold text-gray-900">
              SWOO - 1ST NYC TECH ONLINE MARKET
            </h3>

            <p className="text-xs font-medium text-gray-500">
              HOTLINE 24/7
            </p>

            <p className="mt-1 text-xl font-bold text-green-600">
              (025) 888 26 16
            </p>

            <p className="mt-3 text-xs leading-5 text-gray-600">
              257 Thatcher Road S, Brooklyn,
              <br />
              NY 10092
              <br />
              contact@swootechmart.com
            </p>

            <div className="mt-5 flex gap-2">
              {["𝕏", "f", "◎", "▶", "p"].map((icon) => (
                <span
                  key={icon}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-700 transition hover:bg-green-600 hover:text-white"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>

          {/* Top Categories */}
          <div>
            <h3 className="mb-5  ml-6 text-sm font-bold text-gray-900">
              TOP CATEGORIES
            </h3>

            <div className="space-y-2 ml-6  text-xs">
              {[
                "Laptops",
                "PC & Computers",
                "Cell Phones",
                "Tablets",
                "Gaming & VR",
                "Networking",
                "Cameras",
                "Sounds",
                "Office",
              ].map((item) => (
                <Link
                  key={item}
                  href="/products"
                  className="block transition hover:text-green-600"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-sm font-bold text-gray-900">
              COMPANY
            </h3>

            <div className="space-y-2 text-xs">
              {[
                "About Swoo",
                "Contact",
                "Career",
                "Blog",
                "Sitemap",
                "Store Locations",
              ].map((item) => (
                <Link
                  key={item}
                  href="/"
                  className="block transition hover:text-green-600"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Help Center */}
          <div>
            <h3 className="mb-5 text-sm font-bold text-gray-900">
              HELP CENTER
            </h3>

            <div className="space-y-2 text-xs">
              {[
                "Customer Service",
                "Policy",
                "Terms & Conditions",
                "Track Order",
                "FAQs",
                "My Account",
                "Product Support",
              ].map((item) => (
                <Link
                  key={item}
                  href="/"
                  className="block transition hover:text-green-600"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Partner */}
          <div>
            <h3 className="mb-5 text-sm font-bold text-gray-900">
              PARTNER
            </h3>

            <div className="space-y-2 text-xs">
              {[
                "Become Seller",
                "Affiliate",
                "Advertise",
                "Partnership",
              ].map((item) => (
                <Link
                  key={item}
                  href="/"
                  className="block transition hover:text-green-600"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Subscribe */}
      <div className="border-t">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-6 sm:px-5 md:flex-row md:items-center md:justify-between lg:px-6">

          <div className="text-xs">
            <span className="font-bold text-gray-900">
              SUBSCRIBE & GET{" "}
            </span>

            <span className="font-bold text-green-600">
              10% OFF
            </span>

            <span className="font-bold text-gray-900">
              {" "}FOR YOUR FIRST ORDER
            </span>
          </div>

          <div className="flex w-full max-w-md items-center border-b border-gray-300 pb-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-transparent text-xs outline-none placeholder:text-gray-400"
            />

            <button className="text-[10px] font-bold text-green-600 hover:text-green-700">
              SUBSCRIBE
            </button>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-xs text-gray-500 sm:px-5 md:flex-row lg:px-6">

          <p className="text-center md:text-left">
            © 2024 Shoppotone3. All Rights Reserved
          </p>

          <div className="flex items-center gap-4 font-bold">
            <span>💳</span>
            <span>🔴</span>
            <span>VISA</span>
            <span>stripe</span>
            <span>Klarna</span>
          </div>

          <Link
            href="/"
            className="text-green-600 hover:text-green-700"
          >
            Mobile Site
          </Link>

        </div>
      </div>

    </footer>
  );
}