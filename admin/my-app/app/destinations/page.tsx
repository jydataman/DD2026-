"use client";
import { useState, useEffect } from "react";

interface Destination {
  _id: string;
  name: string;
  description: string;
}

export default function DestinationsPage() {
  const [destinations, setDestinations] = useState<Destination[]>([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      const response = await fetch("http://localhost:3001/api/destinations");
      const data = await response.json();
      setDestinations(data);
      console.log(data);
    };
    fetchDestinations();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      {/* Increased heading size and centered it */}
      <h1 className="text-6xl font-extrabold mb-10 text-center text-white">
        Manage Destinations
      </h1>

      {/* Added bg-white to make the table visible and text-black for readability */}
      <div className="w-full max-w-4xl overflow-hidden rounded-xl border border-gray-300 bg-white shadow-lg">
        <table className="table-auto w-full text-left text-black">
          <thead className="bg-gray-200 border-b border-gray-400">
            <tr>
              <th className="px-6 py-4 border-r border-gray-300 font-bold">Name</th>
              <th className="px-6 py-4 border-r border-gray-300 font-bold">Description</th>
              <th className="px-6 py-4 font-bold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {destinations.map((destination) => (
              <tr key={destination._id} className="hover:bg-gray-100">
                <td className="px-6 py-4 border-r border-gray-300">{destination.name}</td>
                <td className="px-6 py-4 border-r border-gray-300">{destination.description}</td>
                <td className="px-6 py-4">
                  <button className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Edit</button>
                  <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}