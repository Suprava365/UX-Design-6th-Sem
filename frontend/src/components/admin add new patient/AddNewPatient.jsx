import React from "react";

export default function AddNewPatient() {
  return (
    <div className="min-h-screen bg-[#e3f0f6] flex items-center justify-center">

      {/* CARD */}
      <div className="bg-white rounded-2xl w-[420px] p-8">

        {/* TITLE */}
        <h2 className="text-xl font-semibold mb-6">
          Add New Patient
        </h2>

        {/* FORM */}
        <div className="space-y-4 text-sm">

          <div>
            <label className="block mb-1">Full Name</label>
            <input
              type="text"
              className="w-full h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
            />
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              className="w-full h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
            />
          </div>

          <div>
            <label className="block mb-1">Phone</label>
            <input
              type="text"
              className="w-full h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
            />
          </div>

          <div>
            <label className="block mb-1">Address</label>
            <input
              type="text"
              className="w-full h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
            />
          </div>

          <div>
            <label className="block mb-1">Date of Birth</label>
            <input
              type="date"
              className="w-full h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
            />
          </div>

          <div>
            <label className="block mb-1">Gender</label>
            <select
              className="w-full h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
            >
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-between mt-8">
          <button className="bg-[#7db9da] px-6 py-2 rounded-lg text-white">
            Cancel
          </button>

          <button className="bg-[#7db9da] px-6 py-2 rounded-lg text-white">
            Add Patient
          </button>
        </div>

      </div>
    </div>
  );
}
