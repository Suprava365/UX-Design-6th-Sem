import React from "react";

export default function DeleteAccountModal({ onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl w-[420px] p-6 text-center border border-red-300">

        <h2 className="text-lg font-semibold text-red-600 mb-2">
          Delete Account
        </h2>

        <p className="text-sm text-gray-600 mb-4">
          This action is <span className="font-semibold">permanent</span> and
          cannot be undone.
        </p>

        <p className="text-sm text-gray-600 mb-6">
          All hospital data, users, and records will be deleted.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-md bg-gray-300"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-6 py-2 rounded-md bg-red-500 text-white"
          >
            Delete Account
          </button>
        </div>

      </div>
    </div>
  );
}
