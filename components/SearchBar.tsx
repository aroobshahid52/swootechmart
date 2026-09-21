// "use client";

// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// export default function SearchBar() {
//   const [search, setSearch] = useState("");

//   return (
//     <section className="bg-green-600 px-2 py-2">
//       <div className="mx-auto flex max-w-7xl items-center gap-3">

//         {/* Search Box */}
//         <div className="flex h-[38px] flex-1 overflow-hidden rounded-lg bg-white">

//           <select className="w-[118px] border-r bg-white px-2 text-[12px] font-medium text-gray-700 outline-none">
//             <option>All Categories</option>
//             <option>PC & Computers</option>
//             <option>Cell Phones</option>
//             <option>Tablets</option>
//             <option>Gaming & VR</option>
//             <option>Networking</option>
//             <option>Cameras</option>
//           </select>

//           <input
//             type="text"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             placeholder="Search anything..."
//             className="min-w-0 flex-1 px-3 text-[12px] text-gray-800 outline-none placeholder:text-gray-400"
//           />

//           <button 
//   type="button" 
//   className="rounded-r bg-white px-5  text-black"
// >
//   <FontAwesomeIcon icon={faMagnifyingGlass} />
// </button>
//         </div>

//         {/* Features */}
//         <div className="hidden h-[38px] items-center justify-around text-center text-[11px] font-semibold text-white md:flex md:w-[48%]">
//           <span>FREE SHIPPING OVER $199</span>
//           <span>30 DAYS MONEY BACK</span>
//           <span>100% SECURE PAYMENT</span>
//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    setSearch(searchParams.get("search") || "");
    setCategory(searchParams.get("category") || "");
  }, [searchParams]);

  function handleSearch() {
    const params = new URLSearchParams();

    if (search.trim()) {
      params.set("search", search.trim());
    }

    if (category) {
      params.set("category", category);
    }

    router.push(
      params.toString()
        ? `/products?${params.toString()}`
        : "/products"
    );
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <section className="bg-green-600 px-2 py-2">
      <div className="mx-auto flex max-w-7xl items-center gap-3">

        {/* Search Box */}
        <div className="flex h-[38px] flex-1 overflow-hidden rounded-lg bg-white">

          {/* Category */}
          <select
            value={category}
            onChange={(event) => {
              setCategory(event.target.value);

              const params = new URLSearchParams();

              if (search.trim()) {
                params.set("search", search.trim());
              }

              if (event.target.value) {
                params.set("category", event.target.value);
              }

              router.push(
                params.toString()
                  ? `/products?${params.toString()}`
                  : "/products"
              );
            }}
            className="w-[118px] border-r bg-white px-2 text-[12px] font-medium text-gray-700 outline-none"
          >
            <option value="">All Categories</option>

            <option value="PC & Computers">
              PC & Computers
            </option>

            <option value="Cell Phones">
              Cell Phones
            </option>

            <option value="Tablets">
              Tablets
            </option>

            <option value="Gaming & VR">
              Gaming & VR
            </option>

            <option value="Networking">
              Networking
            </option>

            <option value="Cameras">
              Cameras
            </option>
          </select>

          {/* Input */}
          <input
            type="text"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            onKeyDown={handleKeyDown}
            placeholder="Search anything..."
            className="min-w-0 flex-1 px-3 text-[12px] text-gray-800 outline-none placeholder:text-gray-400"
          />

          {/* Search Button */}
          <button
            type="button"
            onClick={handleSearch}
            className="rounded-r bg-white px-5 text-black transition-colors hover:text-green-600"
            aria-label="Search"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        {/* Features */}
        <div className="hidden h-[38px] items-center justify-around text-center text-[11px] font-semibold text-white md:flex md:w-[48%]">
          <span>FREE SHIPPING OVER $199</span>
          <span>30 DAYS MONEY BACK</span>
          <span>100% SECURE PAYMENT</span>
        </div>

      </div>
    </section>
  );
}