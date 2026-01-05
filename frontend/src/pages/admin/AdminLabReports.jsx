import React, { useState } from "react";
import AddLabReport from "../../components/admin/add new lab report/AddLabReport";

export default function AdminLabReports() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Lab Reports</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#7db9da] px-5 py-2 rounded-lg font-medium"
        >
          + Add Report
        </button>
      </div>

      {/* TABLE CARD */}
      <div className="bg-white rounded-xl p-6">

        {/* TABLE HEADER */}
        <div className="grid grid-cols-6 bg-[#e3f0f6] px-4 py-2 rounded-lg text-sm font-semibold mb-4">
          <p>Patient</p>
          <p>Test</p>
          <p>Date</p>
          <p>Result</p>
          <p>Status</p>
          <p>Actions</p>
        </div>

        {/* TABLE ROWS */}
        <div className="space-y-3 text-sm">
          {[
            {
              patient: "Suprava Giri",
              test: "Blood Test",
              date: "2025-11-25",
              result: "Normal",
              status: "completed",
            },
            {
              patient: "Jane Smith",
              test: "X-Ray",
              date: "2025-11-35",
              result: "Pending",
              status: "pending",
            },
            {
              patient: "Bob Wilson",
              test: "CT Scan",
              date: "2025-10-27",
              result: "Normal",
              status: "completed",
            },
          ].map((r, i) => (
            <div key={i} className="grid grid-cols-6 px-4 items-center">
              <p>{r.patient}</p>
              <p>{r.test}</p>
              <p>{r.date}</p>
              <p>{r.result}</p>
              <span
                className={`px-4 py-1 rounded-full w-fit ${
                  r.status === "completed"
                    ? "bg-green-200"
                    : "bg-yellow-200"
                }`}
              >
                {r.status}
              </span>
              <button className="text-blue-500">View</button>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {showModal && <AddLabReport onClose={() => setShowModal(false)} />}
    </>
  );
}
