import React from "react";

export default function AdminSettings() {
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
      <main className="flex-1 p-8">

        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-6">
          <div className="w-2/3 h-10 bg-[#d7e7ef] rounded-full"></div>
        </div>

        {/* PAGE TITLE */}
        <h1 className="text-xl font-semibold mb-4">Settings</h1>

        {/* SETTINGS CARD */}
        <div className="bg-white rounded-xl p-6 max-w-3xl">

          {/* CARD HEADER */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">Hospital Information</h2>
            <button className="bg-[#2f6f8f] text-white px-4 py-1 rounded-md text-sm">
              Edit
            </button>
          </div>

          {/* FORM FIELDS */}
          <div className="space-y-4 text-sm">
            <div>
              <label className="block mb-1">Hospital Name</label>
              <div className="h-10 bg-[#e3f0f6] rounded-md"></div>
            </div>

            <div>
              <label className="block mb-1">Email</label>
              <div className="h-10 bg-[#e3f0f6] rounded-md"></div>
            </div>

            <div>
              <label className="block mb-1">Phone</label>
              <div className="h-10 bg-[#e3f0f6] rounded-md"></div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
