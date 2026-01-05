import React from "react";

export default function LogoutConfirmModal({ onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl w-[400px] p-6 text-center">

        <h2 className="text-lg font-semibold mb-2">
          Logout Confirmation
        </h2>

        <p className="text-sm text-gray-600 mb-6">
          Are you sure you want to logout?
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-300 rounded-md"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-6 py-2 bg-[#2f6f8f] text-white rounded-md"
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  );
}
