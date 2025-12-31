import React from "react";

export default function UserSettings() {
  return (
    <div className="flex h-screen bg-[#e3f0f6]">

      {/* SIDEBAR */}
      <aside className="w-64 bg-[#2f6f8f] text-white flex flex-col justify-between">
        <div>
          {/* Logo */}
          <div className="px-6 py-6 border-b border-white/20">
            <h1 className="text-xl font-bold">Smartlite</h1>
            <p className="text-sm opacity-80">Medical</p>
          </div>

          {/* Menu */}
          <nav className="mt-6 text-sm">
            {[
              "Overview",
              "Patient",
              "Appointment",
              "Doctors",
              "Staff",
              "Lab Reports",
              "Settings",
            ].map((item) => (
              <div
                key={item}
                className={`px-6 py-3 cursor-pointer ${
                  item === "Settings"
                    ? "bg-[#7db9da] font-semibold"
                    : "hover:bg-[#4f8fb1]"
                }`}
              >
                {item}
              </div>
            ))}
          </nav>
        </div>

        {/* Logout */}
        <div className="px-6 py-4 text-sm">Logout</div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto">

        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-6">
          <div className="w-2/3 h-10 bg-[#d7e7ef] rounded-full"></div>
          <div className="text-right">
            <p className="font-semibold">John Doe</p>
            <p className="text-sm text-gray-500">Patient</p>
          </div>
        </div>

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

          <button className="bg-[#7db9da] px-4 py-2 rounded-lg text-sm">
            Edit Profile
          </button>
        </div>

        {/* CHANGE PASSWORD */}
        <div className="bg-white rounded-xl p-6 mb-6 flex justify-between items-center">
          <h3 className="font-semibold">Change Password</h3>
          <button className="bg-yellow-200 px-4 py-2 rounded-lg text-sm">
            Change Password
          </button>
        </div>

        {/* NOTIFICATION PREFERENCES */}
        <div className="bg-white rounded-xl p-6 mb-6">
          <h3 className="font-semibold mb-4">Notification Preferences</h3>

          {[
            {
              title: "Email Notifications",
              desc: "Receive updates via email",
            },
            {
              title: "Appointment Reminders",
              desc: "Get reminders before your appointments",
            },
            {
              title: "Lab Report Updates",
              desc: "Notifications when lab reports are ready",
            },
            {
              title: "Medical Alerts",
              desc: "Important health-related notifications",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[#e3f0f6] rounded-lg p-4 mb-3"
            >
              <p className="font-semibold text-sm">{item.title}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* DELETE ACCOUNT */}
        <div className="bg-red-100 rounded-xl p-6 flex justify-between items-center">
          <p className="font-semibold text-red-700">Delete Account</p>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm">
            Delete Account
          </button>
        </div>

      </main>
    </div>
  );
}
