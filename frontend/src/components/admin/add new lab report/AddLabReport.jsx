import React, { useState } from "react";

export default function AddLabReport({ onClose }) {
  const [form, setForm] = useState({
    patient: "",
    testName: "",
    phone: "",
    address: "",
    date: "",
    price: "",
    status: "completed",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Lab Report Payload:", form);
    // axios.post("/api/lab-reports", form)
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      {/* LANDSCAPE CARD */}
      <div className="bg-white rounded-2xl w-[800px] p-8">

        <h2 className="text-2xl font-semibold mb-6">
          Add Lab Report
        </h2>

        {/* FORM GRID */}
        <div className="grid grid-cols-2 gap-4 text-sm">

          <input
            name="patient"
            placeholder="Patient Name"
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          />

          <input
            name="testName"
            placeholder="Test Name"
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
            name="price"
            placeholder="Price"
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          />

          <input
            type="date"
            name="date"
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          />

          <select
            name="status"
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          >
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>

          <input
            name="address"
            placeholder="Address"
            onChange={handleChange}
            className="col-span-2 h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
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
            Add Report
          </button>
        </div>

      </div>
    </div>
  );
}
