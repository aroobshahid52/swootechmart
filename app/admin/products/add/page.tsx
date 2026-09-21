"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setError(
          "Login token not found. Please login first."
        );
        setLoading(false);
        return;
      }

      const response = await fetch("/api/products", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify({
          title,
          price: Number(price),
          description,
          image,
          stock: Number(stock),
          category,
          brand,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error ||
            data?.msg ||
            "Failed to add product"
        );
      }

      setMessage(
        "Product added successfully!"
      );

      // Clear form
      setTitle("");
      setPrice("");
      setDescription("");
      setImage("");
      setStock("");
      setCategory("");
      setBrand("");

      // Products page par wapas
      setTimeout(() => {
        router.push("/products");
      }, 1000);

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
    <main className="min-h-screen bg-gray-100 px-3 py-6 sm:px-5">

      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-4 rounded-lg bg-white p-5">

          <p className="text-[10px] font-medium uppercase text-green-600">
            Admin Dashboard
          </p>

          <h1 className="mt-1 text-xl font-bold text-gray-900">
            ADD PRODUCT
          </h1>

          <p className="mt-1 text-xs text-gray-400">
            Add a new product to your store.
          </p>

        </div>


        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-lg bg-white p-5 sm:p-7"
        >

          {/* Messages */}

          {message && (
            <div className="mb-5 rounded-lg bg-green-50 px-4 py-3 text-xs font-medium text-green-700">
              {message}
            </div>
          )}

          {error && (
            <div className="mb-5 rounded-lg bg-red-50 px-4 py-3 text-xs font-medium text-red-600">
              {error}
            </div>
          )}


          {/* Product Title */}

          <div className="mb-4">

            <label className="mb-2 block text-xs font-bold text-gray-700">
              PRODUCT TITLE
            </label>

            <input
              type="text"
              value={title}
              onChange={(event) =>
                setTitle(event.target.value)
              }
              placeholder="Enter product title"
              required
              className="w-full  text-black  rounded-lg border border-gray-200 px-4 py-3 text-xs outline-none focus:border-green-500"
            />

          </div>


          {/* Price + Stock */}

          <div className="grid gap-4 sm:grid-cols-2">

            <div>

              <label className="mb-2 block text-xs font-bold text-gray-700">
                PRICE
              </label>

              <input
                type="number"
                min="0"
                step="0.01"
                value={price}
                onChange={(event) =>
                  setPrice(event.target.value)
                }
                placeholder="e.g. 499"
                required
                className="w-full  text-black  rounded-lg border border-gray-200 px-4 py-3 text-xs outline-none focus:border-green-500"
              />

            </div>


            <div>

              <label className="mb-2 block text-xs font-bold text-gray-700">
                STOCK
              </label>

              <input
                type="number"
                min="0"
                value={stock}
                onChange={(event) =>
                  setStock(event.target.value)
                }
                placeholder="e.g. 20"
                required
                className="w-full  text-black  rounded-lg border border-gray-200 px-4 py-3 text-xs outline-none focus:border-green-500"
              />

            </div>

          </div>


          {/* Category + Brand */}

          <div className="mt-4 grid gap-4 sm:grid-cols-2">

            <div>

              <label className="mb-2 block text-xs font-bold text-gray-700">
                CATEGORY
              </label>

              <input
                type="text"
                value={category}
                onChange={(event) =>
                  setCategory(event.target.value)
                }
                placeholder="e.g. Mobiles"
                className="w-full rounded-lg border text-black  border-gray-200 px-4 py-3 text-xs outline-none focus:border-green-500"
              />

            </div>


            <div>

              <label className="mb-2 block text-xs font-bold text-gray-700">
                BRAND
              </label>

              <input
                type="text"
                value={brand}
                onChange={(event) =>
                  setBrand(event.target.value)
                }
                placeholder="e.g. Apple"
                className="w-full text-black rounded-lg border border-gray-200 px-4 py-3 text-xs outline-none focus:border-green-500"
              />

            </div>

          </div>


          {/* Image URL */}

          <div className="mt-4">

            <label className="mb-2 block text-xs font-bold text-gray-700">
              IMAGE URL
            </label>

            <input
              type="url"
              value={image}
              onChange={(event) =>
                setImage(event.target.value)
              }
              placeholder="https://example.com/product.jpg"
              required
              className="w-full text-black  rounded-lg border border-gray-200 px-4 py-3 text-xs outline-none focus:border-green-500"
            />

            <p className="mt-1 text-[9px] text-gray-500">
              Abhi image URL use kar rahe hain.
            </p>

          </div>


          {/* Image Preview */}

          {image && (
            <div className="mt-4">

              <p className="mb-2 text-xs font-bold text-gray-700">
                IMAGE PREVIEW
              </p>

              <div className="flex h-48 items-center justify-center overflow-hidden rounded-lg bg-gray-50">

                <img
                  src={image}
                  alt="Product preview"
                  className="h-full w-full object-contain p-4"
                  onError={(event) => {
                    event.currentTarget.style.display =
                      "none";
                  }}
                />

              </div>

            </div>
          )}


          {/* Description */}

          <div className="mt-4">

            <label className="mb-2 block text-xs font-bold text-gray-700">
              DESCRIPTION
            </label>

            <textarea
              value={description}
              onChange={(event) =>
                setDescription(event.target.value)
              }
              placeholder="Enter product description"
              required
              rows={6}
              className="w-full  text-black resize-none rounded-lg border border-gray-200 px-4 py-3 text-xs outline-none focus:border-green-500"
            />

          </div>


          {/* Buttons */}

          <div className="mt-6 flex flex-col gap-2 sm:flex-row">

            <button
              type="submit"
              disabled={loading}
              className="flex-1 rounded-lg bg-green-600 py-3 text-xs font-bold text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              {loading
                ? "ADDING PRODUCT..."
                : "ADD PRODUCT"}
            </button>


            <button
              type="button"
              onClick={() =>
                router.push("/products")
              }
              className="rounded-lg border border-gray-200 px-6 py-3 text-xs font-bold text-gray-600 hover:bg-gray-50"
            >
              CANCEL
            </button>

          </div>

        </form>

      </div>

    </main>
  );
}