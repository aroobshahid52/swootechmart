// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";

// type Order = {
//   _id: string;
//   userId?: string;
//   products?: {
//     title?: string;
//     name?: string;
//     quantity?: number;
//     price?: number;
//   }[];
//   totalPrice?: number;
//   status?: string;
//   createdAt?: string;
// };

// const statuses = [
//   "Pending",
//   "Processing",
//   "Shipped",
//   "Delivered",
//   "Cancelled",
// ];

// export default function AdminOrdersPage() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getOrders();
//   }, []);

//   async function getOrders() {
//     try {
//       const response = await fetch("/api/orders");

//       if (!response.ok) {
//         throw new Error("Orders not found");
//       }

//       const data = await response.json();
//       setOrders(data);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function changeStatus(
//     orderId: string,
//     newStatus: string
//   ) {
//     try {
//       const response = await fetch(
//         `/api/orders/${orderId}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             status: newStatus,
//           }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Status update failed");
//       }

//       const updatedOrder = await response.json();

//       setOrders((oldOrders) =>
//         oldOrders.map((order) =>
//           order._id === orderId
//             ? updatedOrder
//             : order
//         )
//       );
//     } catch (error) {
//       console.log(error);
//       alert("Status update nahi ho saka.");
//     }
//   }

//   async function deleteOrder(orderId: string) {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this order?"
//     );

//     if (!confirmDelete) {
//       return;
//     }

//     try {
//       const response = await fetch(
//         `/api/orders/${orderId}`,
//         {
//           method: "DELETE",
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Delete failed");
//       }

//       setOrders((oldOrders) =>
//         oldOrders.filter(
//           (order) => order._id !== orderId
//         )
//       );
//     } catch (error) {
//       console.log(error);
//       alert("Order delete nahi ho saka.");
//     }
//   }

//   function getStatusStyle(status: string) {
//     switch (status.toLowerCase()) {
//       case "pending":
//         return "bg-yellow-50 text-yellow-700 border-yellow-200";

//       case "processing":
//         return "bg-blue-50 text-blue-700 border-blue-200";

//       case "shipped":
//         return "bg-purple-50 text-purple-700 border-purple-200";

//       case "delivered":
//         return "bg-green-50 text-green-700 border-green-200";

//       case "cancelled":
//         return "bg-red-50 text-red-700 border-red-200";

//       default:
//         return "bg-gray-50 text-gray-700 border-gray-200";
//     }
//   }

//   const pendingCount = orders.filter(
//     (order) => order.status === "Pending"
//   ).length;

//   const processingCount = orders.filter(
//     (order) => order.status === "Processing"
//   ).length;

//   const shippedCount = orders.filter(
//     (order) => order.status === "Shipped"
//   ).length;

//   const deliveredCount = orders.filter(
//     (order) => order.status === "Delivered"
//   ).length;

//   const cancelledCount = orders.filter(
//     (order) => order.status === "Cancelled"
//   ).length;

//   if (loading) {
//     return (
//       <main className="min-h-screen bg-gray-50 p-4 sm:p-6">
//         <div className="mx-auto max-w-7xl">
//           <div className="flex min-h-[300px] items-center justify-center rounded-2xl bg-white shadow-sm">
//             <div className="text-center">
//               <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-green-600"></div>

//               <p className="text-sm font-medium text-gray-500">
//                 Loading orders...
//               </p>
//             </div>
//           </div>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
//       <div className="mx-auto max-w-7xl">

//         {/* Header */}

//         <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

//           <div>
//             <p className="mb-1 text-xs font-bold uppercase tracking-wider text-green-600">
//               Admin Dashboard
//             </p>

//             <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
//               Orders Management
//             </h1>

//             <p className="mt-1 text-sm text-gray-500">
//               View and manage all customer orders.
//             </p>
//           </div>

//          <Link 
//   href="/admin/dashboard"
//   className="inline-flex w-fit items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-green-500 hover:text-green-600"
// >
//   <span>←</span>
//   Dashboard
// </Link>

//         </div>

//         {/* Stats */}

//         <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-5">

//           {/* Pending */}

//           <div className="rounded-xl border border-yellow-100 bg-white p-5 shadow-sm">
//             <p className="text-sm font-medium text-gray-500">
//               Pending
//             </p>

//             <p className="mt-2 text-3xl font-bold text-yellow-600">
//               {pendingCount}
//             </p>
//           </div>

//           {/* Processing */}

//           <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
//             <p className="text-sm font-medium text-gray-500">
//               Processing
//             </p>

//             <p className="mt-2 text-3xl font-bold text-blue-600">
//               {processingCount}
//             </p>
//           </div>

//           {/* Shipped */}

//           <div className="rounded-xl border border-purple-100 bg-white p-5 shadow-sm">
//             <p className="text-sm font-medium text-gray-500">
//               Shipped
//             </p>

//             <p className="mt-2 text-3xl font-bold text-purple-600">
//               {shippedCount}
//             </p>
//           </div>

//           {/* Delivered */}

//           <div className="rounded-xl border border-green-100 bg-white p-5 shadow-sm">
//             <p className="text-sm font-medium text-gray-500">
//               Delivered
//             </p>

//             <p className="mt-2 text-3xl font-bold text-green-600">
//               {deliveredCount}
//             </p>
//           </div>

//           {/* Cancelled */}

//           <div className="rounded-xl border border-red-100 bg-white p-5 shadow-sm">
//             <p className="text-sm font-medium text-gray-500">
//               Cancelled
//             </p>

//             <p className="mt-2 text-3xl font-bold text-red-600">
//               {cancelledCount}
//             </p>
//           </div>

//         </div>

//         {/* No Orders */}

//         {orders.length === 0 ? (
//           <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm">

//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
//               <span className="text-2xl">
//                 📦
//               </span>
//             </div>

//             <h2 className="mt-5 text-lg font-bold text-gray-900">
//               No Orders Found
//             </h2>

//             <p className="mt-2 text-sm text-gray-500">
//               Customer orders will appear here when they place an order.
//             </p>

//           </div>
//         ) : (

//           /* Orders */

//           <div className="space-y-5">

//             {orders.map((order) => (

//               <div
//                 key={order._id}
//                 className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
//               >

//                 {/* Order Header */}

//                 <div className="border-b border-gray-100 px-5 py-5 sm:px-6">

//                   <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

//                     <div>

//                       <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
//                         Order ID
//                       </p>

//                       <p className="mt-1 break-all text-sm font-bold text-gray-900">
//                         #{order._id}
//                       </p>

//                       {order.createdAt && (
//                         <p className="mt-1 text-xs text-gray-400">
//                           {new Date(
//                             order.createdAt
//                           ).toLocaleDateString(
//                             "en-US",
//                             {
//                               year: "numeric",
//                               month: "long",
//                               day: "numeric",
//                             }
//                           )}
//                         </p>
//                       )}

//                     </div>

//                     <div className="flex flex-wrap items-center gap-3">

//                       {/* Status Badge */}

//                       <span
//                         className={`rounded-full border px-4 py-2 text-xs font-bold ${getStatusStyle(
//                           order.status || "Pending"
//                         )}`}
//                       >
//                         {order.status || "Pending"}
//                       </span>

//                       {/* Total */}

//                       <div className="rounded-lg bg-gray-50 px-4 py-2 text-right">
//                         <p className="text-[11px] text-gray-400">
//                           Total
//                         </p>

//                         <p className="text-lg font-bold text-gray-900">
//                           $
//                           {Number(
//                             order.totalPrice || 0
//                           ).toFixed(2)}
//                         </p>
//                       </div>

//                     </div>

//                   </div>

//                 </div>

//                 {/* Products */}

//                 <div className="px-5 py-5 sm:px-6">

//                   <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-400">
//                     Ordered Products
//                   </h2>

//                   <div className="space-y-3">

//                     {order.products?.map(
//                       (product, index) => (

//                         <div
//                           key={index}
//                           className="flex items-center justify-between gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4"
//                         >

//                           <div className="min-w-0">

//                             <p className="truncate text-sm font-semibold text-gray-900">
//                               {product.title ||
//                                 product.name ||
//                                 "Product"}
//                             </p>

//                             <p className="mt-1 text-xs text-gray-500">
//                               Quantity:{" "}
//                               {product.quantity || 1}
//                             </p>

//                           </div>

//                           <p className="shrink-0 text-sm font-bold text-gray-900">
//                             $
//                             {Number(
//                               product.price || 0
//                             ).toFixed(2)}
//                           </p>

//                         </div>

//                       )
//                     )}

//                   </div>

//                 </div>

//                 {/* Controls */}

//                 <div className="flex flex-col gap-4 border-t border-gray-100 bg-gray-50 px-5 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">

//                   <div className="flex flex-col gap-2 sm:flex-row sm:items-center">

//                     <label className="text-sm font-semibold text-gray-700">
//                       Update Status
//                     </label>

//                     <select
//                       value={order.status || "Pending"}
//                       onChange={(e) =>
//                         changeStatus(
//                           order._id,
//                           e.target.value
//                         )
//                       }
//                       className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-800 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
//                     >

//                       {statuses.map((status) => (
//                         <option
//                           key={status}
//                           value={status}
//                         >
//                           {status}
//                         </option>
//                       ))}

//                     </select>

//                   </div>

//                   <div className="flex gap-3">

//                     {/* View */}

//                     <Link
//                       href={`/orders/${order._id}`}
//                       className="flex-1 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-center text-sm font-semibold text-gray-700 transition hover:border-green-500 hover:text-green-600 sm:flex-none"
//                     >
//                       View Order
//                     </Link>

//                     {/* Delete */}

//                     <button
//                       type="button"
//                       onClick={() =>
//                         deleteOrder(order._id)
//                       }
//                       className="flex-1 rounded-lg bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600 sm:flex-none"
//                     >
//                       Delete
//                     </button>

//                   </div>

//                 </div>

//               </div>

//             ))}

//           </div>

//         )}

//       </div>
//     </main>
//   );
// }





"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Order = {
  _id: string;
  userId?: string;
  products?: {
    title?: string;
    name?: string;
    quantity?: number;
    price?: number;
  }[];
  totalPrice?: number;
  status?: string;
  createdAt?: string;
};

const statuses = [
  "Pending",
  "Processing",
  "Shipped",
  "Delivered",
  "Cancelled",
];

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState("All");

  useEffect(() => {
    getOrders();
  }, []);

  async function getOrders() {
    try {
      const response = await fetch("/api/orders");

      if (!response.ok) {
        throw new Error("Orders not found");
      }

      const data = await response.json();

      // Latest order first
      const sortedOrders = data.sort(
        (a: Order, b: Order) =>
          new Date(b.createdAt || 0).getTime() -
          new Date(a.createdAt || 0).getTime()
      );

      setOrders(sortedOrders);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function changeStatus(
    orderId: string,
    newStatus: string
  ) {
    try {
      const response = await fetch(
        `/api/orders/${orderId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: newStatus,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Status update failed");
      }

      const updatedOrder = await response.json();

      setOrders((oldOrders) =>
        oldOrders
          .map((order) =>
            order._id === orderId
              ? updatedOrder
              : order
          )
          .sort(
            (a, b) =>
              new Date(b.createdAt || 0).getTime() -
              new Date(a.createdAt || 0).getTime()
          )
      );
    } catch (error) {
      console.log(error);
      alert("Status update nahi ho saka.");
    }
  }

  async function deleteOrder(orderId: string) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this order?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const response = await fetch(
        `/api/orders/${orderId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Delete failed");
      }

      setOrders((oldOrders) =>
        oldOrders.filter(
          (order) => order._id !== orderId
        )
      );
    } catch (error) {
      console.log(error);
      alert("Order delete nahi ho saka.");
    }
  }

  function getStatusStyle(status: string) {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";

      case "processing":
        return "bg-blue-50 text-blue-700 border-blue-200";

      case "shipped":
        return "bg-purple-50 text-purple-700 border-purple-200";

      case "delivered":
        return "bg-green-50 text-green-700 border-green-200";

      case "cancelled":
        return "bg-red-50 text-red-700 border-red-200";

      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  }

  const pendingCount = orders.filter(
    (order) => order.status === "Pending"
  ).length;

  const processingCount = orders.filter(
    (order) => order.status === "Processing"
  ).length;

  const shippedCount = orders.filter(
    (order) => order.status === "Shipped"
  ).length;

  const deliveredCount = orders.filter(
    (order) => order.status === "Delivered"
  ).length;

  const cancelledCount = orders.filter(
    (order) => order.status === "Cancelled"
  ).length;

  // Status ke according orders filter
  const filteredOrders =
    selectedStatus === "All"
      ? orders
      : orders.filter(
          (order) => order.status === selectedStatus
        );

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 p-4 sm:p-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex min-h-[300px] items-center justify-center rounded-2xl bg-white shadow-sm">
            <div className="text-center">
              <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-green-600"></div>

              <p className="text-sm font-medium text-gray-500">
                Loading orders...
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-wider text-green-600">
              Admin Dashboard
            </p>

            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Orders Management
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              View and manage all customer orders.
            </p>
          </div>

          <Link
            href="/admin/dashboard"
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-green-500 hover:text-green-600"
          >
            <span>←</span>
            Dashboard
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-5">

          {/* Pending */}
          <button
            type="button"
            onClick={() => setSelectedStatus("Pending")}
            className={`w-full rounded-xl border bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
              selectedStatus === "Pending"
                ? "border-yellow-400 ring-2 ring-yellow-100"
                : "border-yellow-100"
            }`}
          >
            <p className="text-sm font-medium text-gray-500">
              Pending
            </p>

            <p className="mt-2 text-3xl font-bold text-yellow-600">
              {pendingCount}
            </p>
{/* 
            <p className="mt-2 text-xs text-gray-400">
              Click to filter
            </p> */}
          </button>

          {/* Processing */}
          <button
            type="button"
            onClick={() => setSelectedStatus("Processing")}
            className={`w-full rounded-xl border bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
              selectedStatus === "Processing"
                ? "border-blue-400 ring-2 ring-blue-100"
                : "border-blue-100"
            }`}
          >
            <p className="text-sm font-medium text-gray-500">
              Processing
            </p>

            <p className="mt-2 text-3xl font-bold text-blue-600">
              {processingCount}
            </p>
{/* 
            <p className="mt-2 text-xs text-gray-400">
              Click to filter
            </p> */}
          </button>

          {/* Shipped */}
          <button
            type="button"
            onClick={() => setSelectedStatus("Shipped")}
            className={`w-full rounded-xl border bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
              selectedStatus === "Shipped"
                ? "border-purple-400 ring-2 ring-purple-100"
                : "border-purple-100"
            }`}
          >
            <p className="text-sm font-medium text-gray-500">
              Shipped
            </p>

            <p className="mt-2 text-3xl font-bold text-purple-600">
              {shippedCount}
            </p>

            {/* <p className="mt-2 text-xs text-gray-400">
              Click to filter
            </p> */}
          </button>

          {/* Delivered */}
          <button
            type="button"
            onClick={() => setSelectedStatus("Delivered")}
            className={`w-full rounded-xl border bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
              selectedStatus === "Delivered"
                ? "border-green-400 ring-2 ring-green-100"
                : "border-green-100"
            }`}
          >
            <p className="text-sm font-medium text-gray-500">
              Delivered
            </p>

            <p className="mt-2 text-3xl font-bold text-green-600">
              {deliveredCount}
            </p>
{/* 
            <p className="mt-2 text-xs text-gray-400">
              Click to filter
            </p> */}
          </button>

          {/* Cancelled */}
          <button
            type="button"
            onClick={() => setSelectedStatus("Cancelled")}
            className={`w-full rounded-xl border bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
              selectedStatus === "Cancelled"
                ? "border-red-400 ring-2 ring-red-100"
                : "border-red-100"
            }`}
          >
            <p className="text-sm font-medium text-gray-500">
              Cancelled
            </p>

            <p className="mt-2 text-3xl font-bold text-red-600">
              {cancelledCount}
            </p>

            {/* <p className="mt-2 text-xs text-gray-400">
              Click to filter
            </p> */}
          </button>

        </div>

        {/* Filter Header */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              {selectedStatus === "All"
                ? "All Orders"
                : `${selectedStatus} Orders`}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Showing {filteredOrders.length} order
              {filteredOrders.length !== 1 ? "s" : ""}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setSelectedStatus("All")}
            className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
              selectedStatus === "All"
                ? "bg-green-600 text-white"
                : "border border-gray-200 bg-white text-gray-700 hover:border-green-500 hover:text-green-600"
            }`}
          >
            All Orders
          </button>
        </div>

        {/* No Orders */}
        {filteredOrders.length === 0 ? (
          <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
              <span className="text-2xl">
                📦
              </span>
            </div>

            <h2 className="mt-5 text-lg font-bold text-gray-900">
              {selectedStatus === "All"
                ? "No Orders Found"
                : `No ${selectedStatus} Orders`}
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              {selectedStatus === "All"
                ? "Customer orders will appear here when they place an order."
                : `There are currently no ${selectedStatus.toLowerCase()} orders.`}
            </p>
          </div>
        ) : (

          /* Orders */
          <div className="space-y-5">

            {filteredOrders.map((order) => (

              <div
                key={order._id}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
              >

                {/* Order Header */}
                <div className="border-b border-gray-100 px-5 py-5 sm:px-6">

                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                        Order ID
                      </p>

                      <p className="mt-1 break-all text-sm font-bold text-gray-900">
                        #{order._id}
                      </p>

                      {order.createdAt && (
                        <p className="mt-1 text-xs text-gray-400">
                          {new Date(
                            order.createdAt
                          ).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                              hour: "numeric",
                              minute: "2-digit",
                            }
                          )}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">

                      {/* Status Badge */}
                      <span
                        className={`rounded-full border px-4 py-2 text-xs font-bold ${getStatusStyle(
                          order.status || "Pending"
                        )}`}
                      >
                        {order.status || "Pending"}
                      </span>

                      {/* Total */}
                      <div className="rounded-lg bg-gray-50 px-4 py-2 text-right">
                        <p className="text-[11px] text-gray-400">
                          Total
                        </p>

                        <p className="text-lg font-bold text-gray-900">
                          $
                          {Number(
                            order.totalPrice || 0
                          ).toFixed(2)}
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

                {/* Products */}
                <div className="px-5 py-5 sm:px-6">

                  <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-400">
                    Ordered Products
                  </h2>

                  <div className="space-y-3">

                    {order.products?.map(
                      (product, index) => (

                        <div
                          key={index}
                          className="flex items-center justify-between gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4"
                        >

                          <div className="min-w-0">

                            <p className="truncate text-sm font-semibold text-gray-900">
                              {product.title ||
                                product.name ||
                                "Product"}
                            </p>

                            <p className="mt-1 text-xs text-gray-500">
                              Quantity:{" "}
                              {product.quantity || 1}
                            </p>

                          </div>

                          <p className="shrink-0 text-sm font-bold text-gray-900">
                            $
                            {Number(
                              product.price || 0
                            ).toFixed(2)}
                          </p>

                        </div>

                      )
                    )}

                  </div>

                </div>

                {/* Controls */}
                <div className="flex flex-col gap-4 border-t border-gray-100 bg-gray-50 px-5 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">

                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center">

                    <label className="text-sm font-semibold text-gray-700">
                      Update Status
                    </label>

                    <select
                      value={order.status || "Pending"}
                      onChange={(e) =>
                        changeStatus(
                          order._id,
                          e.target.value
                        )
                      }
                      className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-800 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                    >
                      {statuses.map((status) => (
                        <option
                          key={status}
                          value={status}
                        >
                          {status}
                        </option>
                      ))}
                    </select>

                  </div>

                  <div className="flex gap-3">

                    {/* View */}
                    <Link
                      href={`/orders/${order._id}`}
                      className="flex-1 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-center text-sm font-semibold text-gray-700 transition hover:border-green-500 hover:text-green-600 sm:flex-none"
                    >
                      View Order
                    </Link>

                    {/* Delete */}
                    <button
                      type="button"
                      onClick={() =>
                        deleteOrder(order._id)
                      }
                      className="flex-1 rounded-lg bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600 sm:flex-none"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>
    </main>
  );
}