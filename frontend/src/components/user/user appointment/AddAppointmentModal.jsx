import React, { useState } from "react";

export default function AddAppointmentModal({ onClose }) {
  const [form, setForm] = useState({
    doctorId: "",
    date: "",
    startTime: "",
    endTime: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const payload = {
      doctorId: form.doctorId,
      date: form.date,
      startTime: form.startTime,
      endTime: form.endTime,
      notes: form.notes,
    };

    console.log("Create Appointment Payload:", payload);
    // axios.post("/api/appointments", payload)

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      {/* MODAL */}
      <div className="bg-white rounded-2xl w-[700px] p-8">

        <h2 className="text-2xl font-semibold mb-6">
          Book Appointment
        </h2>

        <div className="grid grid-cols-2 gap-4 text-sm">

          {/* DOCTOR */}
          <select
            name="doctorId"
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          >
            <option value="">Select Doctor</option>
            <option value="doc123">Dr. Sarah Johnson</option>
            <option value="doc456">Dr. Mike Chen</option>
          </select>

          {/* DATE */}
          <input
            type="date"
            name="date"
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          />

          {/* START */}
          <input
            type="time"
            name="startTime"
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          />

          {/* END */}
          <input
            type="time"
            name="endTime"
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          />

          {/* NOTES */}
          <textarea
            name="notes"
            placeholder="Notes (optional)"
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
            Book Appointment
          </button>
        </div>

      </div>
    </div>
  );
}
