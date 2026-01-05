import React, { useState } from "react";
import EditHospitalModal from "../../components/admin/settings/EditSettingModel";
import LogoutConfirmModal from "../LogoutModel";
import DeleteAccountModal from "../DeleteAccountModel";



export default function AdminSettings() {
  const [showEdit, setShowEdit] = useState(false);
  
const [showLogout, setShowLogout] = useState(false);
const [showDelete, setShowDelete] = useState(false);

  return (
    <>
      <h1 className="text-xl font-semibold mb-6">Settings</h1>

      {/* TOP SECTION */}
      <div className="grid grid-cols-3 gap-6 mb-8">

        {/* LEFT — HOSPITAL INFO */}
        <div className="bg-white rounded-xl p-6 col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">Hospital Information</h2>
            <button
              onClick={() => setShowEdit(true)}
              className="bg-[#2f6f8f] text-white px-4 py-1 rounded-md text-sm"
            >
              Edit
            </button>
          </div>

          <div className="space-y-4 text-sm">
            <div>
              <label className="block mb-1">Hospital Name</label>
              <div className="h-10 bg-[#e3f0f6] rounded-md px-4 flex items-center">
                Smartlite Medical
              </div>
            </div>

            <div>
              <label className="block mb-1">Email</label>
              <div className="h-10 bg-[#e3f0f6] rounded-md px-4 flex items-center">
                admin@smartlite.com
              </div>
            </div>

            <div>
              <label className="block mb-1">Phone</label>
              <div className="h-10 bg-[#e3f0f6] rounded-md px-4 flex items-center">
                +977 9746585866
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — QUICK ACTIONS */}
        <div className="bg-white rounded-xl p-6">
          <h2 className="font-semibold mb-4">Quick Actions</h2>

          <div className="space-y-3">
            <button className="w-full bg-[#7db9da] text-white py-2 rounded-md">
              Change Password
            </button>

            <button
  onClick={() => setShowLogout(true)}
  className="w-full bg-yellow-400 text-white py-2 rounded-md"
>
  Logout
</button>
          </div>
        </div>
      </div>

      {/* DANGER ZONE */}
      <div className="bg-white rounded-xl p-6 max-w-3xl">
        <h2 className="font-semibold text-red-600 mb-4">Danger Zone</h2>

        <p className="text-sm text-gray-600 mb-4">
          Deleting your account will permanently remove all data. This action
          cannot be undone.
        </p>

      <button
  onClick={() => setShowDelete(true)}
  className="bg-red-500 text-white px-6 py-2 rounded-md"
>
  Delete Account
</button>
      </div>

      {/* EDIT MODAL */}
      {showEdit && <EditHospitalModal onClose={() => setShowEdit(false)} />}

        {showLogout && (
  <LogoutConfirmModal
    onClose={() => setShowLogout(false)}
    onConfirm={() => {
      console.log("Logout");
      // logout logic
      setShowLogout(false);
    }}
  />
)}

{showDelete && (
  <DeleteAccountModal
    onClose={() => setShowDelete(false)}
    onConfirm={() => {
      console.log("Delete Account");
      // delete API call
      setShowDelete(false);
    }}
  />
)}

    </>
  );
}
