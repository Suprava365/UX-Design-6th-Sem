import React, { useState } from "react";
import AddNewAppointment from "../../components/admin/add new appointment/AddNewAppointment";

export default function AdminAppointments() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Appointments</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#7db9da] px-5 py-2 rounded-lg font-medium"
        >
          + Add Appointment
        </button>
      </div>

      {/* TABLE CARD */}
      <div className="bg-white rounded-xl p-6">

        {/* TABLE HEADER */}
        <div className="grid grid-cols-6 bg-[#e3f0f6] px-4 py-2 rounded-lg text-sm font-semibold mb-4">
          <p>Patient</p>
          <p>Doctor</p>
          <p>Date</p>
          <p>Time</p>
          <p>Status</p>
          <p>Actions</p>
        </div>

        {/* TABLE ROWS */}
        <div className="space-y-3 text-sm">
          {[
            {
              patient: "Suprava Giri",
              doctor: "Dr. Smith",
              date: "2024-01-35",
              time: "11:00 AM",
              status: "scheduled",
            },
            {
              patient: "Suprava Giri",
              doctor: "Dr. Johnson",
              date: "2024-01-35",
              time: "02:20 PM",
              status: "completed",
            },
            {
              patient: "Suprava Giri",
              doctor: "Dr. Davis",
              date: "2024-01-35",
              time: "10:03 AM",
              status: "scheduled",
            },
          ].map((a, i) => (
            <div key={i} className="grid grid-cols-6 px-4 items-center">
              <p>{a.patient}</p>
              <p>{a.doctor}</p>
              <p>{a.date}</p>
              <p>{a.time}</p>
              <span
                className={`px-4 py-1 rounded-full w-fit ${
                  a.status === "completed"
                    ? "bg-green-200"
                    : "bg-blue-200"
                }`}
              >
                {a.status}
              </span>
              <p></p>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <AddNewAppointment onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
