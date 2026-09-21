"use client";

import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import AuthGuard from "@/components/AuthGuard";
import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";

type Product = {
  _id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  images?: string[];
  stock: number;
  category?: string;
  brand?: string;
  createdAt?: string;
};

const LIMIT = 30;

function ProductsContent() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [sort, setSort] = useState("latest");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  const [categories, setCategories] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);

    const searchParams = useSearchParams();

  useEffect(() => {
    const urlSearch = searchParams.get("search") || "";
    const urlCategory = searchParams.get("category") || "";
    const urlBrand = searchParams.get("brand") || "";

    setSearch(urlSearch);
    setCategory(urlCategory);
    setBrand(urlBrand);
    setPage(1);
  }, [searchParams]);

  // ==========================================
  // LOAD ALL PRODUCTS
  // ==========================================

  useEffect(() => {
    const controller = new AbortController();

    async function loadProducts() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "/api/products?limit=1000&sort=latest",
          {
            method: "GET",
            cache: "no-store",
            signal: controller.signal,
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data?.error || "Failed to load products"
          );
        }

        const productList: Product[] = Array.isArray(data)
          ? data
          : data.products ?? [];

        setAllProducts(productList);

        // ==========================================
        // ALL CATEGORIES
        // ==========================================

        const allCategories = Array.from(
          new Set(
            productList
              .map((product) => product.category)
              .filter(
                (value): value is string =>
                  Boolean(value && value.trim())
              )
          )
        ).sort((a, b) =>
          a.localeCompare(b)
        );

        setCategories(allCategories);

        // ==========================================
        // ALL BRANDS
        // ==========================================

        const allBrands = Array.from(
          new Set(
            productList
              .map((product) => product.brand)
              .filter(
                (value): value is string =>
                  Boolean(value && value.trim())
              )
          )
        ).sort((a, b) =>
          a.localeCompare(b)
        );

        setBrands(allBrands);
      } catch (err) {
        if (
          err instanceof DOMException &&
          err.name === "AbortError"
        ) {
          return;
        }

        console.error(err);

        setError("Unable to load products.");
        setAllProducts([]);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();

    return () => controller.abort();
  }, []);

  // ==========================================
  // FILTER + SORT + PAGINATION
  // ==========================================

  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    // SEARCH
    if (search.trim()) {
      const searchValue =
        search.trim().toLowerCase();

      result = result.filter((product) => {
        return (
          product.title
            ?.toLowerCase()
            .includes(searchValue) ||
          product.description
            ?.toLowerCase()
            .includes(searchValue) ||
          product.brand
            ?.toLowerCase()
            .includes(searchValue) ||
          product.category
            ?.toLowerCase()
            .includes(searchValue)
        );
      });
    }

    // CATEGORY
    if (category) {
      result = result.filter(
        (product) =>
          product.category === category
      );
    }

    // BRAND
    if (brand) {
      result = result.filter(
        (product) =>
          product.brand === brand
      );
    }

    // MIN PRICE
    if (minPrice) {
      const min = Number(minPrice);

      if (Number.isFinite(min)) {
        result = result.filter(
          (product) =>
            Number(product.price) >= min
        );
      }
    }

    // MAX PRICE
    if (maxPrice) {
      const max = Number(maxPrice);

      if (Number.isFinite(max)) {
        result = result.filter(
          (product) =>
            Number(product.price) <= max
        );
      }
    }

    // SORT
    if (sort === "price_asc") {
      result.sort(
        (a, b) =>
          Number(a.price) -
          Number(b.price)
      );
    } else if (sort === "price_desc") {
      result.sort(
        (a, b) =>
          Number(b.price) -
          Number(a.price)
      );
    } else if (sort === "latest") {
      result.sort((a, b) => {
        const dateA = a.createdAt
          ? new Date(a.createdAt).getTime()
          : 0;

        const dateB = b.createdAt
          ? new Date(b.createdAt).getTime()
          : 0;

        return dateB - dateA;
      });
    } else if (sort === "oldest") {
      result.sort((a, b) => {
        const dateA = a.createdAt
          ? new Date(a.createdAt).getTime()
          : 0;

        const dateB = b.createdAt
          ? new Date(b.createdAt).getTime()
          : 0;

        return dateA - dateB;
      });
    }

    return result;
  }, [
    allProducts,
    search,
    category,
    brand,
    minPrice,
    maxPrice,
    sort,
  ]);

  // ==========================================
  // UPDATE PAGINATION
  // ==========================================

  useEffect(() => {
    const total = filteredProducts.length;

    const pages = Math.max(
      1,
      Math.ceil(total / LIMIT)
    );

    setTotalProducts(total);
    setTotalPages(pages);

    // If current page becomes invalid
    // after filtering, go back to page 1
    if (page > pages) {
      setPage(1);
    }

    const start =
      (page - 1) * LIMIT;

    const end =
      start + LIMIT;

    setProducts(
      filteredProducts.slice(
        start,
        end
      )
    );
  }, [
    filteredProducts,
    page,
  ]);

  // ==========================================
  // RESET FILTERS
  // ==========================================

  function resetFilters() {
    setSearch("");
    setCategory("");
    setBrand("");
    setMinPrice("");
    setMaxPrice("");
    setSort("latest");
    setPage(1);
  }

  // ==========================================
  // ADD TO CART - MONGODB
  // ==========================================

  // async function addToCart(
  //   productId: string
  // ) {
  //   try {
  //     /*
  //      * Your middleware/auth.js reads JWT
  //      * from:
  //      *
  //      * Authorization: Bearer TOKEN
  //      *
  //      * So we get the login token here.
  //      */

  //     const token =
  //       typeof window !== "undefined"
  //         ? localStorage.getItem("token")
  //         : null;

  //     if (!token) {
  //       alert(
  //         "Please login first to add products to cart."
  //       );
  //       return;
  //     }

  //     const response = await fetch(
  //       "/api/cart",
  //       {
  //         method: "POST",

  //         headers: {
  //           "Content-Type":
  //             "application/json",

  //           Authorization:
  //             `Bearer ${token}`,
  //         },

  //         body: JSON.stringify({
  //           productId,
  //           quantity: 1,
  //         }),
  //       }
  //     );

  //     const data =
  //       await response.json();

  //     if (!response.ok) {
  //       throw new Error(
  //         data?.error ||
  //           "Unable to add product to cart."
  //       );
  //     }

  //     alert(
  //       "Product added to cart successfully!"
  //     );
  //   } catch (err) {
  //     console.error(
  //       "Add to cart error:",
  //       err
  //     );

  //     alert(
  //       err instanceof Error
  //         ? err.message
  //         : "Unable to add product to cart."
  //     );
  //   }
  // }
// ==========================================
// ADD TO CART - MONGODB
// ==========================================

async function addToCart(product: Product) {
  try {
    const token =
      typeof window !== "undefined"
        ? localStorage.getItem("token")
        : null;

    if (!token) {
      alert("Please login first to add products to cart.");
      return;
    }

    const response = await fetch("/api/cart", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        productId: product._id,
        quantity: 1,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data?.error || "Unable to add product to cart."
      );
    }

    alert("Product added to cart successfully!");
  } catch (err) {
    console.error("Add to cart error:", err);

    alert(
      err instanceof Error
        ? err.message
        : "Unable to add product to cart."
    );
  }
}
  // ==========================================
  // PAGE NUMBERS
  // ==========================================

  function getPageNumbers() {
    const pages: number[] = [];

    const start = Math.max(
      1,
      page - 2
    );

    const end = Math.min(
      totalPages,
      page + 2
    );

    for (
      let number = start;
      number <= end;
      number++
    ) {
      pages.push(number);
    }

    return pages;
  }

  // ==========================================
  // RETURN
  // ==========================================

  return (
    <main className="min-h-screen bg-gray-100">

      {/* ======================================
          TOP HEADER
      ====================================== */}

      <section className="mx-auto w-full max-w-7xl px-3 pt-4 sm:px-4 lg:px-5">

        <div className="rounded-lg bg-white p-4 sm:p-5">

          <div className="mb-4 flex items-center justify-between">

            <div>

              <p className="text-[9px] font-medium uppercase text-green-600">
                Our Store
              </p>

              <h1 className="mt-1 text-lg font-bold text-gray-900 sm:text-xl">
                PRODUCTS
              </h1>

            </div>

            <Link
              href="/cart"
              className="rounded bg-green-600 px-4 py-2 text-[10px] font-bold text-white hover:bg-green-700"
            >
              VIEW CART
            </Link>

          </div>

          {/* Search */}

          <div className="flex w-full">

            <input
              type="text"
              value={search}
              onChange={(event) => {
                setSearch(
                  event.target.value
                );
                setPage(1);
              }}
              placeholder="Search products..."
              className="min-w-0 flex-1 rounded-l border border-gray-200 px-4 py-3 text-xs text-black outline-none focus:border-green-500"
            />

            <button
              type="button"
              className="rounded-r bg-green-600 px-5 text-white"
              onClick={() =>
                setPage(1)
              }
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
              />
            </button>

          </div>

        </div>

      </section>


      {/* ======================================
          MAIN CONTENT
      ====================================== */}

      <section className="mx-auto w-full max-w-7xl px-3 py-3 sm:px-4 lg:px-5">

        <div className="grid gap-3 lg:grid-cols-12">

          {/* ==================================
              LEFT FILTERS
          ================================== */}

          <aside className="hidden lg:col-span-3 lg:block">

            <div className="sticky top-4">

              <ProductFilters
                search={search}
                category={category}
                brand={brand}
                minPrice={minPrice}
                maxPrice={maxPrice}
                sort={sort}
                categories={categories}
                brands={brands}

                onSearchChange={(value) => {
                  setSearch(value);
                  setPage(1);
                }}

                onCategoryChange={(value) => {
                  setCategory(value);
                  setPage(1);
                }}

                onBrandChange={(value) => {
                  setBrand(value);
                  setPage(1);
                }}

                onMinPriceChange={(value) => {
                  setMinPrice(value);
                  setPage(1);
                }}

                onMaxPriceChange={(value) => {
                  setMaxPrice(value);
                  setPage(1);
                }}

                onSortChange={(value) => {
                  setSort(value);
                  setPage(1);
                }}

                onReset={resetFilters}
              />

            </div>

          </aside>


          {/* ==================================
              RIGHT SIDE
          ================================== */}

          <div className="lg:col-span-9">

            {/* Mobile Filters */}

            <div className="mb-3 grid grid-cols-2 gap-2 text-black lg:hidden">

              <select
                value={category}
                onChange={(event) => {
                  setCategory(
                    event.target.value
                  );
                  setPage(1);
                }}
                className="rounded-lg border-0 bg-white px-3 py-3 text-[10px] text-black outline-none"
              >

                <option value="">
                  All Categories
                </option>

                {categories.map(
                  (item) => (
                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>
                  )
                )}

              </select>


              <select
                value={brand}
                onChange={(event) => {
                  setBrand(
                    event.target.value
                  );
                  setPage(1);
                }}
                className="rounded-lg border-0 bg-white px-3 py-3 text-[10px] text-black outline-none"
              >

                <option value="">
                  All Brands
                </option>

                {brands.map(
                  (item) => (
                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>
                  )
                )}

              </select>

            </div>


            {/* Products Header */}

            <div className="mb-3 rounded-lg bg-white px-4 py-3">

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                <div>

                  <h2 className="text-sm font-bold text-gray-900">
                    BEST SELLERS
                  </h2>

                  <p className="mt-1 text-[9px] text-gray-900">
                    {totalProducts} products found
                  </p>

                </div>


                <select
                  value={sort}
                  onChange={(event) => {
                    setSort(
                      event.target.value
                    );
                    setPage(1);
                  }}
                  className="rounded border border-gray-200 bg-white px-3 py-2 text-[10px] text-black outline-none focus:border-green-500"
                >

                  <option value="latest">
                    Latest
                  </option>

                  <option value="price_asc">
                    Price: Low to High
                  </option>

                  <option value="price_desc">
                    Price: High to Low
                  </option>

                  <option value="oldest">
                    Oldest
                  </option>

                </select>

              </div>

            </div>


            {/* ==================================
                PRODUCTS
            ================================== */}

            <div className="rounded-lg bg-white p-3 sm:p-4">

              {loading ? (

                <div className="grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-3 xl:grid-cols-4">

                  {Array.from({
                    length: 8,
                  }).map((_, index) => (

                    <div
                      key={index}
                      className="animate-pulse"
                    >

                      <div className="h-[180px] rounded-lg bg-gray-200 sm:h-[200px]" />

                      <div className="mt-3 h-2 w-1/3 rounded bg-gray-200" />

                      <div className="mt-2 h-3 w-3/4 rounded bg-gray-200" />

                      <div className="mt-3 h-4 w-1/3 rounded bg-gray-200" />

                    </div>

                  ))}

                </div>

              ) : error ? (

                <div className="py-20 text-center">

                  <p className="text-sm font-bold text-red-500">
                    {error}
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      window.location.reload();
                    }}
                    className="mt-4 rounded bg-green-600 px-5 py-2 text-[10px] font-bold text-white"
                  >
                    TRY AGAIN
                  </button>

                </div>

              ) : products.length === 0 ? (

                <div className="py-20 text-center">

                  <div className="text-4xl">
                    📦
                  </div>

                  <h3 className="mt-3 text-sm font-bold text-gray-900">
                    No products found
                  </h3>

                  <p className="mt-1 text-[10px] text-gray-400">
                    Try another search or filter.
                  </p>

                  <button
                    type="button"
                    onClick={resetFilters}
                    className="mt-4 rounded bg-green-600 px-5 py-2 text-[10px] font-bold text-white"
                  >
                    RESET FILTERS
                  </button>

                </div>

              ) : (

                <div className="grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-3 xl:grid-cols-4">

                  {products.map(
                    (product) => (

                      <ProductCard
                        key={product._id}
                        product={product}
                        onAddToCart={
                          addToCart
                        }
                      />

                    )
                  )}

                </div>

              )}


              {/* ==================================
                  PAGINATION
              ================================== */}

              {!loading &&
                !error &&
                products.length > 0 &&
                totalPages > 1 && (

                  <div className="mt-8 flex flex-wrap items-center justify-center gap-2 border-t pt-5">

                    {/* Previous */}

                    <button
                      type="button"
                      disabled={
                        page === 1
                      }
                      onClick={() =>
                        setPage(
                          (current) =>
                            Math.max(
                              1,
                              current - 1
                            )
                        )
                      }
                      className="rounded border border-gray-200 px-3 py-2 text-[10px] text-gray-700 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      ← Previous
                    </button>


                    {/* First Page */}

                    {page > 3 && (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            setPage(1)
                          }
                          className="h-7 min-w-7 rounded border border-gray-200 px-2 text-[10px] text-gray-600 hover:border-green-500"
                        >
                          1
                        </button>

                        <span className="px-1 text-[10px] text-gray-400">
                          ...
                        </span>
                      </>
                    )}


                    {/* Page Numbers */}

                    {getPageNumbers().map(
                      (number) => (

                        <button
                          key={number}
                          type="button"
                          onClick={() =>
                            setPage(number)
                          }
                          className={`h-7 min-w-7 rounded px-2 text-[10px] ${
                            page === number
                              ? "bg-green-600 text-white"
                              : "border border-gray-200 text-gray-600 hover:border-green-500"
                          }`}
                        >
                          {number}
                        </button>

                      )
                    )}


                    {/* Last Page */}

                    {page <
                      totalPages - 2 && (
                      <>
                        <span className="px-1 text-[10px] text-gray-400">
                          ...
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            setPage(
                              totalPages
                            )
                          }
                          className="h-7 min-w-7 rounded border border-gray-200 px-2 text-[10px] text-gray-600 hover:border-green-500"
                        >
                          {totalPages}
                        </button>
                      </>
                    )}


                    {/* Next */}

                    <button
                      type="button"
                      disabled={
                        page === totalPages
                      }
                      onClick={() =>
                        setPage(
                          (current) =>
                            Math.min(
                              totalPages,
                              current + 1
                            )
                        )
                      }
                      className="rounded border border-gray-200 px-3 py-2 text-[10px] text-gray-700 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Next →
                    </button>

                  </div>

                )}

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
// export default function ProductsPage() {
//   return (
//     <Suspense fallback={null}>
//       <ProductsContent />
//     </Suspense>
//   );
// }

export default function ProductsPage() {
  return (
    <AuthGuard>
      <Suspense fallback={null}>
        <ProductsContent />
      </Suspense>
    </AuthGuard>
  );
}