import React from "react";

export default function AddNewAppointment() {
  return (
    <div className="min-h-screen bg-[#e3f0f6] flex items-center justify-center">

      {/* CARD */}
      <div className="bg-white rounded-2xl w-[420px] p-8">

        {/* TITLE */}
        <h2 className="text-xl font-semibold mb-6">
          Add New Appointment
        </h2>

        {/* FORM */}
        <div className="space-y-4 text-sm">

          <div>
            <label className="block mb-1">Patient</label>
            <input
              type="text"
              className="w-full h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
            />
          </div>

          <div>
            <label className="block mb-1">Doctor</label>
            <input
              type="text"
              className="w-full h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
            />
          </div>

          <div>
            <label className="block mb-1">Date</label>
            <input
              type="date"
              className="w-full h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
            />
          </div>

          <div>
            <label className="block mb-1">Time</label>
            <input
              type="time"
              className="w-full h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
            />
          </div>

          <div>
            <label className="block mb-1">Reason</label>
            <textarea
              className="w-full h-24 bg-[#e3f0f6] rounded-md px-4 py-2 outline-none resize-none"
            />
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-between mt-8">
          <button className="bg-[#7db9da] px-6 py-2 rounded-lg text-white">
            Cancel
          </button>

          <button className="bg-[#7db9da] px-6 py-2 rounded-lg text-white">
            Add Appointment
          </button>
        </div>

      </div>
    </div>
  );
}
