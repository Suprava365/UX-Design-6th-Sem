import React, { useState } from "react";

export default function AddNewDoctor({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    specialty: "",
    email: "",
    phone: "",
    status: "active",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Doctor Payload:", form);
    // axios.post("/api/doctors", form)
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      {/* LANDSCAPE CARD */}
      <div className="bg-white rounded-2xl w-[800px] p-8">

        <h2 className="text-2xl font-semibold mb-6">
          Add New Doctor
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
            name="specialty"
            placeholder="Specialty"
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

          <select
            name="status"
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          >
            <option value="active">Active</option>
            <option value="on_leave">On Leave</option>
            <option value="inactive">Inactive</option>
          </select>

          <div></div>
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
            Add Doctor
          </button>
        </div>

      </div>
    </div>
  );
}
