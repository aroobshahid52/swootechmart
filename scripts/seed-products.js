import { connectDB } from "../lib/mongodb.js";
import Product from "../models/Product.js";

const products = [
  // =========================
  // SMARTPHONES
  // =========================
  {
    title: "iPhone 15 Pro",
    price: 299999,
    description: "Premium Apple smartphone with A17 Pro chip, titanium design, advanced camera system and Super Retina XDR display.",
    image: "https://images.pexels.com/photos/29020349/pexels-photo-29020349.jpeg",
    stock: 20,
    category: "Smartphones",
    brand: "Apple",
  },
  {
    title: "iPhone 15",
    price: 229999,
    description: "Apple smartphone featuring a powerful processor, advanced camera system and bright Super Retina display.",
    image: "https://images.unsplash.com/photo-1695578130391-929bdfff85d8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 25,
    category: "Smartphones",
    brand: "Apple",
  },
  {
    title: "iPhone 14 Pro Max",
    price: 249999,
    description: "Large premium Apple smartphone with A16 Bionic chip, Pro camera system and Super Retina XDR display.",
    image: "https://images.unsplash.com/photo-1664114780064-41d0dd873e92?q=80&w=449&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 15,
    category: "Smartphones",
    brand: "Apple",
  },
  {
    title: "Samsung Galaxy S24 Ultra",
    price: 289999,
    description: "Flagship Samsung smartphone with premium AMOLED display, powerful processor, advanced cameras and S Pen.",
    image: "https://images.unsplash.com/photo-1709744722656-9b850470293f?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 18,
    category: "Smartphones",
    brand: "Samsung",
  },
  {
    title: "Samsung Galaxy S24",
    price: 219999,
    description: "Premium Samsung smartphone with a high quality display, powerful performance and advanced camera system.",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 22,
    category: "Smartphones",
    brand: "Samsung",
  },
  {
    title: "Samsung Galaxy A55",
    price: 109999,
    description: "Mid-range Samsung smartphone with a vibrant display, reliable performance and versatile camera system.",
    image: "https://images.unsplash.com/photo-1738830274216-20f63b8a0c02?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 30,
    category: "Smartphones",
    brand: "Samsung",
  },
  {
    title: "Google Pixel 9 Pro",
    price: 259999,
    description: "Google Pixel smartphone with advanced AI features, premium camera system and smooth high-resolution display.",
    image: "https://images.unsplash.com/photo-1724322637761-1fef6ca8c8b3?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 12,
    category: "Smartphones",
    brand: "Google",
  },
  {
    title: "Xiaomi 14",
    price: 179999,
    description: "High-performance Xiaomi smartphone with premium display, advanced cameras and fast charging technology.",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    stock: 25,
    category: "Smartphones",
    brand: "Xiaomi",
  },
  {
    title: "OnePlus 12",
    price: 189999,
    description: "Powerful OnePlus smartphone with high refresh rate display, flagship processor and fast charging.",
    image: "https://images.unsplash.com/photo-1592286927505-1def25115558?auto=format&fit=crop&w=800&q=80",
    stock: 16,
    category: "Smartphones",
    brand: "OnePlus",
  },
  {
    title: "Oppo Reno 12",
    price: 99999,
    description: "Stylish Oppo smartphone with high quality display, modern camera system and fast charging.",
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=800&q=80",
    stock: 20,
    category: "Smartphones",
    brand: "Oppo",
  },{
    title: "Apple iPhone 11",
    price: 89999,
    description: "Apple iPhone 11 with dual camera system, A13 Bionic chip and 6.1-inch Liquid Retina display.",
    image: "https://images.pexels.com/photos/13570143/pexels-photo-13570143.jpeg",
    stock: 20,
    category: "Smartphones",
    brand: "Apple",
  },

  {
    title: "Apple iPhone 11 Pro",
    price: 109999,
    description: "Apple iPhone 11 Pro with triple camera system, A13 Bionic chip and Super Retina XDR display.",
    image: "https://images.pexels.com/photos/13360476/pexels-photo-13360476.jpeg",
    stock: 15,
    category: "Smartphones",
    brand: "Apple",
  },

  {
    title: "Apple iPhone 11 Pro Max",
    price: 119999,
    description: "Apple iPhone 11 Pro Max with triple camera system, A13 Bionic chip and large Super Retina XDR display.",
    image: "https://images.pexels.com/photos/16005007/pexels-photo-16005007.jpeg",
    stock: 12,
    category: "Smartphones",
    brand: "Apple",
  },

  {
    title: "Apple iPhone 12",
    price: 99999,
    description: "Apple iPhone 12 with A14 Bionic chip, dual camera system and Super Retina XDR display.",
    image: "https://images.pexels.com/photos/10914594/pexels-photo-10914594.jpeg",
    stock: 20,
    category: "Smartphones",
    brand: "Apple",
  },

  {
    title: "Apple iPhone 12 Mini",
    price: 89999,
    description: "Compact Apple iPhone 12 Mini with A14 Bionic chip and Super Retina XDR display.",
    image: "https://images.unsplash.com/photo-1609692814858-f7cd2f0afa4f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 15,
    category: "Smartphones",
    brand: "Apple",
  },

  {
    title: "Apple iPhone 12 Pro",
    price: 119999,
    description: "Apple iPhone 12 Pro with Pro camera system, A14 Bionic chip and LiDAR scanner.",
    image: "https://images.unsplash.com/photo-1606041011872-596597976b25?q=80&w=989&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 14,
    category: "Smartphones",
    brand: "Apple",
  },

  {
    title: "Apple iPhone 12 Pro Max",
    price: 139999,
    description: "Apple iPhone 12 Pro Max with advanced Pro camera system and large Super Retina XDR display.",
    image: "https://images.pexels.com/photos/11237829/pexels-photo-11237829.jpeg",
    stock: 12,
    category: "Smartphones",
    brand: "Apple",
  },

  {
    title: "Apple iPhone 13",
    price: 119999,
    description: "Apple iPhone 13 with A15 Bionic chip, advanced dual camera system and Super Retina XDR display.",
    image: "https://images.pexels.com/photos/29004274/pexels-photo-29004274.jpeg",
    stock: 25,
    category: "Smartphones",
    brand: "Apple",
  },

  {
    title: "Apple iPhone 13 Mini",
    price: 109999,
    description: "Compact Apple iPhone 13 Mini with A15 Bionic chip and advanced dual camera system.",
    image: "https://images.pexels.com/photos/18403789/pexels-photo-18403789.jpeg",
    stock: 18,
    category: "Smartphones",
    brand: "Apple",
  },

  {
    title: "Apple iPhone 13 Pro",
    price: 149999,
    description: "Apple iPhone 13 Pro with Pro camera system, A15 Bionic chip and ProMotion display.",
    image: "https://images.pexels.com/photos/29020349/pexels-photo-29020349.jpeg",
    stock: 15,
    category: "Smartphones",
    brand: "Apple",
  },

  {
    title: "Apple iPhone 13 Pro Max",
    price: 169999,
    description: "Apple iPhone 13 Pro Max with Pro camera system, A15 Bionic chip and large ProMotion display.",
    image: "https://images.pexels.com/photos/20291795/pexels-photo-20291795.jpeg",
    stock: 12,
    category: "Smartphones",
    brand: "Apple",
  },

  {
    title: "Apple iPhone 14",
    price: 139999,
    description: "Apple iPhone 14 with A15 Bionic chip, advanced dual camera system and crash detection.",
    image: "https://images.pexels.com/photos/13341771/pexels-photo-13341771.jpeg",
    stock: 25,
    category: "Smartphones",
    brand: "Apple",
  },

  {
    title: "Apple iPhone 14 Plus",
    price: 159999,
    description: "Apple iPhone 14 Plus with a large display, A15 Bionic chip and advanced dual camera system.",
    image: "https://images.pexels.com/photos/16333805/pexels-photo-16333805.jpeg",
    stock: 20,
    category: "Smartphones",
    brand: "Apple",
  },

  {
    title: "Apple iPhone 14 Pro",
    price: 189999,
    description: "Apple iPhone 14 Pro with Dynamic Island, A16 Bionic chip and advanced Pro camera system.",
    image: "https://images.pexels.com/photos/35037580/pexels-photo-35037580.jpeg",
    stock: 15,
    category: "Smartphones",
    brand: "Apple",
  },

  {
    title: "Apple iPhone 14 Pro Max",
    price: 219999,
    description: "Apple iPhone 14 Pro Max with Dynamic Island, A16 Bionic chip and advanced Pro camera system.",
    image: "https://images.pexels.com/photos/32141312/pexels-photo-32141312.jpeg",
    stock: 12,
    category: "Smartphones",
    brand: "Apple",
  },

  {
    title: "Apple iPhone 15",
    price: 179999,
    description: "Apple iPhone 15 with A16 Bionic chip, USB-C and advanced dual camera system.",
    image: "https://images.pexels.com/photos/34018284/pexels-photo-34018284.jpeg",
    stock: 25,
    category: "Smartphones",
    brand: "Apple",
  },

  {
    title: "Apple iPhone 15 Plus",
    price: 199999,
    description: "Apple iPhone 15 Plus with large display, A16 Bionic chip and USB-C connectivity.",
    image: "https://images.pexels.com/photos/18525573/pexels-photo-18525573.jpeg",
    stock: 20,
    category: "Smartphones",
    brand: "Apple",
  },

  {
    title: "Apple iPhone 15 Pro",
    price: 229999,
    description: "Apple iPhone 15 Pro with titanium design, A17 Pro chip and Pro camera system.",
    image: "https://images.pexels.com/photos/27668946/pexels-photo-27668946.jpeg",
    stock: 15,
    category: "Smartphones",
    brand: "Apple",
  },

  {
    title: "Apple iPhone 15 Pro Max",
    price: 259999,
    description: "Apple iPhone 15 Pro Max with titanium design, A17 Pro chip and advanced camera system.",
    image: "https://images.pexels.com/photos/15822008/pexels-photo-15822008.jpeg",
    stock: 12,
    category: "Smartphones",
    brand: "Apple",
  },

  {
    title: "Apple iPhone 16",
    price: 229999,
    description: "Apple iPhone 16 with A18 chip, advanced camera system and USB-C connectivity.",
    image: "https://images.pexels.com/photos/32141312/pexels-photo-32141312.jpeg",
    stock: 25,
    category: "Smartphones",
    brand: "Apple",
  },

  {
    title: "Apple iPhone 16 Plus",
    price: 249999,
    description: "Apple iPhone 16 Plus with large display, A18 chip and advanced camera system.",
    image: "https://images.pexels.com/photos/33460783/pexels-photo-33460783.jpeg",
    stock: 20,
    category: "Smartphones",
    brand: "Apple",
  },

  {
    title: "Apple iPhone 16 Pro",
    price: 299999,
    description: "Apple iPhone 16 Pro with titanium design, A18 Pro chip and advanced Pro camera system.",
    image: "https://images.pexels.com/photos/14121456/pexels-photo-14121456.jpeg",
    stock: 15,
    category: "Smartphones",
    brand: "Apple",
  },

  {
    title: "Apple iPhone 16 Pro Max",
    price: 329999,
    description: "Apple iPhone 16 Pro Max with titanium design, A18 Pro chip and advanced Pro camera system.",
    image: "https://images.pexels.com/photos/29342578/pexels-photo-29342578.jpeg",
    stock: 12,
    category: "Smartphones",
    brand: "Apple",
  },

  {
    title: "Apple iPhone 17",
    price: 259999,
    description: "Apple iPhone 17 with modern design, powerful Apple silicon and advanced camera features.",
    image: "https://images.pexels.com/photos/36503099/pexels-photo-36503099.jpeg",
    stock: 20,
    category: "Smartphones",
    brand: "Apple",
  },
    {
    title: "Apple iPhone 17 Pro",
    price: 329999,
    description: "Apple iPhone 17 Pro with premium design, powerful performance and advanced Pro camera features.",
    image: "https://images.pexels.com/photos/34624326/pexels-photo-34624326.jpeg",
    stock: 15,
    category: "Smartphones",
    brand: "Apple",
  },

  {
    title: "Apple iPhone 17 Pro Max",
    price: 369999,
    description: "Apple iPhone 17 Pro Max with premium design, powerful performance and advanced professional camera features.",
    image: "https://images.unsplash.com/photo-1758578938566-c986f710feb6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dn",
    stock: 10,
    category: "Smartphones",
    brand: "Apple",
  },

  // =========================
  // LAPTOPS
  // =========================
  {
    title: "MacBook Air M3",
    price: 329999,
    description: "Slim Apple laptop powered by the M3 chip with excellent battery life and a high-resolution display.",
    image: "https://images.pexels.com/photos/19281840/pexels-photo-19281840.jpeg",
    stock: 10,
    category: "Laptops",
    brand: "Apple",
  },
  {
    title: "MacBook Pro M3",
    price: 499999,
    description: "Professional Apple laptop with M3 performance, premium display and excellent productivity capabilities.",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
    stock: 8,
    category: "Laptops",
    brand: "Apple",
  },
  {
    title: "Dell XPS 15",
    price: 399999,
    description: "Premium Dell laptop designed for productivity with powerful hardware and a high quality display.",
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=800&q=80",
    stock: 12,
    category: "Laptops",
    brand: "Dell",
  },
  {
    title: "Dell Inspiron 15",
    price: 179999,
    description: "Reliable everyday laptop suitable for study, office work, browsing and entertainment.",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
    stock: 18,
    category: "Laptops",
    brand: "Dell",
  },
  {
    title: "HP Spectre x360",
    price: 359999,
    description: "Premium convertible HP laptop with touchscreen display, powerful performance and flexible design.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    stock: 9,
    category: "Laptops",
    brand: "HP",
  },
  {
    title: "HP Pavilion 15",
    price: 169999,
    description: "Affordable HP laptop for everyday computing, study, office work and entertainment.",
    image: "https://images.unsplash.com/photo-1504707748692-419802cf939d?auto=format&fit=crop&w=800&q=80",
    stock: 20,
    category: "Laptops",
    brand: "HP",
  },
  {
    title: "Lenovo ThinkPad X1 Carbon",
    price: 379999,
    description: "Business-focused Lenovo laptop with durable design, excellent keyboard and strong productivity performance.",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
    stock: 11,
    category: "Laptops",
    brand: "Lenovo",
  },
  {
    title: "Lenovo IdeaPad Slim 5",
    price: 179999,
    description: "Slim Lenovo laptop offering balanced performance for students, professionals and everyday users.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
    stock: 16,
    category: "Laptops",
    brand: "Lenovo",
  },
  {
    title: "ASUS ROG Strix G16",
    price: 389999,
    description: "Gaming laptop with powerful graphics, high refresh rate display and performance-focused hardware.",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
    stock: 7,
    category: "Laptops",
    brand: "ASUS",
  },
  {
    title: "Acer Aspire 5",
    price: 149999,
    description: "Practical Acer laptop for office work, study, browsing and everyday computing.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    stock: 21,
    category: "Laptops",
    brand: "Acer",
  },

  // =========================
  // TABLETS
  // =========================
  {
    title: "iPad Pro",
    price: 299999,
    description: "Premium Apple tablet with a high-resolution display, powerful performance and support for creative workflows.",
    image: "https://images.unsplash.com/photo-1662731340335-e5485bd50268?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 14,
    category: "Tablets",
    brand: "Apple",
  },
  {
    title: "iPad Air",
    price: 199999,
    description: "Lightweight Apple tablet offering strong performance, excellent display quality and versatile productivity features.",
    image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=800&q=80",
    stock: 18,
    category: "Tablets",
    brand: "Apple",
  },
  {
    title: "Samsung Galaxy Tab S9",
    price: 179999,
    description: "Premium Samsung tablet with vibrant display, powerful processor and productivity-focused features.",
    image: "https://images.unsplash.com/photo-1655803258287-cd9e74fb60cf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 15,
    category: "Tablets",
    brand: "Samsung",
  },
  {
    title: "Xiaomi Pad 6",
    price: 99999,
    description: "Affordable Xiaomi tablet with a smooth display, strong performance and modern design.",
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80",
    stock: 20,
    category: "Tablets",
    brand: "Xiaomi",
  },
  {
    title: "Lenovo Tab P12",
    price: 89999,
    description: "Large Lenovo tablet suitable for entertainment, study and everyday productivity.",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    stock: 13,
    category: "Tablets",
    brand: "Lenovo",
  },

  // =========================
  // HEADPHONES / EARBUDS
  // =========================
  {
    title: "AirPods Pro 2",
    price: 79999,
    description: "Apple wireless earbuds with active noise cancellation, transparency mode and premium sound quality.",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80",
    stock: 30,
    category: "Headphones",
    brand: "Apple",
  },
  {
    title: "AirPods 3",
    price: 54999,
    description: "Comfortable Apple wireless earbuds with spatial audio and convenient charging case.",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=80",
    stock: 35,
    category: "Headphones",
    brand: "Apple",
  },
  {
    title: "Sony WH-1000XM5",
    price: 89999,
    description: "Premium Sony wireless headphones with advanced noise cancellation and immersive audio.",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
    stock: 18,
    category: "Headphones",
    brand: "Sony",
  },
  {
    title: "Sony WF-1000XM5",
    price: 69999,
    description: "Premium Sony true wireless earbuds with excellent noise cancellation and detailed sound.",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
    stock: 20,
    category: "Headphones",
    brand: "Sony",
  },
  {
    title: "Samsung Galaxy Buds 3 Pro",
    price: 49999,
    description: "Samsung premium wireless earbuds with active noise cancellation and high-quality audio.",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
    stock: 22,
    category: "Headphones",
    brand: "Samsung",
  },
  {
    title: "JBL Tune 770NC",
    price: 29999,
    description: "Wireless JBL headphones with active noise cancellation, comfortable design and powerful sound.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    stock: 28,
    category: "Headphones",
    brand: "JBL",
  },
  {
    title: "Bose QuietComfort",
    price: 74999,
    description: "Comfortable Bose wireless headphones designed for quiet listening and long sessions.",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80",
    stock: 15,
    category: "Headphones",
    brand: "Bose",
  },
  {
    title: "Anker Soundcore Q45",
    price: 24999,
    description: "Affordable wireless headphones with noise cancellation, long battery life and detailed audio.",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80",
    stock: 25,
    category: "Headphones",
    brand: "Anker",
  },

  // =========================
  // SMART WATCHES
  // =========================
  {
    title: "Apple Watch Series 9",
    price: 89999,
    description: "Apple smartwatch with health tracking, fitness features, notifications and a bright display.",
    image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=800&q=80",
    stock: 18,
    category: "Smart Watches",
    brand: "Apple",
  },
  {
    title: "Apple Watch Ultra 2",
    price: 149999,
    description: "Rugged Apple smartwatch designed for fitness, outdoor activities and advanced health tracking.",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=800&q=80",
    stock: 10,
    category: "Smart Watches",
    brand: "Apple",
  },
  {
    title: "Samsung Galaxy Watch 6",
    price: 69999,
    description: "Samsung smartwatch with fitness tracking, health monitoring and a premium circular display.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    stock: 16,
    category: "Smart Watches",
    brand: "Samsung",
  },
  {
    title: "Xiaomi Watch 2 Pro",
    price: 59999,
    description: "Xiaomi smartwatch with health features, fitness tracking and a premium design.",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80",
    stock: 14,
    category: "Smart Watches",
    brand: "Xiaomi",
  },
  {
    title: "Huawei Watch GT 4",
    price: 54999,
    description: "Huawei smartwatch with long battery life, fitness tracking and stylish design.",
    image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=800&q=80",
    stock: 19,
    category: "Smart Watches",
    brand: "Huawei",
  },

  // =========================
  // CAMERAS
  // =========================
  {
    title: "Sony Alpha A7 IV",
    price: 599999,
    description: "Full-frame mirrorless camera designed for professional photography and high-quality video production.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    stock: 6,
    category: "Cameras",
    brand: "Sony",
  },
  {
    title: "Canon EOS R6",
    price: 549999,
    description: "Professional mirrorless camera with full-frame sensor, fast autofocus and advanced video capabilities.",
    image: "https://plus.unsplash.com/premium_photo-1667538960183-82690c60a2a5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 5,
    category: "Cameras",
    brand: "Canon",
  },
  {
    title: "Canon EOS R50",
    price: 249999,
    description: "Compact mirrorless camera suitable for creators, photography enthusiasts and everyday content production.",
    image: "https://images.unsplash.com/photo-1599664223843-9349c75196bc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 9,
    category: "Cameras",
    brand: "Canon",
  },
  {
    title: "Nikon Z6 II",
    price: 499999,
    description: "Full-frame Nikon mirrorless camera with strong image quality, fast autofocus and excellent video support.",
    image: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=800&q=80",
    stock: 5,
    category: "Cameras",
    brand: "Nikon",
  },
  {
    title: "GoPro HERO 12",
    price: 119999,
    description: "Compact action camera designed for adventure recording with high-resolution video and rugged construction.",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80",
    stock: 13,
    category: "Cameras",
    brand: "GoPro",
  },

  // =========================
  // MONITORS
  // =========================
  {
    title: "Dell UltraSharp 27",
    price: 119999,
    description: "Professional 27-inch monitor designed for productivity, creative work and accurate viewing.",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 10,
    category: "Monitors",
    brand: "Dell",
  },
  {
    title: "LG UltraGear 27",
    price: 99999,
    description: "Gaming monitor with fast refresh rate, responsive performance and immersive image quality.",
    image: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?auto=format&fit=crop&w=800&q=80",
    stock: 12,
    category: "Monitors",
    brand: "LG",
  },
  {
    title: "Samsung Odyssey G5",
    price: 109999,
    description: "Curved gaming monitor designed for immersive gaming with smooth motion and high contrast.",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80",
    stock: 9,
    category: "Monitors",
    brand: "Samsung",
  },
  {
    title: "ASUS ProArt 27",
    price: 139999,
    description: "Professional monitor designed for creators with high-quality color reproduction and detailed visuals.",
    image: "https://images.pexels.com/photos/15717262/pexels-photo-15717262.jpeg",
    stock: 7,
    category: "Monitors",
    brand: "ASUS",
  },
  {
    title: "Acer Nitro 27",
    price: 89999,
    description: "Gaming-focused Acer monitor with smooth performance and a large high-resolution display.",
    image: "https://images.unsplash.com/photo-1761954090578-f440c37ac4eb?q=80&w=974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 11,
    category: "Monitors",
    brand: "Acer",
  },

  // =========================
  // KEYBOARDS
  // =========================
  {
    title: "Logitech MX Keys",
    price: 29999,
    description: "Premium wireless keyboard designed for comfortable and productive typing.",
    image: "https://images.unsplash.com/photo-1623371748986-9a829391f7c9?q=80&w=1251&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 25,
    category: "Keyboards",
    brand: "Logitech",
  },
  {
    title: "Logitech G Pro Keyboard",
    price: 39999,
    description: "Compact mechanical gaming keyboard designed for competitive gaming and fast response.",
    image: "https://images.unsplash.com/photo-1677245359931-0bd5993ad965?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 15,
    category: "Keyboards",
    brand: "Logitech",
  },
  {
    title: "Razer BlackWidow",
    price: 44999,
    description: "Mechanical gaming keyboard with responsive switches and gaming-focused features.",
    image: "https://images.unsplash.com/photo-1636487658637-63aff6f85e56?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 12,
    category: "Keyboards",
    brand: "Razer",
  },
  {
    title: "Keychron K2",
    price: 24999,
    description: "Compact wireless mechanical keyboard suitable for work, coding and everyday use.",
    image: "https://images.unsplash.com/photo-1637243218672-d338945efdf7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 20,
    category: "Keyboards",
    brand: "Keychron",
  },
  {
    title: "HP Wireless Keyboard",
    price: 7999,
    description: "Simple wireless keyboard designed for everyday office and home computing.",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    stock: 30,
    category: "Keyboards",
    brand: "HP",
  },

  // =========================
  // MICE
  // =========================
  {
    title: "Logitech MX Master 3S",
    price: 29999,
    description: "Advanced wireless productivity mouse with ergonomic design and precise tracking.",
    image: "https://images.pexels.com/photos/7006946/pexels-photo-7006946.jpeg",
    stock: 20,
    category: "Mice",
    brand: "Logitech",
  },
  {
    title: "Logitech G502 Hero",
    price: 19999,
    description: "Gaming mouse with high precision tracking, customizable buttons and ergonomic design.",
    image: "https://images.unsplash.com/photo-1618499893452-942141785a2a?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 18,
    category: "Mice",
    brand: "Logitech",
  },
  {
    title: "Razer DeathAdder V2",
    price: 16999,
    description: "Popular gaming mouse with ergonomic shape, accurate tracking and responsive buttons.",
    image: "https://images.unsplash.com/photo-1725272408390-71281ca0bdfd?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 22,
    category: "Mice",
    brand: "Razer",
  },
  {
    title: "HP Wireless Mouse",
    price: 4999,
    description: "Compact wireless mouse designed for everyday office and home use.",
    image: "https://images.pexels.com/photos/6073700/pexels-photo-6073700.jpeg",
    stock: 35,
    category: "Mice",
    brand: "HP",
  },
  {
    title: "Dell Wireless Mouse",
    price: 5999,
    description: "Reliable wireless mouse with comfortable design for daily computer use.",
    image: "https://images.unsplash.com/photo-1563297007-0686b7003af7?auto=format&fit=crop&w=800&q=80",
    stock: 28,
    category: "Mice",
    brand: "Dell",
  },

  // =========================
  // SPEAKERS
  // =========================
  {
    title: "JBL Charge 5",
    price: 34999,
    description: "Portable Bluetooth speaker with powerful sound, durable construction and long battery life.",
    image: "https://images.unsplash.com/photo-1693446967879-0dbea1ddde72?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 18,
    category: "Speakers",
    brand: "JBL",
  },
  {
    title: "Sony SRS-XB33",
    price: 29999,
    description: "Portable Sony Bluetooth speaker offering rich sound and strong bass for entertainment.",
    image: "https://images.unsplash.com/photo-1617766376513-148515e5d3b8?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 15,
    category: "Speakers",
    brand: "Sony",
  },
  {
    title: "Bose SoundLink",
    price: 39999,
    description: "Compact premium Bluetooth speaker with clear audio and portable design.",
    image: "https://images.unsplash.com/photo-1567593179124-7835e19fe1e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 12,
    category: "Speakers",
    brand: "Bose",
  },
  {
    title: "Anker Soundcore 3",
    price: 12999,
    description: "Affordable portable Bluetooth speaker with strong battery life and balanced sound.",
    image: "https://images.unsplash.com/photo-1632156752398-2b2cb4e6c907?q=80&w=726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 25,
    category: "Speakers",
    brand: "Anker",
  },

  // =========================
  // GAMING
  // =========================
  {
    title: "PlayStation 5",
    price: 179999,
    description: "Next-generation gaming console with high-speed storage, powerful graphics and immersive gameplay.",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80",
    stock: 8,
    category: "Gaming",
    brand: "Sony",
  },
  {
    title: "Xbox Series X",
    price: 169999,
    description: "Powerful gaming console designed for high-resolution gaming and fast loading performance.",
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=800&q=80",
    stock: 7,
    category: "Gaming",
    brand: "Microsoft",
  },
  {
    title: "Nintendo Switch OLED",
    price: 99999,
    description: "Hybrid gaming console with an OLED display and flexible handheld and docked gameplay.",
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=800&q=80",
    stock: 12,
    category: "Gaming",
    brand: "Nintendo",
  },
  {
    title: "Razer Gaming Headset",
    price: 22999,
    description: "Gaming headset designed for immersive sound, clear communication and comfortable long sessions.",
    image: "https://images.unsplash.com/photo-1636487658596-daa25387d112?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 16,
    category: "Gaming",
    brand: "Razer",
  },
  {
    title: "Logitech G29 Racing Wheel",
    price: 69999,
    description: "Gaming racing wheel with responsive controls and realistic driving experience.",
    image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=800&q=80",
    stock: 6,
    category: "Gaming",
    brand: "Logitech",
  },

  // =========================
  // POWER BANKS
  // =========================
  {
    title: "Anker PowerCore 20000",
    price: 9999,
    description: "High-capacity portable power bank suitable for smartphones, tablets and everyday charging.",
    image: "https://images.unsplash.com/photo-1617975316514-69cd7e16c2a4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 35,
    category: "Power Banks",
    brand: "Anker",
  },
  {
    title: "Baseus 20000mAh Power Bank",
    price: 7999,
    description: "Portable high-capacity power bank with convenient charging support for mobile devices.",
    image: "https://images.unsplash.com/photo-1763161786687-43d0c9babdf0?q=80&w=431&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 30,
    category: "Power Banks",
    brand: "Baseus",
  },
  {
    title: "Xiaomi 10000mAh Power Bank",
    price: 4999,
    description: "Compact Xiaomi power bank designed for convenient everyday mobile charging.",
    image: "https://images.unsplash.com/photo-1772683709276-47c355c82b85?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 40,
    category: "Power Banks",
    brand: "Xiaomi",
  },

  // =========================
  // CHARGERS
  // =========================
  {
    title: "Apple 20W USB-C Charger",
    price: 6999,
    description: "Compact Apple USB-C power adapter designed for fast and convenient device charging.",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
    stock: 40,
    category: "Chargers",
    brand: "Apple",
  },
  {
    title: "Samsung 45W Fast Charger",
    price: 7999,
    description: "Samsung fast charging adapter designed for compatible smartphones and other devices.",
    image: "https://images.unsplash.com/photo-1744697311586-52d32d9c1974?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 30,
    category: "Chargers",
    brand: "Samsung",
  },
  {
    title: "Anker 65W GaN Charger",
    price: 11999,
    description: "Compact GaN charger capable of powering smartphones, tablets and compatible laptops.",
    image: "https://images.pexels.com/photos/30708285/pexels-photo-30708285.jpeg",
    stock: 22,
    category: "Chargers",
    brand: "Anker",
  },

  // =========================
  // STORAGE
  // =========================
  {
    title: "Samsung T7 1TB SSD",
    price: 29999,
    description: "Portable high-speed SSD offering fast data transfer and reliable external storage.",
    image: "https://images.unsplash.com/photo-1659540190941-66606ec13ca6?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 18,
    category: "Storage",
    brand: "Samsung",
  },
  {
    title: "SanDisk 1TB Portable SSD",
    price: 27999,
    description: "Compact portable SSD providing fast and convenient storage for files and media.",
    image: "https://images.unsplash.com/photo-1779896412291-dd291eaefd4b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 20,
    category: "Storage",
    brand: "SanDisk",
  },
  {
    title: "Kingston 512GB SSD",
    price: 13999,
    description: "Reliable internal SSD designed to improve storage capacity and system responsiveness.",
    image: "https://images.unsplash.com/photo-1758577675588-c5bbbbbf8e97?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 25,
    category: "Storage",
    brand: "Kingston",
  },
  {
    title: "WD 2TB External HDD",
    price: 18999,
    description: "Large-capacity external hard drive suitable for backups, documents and media storage.",
    image: "https://images.pexels.com/photos/6429162/pexels-photo-6429162.jpeg",
    stock: 16,
    category: "Storage",
    brand: "Western Digital",
  },

  // =========================
  // NETWORKING
  // =========================
  {
    title: "TP-Link Archer AX55",
    price: 24999,
    description: "Modern Wi-Fi router designed for fast wireless connectivity and reliable home networking.",
    image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?auto=format&fit=crop&w=800&q=80",
    stock: 14,
    category: "Networking",
    brand: "TP-Link",
  },
  {
    title: "TP-Link Archer C6",
    price: 9999,
    description: "Affordable dual-band wireless router suitable for home and small office networking.",
    image: "https://images.pexels.com/photos/32698413/pexels-photo-32698413.jpeg",
    stock: 25,
    category: "Networking",
    brand: "TP-Link",
  },
  {
    title: "Netgear Nighthawk Router",
    price: 39999,
    description: "High-performance wireless router designed for demanding home networks and gaming.",
    image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?auto=format&fit=crop&w=800&q=80",
    stock: 9,
    category: "Networking",
    brand: "Netgear",
  },

  // =========================
  // PRINTERS
  // =========================
  {
    title: "HP LaserJet Pro",
    price: 59999,
    description: "Efficient laser printer designed for fast and reliable document printing at home or office.",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80",
    stock: 8,
    category: "Printers",
    brand: "HP",
  },
  {
    title: "Canon PIXMA Printer",
    price: 29999,
    description: "Versatile Canon printer suitable for everyday documents, photos and home printing.",
    image: "https://images.unsplash.com/photo-1780854352631-8bd370a2b03d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 12,
    category: "Printers",
    brand: "Canon",
  },
  {
    title: "Epson EcoTank Printer",
    price: 49999,
    description: "High-efficiency Epson printer designed for economical everyday printing and larger workloads.",
    image: "https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 10,
    category: "Printers",
    brand: "Epson",
  },

  // =========================
  // TVS
  // =========================
  {
    title: "Samsung 55 Inch 4K TV",
    price: 189999,
    description: "Large Samsung 4K smart TV with vibrant visuals, smart features and immersive entertainment.",
    image: "https://images.pexels.com/photos/13348768/pexels-photo-13348768.jpeg",
    stock: 8,
    category: "TVs",
    brand: "Samsung",
  },
  {
    title: "LG 55 Inch OLED TV",
    price: 229999,
    description: "Premium LG OLED television delivering rich contrast, detailed images and smart TV functionality.",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
    stock: 6,
    category: "TVs",
    brand: "LG",
  },
  {
    title: "Sony Bravia 55 Inch",
    price: 249999,
    description: "Sony smart television with high-quality picture processing, 4K resolution and modern entertainment features.",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
    stock: 5,
    category: "TVs",
    brand: "Sony",
  },
  {
    title: "TCL 50 Inch 4K TV",
    price: 109999,
    description: "Affordable TCL 4K smart TV offering large-screen entertainment and modern smart features.",
    image: "https://images.pexels.com/photos/28195649/pexels-photo-28195649.jpeg",
    stock: 10,
    category: "TVs",
    brand: "TCL",
  },

  // =========================
  // ACCESSORIES
  // =========================
  {
    title: "USB-C 7-in-1 Hub",
    price: 8999,
    description: "Multi-port USB-C hub providing convenient connectivity for laptops and tablets.",
    image: "https://images.unsplash.com/photo-1785175862000-5e6051657603?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 30,
    category: "Accessories",
    brand: "Anker",
  },
  {
    title: "HDMI 2.1 Cable",
    price: 3999,
    description: "High-speed HDMI cable designed for compatible TVs, monitors, consoles and other devices.",
    image: "https://plus.unsplash.com/premium_photo-1759760985060-c70501a22f33?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 45,
    category: "Accessories",
    brand: "UGREEN",
  },
  {
    title: "USB-C to USB-C Cable",
    price: 2499,
    description: "Durable USB-C cable suitable for charging and data transfer between compatible devices.",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
    stock: 50,
    category: "Accessories",
    brand: "Anker",
  },
  {
    title: "Laptop Cooling Pad",
    price: 5999,
    description: "Cooling pad designed to improve airflow around laptops during extended use.",
    image: "https://images.unsplash.com/photo-1663873148245-df991e1717ea?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 20,
    category: "Accessories",
    brand: "Cooler Master",
  },
  {
    title: "Webcam Full HD",
    price: 8999,
    description: "Full HD webcam suitable for video calls, online classes, streaming and content creation.",
    image: "https://images.unsplash.com/photo-1623949556303-b0d17d198863?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 18,
    category: "Accessories",
    brand: "Logitech",
  },
];

async function seedProducts() {
  try {
    await connectDB();

    let inserted = 0;
    let updated = 0;

    for (const product of products) {
      const result = await Product.updateOne(
        {
          title: product.title,
          brand: product.brand,
        },
        {
          $set: product,
        },
        {
          upsert: true,
        }
      );

      if (result.upsertedCount > 0) {
        inserted++;
      } else if (result.modifiedCount > 0) {
        updated++;
      }
    }

    console.log("=================================");
    console.log("Product seeding completed");
    console.log(`New products: ${inserted}`);
    console.log(`Updated products: ${updated}`);
    console.log(`Seed products: ${products.length}`);
    console.log("=================================");

    process.exit(0);
  } catch (error) {
    console.error("Seed error:", error);
    process.exit(1);
  }
}

seedProducts();