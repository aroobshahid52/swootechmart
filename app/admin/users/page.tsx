import Link from "next/link";
import { connectDB } from "../../../lib/mongodb.js";
import User from "../../../models/User.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faArrowLeft,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";

export default async function UsersPage() {
  await connectDB();

  const users = await User.find()
    .select("name email role createdAt")
    .sort({ createdAt: -1 })
    .lean();

  const totalUsers = users.length;

  return (
    <main className="min-h-screen bg-gray-100 p-5 md:p-8">

      <div className="mx-auto max-w-7xl">

        {/* TOP */}
        <div className="mb-6">

          <Link
            href="/admin/dashboard"
            className="mb-4 inline-flex items-center gap-2 text-xs font-medium text-gray-500 hover:text-green-600"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="h-3 w-3"
            />
            Back to Dashboard
          </Link>

          <div className="flex items-center justify-between">

            <div>

              <h1 className="text-xl font-bold text-gray-900">
                Users
              </h1>

              <p className="mt-1 text-xs text-gray-400">
                Manage registered users
              </p>

            </div>

            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm">

              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-50 text-green-600">

                <FontAwesomeIcon
                  icon={faUserCheck}
                  className="h-3.5 w-3.5"
                />

              </div>

              <div>

                <p className="text-[10px] text-gray-400">
                  Total Users
                </p>

                <p className="text-lg font-bold text-gray-900">
                  {totalUsers}
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* USERS TABLE */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

          <div className="border-b border-gray-100 px-5 py-4">

            <div className="flex items-center gap-2">

              <FontAwesomeIcon
                icon={faUsers}
                className="h-3.5 w-3.5 text-green-600"
              />

              <h2 className="text-sm font-bold text-gray-900">
                All Users
              </h2>

            </div>

            <p className="mt-1 text-[10px] text-gray-400">
              {totalUsers} accounts registered in your store
            </p>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full text-left">

              <thead>

                <tr className="border-b border-gray-100 bg-gray-50">

                  <th className="px-5 py-3 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                    User
                  </th>

                  <th className="px-5 py-3 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                    Email
                  </th>

                  <th className="px-5 py-3 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                    Role
                  </th>

                  <th className="px-5 py-3 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                    Joined
                  </th>

                </tr>

              </thead>

              <tbody>

                {users.map((user: any) => (

                  <tr
                    key={user._id.toString()}
                    className="border-b border-gray-100 last:border-0 hover:bg-gray-50"
                  >

                    {/* USER */}
                    <td className="px-5 py-4">

                      <div className="flex items-center gap-3">

                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-50 text-xs font-bold text-green-700">
                          {(user.name || "U")
                            .charAt(0)
                            .toUpperCase()}
                        </div>

                        <div>

                          <p className="text-xs font-semibold text-gray-800">
                            {user.name || "No Name"}
                          </p>

                          <p className="text-[9px] text-gray-400">
                            User ID:{" "}
                            {user._id
                              .toString()
                              .slice(-6)}
                          </p>

                        </div>

                      </div>

                    </td>

                    {/* EMAIL */}
                    <td className="px-5 py-4 text-xs text-gray-500">
                      {user.email}
                    </td>

                    {/* ROLE */}
                    <td className="px-5 py-4">

                      <span
                        className={`rounded-full px-2.5 py-1 text-[9px] font-semibold capitalize ${
                          user.role?.toLowerCase() ===
                          "admin"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {user.role || "user"}
                      </span>

                    </td>

                    {/* DATE */}
                    <td className="px-5 py-4 text-[10px] text-gray-400">

                      {user.createdAt
                        ? new Date(
                            user.createdAt
                          ).toLocaleDateString(
                            "en-PK",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }
                          )
                        : "-"}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {users.length === 0 && (
            <div className="px-5 py-12 text-center text-xs text-gray-400">
              No users found.
            </div>
          )}

        </div>

      </div>

    </main>
  );
}