"use client";

import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "United States",
    subject: "",
    message: "",
    updates: false,
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));

    setSuccess(false);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSuccess(true);

    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "United States",
      subject: "",
      message: "",
      updates: false,
    });
  }

  return (
    <>
      <main className="min-h-screen bg-gray-100 px-3 py-4 sm:px-5">
        <div className="mx-auto max-w-7xl">

          {/* Breadcrumb */}
          <div className="mb-4 rounded-lg bg-white px-4 py-3 text-[10px] text-gray-500">
            <Link href="/" className="hover:text-green-600">
              Home
            </Link>

            <span className="mx-2">/</span>

            <span className="text-gray-900">
              Contact
            </span>
          </div>

          {/* Success Message */}
          {success && (
            <div className="mb-4 rounded-lg border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-600">
              Message sent successfully!
            </div>
          )}

          {/* Contact Section */}
          <div className="grid gap-5 lg:grid-cols-[1fr_330px]">

            {/* Contact Form */}
            <div className="rounded-lg bg-white p-5">

              <h1 className="text-base font-bold text-gray-900">
                READY TO WORK WITH US
              </h1>

              <p className="mt-2 text-[10px] text-gray-500">
                Contact us for all your questions and opinions
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-5 space-y-3"
              >

                {/* First + Last Name */}
                <div className="grid gap-3 sm:grid-cols-2">

                  <div>
                    <label className="mb-1 block text-[9px] font-semibold text-gray-700">
                      First Name <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      className="w-full rounded border border-gray-200 px-3 py-2 text-[10px] text-gray-900 outline-none focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[9px] font-semibold text-gray-700">
                      Last Name <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      className="w-full rounded border border-gray-200 px-3 py-2 text-[10px] text-gray-900 outline-none focus:border-green-500"
                    />
                  </div>

                </div>

                {/* Email */}
                <div>
                  <label className="mb-1 block text-[9px] font-semibold text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded border border-gray-200 px-3 py-2 text-[10px] text-gray-900 outline-none focus:border-green-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-1 block text-[9px] font-semibold text-gray-700">
                    Phone Number
                    <span className="ml-1 font-normal text-gray-400">
                      (Optional)
                    </span>
                  </label>

                  <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded border border-gray-200 px-3 py-2 text-[10px] text-gray-900 outline-none focus:border-green-500"
                  />
                </div>

                {/* Country */}
                <div>
                  <label className="mb-1 block text-[9px] font-semibold text-gray-700">
                    Country / Region
                  </label>

                  <select
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    className="w-full rounded border border-gray-200 bg-white px-3 py-2 text-[10px] text-gray-900 outline-none focus:border-green-500"
                  >
                    <option value="United States">
                      United States
                    </option>

                    <option value="Pakistan">
                      Pakistan
                    </option>

                    <option value="United Kingdom">
                      United Kingdom
                    </option>

                    <option value="Canada">
                      Canada
                    </option>

                    <option value="Australia">
                      Australia
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label className="mb-1 block text-[9px] font-semibold text-gray-700">
                    Subject
                    <span className="ml-1 font-normal text-gray-400">
                      (Optional)
                    </span>
                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full rounded border border-gray-200 px-3 py-2 text-[10px] text-gray-900 outline-none focus:border-green-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="mb-1 block text-[9px] font-semibold text-gray-700">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Note about your order, a special care for delivery"
                    className="w-full resize-none rounded border border-gray-200 px-3 py-2 text-[10px] text-gray-900 outline-none focus:border-green-500"
                  />
                </div>

                {/* Checkbox */}
                <label className="flex items-start gap-2 text-[8px] text-gray-500">
                  <input
                    type="checkbox"
                    name="updates"
                    checked={form.updates}
                    onChange={handleChange}
                    className="mt-0.5"
                  />

                  <span>
                    I want to receive news and updates once in a while.
                    By submitting, I&apos;m agreeing to the{" "}
                    <span className="text-green-600">
                      Terms & Conditions
                    </span>
                  </span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  className="rounded bg-green-600 px-5 py-2.5 text-[9px] font-bold text-white hover:bg-green-700"
                >
                  SEND MESSAGE
                </button>

              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">

              <div className="rounded-lg bg-white p-5">

                <h2 className="text-xs font-bold text-gray-900">
                  LUMOS SQUARES HEAD QUARTER
                </h2>

                <p className="mt-3 text-[9px] leading-5 text-gray-500">
                  152 Thatcher Road S, Manhattan, 10463, US
                  <br />
                  +1 (203) 3886 26 16
                  <br />
                  <span className="text-green-600">
                    hello@woo.com
                  </span>
                </p>

                <div className="my-4 border-t border-gray-100" />

                <h2 className="text-xs font-bold text-gray-900">
                  LUMOS WISCONSIN OFFICE
                </h2>

                <p className="mt-3 text-[9px] leading-5 text-gray-500">
                  12 Buckingham Rd, Thornwood, H3G 4TY, UK
                  <br />
                  +1 (789) 555-3054
                  <br />
                  <span className="text-green-600">
                    contact@woo.com
                  </span>
                </p>

                {/* Social Icons */}
                <div className="mt-5 flex gap-2">
                  {["f", "t", "in", "▶", "◎"].map(
                    (icon, index) => (
                      <div
                        key={index}
                        className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 text-[8px] text-gray-500"
                      >
                        {icon}
                      </div>
                    )
                  )}
                </div>

              </div>

              {/* Contact Image */}
              <div className="overflow-hidden rounded-lg bg-white">
               <img
  src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80"
  alt="Modern office workspace"
  className="h-64 w-full object-cover"
/>
              </div>

            </div>

          </div>

          {/* Google Map */}
          <div className="mt-5 rounded-lg bg-white p-5">

            <h2 className="text-xs font-bold text-gray-900">
              FIND US ON GOOGLE MAP
            </h2>

            <div className="mt-3 overflow-hidden rounded-lg">
             <iframe
  src="https://www.google.com/maps?q=New%20York%20City%2C%20New%20York&output=embed"
  width="100%"
  height="300"
  loading="lazy"
  className="border-0"
  title="Google Map - New York City"
/>
            </div>

          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}