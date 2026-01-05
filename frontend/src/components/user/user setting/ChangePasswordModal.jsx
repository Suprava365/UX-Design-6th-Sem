import React, { useState } from "react";

export default function ChangePasswordModal({ onClose }) {
  const [form, setForm] = useState({
    current: "",
    newPass: "",
    confirm: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (form.newPass !== form.confirm) {
      alert("Passwords do not match");
      return;
    }

    console.log("Change Password:", form);
    // axios.put("/api/user/change-password", form)
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-[500px] p-8">

        <h2 className="text-2xl font-semibold mb-6">
          Change Password
        </h2>

        <div className="space-y-4 text-sm">
          <input
            type="password"
            name="current"
            placeholder="Current Password"
            onChange={handleChange}
            className="w-full h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          />

          <input
            type="password"
            name="newPass"
            placeholder="New Password"
            onChange={handleChange}
            className="w-full h-10 bg-[#e3f0f6] rounded-md px-4 outline-none"
          />

          <input
            type="password"
            name="confirm"
            placeholder="Confirm New Password"
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
            className="px-6 py-2 bg-yellow-400 text-white rounded-md"
          >
            Update Password
          </button>
        </div>

      </div>
    </div>
  );
}
