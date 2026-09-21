"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

type ProductFiltersProps = {
  search: string;
  category: string;
  brand: string;
  minPrice: string;
  maxPrice: string;
  sort: string;

  categories: string[];
  brands: string[];

  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onBrandChange: (value: string) => void;
  onMinPriceChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
  onSortChange: (value: string) => void;
  onReset: () => void;
};

export default function ProductFilters({
  search,
  category,
  brand,
  minPrice,
  maxPrice,
  sort,

  categories,
  brands,

  onSearchChange,
  onCategoryChange,
  onBrandChange,
  onMinPriceChange,
  onMaxPriceChange,
  onSortChange,
  onReset,
}: ProductFiltersProps) {
  return (
    <div className="rounded-lg bg-white p-4">

      {/* Search */}
      <div>
        <label className="mb-2 block text-xs font-bold text-gray-900">
          SEARCH PRODUCTS
        </label>

        <div className="flex">
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search products..."
            className="min-w-0 flex-1 rounded-l border text-black border-gray-200 px-3 py-2 text-[10px] outline-none focus:border-green-500"
          />

          <button 
  type="button" 
  className="rounded-r bg-green-600 px-5 text-white"
>
  <FontAwesomeIcon icon={faMagnifyingGlass} />
</button>
        </div>
      </div>

      {/* Category */}
      <div className="mt-5 border-t pt-5">
        <label className="mb-2 block text-xs font-bold text-gray-900">
          CATEGORY
        </label>

        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full rounded border text-black border-gray-200 bg-white px-3 py-2 text-[10px] outline-none focus:border-green-500"
        >
          <option value="">All Categories</option>

          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* Brand */}
      <div className="mt-5 border-t pt-5">
        <label className="mb-2 block text-xs font-bold text-gray-900">
          BRAND
        </label>

        <select
          value={brand}
          onChange={(e) => onBrandChange(e.target.value)}
          className="w-full rounded border text-black border-gray-200 bg-white px-3 py-2 text-[10px] outline-none focus:border-green-500"
        >
          <option value="">All Brands</option>

          {brands.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* Price */}
      <div className="mt-5 border-t pt-5">
        <label className="mb-2 block text-xs font-bold text-gray-900">
          PRICE
        </label>

        <div className="flex gap-2">
          <input
            type="number"
            min="0"
            value={minPrice}
            onChange={(e) => onMinPriceChange(e.target.value)}
            placeholder="Min"
            className="w-full min-w-0 rounded border text-black border-gray-200 px-2 py-2 text-[10px] outline-none focus:border-green-500"
          />

          <input
            type="number"
            min="0"
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(e.target.value)}
            placeholder="Max"
            className="w-full min-w-0 rounded border text-black border-gray-200 px-2 py-2 text-[10px] outline-none focus:border-green-500"
          />
        </div>
      </div>

      {/* Sort */}
      <div className="mt-5 border-t pt-5">
        <label className="mb-2 block text-xs font-bold text-gray-900">
          SORT BY
        </label>

        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full rounded border text-black border-gray-200 bg-white px-2 py-2 text-[10px] outline-none focus:border-green-500"
        >
          <option value="latest">Latest</option>

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

      {/* Reset */}
      <button
        type="button"
        onClick={onReset}
        className="mt-6 w-full rounded border border-green-500 py-2 text-[10px] font-bold text-green-600 transition-colors hover:bg-green-50"
      >
        RESET FILTERS
      </button>

    </div>
  );
}