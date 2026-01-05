import React, { useState } from "react";

export default function EditProfileModal({ onClose }) {
  const [form, setForm] = useState({
    name: "John Doe",
    email: "john.doe@gmail.com",
    phone: "5551234567",
    dob: "1990-05-15",
    bloodType: "O+",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = () => {
    console.log("Updated Profile:", form);
    // axios.put("/api/user/profile", form)
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-[600px] p-8">

        <h2 className="text-2xl font-semibold mb-6">
          Edit Profile
        </h2>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
            placeholder="Full Name"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
            placeholder="Email"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
            placeholder="Phone"
          />

          <input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          />

          <input
            name="bloodType"
            value={form.bloodType}
            onChange={handleChange}
            className="h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
            placeholder="Blood Type"
          />
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-300 rounded-md"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="px-6 py-2 bg-[#7db9da] text-white rounded-md"
          >
            Save Changes
          </button>
        </div>

      </div>
    </div>
  );
}
