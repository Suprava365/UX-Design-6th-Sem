import React, { useState } from "react";

export default function EditAppointmentModal({ appointment, onClose }) {
  const [form, setForm] = useState({
    date: appointment.date,
    startTime: appointment.startTime,
    endTime: appointment.endTime,
    status: appointment.status,
    notes: appointment.notes,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const payload = {
      doctorId: appointment.doctorId,
      date: form.date,
      startTime: form.startTime,
      endTime: form.endTime,
      notes: form.notes,
      status: form.status,
    };

    console.log("Edit Appointment Payload:", payload);
    // axios.put(`/api/appointments/${appointment.id}`, payload)

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      {/* MODAL */}
      <div className="bg-white rounded-2xl w-[800px] p-8">

        <h2 className="text-2xl font-semibold mb-6">
          Edit Appointment
        </h2>

        {/* FORM */}
        <div className="grid grid-cols-2 gap-4 text-sm">

          <input
            value={appointment.doctorName}
            disabled
            className="h-10 bg-gray-200 rounded-md px-4"
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          />

          <input
            type="time"
            name="startTime"
            value={form.startTime}
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          />

          <input
            type="time"
            name="endTime"
            value={form.endTime}
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          >
            <option value="scheduled">Scheduled</option>
            <option value="cancelled">Cancelled</option>
          </select>

          <div></div>

          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            placeholder="Notes"
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
            onClick={handleSave}
            className="px-6 py-2 rounded-lg bg-[#7db9da] text-white"
          >
            Save Changes
          </button>
        </div>

      </div>
    </div>
  );
}
