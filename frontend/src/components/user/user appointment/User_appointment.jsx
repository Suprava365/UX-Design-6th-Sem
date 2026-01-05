import React, { useState } from "react";
import EditAppointmentModal from "./EditAppointmentModal";
import AddAppointmentModal from "./AddAppointmentModal";

export default function UserAppointments() {
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const appointments = [
    {
      id: "1",
      doctorId: "doc123",
      doctorName: "Dr. Sarah Johnson",
      specialty: "General Practitioner",
      date: "2024-12-05",
      startTime: "10:00",
      endTime: "10:30",
      status: "scheduled",
      location: "Building A, Room 101",
      phone: "555-123-4567",
      notes: "",
    },
  ];

  return (
    <>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Appointments</h1>
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-[#7db9da] px-5 py-2 rounded-lg font-medium"
        >
          + Add Appointment
        </button>
      </div>

      {/* LIST */}
      <div className="space-y-6">
        {appointments.map((a) => (
          <div
            key={a.id}
            onClick={() => setSelectedAppointment(a)}
            className="bg-white rounded-xl p-6 flex justify-between items-center cursor-pointer hover:shadow-md"
          >
            <div>
              <p className="font-semibold">{a.doctorName}</p>
              <p className="text-sm text-gray-600">{a.specialty}</p>
              <span className="inline-block mt-2 bg-green-200 px-4 py-1 rounded-full text-sm">
                {a.status}
              </span>
            </div>

            <div className="text-sm">
              <p>{a.date}</p>
              <p>{a.startTime}</p>
            </div>

            <div className="text-sm">
              <p>{a.location}</p>
              <p>{a.phone}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MODALS */}
      {selectedAppointment && (
        <EditAppointmentModal
          appointment={selectedAppointment}
          onClose={() => setSelectedAppointment(null)}
        />
      )}

      {showCreateModal && (
        <AddAppointmentModal onClose={() => setShowCreateModal(false)} />
      )}
    </>
  );
}
