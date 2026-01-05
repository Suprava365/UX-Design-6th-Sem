import React, { useState } from "react";
import AddNewDoctor from "../../components/admin/add new doctor/AddNewDoctor";

export default function AdminDoctors() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Doctors</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#7db9da] px-5 py-2 rounded-lg font-medium"
        >
          + Add Doctor
        </button>
      </div>

      {/* DOCTORS GRID */}
      <div className="grid grid-cols-4 gap-6">
        {[
          {
            name: "Dr. Smith",
            specialty: "Cardiology",
            patients: 45,
            status: "active",
          },
          {
            name: "Dr. Johnson",
            specialty: "Neurology",
            patients: 32,
            status: "active",
          },
          {
            name: "Dr. Davis",
            specialty: "Orthopedics",
            patients: 28,
            status: "on_leave",
          },
          {
            name: "Dr. Wilson",
            specialty: "Pediatrics",
            patients: 55,
            status: "active",
          },
        ].map((d, i) => (
          <div key={i} className="bg-white rounded-xl p-6 text-center">
            <h3 className="font-semibold text-lg">{d.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{d.specialty}</p>

            <p className="text-sm mb-1">
              <span className="font-semibold">Patients:</span> {d.patients}
            </p>

            <span
              className={`inline-block px-4 py-1 rounded-full text-sm mb-4 ${
                d.status === "active"
                  ? "bg-green-200"
                  : d.status === "on_leave"
                  ? "bg-yellow-200"
                  : "bg-red-200"
              }`}
            >
              {d.status.replace("_", " ")}
            </span>

            <div className="flex justify-center gap-6 text-sm">
              <button className="text-blue-500">Edit</button>
              <button className="text-red-500">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {showModal && <AddNewDoctor onClose={() => setShowModal(false)} />}
    </>
  );
}
