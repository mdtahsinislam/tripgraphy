


// //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\dashboard\users\page.tsx
// export default function UsersPage() {
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Users</h1>
//       <p className="text-muted-foreground">Users management page – add your table / content here.</p>
//     </div>
//   )
// }


//C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\dashboard\all-user\page.tsx
// import React from 'react'

// function page() {
//   return (
//     <div>page</div>
//   )
// }

// export default page



"use client";

import { useEffect, useState } from "react";

type UserType = {
  _id: string;
  name: string;
  email: string;
  role?: string;
  phone?: string;
  createdAt?: string;
};

export default function AllUsersPage() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        setUsers(data.users || []);
      } catch (error) {
        console.error("Failed to load users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-muted-foreground">Loading users...</p>
      </div>
    );
  }

  return (
    <div className="px-4 lg:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">All Users</h1>
        <p className="text-muted-foreground mt-1">
          Total users: {users.length}
        </p>
      </div>

      {users.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-xl border">
          <p className="text-gray-500 text-lg">No users found</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  #
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  Name
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  Email
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  Role
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  Joined
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {users.map((user, index) => (
                <tr
                  key={user._id}
                  className="hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {user.name || "—"}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {user.email}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                        user.role === "admin"
                          ? "bg-purple-100 text-purple-700"
                          : user.role === "tourguide"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {(user.role || "user").toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {user.createdAt
                      ? new Date(user.createdAt).toLocaleDateString()
                      : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}