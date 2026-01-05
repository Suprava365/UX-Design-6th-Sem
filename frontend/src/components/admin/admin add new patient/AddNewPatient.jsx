import React, { useState } from "react";

export default function AddNewPatient({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
    address: "",
    status: "confirmed",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Patient Data:", form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      {/* LANDSCAPE CARD */}
      <div className="bg-white rounded-2xl w-[800px] p-8">

        {/* TITLE */}
        <h2 className="text-2xl font-semibold mb-6">
          Add New Patient
        </h2>

        {/* FORM GRID */}
        <div className="grid grid-cols-2 gap-4 text-sm">

          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          />

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          />

          <input
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          />

          <input
            type="date"
            name="dateOfBirth"
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          />

          <select
            name="gender"
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          >
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <select
            name="status"
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          >
            <option value="confirmed">Confirmed</option>
            <option value="pending">Pending</option>
            <option value="inactive">Inactive</option>
          </select>

          {/* FULL WIDTH */}
          <input
            name="address"
            placeholder="Address"
            onChange={handleChange}
            className="col-span-2 h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          />

          <textarea
            name="notes"
            placeholder="Notes"
            onChange={handleChange}
            className="col-span-2 h-24 bg-[#e3f0f6] rounded-md px-4 py-2 outline-none resize-none"
          />
        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg bg-gray-300 text-gray-800"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-6 py-2 rounded-lg bg-[#7db9da] text-white"
          >
            Add Patient
          </button>
        </div>

      </div>
    </div>
  );
}
