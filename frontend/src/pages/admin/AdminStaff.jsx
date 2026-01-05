import React, { useState } from "react";
import AddNewStaff from "../../components/admin/add new staff/AddNewStaff";

export default function AdminStaff() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Staff</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#7db9da] px-5 py-2 rounded-lg font-medium"
        >
          + Add Staff
        </button>
      </div>

      {/* TABLE CARD */}
      <div className="bg-white rounded-xl p-6">

        {/* TABLE HEADER */}
        <div className="grid grid-cols-5 bg-[#e3f0f6] px-4 py-2 rounded-lg text-sm font-semibold mb-4">
          <p>Name</p>
          <p>Role</p>
          <p>Department</p>
          <p>Status</p>
          <p>Actions</p>
        </div>

        {/* TABLE ROWS */}
        <div className="space-y-3 text-sm">
          {[
            {
              name: "Sarah Wilson",
              jobRole: "Nurse",
              department: "Emergency",
              status: "active",
            },
            {
              name: "Michal Brown",
              jobRole: "Technician",
              department: "Lab",
              status: "active",
            },
            {
              name: "Emily Davis",
              jobRole: "Receptionist",
              department: "Front Desk",
              status: "active",
            },
            {
              name: "James Miller",
              jobRole: "Paramedic",
              department: "Ambulance",
              status: "on_leave",
            },
          ].map((s, i) => (
            <div key={i} className="grid grid-cols-5 px-4 items-center">
              <p>{s.name}</p>
              <p>{s.jobRole}</p>
              <p>{s.department}</p>
              <span
                className={`px-4 py-1 rounded-full w-fit ${
                  s.status === "active"
                    ? "bg-green-200"
                    : s.status === "on_leave"
                    ? "bg-yellow-200"
                    : "bg-red-200"
                }`}
              >
                {s.status.replace("_", " ")}
              </span>
              <p></p>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {showModal && <AddNewStaff onClose={() => setShowModal(false)} />}
    </>
  );
}
