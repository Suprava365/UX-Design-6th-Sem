import React, { useState } from "react";

export default function AddLabReportModal({ onClose }) {
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
      // patient -> from auth
      // status -> defaults to "pending"
    };

    console.log("Request Lab Test Payload:", payload);
    // axios.post("/api/lab-reports", payload)

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl w-[480px] p-8">

        <h2 className="text-2xl font-semibold mb-6">
          Request Lab Test
        </h2>

        <div className="space-y-4 text-sm">

          {/* TEST NAME DROPDOWN */}
          <select
            name="testName"
            value={form.testName}
            onChange={handleChange}
            className="w-full h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          >
            <option value="">Select Test</option>
            <option value="Complete Blood Count (CBC)">Complete Blood Count (CBC)</option>
            <option value="Lipid Panel">Lipid Panel</option>
            <option value="Blood Glucose Test">Blood Glucose Test</option>
            <option value="Thyroid Function Test">Thyroid Function Test</option>
            <option value="X-Ray Chest">X-Ray Chest</option>
            <option value="CT Scan">CT Scan</option>
            <option value="MRI Scan">MRI Scan</option>
            <option value="Urine Test">Urine Test</option>
          </select>

          {/* TEST DATE */}
          <input
            type="date"
            name="testDate"
            value={form.testDate}
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
            disabled={!form.testName || !form.testDate}
            className="px-6 py-2 bg-[#7db9da] text-white rounded-md disabled:opacity-50"
          >
            Request Test
          </button>
        </div>

      </div>
    </div>
  );
}
