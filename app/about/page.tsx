"use client";

import Link from "next/link";
import Footer from "@/components/Footer";

const leaders = [
  {
    name: "Henry Avery",
    role: "Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=90",
  },
  {
    name: "Michael Edward",
    role: "Operations Director",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=90",
  },
  {
    name: "Edward Hazed",
    role: "Managing Director",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=90",
  },
  {
    name: "Robert Rooney",
    role: "Finance Director",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=90",
  },
  {
    name: "Nathan Drake",
    role: "Technology Director",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=90",
  },
];

const history = [
  {
    year: "1996",
    text: "Our company was founded with a simple mission to provide reliable and efficient delivery services.",
  },
  {
    year: "2005",
    text: "We expanded our operations and introduced new logistics solutions for businesses and customers.",
  },
  {
    year: "2010",
    text: "Our delivery network continued to grow with new offices and distribution centers.",
  },
  {
    year: "2018",
    text: "We introduced modern technology to improve tracking, delivery speed and customer experience.",
  },
  {
    year: "2024",
    text: "Today we continue to connect businesses and customers through dependable logistics solutions.",
  },
];

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-gray-100 px-3 py-4 sm:px-5">
        <div className="mx-auto max-w-7xl">

          {/* Breadcrumb */}
          <div className="mb-4 rounded-lg bg-white px-4 py-3 text-sm text-gray-500">
            <Link href="/" className="hover:text-green-600">
              Home
            </Link>

            <span className="mx-2">/</span>

            <span className="text-gray-900">
              About
            </span>
          </div>

          {/* Hero */}
          <section className="overflow-hidden rounded-lg bg-[#eef0f5]">
            <div className="grid items-center lg:grid-cols-2">

              <div className="px-6 py-10 sm:px-10 sm:py-14">
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  About Our Company
                </p>

                <h1 className="mt-3 max-w-md text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
                  Best experience
                  <br />
                  always wins
                </h1>

                <p className="mt-5 max-w-lg text-base leading-7 text-gray-500">
                  We provide reliable delivery and logistics solutions
                  designed to make every shipment simple, fast and
                  convenient.
                </p>

                <div className="mt-5 text-sm leading-6 text-gray-500">
                  Reliable delivery
                  <br />
                  Professional service
                </div>
              </div>

              <div className="h-[300px] lg:h-[390px]">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=90"
                  alt="Delivery boxes"
                  className="h-full w-full object-cover"
                />
              </div>

            </div>
          </section>

          {/* Stats */}
          <section className="mt-3 rounded-lg bg-white p-6 sm:p-7">
            <div className="grid gap-7 sm:grid-cols-3">

              <div>
                <p className="text-sm font-bold uppercase leading-6 text-green-600">
                  Our purpose is to enrich
                  <br />
                  and enhance lives through
                  <br />
                  delivery
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-gray-900">
                  $12.5M
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  Annual revenue
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-gray-900">
                  12K+
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  Happy customers
                </p>
              </div>

            </div>

            <div className="mt-6 grid gap-7 sm:grid-cols-3 sm:pl-[33.33%]">
              <div>
                <p className="text-3xl font-bold text-gray-900">
                  725+
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  Delivery locations
                </p>
              </div>
            </div>
          </section>

          {/* Green Delivery Section */}
          <section className="mt-3 overflow-hidden rounded-lg">
            <div className="grid lg:grid-cols-2">

              <div className="h-[300px] sm:h-[350px]">
                <img
                  src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=90"
                  alt="Delivery worker"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex items-center bg-[#e8ebf1] px-6 py-9 sm:px-10">
                <div>

                  <h2 className="text-xl font-bold leading-7 text-gray-900 sm:text-2xl">
                    We connect millions of buyers and sellers around
                    the world, experiencing people & leading commerce.
                  </h2>

                  <p className="mt-5 text-sm leading-6 text-gray-500">
                    Our goal is to make delivery simple and accessible
                    for everyone. We combine technology, people and
                    reliable logistics to provide a better experience.
                  </p>

                  <p className="mt-4 text-sm leading-6 text-gray-500">
                    From small packages to large business shipments,
                    our team works every day to keep things moving.
                  </p>

                  <button className="mt-6 rounded bg-green-600 px-6 py-3 text-xs font-bold text-white transition hover:bg-green-700">
                    LEARN MORE
                  </button>

                </div>
              </div>

            </div>
          </section>

          {/* Features */}
          <section className="mt-3 grid overflow-hidden rounded-lg bg-white sm:grid-cols-3">

            <div className="border-b p-6 sm:border-b-0 sm:border-r">
              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white">
                  ✓
                </div>

                <h3 className="text-sm font-bold text-gray-900">
                  100% AUTOMATIC
                  <br />
                  PRODUCTS
                </h3>

              </div>

              <p className="mt-5 text-sm leading-6 text-gray-500">
                Our automated processes help make every delivery
                accurate, fast and convenient.
              </p>
            </div>

            <div className="border-b p-6 sm:border-b-0 sm:border-r">
              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white">
                  →
                </div>

                <h3 className="text-sm font-bold text-gray-900">
                  FAST
                  <br />
                  DELIVERY
                </h3>

              </div>

              <p className="mt-5 text-sm leading-6 text-gray-500">
                We focus on fast delivery while keeping your shipment
                safe throughout the journey.
              </p>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white">
                  $
                </div>

                <h3 className="text-sm font-bold text-gray-900">
                  AFFORDABLE
                  <br />
                  PRICES
                </h3>

              </div>

              <p className="mt-5 text-sm leading-6 text-gray-500">
                Affordable shipping options designed for both
                individuals and businesses.
              </p>
            </div>

          </section>

          {/* Company Story */}
          <section className="mt-7">

            <div className="max-w-4xl">

              <p className="text-xs font-bold uppercase tracking-wide text-gray-900">
                OUR STORY
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                MAKING DELIVERY SIMPLE FOR EVERYONE
              </h2>

              <p className="mt-4 text-sm leading-6 text-gray-500">
                We believe that delivery should be simple, transparent
                and accessible. Our company was created to connect
                customers and businesses through a reliable delivery
                network.
              </p>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                With modern technology and a dedicated team, we continue
                improving the way products move from one place to
                another.
              </p>

            </div>

          </section>

          {/* City Image */}
          <section className="mt-5 overflow-hidden rounded-lg">

            <img
              src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1800&q=90"
              alt="City buildings"
              className="h-[260px] w-full object-cover sm:h-[350px]"
            />

          </section>

          {/* History */}
          <section className="mt-6 rounded-lg bg-white p-6 sm:p-8">

            <p className="text-xs font-bold uppercase tracking-wide text-gray-900">
              FROM A RETAIL STORE TO THE GLOBAL CHAIN OF STORES
            </p>

            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              OUR JOURNEY
            </h2>

            <div className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">

              {history.map((item) => (
                <div
                  key={item.year}
                  className="flex gap-5"
                >

                  <div className="w-14 shrink-0">
                    <p className="text-sm font-bold text-green-600">
                      {item.year}
                    </p>
                  </div>

                  <p className="text-sm leading-6 text-gray-500">
                    {item.text}
                  </p>

                </div>
              ))}

            </div>

          </section>

          {/* Leadership */}
          {/* Leadership */}
<section className="mt-7 pb-7">

  <div className="flex items-end justify-between">
    <div>
      <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
        OUR TEAM
      </p>

      <h2 className="mt-2 text-2xl font-bold text-gray-900">
        LEADERSHIP
      </h2>
    </div>

    <span className="cursor-pointer text-sm text-gray-400 transition-colors duration-300 hover:text-green-600">
      View all
    </span>
  </div>

  <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">

    {leaders.map((leader) => (
      <div
        key={leader.name}
        className="group overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-lg"
      >

        <div className="h-56 overflow-hidden bg-gray-100 sm:h-64">
          <img
            src={leader.image}
            alt={leader.name}
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        <div className="p-4">
          <h3 className="text-sm font-bold text-gray-900 transition-colors duration-300 group-hover:text-green-600">
            {leader.name}
          </h3>

          <p className="mt-1 text-xs text-gray-400">
            {leader.role}
          </p>
        </div>

      </div>
    ))}

  </div>

</section>
        </div>
      </main>

      <Footer />
    </>
  );
}