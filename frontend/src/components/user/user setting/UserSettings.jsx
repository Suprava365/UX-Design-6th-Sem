import React, { useState } from "react";
import EditProfileModal from "./EditProfileModal";
import ChangePasswordModal from "./ChangePasswordModal";
import DeleteAccountModal from "./DeleteAccountModal";

export default function UserSettings() {
  const [showEdit, setShowEdit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  return (
    <>
      {/* PAGE TITLE */}
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      {/* PROFILE CARD */}
      <div className="bg-white rounded-xl p-6 mb-6 flex justify-between items-start">
        <div>
          <h2 className="font-semibold text-lg">John Doe</h2>
          <p className="text-sm text-gray-600 mb-4">Patient Account</p>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-gray-500">Email</p>
              <p>john.doe@gmail.com</p>
            </div>
            <div>
              <p className="text-gray-500">Phone</p>
              <p>+(555) 123-4567</p>
            </div>
            <div>
              <p className="text-gray-500">Date of Birth</p>
              <p>1990-05-15</p>
            </div>
            <div>
              <p className="text-gray-500">Blood Type</p>
              <p>O+</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => setShowEdit(true)}
          className="bg-[#7db9da] px-4 py-2 rounded-lg text-sm"
        >
          Edit Profile
        </button>
      </div>

      {/* CHANGE PASSWORD */}
      <div className="bg-white rounded-xl p-6 mb-6 flex justify-between items-center">
        <h3 className="font-semibold">Change Password</h3>
        <button
          onClick={() => setShowPassword(true)}
          className="bg-yellow-200 px-4 py-2 rounded-lg text-sm"
        >
          Change Password
        </button>
      </div>

      {/* DELETE ACCOUNT */}
      <div className="bg-red-100 rounded-xl p-6 flex justify-between items-center">
        <p className="font-semibold text-red-700">Delete Account</p>
        <button
          onClick={() => setShowDelete(true)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm"
        >
          Delete Account
        </button>
      </div>

      {/* MODALS */}
      {showEdit && <EditProfileModal onClose={() => setShowEdit(false)} />}
      {showPassword && (
        <ChangePasswordModal onClose={() => setShowPassword(false)} />
      )}
      {showDelete && (
        <DeleteAccountModal onClose={() => setShowDelete(false)} />
      )}
    </>
  );
}
