"use client";

import { useState, useEffect } from "react";
import TableFilter from "./components/TableFilter"; // Assuming this component exists
import userData from "../../lib/data/users.json"; // Assuming this path is correct

// Define a type for the user data for better type safety
type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export default function TablePage() {
  const [users, setUsers] = useState<User[]>(userData);
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("");

  useEffect(() => {
    let result = users;

    if (searchTerm) {
      result = result.filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    if (filterRole) {
      result = result.filter((user) => user.role === filterRole);
    }

    setFilteredUsers(result);
  }, [users, searchTerm, filterRole]);

  return (
    // Added p-6 for padding around the content
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6" data-testid="page-header">
        User Data Table
      </h1>

      <TableFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterRole={filterRole}
        setFilterRole={setFilterRole}
      />

      <div className="mt-4 bg-white rounded-lg shadow overflow-hidden">
        <table
          className="min-w-full divide-y divide-gray-200"
          data-testid="user-table"
        >
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Role
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredUsers.map((user) => (
              <tr key={user.id} data-testid={`user-row-${user.id}`}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.role}
                </td>
              </tr>
            ))}
            {/* Optional: Add a message when no users match the filter */}
            {filteredUsers.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-4 text-center text-sm text-gray-500"
                >
                  No users found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
