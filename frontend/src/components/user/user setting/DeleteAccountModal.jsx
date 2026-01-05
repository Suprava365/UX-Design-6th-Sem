import React from "react";

export default function DeleteAccountModal({ onClose }) {
  const handleDelete = () => {
    console.log("Account deleted");
    // axios.delete("/api/user")
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl w-[420px] p-6 text-center border border-red-300">

        <h2 className="text-lg font-semibold text-red-600 mb-2">
          Delete Account
        </h2>

        <p className="text-sm text-gray-600 mb-6">
          This action is permanent and cannot be undone.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-300 rounded-md"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            className="px-6 py-2 bg-red-500 text-white rounded-md"
          >
            Delete Account
          </button>
        </div>

      </div>
    </div>
  );
}
