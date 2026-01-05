import React, { useState } from "react";

export default function AddNewAppointment({ onClose }) {
  const [form, setForm] = useState({
    patientId: "",
    doctorId: "",
    date: "",
    time: "",
    status: "scheduled",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const startAt = new Date(`${form.date}T${form.time}`);
    const endAt = new Date(startAt.getTime() + 30 * 60000); // +30 mins

    const payload = {
      patientId: form.patientId,
      doctorId: form.doctorId,
      startAt,
      endAt,
      status: form.status,
      notes: form.notes,
    };

    console.log("Appointment Payload:", payload);
    // axios.post("/api/appointments", payload)

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      {/* LANDSCAPE CARD */}
      <div className="bg-white rounded-2xl w-[800px] p-8">

        <h2 className="text-2xl font-semibold mb-6">
          Add New Appointment
        </h2>

        {/* FORM GRID */}
        <div className="grid grid-cols-2 gap-4 text-sm">

          <input
            name="patientId"
            placeholder="Patient ID"
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          />

          <input
            name="doctorId"
            placeholder="Doctor ID"
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          />

          <input
            type="date"
            name="date"
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          />

          <input
            type="time"
            name="time"
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          />

          <select
            name="status"
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          >
            <option value="scheduled">Scheduled</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>

          <div></div>

          <textarea
            name="notes"
            placeholder="Notes / Reason"
            onChange={handleChange}
            className="col-span-2 h-24 bg-[#e3f0f6] rounded-md px-4 py-2 outline-none resize-none"
          />
        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg bg-gray-300"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-6 py-2 rounded-lg bg-[#7db9da] text-white"
          >
            Add Appointment
          </button>
        </div>

      </div>
    </div>
  );
}
