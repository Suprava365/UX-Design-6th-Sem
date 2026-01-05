import React, { useState } from "react";
import AddNewPatient from "../../components/admin/admin add new patient/AddNewPatient";

export default function AdminPatients() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Patient</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#7db9da] px-5 py-2 rounded-lg font-medium"
        >
          + Add Patient
        </button>
      </div>

      {/* SEARCH + FILTER */}
      <div className="bg-white rounded-xl p-4 flex gap-4 items-center mb-6">
        <div className="flex-1 h-10 bg-[#e3f0f6] rounded-full"></div>
        <div className="w-24 h-10 bg-[#e3f0f6] rounded-full flex items-center justify-center text-sm">
          All
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl p-6">
        <div className="h-10 bg-[#e3f0f6] rounded-lg mb-4"></div>

        <div className="space-y-3 text-sm">
          {[
            {
              name: "Suprava Giri",
              email: "supravagi12@gmail.com",
              phone: "555-0101",
              address: "123 Main St",
              status: "confirmed",
            },
            {
              name: "Jane Smith",
              email: "janeexample@gmail.com",
              phone: "555-0102",
              address: "456 Oak Ave",
              status: "pending",
            },
            {
              name: "Alice Smith",
              email: "alicessmt43@gmail.com",
              phone: "555-0167",
              address: "234 Elm St",
              status: "inactive",
            },
          ].map((p, i) => (
            <div key={i} className="grid grid-cols-5 items-center">
              <p>{p.name}</p>
              <p>{p.email}</p>
              <p>{p.phone}</p>
              <p>{p.address}</p>
              <span
                className={`px-4 py-1 rounded-full w-fit text-center ${
                  p.status === "confirmed"
                    ? "bg-green-200"
                    : p.status === "pending"
                    ? "bg-yellow-200"
                    : "bg-red-200"
                }`}
              >
                {p.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {showModal && <AddNewPatient onClose={() => setShowModal(false)} />}
    </>
  );
}
