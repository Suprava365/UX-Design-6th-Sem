import React, { useState } from "react";

export default function AddNewStaff({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    jobRole: "",
    department: "",
    status: "active",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Staff Payload:", form);
    // axios.post("/api/staff", form)
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      {/* LANDSCAPE CARD */}
      <div className="bg-white rounded-2xl w-[700px] p-8">

        <h2 className="text-2xl font-semibold mb-6">
          Add New Staff
        </h2>

        {/* FORM GRID */}
        <div className="grid grid-cols-2 gap-4 text-sm">

          {/* FULL NAME */}
          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          />

          {/* ROLE DROPDOWN */}
          <select
            name="jobRole"
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          >
            <option value="">Select Role</option>
            <option value="Nurse">Nurse</option>
            <option value="Technician">Technician</option>
            <option value="Receptionist">Receptionist</option>
            <option value="Paramedic">Paramedic</option>
          </select>

          {/* DEPARTMENT */}
          <input
            name="department"
            placeholder="Department"
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          />

          {/* STATUS */}
          <select
            name="status"
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          >
            <option value="active">Active</option>
            <option value="on_leave">On Leave</option>
            <option value="inactive">Inactive</option>
          </select>
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
            Add Staff
          </button>
        </div>

      </div>
    </div>
  );
}
