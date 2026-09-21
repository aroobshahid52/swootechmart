import Link from "next/link";
import SearchBar from "@/components/SearchBar";

const categories = [
  "All Categories",
  "Accessories",
  "Cameras",
  "Chargers",
  "Gaming",
  "Headphones",
  "Keyboards",
  "Laptops",
  "Mice",
  "Monitors",
  "Networking",
  "Power Banks",
  "Printers"
];

const brands = [
  "Acer",
  "Anker",
  "Apple",
  "ASUS",
  "Baseus",
  "Bose",
  "Canon",
  "Cooler Master",
  "Dell",
  "Epson"
];

const topCategories = [
  "Laptops",
  "PC Gaming",
  "Headphones",
  "Monitors",
];
function ProductCard({
  sale,
  newProduct,
  image,
  name,
  price,
  oldPrice,
  stock,
}: {
  sale?: string;
  newProduct?: boolean;
  image: string;
  name: string;
  price: string;
  oldPrice?: string;
  stock: string;
}) {
  return (
    <Link
      href="/products"
      className="group relative min-w-0"
    >

      {/* Sale / New Badge */}
      <div className="relative flex h-[145px] items-center justify-center">

        {sale && (
          <span className="absolute left-1 top-0 z-10 rounded bg-green-600 px-2 py-1 text-[8px] font-bold text-white">
            SAVE
            <br />
            {sale}
          </span>
        )}

        {newProduct && (
          <span className="absolute left-1 top-0 z-10 rounded bg-gray-900 px-2 py-1 text-[7px] font-bold text-white">
            NEW
          </span>
        )}

        {/* Circle */}
        <span className="absolute right-2 top-0 h-5 w-5 rounded-full bg-gray-200" />

        <img
          src={image}
          alt={name}
          className="h-[125px] w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>


      {/* Product Name */}
      <h3 className="mt-3 min-h-[38px] text-[10px] font-bold leading-[13px] text-gray-900">
        {name}
      </h3>


      {/* Price */}
      <div className="mt-2 flex flex-wrap items-center gap-1">
        <span className="text-[15px] font-bold text-gray-900">
          {price}
        </span>

        {oldPrice && (
          <span className="text-[9px] text-gray-400 line-through">
            {oldPrice}
          </span>
        )}
      </div>


      {/* Free Shipping */}
      <div className="mt-3">
        <span className="rounded bg-green-50 px-2 py-1 text-[7px] font-semibold text-green-600">
          FREE SHIPPING
        </span>
      </div>


      {/* Stock */}
      <div className="mt-2 flex items-center gap-1 text-[8px] text-gray-600">
        <span
          className={`h-2 w-2 rounded-full ${
            stock === "Contact"
              ? "bg-gray-400"
              : "bg-green-500"
          }`}
        />

        {stock}
      </div>

    </Link>
  );
}

export default function Home() {
  return (
    <main className="bg-gray-100">
      {/* Search */}
      <SearchBar />

      {/* Hero Section */}
      <section className="mx-auto w-full max-w-7xl px-2 py-3 sm:px-3 lg:px-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12">

        {/* Categories */}
<div className="rounded-lg bg-white p-5 sm:col-span-2 lg:col-span-3">
  <h3 className="mb-3 text-[17px] font-bold text-red-500">
    SALE 40% OFF
  </h3>

  <div className="space-y-2 text-[15px] text-gray-700">
    {categories.slice(1).map((category) => (
      <Link
        href={`/products?search=${encodeURIComponent(category)}`}
        key={category}
        className="block hover:text-green-600"
      >
        {category}
      </Link>
    ))}
  </div>
</div>

          {/* Main Banner + Bottom Cards */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-6">

            {/* Main Headphone Banner */}
            <div className="relative min-h-[300px] w-full overflow-hidden rounded-lg bg-gray-300 sm:min-h-[320px] md:min-h-[340px] lg:min-h-[260px]">

              {/* <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9o0xHp-KQQlJy88lEQHMQFo3fH_dZIv_34mxw954a8j-kRmFZwocNejk&s=10"
                alt="Noise Cancelling Headphones"
                className="absolute inset-0 h-full w-full object-cover"
              /> */}
<img
  src="/images/slider3.png"
  alt="Noise Cancelling Headphones"
  className="absolute inset-0 h-full w-full object-cover"
 />

              <div className="absolute inset-0 bg-black/10" />

              <div className="relative z-10 p-6 text-white sm:p-8">
                <p className="text-sm font-medium">
                  PREMIUM AUDIO
                </p>

                <h1 className="mt-3 text-2xl font-bold  leading-tight sm:text-3xl">
                  Noise Cancelling
                  <br />
                  Headphone
                </h1>

                <p className="mt-4 max-w-[220px] text-xs leading-4">
                  Bose Over-Ear Headphones with
                  <br />
                  WiFi, Voice Assistant and
                  <br />
                  Low Latency Gaming Mode.
                </p>

                <Link
                  href="/products"
                  className="mt-6 inline-block rounded bg-white px-6 py-3 text-xs font-bold text-gray-900 transition hover:bg-green-600 hover:text-white"
                >
                  BUY NOW
                </Link>
              </div>

              {/* Slider dots */}
              {/* <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/60" />
                <span className="h-2 w-2 rounded-full bg-white/60" />
                <span className="h-2 w-7 rounded-full bg-white" />
              </div> */}
            </div>

            {/* Bottom Two Cards */}
           {/* <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2"> */}
           <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

  {/* Sony Playgo */}
  {/* <Link
    href="/products"
    className="relative h-[130px] overflow-hidden rounded-lg bg-white"
  >
    <img
      src="https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=700&q=85"
      alt="Sony Playgo 5"
      className="absolute right-0 h-full w-[55%] object-cover"
    />

    <div className="relative z-10 p-4">
      <h3 className="text-sm font-bold text-gray-900">
        Sony Playgo 5
      </h3>

      <p className="mt-1 text-[11px] text-gray-500">
        From $569
      </p>

      <p className="mt-4 text-[10px] font-semibold text-gray-700 hover:text-green-600">
        DISCOVER NOW
      </p>
    </div>
  </Link> */}

  <Link
    href="/products"
    className="relative h-[140px] overflow-hidden mt-4 rounded-lg bg-white"
  >
    <img
      src="https://images.pexels.com/photos/32713615/pexels-photo-32713615.jpeg"
      alt="Sony Playgo 5"
      className="absolute right-0 top-0 h-full w-[52%] object-cover"
    />

    <div className="relative z-10 h-full w-[55%] p-4">
      <h3 className="text-sm font-bold leading-5 text-gray-900">
        Sony Playgo 5
      </h3>
         <p className="mt-2 text-[12px] leading-4 text-gray-600">
 smooth and comfortable typing
</p>

      <p className="mt-1 text-[11px] text-gray-500">
        From $569
      </p>

      <p className="mt-3 text-[10px] font-semibold text-gray-700 hover:text-green-600">
        DISCOVER NOW
      </p>
    </div>
  </Link>



  {/* Logitech Keyboard */}
  {/* <Link
    href="/products"
    className="relative h-[130px] overflow-hidden rounded-lg bg-gray-200"
  >
    <img
      src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=85"
      alt="Logitech Bluetooth Keyboard"
      className="absolute right-0 h-full w-[55%] object-cover"
    />

    <div className="relative z-10 p-4">
      <h3 className="text-sm Hey, Cortana.  font-bold text-gray-900">
        Logitech Bluetooth
        <br />
        Keyboard
      </h3>

      <p className="mt-2 text-[11px] text-gray-600 hover:text-green-600">
        Best for all devices
      </p>
    </div>
  </Link> */}
 <Link
    href="/products"
    className="relative h-[140px] overflow-hidden rounded-lg mt-4 bg-gray-200"
  >
    <img
      src="https://images.unsplash.com/photo-1623371748986-9a829391f7c9?q=80&w=1251&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Logitech Bluetooth Keyboard"
      className="absolute right-0 top-0 h-full w-[56%] object-cover"
    />

    <div className="relative z-10 h-full w-[55%] p-4">
      <h3 className="text-[13px] font-bold leading-5 text-gray-900">
        Logitech black
        <br />
        Keyboard
      </h3>

      <p className="mt-2 text-[12px] text-gray-600">
        Best for all devices
      </p>
      <p className="mt-1 text-[12px] leading-4 text-gray-600">
 smooth and comfortable typing
</p>
    </div>
  </Link>
</div>
          </div>
{/* Right Banners */}
{/* <div className="hidden min-[1025px]:grid w-full grid-cols-2 gap-2 min-[1025px]:col-span-3 min-[1025px]:grid-cols-1"> */}

<div className="hidden min-[1025px]:grid w-full grid-cols-1 gap-3 min-[1025px]:col-span-3">

  {/* XOMA Watch */}
  {/* <Link
    href="/products"
    className="relative block h-[140px] w-full overflow-hidden rounded-lg bg-white"
  >
    <img
      src="https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=600&q=80"
      alt="Smart Watch"
      className="absolute right-0 top-0 h-full w-[55%] object-cover"
    />

    <div className="relative z-10 h-full w-[50%] p-3">
      <p className="text-[11px] text-gray-500 hover:text-green-600">
        XOMA
      </p>

      <h3 className="mt-1 text-sm font-bold leading-5 text-gray-900">
        Sport Water
        <br />
        Resistance Watch
      </h3>

      <span className="mt-2 inline-block rounded bg-gray-900 px-3 py-1 text-[10px] text-white hover:text-green-600">
        SHOP NOW
      </span>
    </div>
  </Link> */}


   <Link
    href="/products"
    className="relative block h-[220px] w-full overflow-hidden rounded-lg bg-white"
  >
    <img
      src="https://images.pexels.com/photos/18259150/pexels-photo-18259150.jpeg"
      alt="Smart Watch"
      className="absolute right-0 top-0 h-full w-[52%] object-cover"
    />

    <div className="relative z-10 h-full w-[55%] p-4">
      <p className="text-[11px] font-medium text-gray-500">
        XOMA
      </p>

      <h3 className="mt-1 text-sm font-bold leading-5 text-gray-900">
        Sport Water
        <br />
        Resistance Watch
      </h3>
      <p className="mt-2 text-[11px] leading-4 text-gray-500">
  Stylish, durable and water-resistant smartwatch
</p>

      <span className="mt-3 inline-block rounded bg-gray-900 px-3 py-1.5 text-[10px] font-medium text-white hover:bg-green-600">
        SHOP NOW
      </span>
    </div>
  </Link>

  {/* OKODO Camera */}
  <Link
    href="/products"
    className="relative block h-[220px] w-full overflow-hidden rounded-lg bg-gray-900"
  >
    <img
      src="https://images.unsplash.com/photo-1593118247619-e2d6f056869e?auto=format&fit=crop&w=600&q=80"
      alt="Camera"
      className="absolute right-0 top-0 h-full w-[52%] object-cover opacity-80"
    />

    <div className="relative z-10 h-full w-[55%] p-4 text-white">
      <p className="text-[10px] font-medium">
        OKODO
      </p>

      <h3 className="mt-1 text-lg font-bold leading-5">
        HERO 11+
        <br />
        BLACK
      </h3>
      <p className="mt-2 text-[11px] leading-4 text-gray-200">
  Capture your adventures with stunning video quality
</p>

      <p className="mt-2 text-[13px] font-semibold text-green-400">
        FROM $169
      </p>
    </div>
  </Link>

</div>
        </div>
      </section>

      {/* Brands + Categories */}
     <section className="mx-auto grid w-full max-w-7xl gap-3 px-5 py-3 sm:px-7 md:grid-cols-2 lg:px-10">
        {/* Brands */}
        {/* <div className="rounded-lg bg-white p-5 text-gray-500">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-sm font-bold">
              FEATURED BRANDS
            </h2>

            <Link
              href="/brands"
              className="text-xs text-gray-500 hover:text-green-600"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {brands.map((brand) => (
              <div
                key={brand}
                className="flex h-10 items-center justify-center rounded text-[13px] font-bold text-gray-700 hover:text-green-600"
              >
                {brand}
              </div>
            ))}
          </div>
        </div> */}
<div className="rounded-lg bg-white p-5 text-gray-500">
  <div className="mb-5 flex items-center justify-between">
    <h2 className="text-sm font-bold">
      FEATURED BRANDS
    </h2>

    <Link
      href="/products"
      className="text-xs text-gray-500 hover:text-green-600"
    >
      View All
    </Link>
  </div>

  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
  {brands.map((brand) => (
    <Link
      key={brand}
      href={`/products?brand=${encodeURIComponent(brand)}`}
      className="flex h-10 items-center justify-center rounded text-[13px] font-bold text-gray-700 hover:text-green-600"
    >
      {brand}
    </Link>
  ))}
</div>
</div>

        {/* Top Categories */}
        <div className="rounded-lg bg-white p-5 text-gray-500">
          {/* <div className="mb-5 flex items-center justify-between">
            <h2 className="text-sm font-bold">
              TOP CATEGORIES
            </h2>

            <Link
              href="/products"
              className="text-xs text-gray-500 hover:text-green-600"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {topCategories.map((category) => (
              <Link
                href="/products"
                key={category}
                className="rounded-lg p-2 text-center hover:bg-gray-100"
              >
                <div className="mx-auto mb-2 flex h-16 items-center justify-center rounded bg-gray-100 text-2xl">
                  📦
                </div>

                <p className="text-[10px] font-semibold">
                  {category}
                </p>
              </Link>
            ))}
          </div> */}


<div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
  {topCategories.map((category) => (
    <Link
      href={`/products?category=${encodeURIComponent(category)}`}
      key={category}
      className="rounded-lg p-2 text-center hover:bg-gray-100"
    >
      <div className="mx-auto mb-2 flex h-25 items-center justify-center overflow-hidden rounded bg-gray-100">
        <img
          src={
            category === "Laptops"
              ? "https://images.pexels.com/photos/29387632/pexels-photo-29387632.jpeg"
              : category === "PC Gaming"
                ? "https://images.pexels.com/photos/9072216/pexels-photo-9072216.jpeg"
                : category === "Headphones"
                  ? "https://images.pexels.com/photos/12920900/pexels-photo-12920900.jpeg"
                  : category === "Monitors"
                    ? "https://images.pexels.com/photos/115655/pexels-photo-115655.jpeg"
                    : ""
          }
          alt={category}
          className="h-full w-full object-cover"
        />
      </div>

      <p className="text-[12px] font-semibold">
        {category}
      </p>
    </Link>
  ))}
</div>

           
        </div>

      </section>

     {/* Deals */}
<section className="mx-auto w-full max-w-7xl px-5 py-4 sm:px-7 lg:px-10">

  {/* Heading */}
  <div className="mb-3 rounded-t-lg bg-green-600 px-5 py-3">
    <h2 className="text-sm font-bold text-white">
      DEALS OF THE DAY
    </h2>
  </div>

  <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">

    {/* Product */}
    <div className="rounded-b-lg bg-white p-5 sm:p-6 lg:col-span-9">

      <div className="grid items-center gap-11 md:grid-cols-2">

        {/* Product Image */}
        <div className="flex h-full  rounded-xl min-h-[290px]  items-center justify-center">
   <img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkHSkPKYTCww_PuhMwAs7rxUTgf_w5n2iVIPzO3fm32vv8shy4IunAZq4&s=10"
  alt="Smartphone"
  className="h-[270px] w-full rounded-xl object-contain object-left sm:h-[280px] lg:h-[300px]"
/>
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">

          <p className="text-xs text-gray-400">
            Xiaomi
          </p>

          <h3 className="mt-1 text-lg font-bold text-gray-500">
            Xiaomi Smartphone
          </h3>

          <p className="mt-3 text-2xl font-bold text-red-500">
            $569.00
          </p>

          <ul className="mt-4 list-disc space-y-1 pl-4 text-xs text-gray-600">
            <li>Intel Core Processor</li>
            <li>High quality display</li>
            <li>Powerful performance</li>
            <li>Fast charging</li>
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            <button className="rounded bg-green-100 px-4 py-2 text-xs text-green-700">
              FREE SHIPPING
            </button>

            <button className="rounded bg-red-100 px-4 py-2 text-xs text-red-600">
              FREE
            </button>
          </div>

          <button className="mt-5 w-full rounded-lg bg-green-600 py-3 text-sm font-bold text-white transition hover:bg-green-700">
            ADD TO CART
          </button>

        </div>
      </div>
    </div>

    {/* Sale */}
    <div className="relative min-h-[280px] overflow-hidden rounded-lg bg-gray-800 lg:col-span-3 lg:min-h-full">

      <img
        src="https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=800&q=85"
        alt="Gaming"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />

      <div className="absolute left-5 top-5 text-white">
        <p className="text-xs font-medium">
          SALE 
        </p>

        <p className="text-3xl font-bold text-green-400">
          50%
        </p>
      </div>

    </div>

  </div>
</section>
            {/* ================= BEST SELLER ================= */}
     <section className="mx-auto w-full max-w-7xl px-5 py-3 sm:px-7 lg:px-10">
       <div className="relative mb-7 flex items-center justify-center">
  <h2 className="text-[21px] font-bold text-gray-900">
    BEST SELLER
  </h2>

  <Link
    href="/products"
    className="absolute right-0 text-[13px] text-gray-500 hover:text-green-600"
  >
    View All
  </Link>
</div>
<div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {[
            {
              name: "Wireless Headphones",
              price: "$129.00",
              image:
                "https://images.pexels.com/photos/5269699/pexels-photo-5269699.jpeg",
            },
            {
              name: "Smart Watch",
              price: "$89.00",
              image:
                "https://images.pexels.com/photos/18662969/pexels-photo-18662969.jpeg",
            },
            {
              name: "Gaming Keyboard",
              price: "$79.00",
              image:
                "https://images.pexels.com/photos/5380584/pexels-photo-5380584.jpeg",
            },
            {
              name: "Speaker",
              price: "$99.00",
              image:
                "https://images.pexels.com/photos/4917455/pexels-photo-4917455.jpeg",
            },
            {
              name: "Gaming Mouse",
              price: "$59.00",
              image:
                "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg",
            },
          ].map((product) => (
           <Link
  href={`/products?search=${encodeURIComponent(product.name)}`}
  key={product.name}
  className="group rounded-lg bg-white p-3 transition-shadow hover:shadow-md"
>
  <div className="flex h-[190px] items-center justify-center overflow-hidden rounded-lg bg-gray-50">
    <img
      src={product.image}
      alt={product.name}
      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
    />
  </div>

              <div className="pt-3">
                <p className="text-[10px] text-gray-400">
                  ELECTRONICS
                </p>

                <h3 className="mt-1 line-clamp-2 text-[13px] font-semibold text-gray-800 group-hover:text-green-600">
                  {product.name}
                </h3>

                <p className="mt-2 text-[15px] font-bold text-gray-900">
                  {product.price}
                </p>

                <button
                  type="button"
                  className="mt-3 w-full rounded bg-green-600 py-2 text-[10px] font-bold text-white transition hover:bg-green-700"
                >
                  ADD TO CART
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>


      {/* ================= BRAND NEW FOR YOU ================= */}
      <section className="mx-auto w-full max-w-7xl px-5 py-3 sm:px-7 lg:px-10">
       <div className="relative mb-7 flex items-center justify-center">
  <h2 className="text-[21px] font-bold text-gray-900">
    BRAND NEW DAY
  </h2>

  <Link
    href="/products"
    className="absolute right-0 text-[13px] text-gray-500 hover:text-green-600"
  >
    View All
  </Link>
</div>
        
{/* 
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {[
            {
              name: "Premium Headphones",
              price: "$159.00",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm30VkMCFkEUgvtCYwNy5kCGsbPTj6UqulFuA3X1WUAdgnsdXfMmXjONcQ&s=10",
            },
            {
              name: "Modern Laptop",
              price: "$899.00",
              image:
                "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/b00-Surface-Laptop-Snapdragon-8Ed-HR-Front?wid=1200&hei=900&qlt=90&bgc=F2F2F2F2&fmt=jpg",
            },
            {
              name: "Smartphone",
              price: "$569.00",
              image:
                "https://images.samsung.com/is/image/samsung/assets/pk/s2602/pcd/smartphones/PF_Main-Category_Galaxy-Smartphone_176x176.png?$ORIGIN_PNG$",
            },
            {
              name: "Digital Camera",
              price: "$699.00",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQiOIH5AfwLRuiKKgXupfIQQf0pSIwynHrgR1yzdU2LvgSi94D4vcBAMM&s=10",
            },
            {
              name: "Gaming Controller",
              price: "$69.00",
              image:
                "https://www.skygames.com.pk/wp-content/uploads/2025/11/easysmx-d10-multi-platform-wireless-gaming-controller-black-1.png",
            },
          ].map((product) => (
            <Link
              href="/products"
              key={product.name}
              className="group rounded-lg bg-white p-3 transition-shadow hover:shadow-md"
            >
              <div className="flex h-[190px] items-center justify-center overflow-hidden rounded-lg bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="pt-3">
                <p className="text-[10px] text-gray-400">
                  NEW ARRIVAL
                </p>

                <h3 className="mt-1 line-clamp-2 text-[13px] font-semibold text-gray-800 group-hover:text-green-600">
                  {product.name}
                </h3>

                <p className="mt-2 text-[15px] font-bold text-gray-900">
                  {product.price}
                </p>

                <button
                  type="button"
                  className="mt-3 w-full rounded bg-green-600 py-2 text-[10px] font-bold text-white transition hover:bg-green-700"
                >
                  ADD TO CART
                </button>
              </div>
            </Link>
          ))}
        </div> */}

        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
  {[
    {
      name: "Headphones",
      price: "$159.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm30VkMCFkEUgvtCYwNy5kCGsbPTj6UqulFuA3X1WUAdgnsdXfMmXjONcQ&s=10",
    },
    {
      name: "Laptop",
      price: "$899.00",
      image:
        "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/b00-Surface-Laptop-Snapdragon-8Ed-HR-Front?wid=1200&hei=900&qlt=90&bgc=F2F2F2F2&fmt=jpg",
    },
    {
      name: "Smartphone",
      price: "$569.00",
      image:
        "https://images.samsung.com/is/image/samsung/assets/pk/s2602/pcd/smartphones/PF_Main-Category_Galaxy-Smartphone_176x176.png?$ORIGIN_PNG$",
    },
    {
      name: "Digital Camera",
      price: "$699.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQiOIH5AfwLRuiKKgXupfIQQf0pSIwynHrgR1yzdU2LvgSi94D4vcBAMM&s=10",
    },
    {
      name: "Gaming",
      price: "$69.00",
      image:
        "https://www.skygames.com.pk/wp-content/uploads/2025/11/easysmx-d10-multi-platform-wireless-gaming-controller-black-1.png",
    },
  ].map((product) => (
    <Link
      href={`/products?search=${encodeURIComponent(product.name)}`}
      key={product.name}
      className="group rounded-lg bg-white p-3 transition-shadow hover:shadow-md"
    >
      <div className="flex h-[190px] items-center justify-center overflow-hidden rounded-lg bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="pt-3">
        <p className="text-[10px] text-gray-400">
          NEW ARRIVAL
        </p>

        <h3 className="mt-1 line-clamp-2 text-[13px] font-semibold text-gray-800 group-hover:text-green-600">
          {product.name}
        </h3>

        <p className="mt-2 text-[15px] font-bold text-gray-900">
          {product.price}
        </p>

        <button
          type="button"
          className="mt-3 w-full rounded bg-green-600 py-2 text-[10px] font-bold text-white transition hover:bg-green-700"
        >
          ADD TO CART
        </button>
      </div>
    </Link>
  ))}
</div>
        
      </section>
      {/* Top Cellphones & Tablets */}
<section className="mx-auto w-full max-w-7xl px-5 py-3 sm:px-7 lg:px-10">

  <div className="rounded-lg bg-white p-5 sm:p-6">

    {/* Heading */}
    <div className="mb-5 flex items-center justify-between">
      <h2 className="text-[15px] font-bold text-gray-900 sm:text-[16px]">
        TOP CELLPHONES & TABLETS
      </h2>

      <Link
        href="/products"
        className="text-[10px] text-gray-500 hover:text-green-600"
      >
        View All
      </Link>
    </div>


    {/* Top Area */}
    <div className="grid gap-5 lg:grid-cols-2">

      {/* Redmi Banner */}
      <Link
  href="/products"
  className="relative h-[135px] overflow-hidden rounded-lg bg-[rgb(180,205,224)] sm:h-[150px]"
>
        <div className="absolute left-5 top-5 z-10">
          <h3 className="text-[17px] font-medium leading-tight text-gray-900 sm:text-[18px]">
            REDMI NOTE
            <br />
            12 PRO+ 5G
          </h3>

          <p className="mt-3 text-[9px] text-gray-500">
            Rise to the challenge
          </p>

          <button className="mt-3 rounded bg-gray-900 px-4 py-2 text-[8px] font-semibold text-white hover:bg-green-600">
            SHOP NOW
          </button>
        </div>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmk6F0XuAd6k6KgMrmWRCP0_MVUzv50OjA0kVsFwYLhUtKBFRIPsJ8YYm&s=10"
          alt="Redmi Note"
          className="absolute right-0 h-full w-[58%] object-cover"
        />

      </Link>


      {/* Categories */}
      <div className="grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-3">

        {[
          {
            name: "iPhone (iOS)",
            items: "74 Items",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUCowYcBJSMelbxbvpBaDeSR0ovyvh44dPJeiO3UV1x5Kv5wcONNPlwKGE&s=10",
          },
          {
            name: "Android",
            items: "35 Items",
            image:
              "https://www.gstatic.com/marketing-cms/assets/images/08/09/26271833492294d470a0f643dc28/hero-video-poster.webp",
          },
          {
            name: "5G Support",
            items: "12 Items",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vszn4-J7thg6SnckXz-1UWnRuqh4xOWTgPehxRrysA&s=10",
          },
          {
            name: "Gaming",
            items: "9 Items",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdKY0mAkZnzL8jB4nSdPuIZbB7OsX7q6X5HtQKl-vmpCCVJTg3H_IZ7oFR&s=10",
          },
          {
            name: "Xiaomi",
            items: "52 Items",
            image:
              "https://gsmfloor.pk/wp-content/uploads/Xiaomi-17-Pro.jpg",
          },
          {
            name: "Accessories",
            items: "29 Items",
            image:
              "https://cpimg.tistatic.com/06394744/b/4/Mobile-Accessories.jpg",
          },
        ].map((category) => (
          <Link
            href="/products"
            key={category.name}
            className="flex items-center justify-between gap-2 rounded-md p-1 transition hover:bg-gray-50"
          >

            <div>
              <h3 className="text-[10px] font-bold text-gray-900 sm:text-[19px]">
                {category.name}
              </h3>

              <p className="mt-1 text-[12px] text-gray-500">
                {category.items}
              </p>
            </div>

            <img
              src={category.image}
              alt={category.name}
              className="h-19 w-15  rounded-md object-contain"
            />

          </Link>
        ))}

      </div>

    </div>


    {/* Divider */}
    <div className="my-4 border-t border-gray-200" />


    {/* Products */}
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

      {/* Product 1 */}
      <ProductCard
        sale="$199.00"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRQ5oQyhobns78EYY18Lr4n0kMmEBW9X4hmQ22flSqavZmvDHJPb1dlH1J&s=10"
        name="SROK Smart Phone 128GB, OLED Retina"
        price="$579.00"
        oldPrice="$859.00"
        stock="In stock"
      />

      {/* Product 2 */}
      <ProductCard
        newProduct
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRoQ1MId9gyaxAZQ0IYpYgF8xrSnXUlgLLtcumAOD8HBcQdzCsPZUXxFU2&s=10"
        name="aPod Pro Tablet 2023 LTE + WiFi, GPS Cellular 12.9 Inch, 512GB"
        price="$979.00 - $1,259.00"
        stock="In stock"
      />

      {/* Product 3 */}
      <ProductCard
        image="https://i.ebayimg.com/images/g/4WcAAeSweTZoR4mU/s-l1200.webp"
        name="OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS"
        price="$659.00"
        stock="In stock"
      />

      {/* Product 4 */}
      <ProductCard
        sale="$59.00"
        image="https://www.gracedigital.pk/wp-content/uploads/2025/05/Xiaomi-Redmi-A5-1.webp"
        name="Xiaomi Redmi Note 5, 64GB"
        price="$1,239.00"
        oldPrice="$1,619.00"
        stock="Contact"
      />

      {/* Product 5 */}
      <ProductCard
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUhpcSmlFQbn4mH1IY68aCwq_JXZNJlKV3ObTu3CMX7hKRbFbl9r5m1ky&s=10"
        name="Microsute Alpha Ultra S5 Surface 128GB 2022, Silver"
        price="$1,729.00"
        stock="Contact"
      />

    </div>

  </div>

</section>
  {/* ================= AUDIOS, GAMING & OFFICE EQUIPMENTS ================= */}

<section className="mx-auto w-full max-w-7xl px-3 py-3 sm:px-4 lg:px-5">
  <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">

    {/* ================= AUDIOS & CAMERAS ================= */}
    <div className="rounded-lg bg-white p-5">

      {/* Heading */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-[13px] font-bold text-gray-900">
          AUDIOS & CAMERAS
        </h2>

        <Link
          href="/products"
          className="text-[9px] text-gray-500 hover:text-green-600"
        >
          View All
        </Link>
      </div>

      {/* Banner */}
      <Link
        href="/products"
        className="relative block h-[128px] overflow-hidden rounded-lg bg-gray-100"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1-3AcjNYHpyAMyz4r9eKQMTgnoLnr9lV60enxYxmNUrcg5_y9Lkf3a2sE&s=10"
          alt="Audios and Cameras"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/5" />

        <div className="relative z-10 p-3 text-[19px] font-bold leading-5 text-white">
  Premium
  <br />
  Audio
  <br />
  Experience
</div>
      </Link>

      {/* Divider */}
      <div className="my-5 border-t border-gray-200" />

      {/* Categories */}
      <div className="grid grid-cols-2 gap-x-5 gap-y-6">

        {/* Speaker */}
        <Link
          href="/products"
          className="group flex flex-col items-center text-center"
        >
          <div className="flex h-[82px] w-[82px] items-center justify-center overflow-hidden rounded-full bg-gray-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg_gQdAQmSdeBwfgx2uUpNRalYfl_UvkGBpJa8P5khkRuAcaTEjOTXiis&s=10"
              alt="Speaker"
              className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </div>

          <p className="mt-2 text-[11px] font-bold text-gray-900 group-hover:text-green-600">
            Speaker
          </p>

          <p className="mt-1 text-[9px] text-gray-500">
            12 Items
          </p>
        </Link>

        {/* DSLR Camera */}
        <Link
          href="/products"
          className="group flex flex-col items-center text-center"
        >
          <div className="flex h-[82px] w-[82px] items-center justify-center overflow-hidden rounded-full bg-gray-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGI7g4rHRwyxI66Wc3Wj28ezjAF8y_WqJ7JEu0qzPeTg&s=10"
              alt="DSLR Camera"
              className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </div>

          <p className="mt-2 text-[11px] font-bold text-gray-900 group-hover:text-green-600">
            DSLR Camera
          </p>

          <p className="mt-1 text-[9px] text-gray-500">
            9 Items
          </p>
        </Link>

        {/* Earbuds */}
        <Link
          href="/products"
          className="group flex flex-col items-center text-center"
        >
          <div className="flex h-[82px] w-[82px] items-center justify-center overflow-hidden rounded-full bg-gray-100">
            <img
              src="https://m.media-amazon.com/images/I/51GEDaBzrwL.jpg"
              alt="Earbuds"
              className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </div>

          <p className="mt-2 text-[11px] font-bold text-gray-900 group-hover:text-green-600">
            Earbuds
          </p>

          <p className="mt-1 text-[9px] text-gray-500">
            5 Items
          </p>
        </Link>

        {/* Microphone */}
        <Link
          href="/products"
          className="group flex flex-col items-center text-center"
        >
          <div className="flex h-[82px] w-[82px] items-center justify-center overflow-hidden rounded-full bg-gray-100">
            <img
              src="https://seelectronics.com/wp-content/uploads/2024/08/v7-red-square.png"
              alt="Microphone"
              className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </div>

          <p className="mt-2 text-[11px] font-bold text-gray-900 group-hover:text-green-600">
            Microphone
          </p>

          <p className="mt-1 text-[9px] text-gray-500">
            12 Items
          </p>
        </Link>

      </div>
    </div>


    {/* ================= GAMING ================= */}
    <div className="rounded-lg bg-white p-5">

      {/* Heading */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-[13px] font-bold text-gray-900">
          GAMING
        </h2>

        <Link
          href="/products"
          className="text-[9px] text-gray-500 hover:text-green-600"
        >
          View All
        </Link>
      </div>

      {/* Banner */}
      <Link
        href="/products"
        className="relative block h-[128px] overflow-hidden rounded-lg bg-gray-100"
      >
        <img
          src="https://img.magnific.com/premium-photo/photo-realistic-concept-gaming-streaming-influencers-providing-commentary-tips-popular-gam_980716-156690.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Gaming"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/5" />

        <div className="relative z-10 p-5 text-[19px] font-bold leading-5 text-gray-900">
          WIRELESS
          <br />
          RGB GAMING
          <br />
          MOUSE
        </div>
      </Link>

      {/* Divider */}
      <div className="my-5 border-t border-gray-200" />

      {/* Categories */}
      <div className="grid grid-cols-2 gap-x-5 gap-y-6">

        {/* Monitor */}
        <Link
          href="/products"
          className="group flex flex-col items-center text-center"
        >
          <div className="flex h-[82px] w-[82px] items-center justify-center overflow-hidden rounded-full bg-gray-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSaR_LDWoVNJJWOQwYbKZbO-MpkFwwQVfhpmG25fyZiw&s=10"
              alt="Monitors"
              className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </div>

          <p className="mt-2 text-[11px] font-bold text-gray-900 group-hover:text-green-600">
            Monitors
          </p>

          <p className="mt-1 text-[9px] text-gray-500">
            28 Items
          </p>
        </Link>

        {/* Chair */}
        <Link
          href="/products"
          className="group flex flex-col items-center text-center"
        >
          <div className="flex h-[82px] w-[82px] items-center justify-center overflow-hidden rounded-full bg-gray-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC-vP_Lhu9BU95rUUnu-veOcxOg1aAEhpDKJRtanVTXXMXuihYbgqZ46w&s=10"
              alt="Chair"
              className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </div>

          <p className="mt-2 text-[11px] font-bold text-gray-900 group-hover:text-green-600">
            Chair
          </p>

          <p className="mt-1 text-[9px] text-gray-500">
            12 Items
          </p>
        </Link>

        {/* Controller */}
        <Link
          href="/products"
          className="group flex flex-col items-center text-center"
        >
          <div className="flex h-[82px] w-[82px] items-center justify-center overflow-hidden rounded-full bg-gray-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRMBIh4C7uwgdCBfMEpXx88Daks3vr6nNAfFqDKXUyFw&s=10"
              alt="Controller"
              className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </div>

          <p className="mt-2 text-[11px] font-bold text-gray-900 group-hover:text-green-600">
            Controller
          </p>

          <p className="mt-1 text-[9px] text-gray-500">
            9 Items
          </p>
        </Link>

        {/* Keyboards */}
        <Link
          href="/products"
          className="group flex flex-col items-center text-center"
        >
          <div className="flex h-[82px] w-[82px] items-center justify-center overflow-hidden rounded-full bg-gray-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7reiGbpZVZ6eqyZwMNUwOvhPn0LNKxmVALzbyO4FYXQ&s=10"
              alt="Keyboards"
              className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </div>

          <p className="mt-2 text-[11px] font-bold text-gray-900 group-hover:text-green-600">
            Keyboards
          </p>

          <p className="mt-1 text-[9px] text-gray-500">
            30 Items
          </p>
        </Link>

      </div>
    </div>


    {/* ================= OFFICE EQUIPMENTS ================= */}
    <div className="rounded-lg bg-white p-5">

      {/* Heading */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-[13px] font-bold text-gray-900">
          OFFICE EQUIPMENTS
        </h2>

        <Link
          href="/products"
          className="text-[9px] text-gray-500 hover:text-green-600"
        >
          View All
        </Link>
      </div>

      {/* Banner */}
      <Link
        href="/products"
        className="relative block h-[128px] overflow-hidden rounded-lg bg-gray-100"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlY69Nsi4tD1w_RTHYvKq3F_ImUY3HLMOYOohmN8N_sMOq5HEGH5uRZZOU&s=10"
          alt="Office Equipment"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/5" />

        <div className="relative z-10 p-5 text-[11px] font-bold leading-5 text-white">
          Home Theater 4k
          <br />
          <span className="text-lg">
            Laser Projector
          </span>
        </div>
      </Link>

      {/* Divider */}
      <div className="my-5 border-t border-gray-200" />

      {/* Categories */}
      <div className="grid grid-cols-2 gap-x-5 gap-y-6">

        {/* Printers */}
        <Link
          href="/products"
          className="group flex flex-col items-center text-center"
        >
          <div className="flex h-[82px] w-[82px] items-center justify-center overflow-hidden rounded-full bg-gray-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZsiUMforqA_Pw7C8jBcT1KxKHZ613zmRJotyaY3VIbd8_vfi-UDh2dmpt&s=10"
              alt="Printers"
              className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </div>

          <p className="mt-2 text-[11px] font-bold text-gray-900 group-hover:text-green-600">
            Printers
          </p>

          <p className="mt-1 text-[9px] text-gray-500">
            9 Items
          </p>
        </Link>

        {/* Network */}
        <Link
          href="/products"
          className="group flex flex-col items-center text-center"
        >
          <div className="flex h-[82px] w-[82px] items-center justify-center overflow-hidden rounded-full bg-gray-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRso0R0YokA8NTYGvFpmtCCyyhty9EIZ5wn1fYF2kv5QA&s=10"
              alt="Network"
              className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </div>

          <p className="mt-2 text-[11px] font-bold text-gray-900 group-hover:text-green-600">
            Network
          </p>

          <p className="mt-1 text-[9px] text-gray-500">
            90 Items
          </p>
        </Link>

        {/* Security */}
        <Link
          href="/products"
          className="group flex flex-col items-center text-center"
        >
          <div className="flex h-[82px] w-[82px] items-center justify-center overflow-hidden rounded-full bg-gray-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu7IlgaJ8l7YaegEa_Bco_e1A6WaZIzqzeP9eCIOj8u0ReFAq6FCZkpfDu&s=10"
              alt="Security"
              className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </div>

          <p className="mt-2 text-[11px] font-bold text-gray-900 group-hover:text-green-600">
            Security
          </p>

          <p className="mt-1 text-[9px] text-gray-500">
            12 Items
          </p>
        </Link>

        {/* Projectors */}
        <Link
          href="/products"
          className="group flex flex-col items-center text-center"
        >
          <div className="flex h-[82px] w-[82px] items-center justify-center overflow-hidden rounded-full bg-gray-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Jo-1t_OFsRwUMRS-nSj6bejW2_qoH9nBJ9FOGy3JCECYFUKUC0OziUk&s=10"
              alt="Projectors"
              className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </div>

          <p className="mt-2 text-[11px] font-bold text-gray-900 group-hover:text-green-600">
            Projectors
          </p>

          <p className="mt-1 text-[9px] text-gray-500">
            12 Items
          </p>
        </Link>

      </div>
    </div>

  </div>
</section>

{/* ================= END SECTION ================= */}
{/* ================= PROMO BANNERS ================= */}
<section className="mx-auto w-full max-w-7xl px-3 py-3 sm:px-4 lg:px-5">
  <div className="grid grid-cols-1 gap-2 md:grid-cols-2">

    {/* Swatek 10% Back */}
    <Link
      href="/products"
      className="relative block h-[110px] overflow-hidden rounded-lg bg-green-600"
    >
    <img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOZ9zBJlxi2tawb5xItViESsnBzb5IyHgmYw5oh8YRYA&s=10"
  alt="Smart Watch"
  className="absolute inset-0 h-full w-full object-cover"
/>
      <div className="relative z-10 flex h-full p-2">
        <div>
          <p className="text-[30px] font-bold text-red-900">
            10% Back
          </p>

          
        </div>
      </div>
    </Link>


    {/* Download App */}
    <Link
      href="/"
      className="relative block h-[110px] overflow-hidden rounded-lg bg-gray-900"
    >
      <img
        src="https://uizard.io/static/53a2a0eec247f77517aa8d13c8198d9a/a8e47/2e3053666f7178aae9eef0cfe9a30fe08e7bf5f3-1440x835.png"
        alt="Download our app"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative z-10 flex h-full items-center px-5">
        <div>
          <p className="text-[19px] font-bold text-white">
            Download
          </p>

          <p className="text-[19px] font-bold text-white">
            our app
          </p>

          <button className="mt-1 rounded border border-gray-500 px-3 py-1 text-[9px] text-white">
            SEND LINK
          </button>
        </div>
      </div>
    </Link>

  </div>
</section>


{/* ================= RECENTLY VIEWED ================= */}
<section className="mx-auto w-full max-w-7xl px-3 py-1 sm:px-4 lg:px-5">
  <div className="rounded-lg bg-white p-4">

    {/* Heading */}
    <div className="mb-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <h2 className="text-[12px] font-bold text-gray-900">
          YOUR RECENTLY VIEWED
        </h2>

        <Link
          href="/products"
          className="text-[8px] text-gray-500 hover:text-green-600"
        >
          View All
        </Link>
      </div>

      <button className="rounded-full bg-gray-100 px-3 py-1 text-[8px] text-gray-500">
        ⋯
      </button>
    </div>


    {/* Products */}
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {/* Product 1 */}
      <Link
        href="/products"
        className="flex items-center gap-3"
      >
        <div className="relative h-[48px] w-[48px] shrink-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1iXXakOVxfuuQMmdissTb76ohc9vjvAu-Ceah8-eBUg&s=10"
            alt="Xiaomi Redmi 2 Sport Watch"
            className="h-full w-full object-contain"
          />

          <span className="absolute left-0 top-0 rounded bg-gray-900 px-1 text-[5px] text-white">
            NEW
          </span>
        </div>

        <div>
          <p className="text-[9px] font-semibold text-gray-900">
            Xiaomi Redmi 2 Sport
            <br />
            Water Resistance Watch
          </p>

          <p className="mt-1 text-[9px] font-bold text-gray-900">
            $579.00
          </p>
        </div>
      </Link>


      {/* Product 2 */}
      <Link
        href="/products"
        className="flex items-center gap-3"
      >
        <div className="h-[48px] w-[48px] shrink-0">
          <img
            src="https://laptopchoice.pk/wp-content/uploads/2024/09/Capture5.jpg"
            alt="Microsoft Surface"
            className="h-full w-full object-contain"
          />
        </div>

        <div>
          <p className="text-[8px] font-semibold text-gray-900">
            Microsoft Surface 2.0
            <br />
            Laptop
          </p>

          <p className="mt-1 text-[9px] font-bold text-gray-900">
            $979.00
          </p>
        </div>
      </Link>


      {/* Product 3 */}
      <Link
        href="/products"
        className="flex items-center gap-3"
      >
        <div className="h-[48px] w-[48px] shrink-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW_vDODv1l7xmo69mKlTRaoTIjYYKgHKQKnnbqZad-eotDIYRRQc9hx0jW&s=10"
            alt="iPad Pro"
            className="h-full w-full object-contain"
          />
        </div>

        <div>
          <p className="text-[9px] font-semibold text-gray-900">
            iPad Pro Tablet 2023
            <br />
            LTE + WiFi
          </p>

          <p className="mt-1 text-[9px] font-bold text-gray-900">
            $979.00 - $1,259.00
          </p>
        </div>
      </Link>


      {/* Product 4 */}
      <Link
        href="/products"
        className="flex items-center gap-3"
      >
        <div className="relative h-[60px] w-[48px] shrink-0">
          <img
            src="https://sparx.pk/cdn/shop/files/Neo15_13120a1b-9b12-4f88-940b-53a5cd6537ae.webp?v=1766410532&width=1080"
            alt="SROK Smartphone"
            className="h-full w-full object-contain"
          />

          <span className="absolute right-0 top-0 rounded bg-green-600 px-1 text-[5px] text-white">
            SAVE
            <br />
            $3.00
          </span>
        </div>

        <div>
          <p className="text-[9px] font-semibold text-gray-900">
            SROK Smart Phone
            <br />
            128GB
          </p>

          <p className="mt-1 text-[9px] font-bold text-red-500">
            $579.00
          </p>
        </div>
      </Link>

    </div>
  </div>
</section>


{/* ================= ABOUT TEXT ================= */}
<section className="mx-auto w-full max-w-7xl px-3 py-8 sm:px-4 lg:px-5">

  <div className="py-2">

    <h2 className="text-[16px] font-bold text-gray-900">
      Swoo – #1 Online Marketplace for technology
    </h2>

    <p className="mt-4 text-[10px] leading-4 text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
      posuere mi. Quisque iaculis dignissim scelerisque. Morbi condimentum
      sagittis leo vitae tempor.
    </p>

    <p className="mt-2 text-[10px] leading-4 text-gray-500">
      Suspendisse in dolor odio. Sed aliquet ac lacus ut luctus. Fusce
      mattis sollicitudin sem, id lobortis nibh ullamcorper a. Donec
      vehicula dolor et arcu consequat mauris. Lorem ipsum dolor sit amet consectetur.
    </p>

    <p className="mt-2 text-[10px] leading-4 text-gray-500">
      Morbi pharetra sem mauris, nec tincidunt vestibulum suscipit.
      Curabitur non euismod dui. Proin eget justo eu erat luctus placerat.
      Nam rhoncus ipsum ac enim faucibus, at Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, facere?
    </p>

    <Link
      href="/about"
      className="mt-5 inline-block text-[11px] font-medium text-gray-900 hover:text-green-600"
    >
      View All
    </Link>

  </div>

</section>
    </main>
  );
}