import Link from "next/link";
import { connectDB } from "../../../lib/mongodb.js";
import User from "../../../models/User.js";
import Product from "../../../models/Product.js";
import Order from "../../../models/Order.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGaugeHigh,
  faBoxOpen,
  faCartShopping,
  faUsers,
  faChartLine,
  faGear,
  faRightFromBracket,
  faMoneyBillWave,
  faClock,
  faTruck,
  faCircleCheck,
  faBan,
  faBarsProgress,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

type DashboardProps = {
  searchParams: Promise<{
    period?: string;
  }>;
};

export default async function DashboardPage({
  searchParams,
}: DashboardProps) {
  await connectDB();

  const params = await searchParams;

  const periodNumber = Number(params.period);

  const period =
    periodNumber === 7 || periodNumber === 90
      ? periodNumber
      : 30;

  const now = new Date();

  const startDate = new Date();
  startDate.setDate(now.getDate() - period);

  const [
    totalProducts,
    totalUsers,
    totalOrders,
    revenueResult,
    pendingOrders,
    processingOrders,
    shippedOrders,
    deliveredOrders,
    cancelledOrders,
    recentOrders,
    salesData,
  ] = await Promise.all([
    Product.countDocuments(),

    User.countDocuments(),

    Order.countDocuments(),

    Order.aggregate([
      {
        $group: {
          _id: null,
          total: {
            $sum: {
              $ifNull: ["$totalPrice", 0],
            },
          },
        },
      },
    ]),

    Order.countDocuments({
      status: "Pending",
    }),

    Order.countDocuments({
      status: "Processing",
    }),

    Order.countDocuments({
      status: "Shipped",
    }),

    Order.countDocuments({
      status: "Delivered",
    }),

    Order.countDocuments({
      status: "Cancelled",
    }),

    Order.find()
      .sort({ createdAt: -1 })
      .limit(6)
      .populate("userId", "name email")
      .lean(),

    Order.aggregate([
      {
        $match: {
          createdAt: {
            $gte: startDate,
            $lte: now,
          },
        },
      },
      {
        $group: {
          _id: {
            $dateToString: {
              format: "%Y-%m-%d",
              date: "$createdAt",
            },
          },

          total: {
            $sum: {
              $ifNull: ["$totalPrice", 0],
            },
          },
        },
      },
      {
        $sort: {
          _id: 1,
        },
      },
    ]),
  ]);

  const totalRevenue = Number(
    revenueResult[0]?.total || 0
  );

  const chartData = createChartData(
    salesData,
    period
  );

  const maxValue = Math.max(
    ...chartData.map((item) => item.value),
    1
  );

  const chartWidth = 800;
  const chartHeight = 220;

  const chartPoints = chartData.map(
    (item, index) => {
      const x =
        chartData.length === 1
          ? chartWidth / 2
          : (index / (chartData.length - 1)) *
            chartWidth;

      const y =
        chartHeight -
        (item.value / maxValue) *
          (chartHeight - 25);

      return {
        ...item,
        x,
        y,
      };
    }
  );

  const linePoints = chartPoints
    .map(
      (point) =>
        `${point.x},${point.y}`
    )
    .join(" ");

  const areaPoints = [
    `0,${chartHeight}`,
    ...chartPoints.map(
      (point) =>
        `${point.x},${point.y}`
    ),
    `${chartWidth},${chartHeight}`,
  ].join(" ");

  return (
    <main className="min-h-screen bg-gray-100">

      <div className="flex min-h-screen">

        {/* SIDEBAR */}
        <aside className="hidden w-[220px] shrink-0 border-r border-gray-200 bg-white lg:flex lg:flex-col">

          {/* LOGO */}
          <div className="flex h-[70px] items-center border-b border-gray-100 px-5">

            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600 text-white">
              <FontAwesomeIcon
                icon={faBoxOpen}
                className="h-3.5 w-3.5"
              />
            </div>

            <div className="ml-3">
              <h1 className="text-sm font-bold text-gray-900">
                E-Shop
              </h1>

              <p className="text-[10px] text-gray-400">
                Admin Panel
              </p>
            </div>

          </div>

          {/* MENU */}
          <div className="flex-1 px-3 py-5">

            <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
              Main Menu
            </p>

            <nav className="space-y-1">

              {/* DASHBOARD */}
              <Link
                href="/admin/dashboard"
                className="flex items-center gap-3 rounded-lg bg-green-50 px-3 py-2.5 text-xs font-semibold text-green-700"
              >
                <FontAwesomeIcon
                  icon={faGaugeHigh}
                  className="h-3 w-3"
                />
                Dashboard
              </Link>

              {/* PRODUCTS */}
              <Link
                href="/products"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-medium text-gray-600 transition hover:bg-green-50 hover:text-green-700"
              >
                <FontAwesomeIcon
                  icon={faBoxOpen}
                  className="h-3 w-3"
                />
                Products
              </Link>

              {/* ORDERS */}
              <Link
                href="/admin/orders"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-medium text-gray-600 transition hover:bg-green-50 hover:text-green-700"
              >
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="h-3 w-3"
                />
                Orders
              </Link>

              {/* USERS */}
              <Link
                href="/admin/users"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-medium text-gray-600 transition hover:bg-green-50 hover:text-green-700"
              >
                <FontAwesomeIcon
                  icon={faUsers}
                  className="h-3 w-3"
                />
                Users
              </Link>

              {/* PROFILE */}
              <Link
                href="/profile"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-medium text-gray-600 transition hover:bg-green-50 hover:text-green-700"
              >
                <FontAwesomeIcon
                  icon={faGear}
                  className="h-3 w-3"
                />
                Settings
              </Link>

            </nav>

            {/* REPORTS */}
            <p className="mb-2 mt-7 px-3 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
              Reports
            </p>

            <nav className="space-y-1">

              <Link
                href="/admin/dashboard?period=7"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-medium text-gray-600 hover:bg-green-50 hover:text-green-700"
              >
                <FontAwesomeIcon
                  icon={faChartLine}
                  className="h-3 w-3"
                />
                Sales Overview
              </Link>

              <Link
                href="/admin/dashboard?period=30"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-medium text-gray-600 hover:bg-green-50 hover:text-green-700"
              >
                <FontAwesomeIcon
                  icon={faBarsProgress}
                  className="h-3 w-3"
                />
                Store Summary
              </Link>

            </nav>

          </div>

          {/* LOGOUT */}
          <div className="border-t border-gray-100 p-3">

            <Link
              href="/login"
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-medium text-gray-500 hover:bg-red-50 hover:text-red-600"
            >
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className="h-3 w-3"
              />
              Logout
            </Link>

          </div>

        </aside>

        {/* MAIN */}
        <section className="min-w-0 flex-1">

          {/* HEADER */}
          <header className="flex min-h-[70px] items-center justify-between border-b border-gray-200 bg-white px-5 py-4 md:px-8">

            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Dashboard
              </h2>

              <p className="text-xs text-gray-400">
                Overview of your E-Shop
              </p>
            </div>

            <Link
              href="/admin/products/add"
              className="rounded-lg bg-green-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-green-700"
            >
              + Add Product
            </Link>

          </header>

          <div className="p-5 md:p-8">

            {/* STAT CARDS */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

              {/* PRODUCTS */}
              <StatCard
                title="Total Products"
                value={totalProducts.toLocaleString()}
                icon={faBoxOpen}
                href="/products"
              />

              {/* ORDERS */}
              <StatCard
                title="Total Orders"
                value={totalOrders.toLocaleString()}
                icon={faCartShopping}
                href="/admin/orders"
              />

              {/* USERS */}
              <StatCard
                title="Total Users"
                value={totalUsers.toLocaleString()}
                icon={faUsers}
                href="/admin/users"
              />

              {/* REVENUE */}
              <StatCard
                title="Total Revenue"
                value={`PKR ${totalRevenue.toLocaleString()}`}
                icon={faMoneyBillWave}
                href="/admin/orders"
              />

            </div>

            {/* SALES OVERVIEW */}
            <div className="mt-6 rounded-xl border border-gray-200 bg-white shadow-sm">

              <div className="flex flex-col gap-4 border-b border-gray-100 px-5 py-4 md:flex-row md:items-center md:justify-between">

                <div>

                  <div className="flex items-center gap-2">

                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-green-50 text-green-600">
                      <FontAwesomeIcon
                        icon={faChartLine}
                        className="h-3 w-3"
                      />
                    </div>

                    <h3 className="text-sm font-bold text-gray-900">
                      Sales Overview
                    </h3>

                  </div>

                  <p className="mt-1 text-[11px] text-gray-400">
                    Revenue from your orders
                  </p>

                </div>

                {/* PERIOD */}
                <div className="flex rounded-lg border border-gray-200 bg-gray-50 p-1">

                  <PeriodLink
                    href="/admin/dashboard?period=7"
                    active={period === 7}
                    text="7 Days"
                  />

                  <PeriodLink
                    href="/admin/dashboard?period=30"
                    active={period === 30}
                    text="30 Days"
                  />

                  <PeriodLink
                    href="/admin/dashboard?period=90"
                    active={period === 90}
                    text="90 Days"
                  />

                </div>

              </div>

              {/* GRAPH */}
              <div className="p-5">

                <div className="relative h-[250px] w-full">

                  {/* GRID */}
                  <div className="absolute inset-0 flex flex-col justify-between pb-8">

                    <div className="border-t border-dashed border-gray-100" />
                    <div className="border-t border-dashed border-gray-100" />
                    <div className="border-t border-dashed border-gray-100" />
                    <div className="border-t border-dashed border-gray-100" />
                    <div className="border-t border-dashed border-gray-100" />

                  </div>

                  <svg
                    viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                    preserveAspectRatio="none"
                    className="absolute left-0 top-0 h-[220px] w-full"
                  >

                    <defs>

                      <linearGradient
                        id="salesGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >

                        <stop
                          offset="0%"
                          stopColor="#22c55e"
                          stopOpacity="0.25"
                        />

                        <stop
                          offset="100%"
                          stopColor="#22c55e"
                          stopOpacity="0"
                        />

                      </linearGradient>

                    </defs>

                    <polygon
                      points={areaPoints}
                      fill="url(#salesGradient)"
                    />

                    <polyline
                      points={linePoints}
                      fill="none"
                      stroke="#16a34a"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {chartPoints.map(
                      (point, index) => (
                        <circle
                          key={index}
                          cx={point.x}
                          cy={point.y}
                          r="3"
                          fill="white"
                          stroke="#16a34a"
                          strokeWidth="2"
                        />
                      )
                    )}

                  </svg>

                  {/* DATE LABELS */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[9px] text-gray-400">

                    {chartData
                      .filter(
                        (_, index) => {
                          const step =
                            chartData.length > 8
                              ? Math.ceil(
                                  chartData.length /
                                    7
                                )
                              : 1;

                          return (
                            index % step === 0 ||
                            index ===
                              chartData.length - 1
                          );
                        }
                      )
                      .map(
                        (item, index) => (
                          <span key={index}>
                            {item.label}
                          </span>
                        )
                      )}

                  </div>

                </div>

                {/* REVENUE */}
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">

                  <div>

                    <p className="text-[10px] uppercase tracking-wide text-gray-400">
                      Total Revenue
                    </p>

                    <p className="mt-1 text-lg font-bold text-gray-900">
                      PKR{" "}
                      {totalRevenue.toLocaleString()}
                    </p>

                  </div>

                  <div className="rounded-full bg-green-50 px-3 py-1 text-[10px] font-semibold text-green-700">
                    Live MongoDB Data
                  </div>

                </div>

              </div>

            </div>

            {/* STORE SUMMARY */}
            <div className="mt-6">

              <div className="mb-3">

                <h3 className="text-sm font-bold text-gray-900">
                  Store Summary
                </h3>

                <p className="text-[11px] text-gray-400">
                  Order status overview
                </p>

              </div>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-5">

                <SummaryCard
                  title="Pending"
                  value={pendingOrders}
                  icon={faClock}
                />

                <SummaryCard
                  title="Processing"
                  value={processingOrders}
                  icon={faBarsProgress}
                />

                <SummaryCard
                  title="Shipped"
                  value={shippedOrders}
                  icon={faTruck}
                />

                <SummaryCard
                  title="Delivered"
                  value={deliveredOrders}
                  icon={faCircleCheck}
                />

                <SummaryCard
                  title="Cancelled"
                  value={cancelledOrders}
                  icon={faBan}
                />

              </div>

            </div>

            {/* RECENT ORDERS */}
            <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

              <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">

                <div>

                  <h3 className="text-sm font-bold text-gray-900">
                    Recent Orders
                  </h3>

                  <p className="mt-1 text-[11px] text-gray-400">
                    Latest customer orders
                  </p>

                </div>

                <Link
                  href="/admin/orders"
                  className="text-[11px] font-semibold text-green-600 hover:text-green-700"
                >
                  View all →
                </Link>

              </div>

              <div className="overflow-x-auto">

                <table className="w-full text-left">

                  <thead>

                    <tr className="border-b border-gray-100 bg-gray-50">

                      <th className="px-5 py-3 text-[10px] uppercase text-gray-400">
                        Order
                      </th>

                      <th className="px-5 py-3 text-[10px] uppercase text-gray-400">
                        Customer
                      </th>

                      <th className="px-5 py-3 text-[10px] uppercase text-gray-400">
                        Amount
                      </th>

                      <th className="px-5 py-3 text-[10px] uppercase text-gray-400">
                        Status
                      </th>

                      <th className="px-5 py-3 text-[10px] uppercase text-gray-400">
                        Date
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    {recentOrders.length === 0 ? (

                      <tr>
                        <td
                          colSpan={5}
                          className="px-5 py-10 text-center text-xs text-gray-400"
                        >
                          No orders found.
                        </td>
                      </tr>

                    ) : (

                      recentOrders.map(
                        (order: any) => {

                          const customer =
                            order.userId?.name ||
                            order.userId?.email ||
                            "Guest User";

                          return (
                            <tr
                              key={order._id.toString()}
                              className="border-b border-gray-100 last:border-0 hover:bg-gray-50"
                            >

                              <td className="px-5 py-4">

                                <span className="text-xs font-semibold text-gray-800">
                                  #
                                  {order._id
                                    .toString()
                                    .slice(-8)
                                    .toUpperCase()}
                                </span>

                              </td>

                           <td className="px-5 py-4">
  <p className="text-xs font-semibold text-gray-800">
    {customer}
  </p>

  {order.userId?.email && (
    <p className="mt-0.5 text-[10px] text-gray-400">
      {order.userId.email}
    </p>
  )}

  {order.phone && (
    <p className="mt-0.5 text-[10px] text-gray-400">
      {order.phone}
    </p>
  )}

  {order.address && (
    <p className="mt-0.5 max-w-[220px] truncate text-[10px] text-gray-400">
      {order.address}
    </p>
  )}
</td>

                              <td className="px-5 py-4 text-xs font-semibold text-gray-900">
                                PKR{" "}
                                {Number(
                                  order.totalPrice || 0
                                ).toLocaleString()}
                              </td>

                              <td className="px-5 py-4">

                                <StatusBadge
                                  status={
                                    order.status ||
                                    "Pending"
                                  }
                                />

                              </td>

                              <td className="px-5 py-4 text-[10px] text-gray-400">
                                {formatDate(
                                  order.createdAt
                                )}
                              </td>

                            </tr>
                          );
                        }
                      )

                    )}

                  </tbody>

                </table>

              </div>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}


/* ==============================
   STAT CARD
============================== */

function StatCard({
  title,
  value,
  icon,
  href,
}: {
  title: string;
  value: string;
  icon: any;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-green-200 hover:shadow-md"
    >

      <div className="flex items-start justify-between">

        <div>

          <p className="text-[11px] text-gray-400">
            {title}
          </p>

          <p className="mt-2 text-xl font-bold text-gray-900">
            {value}
          </p>

          <p className="mt-2 text-[10px] font-semibold text-green-600">
            View details →
          </p>

        </div>

        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-50 text-green-600">

          <FontAwesomeIcon
            icon={icon}
            className="h-3.5 w-3.5"
          />

        </div>

      </div>

    </Link>
  );
}


/* ==============================
   SUMMARY CARD
============================== */

function SummaryCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: number;
  icon: any;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-[10px] text-gray-400">
            {title}
          </p>

          <p className="mt-1 text-xl font-bold text-gray-900">
            {value}
          </p>

        </div>

        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-green-50 text-green-600">

          <FontAwesomeIcon
            icon={icon}
            className="h-3 w-3"
          />

        </div>

      </div>

    </div>
  );
}


/* ==============================
   PERIOD LINK
============================== */

function PeriodLink({
  href,
  active,
  text,
}: {
  href: string;
  active: boolean;
  text: string;
}) {
  return (
    <Link
      href={href}
      className={`rounded-md px-3 py-1.5 text-[10px] font-semibold ${
        active
          ? "bg-green-600 text-white"
          : "text-gray-500 hover:bg-white hover:text-green-600"
      }`}
    >
      {text}
    </Link>
  );
}


/* ==============================
   STATUS
============================== */

function StatusBadge({
  status,
}: {
  status: string;
}) {
  const value = status.toLowerCase();

  let className =
    "bg-gray-100 text-gray-600";

  if (value === "delivered") {
    className = "bg-green-50 text-green-700";
  }

  if (value === "processing") {
    className = "bg-blue-50 text-blue-700";
  }

  if (value === "shipped") {
    className = "bg-purple-50 text-purple-700";
  }

  if (value === "cancelled") {
    className = "bg-red-50 text-red-600";
  }

  if (value === "pending") {
    className = "bg-yellow-50 text-yellow-700";
  }

  return (
    <span
      className={`rounded-full px-2 py-1 text-[9px] font-semibold ${className}`}
    >
      {status}
    </span>
  );
}


/* ==============================
   DATE
============================== */

function formatDate(date: Date | string) {
  if (!date) {
    return "-";
  }

  return new Date(date).toLocaleDateString(
    "en-PK",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );
}


/* ==============================
   CHART DATA
============================== */

function createChartData(
  salesData: any[],
  period: number
) {
  const result: {
    label: string;
    value: number;
  }[] = [];

  const now = new Date();

  for (let i = period - 1; i >= 0; i--) {

    const date = new Date(now);

    date.setDate(
      now.getDate() - i
    );

    const key = date
      .toISOString()
      .slice(0, 10);

    const found = salesData.find(
      (item) => item._id === key
    );

    result.push({
      label: date.toLocaleDateString(
        "en-US",
        {
          month: "short",
          day: "numeric",
        }
      ),

      value: Number(
        found?.total || 0
      ),
    });
  }

  return result;
}