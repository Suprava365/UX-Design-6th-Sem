import React, { useState } from "react";

export default function RequestLabReportModal({ onClose }) {
  const [form, setForm] = useState({
    testName: "",
    testDate: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const payload = {
      testName: form.testName,
      testDate: form.testDate,
    };

    console.log("Request Lab Test:", payload);
    // axios.post("/api/lab-reports", payload)

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl w-[500px] p-8">
        <h2 className="text-2xl font-semibold mb-6">
          Request Lab Test
        </h2>

        <div className="space-y-4 text-sm">
          <input
            name="testName"
            placeholder="Test Name"
            onChange={handleChange}
            className="w-full h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          />

          <input
            type="date"
            name="testDate"
            onChange={handleChange}
            className="w-full h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          />
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-300 rounded-md"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-[#7db9da] text-white rounded-md"
          >
            Request
          </button>
        </div>
      </div>
    </div>
  );
}
