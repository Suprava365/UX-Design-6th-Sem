import React, { useState } from "react";

export default function EditHospitalModal({ onClose }) {
  const [form, setForm] = useState({
    name: "Smartlite Medical",
    email: "admin@smartlite.com",
    phone: "+977 9746585866",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Updated Settings:", form);
    // axios.put("/api/settings", form)
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl w-[500px] p-6">
        <h2 className="text-lg font-semibold mb-4">
          Edit Hospital Information
        </h2>

        <div className="space-y-4 text-sm">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
            placeholder="Hospital Name"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
            placeholder="Email"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
            placeholder="Phone"
          />
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-md bg-gray-300"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="px-5 py-2 rounded-md bg-[#2f6f8f] text-white"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
