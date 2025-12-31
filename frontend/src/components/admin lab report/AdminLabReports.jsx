import React from "react";

export default function AdminLabReports() {
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
                  item === "Lab Reports"
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
            <p className="text-sm text-gray-500">Admin</p>
          </div>
        </div>

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Lab Reports</h1>
          <button className="bg-[#7db9da] px-5 py-2 rounded-lg font-medium">
            + Add Report
          </button>
        </div>

        {/* TABLE CARD */}
        <div className="bg-white rounded-xl p-6">

          {/* TABLE HEADER */}
          <div className="grid grid-cols-6 bg-[#e3f0f6] px-4 py-2 rounded-lg text-sm font-semibold mb-4">
            <p>Patient</p>
            <p>Test</p>
            <p>Date</p>
            <p>Result</p>
            <p>Status</p>
            <p>Actions</p>
          </div>

          {/* TABLE ROWS */}
          <div className="space-y-3 text-sm">

            {/* Row 1 */}
            <div className="grid grid-cols-6 px-4 items-center">
              <p>Suprava Giri</p>
              <p>Blood Test</p>
              <p>2025-11-25</p>
              <p>Normal</p>
              <span className="bg-green-200 px-4 py-1 rounded-full w-fit">
                Completed
              </span>
              <button className="text-blue-500">View</button>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-6 px-4 items-center">
              <p>Jane Smith</p>
              <p>X-Ray</p>
              <p>2025-11-35</p>
              <p>Pending</p>
              <span className="bg-yellow-200 px-4 py-1 rounded-full w-fit">
                Pending
              </span>
              <button className="text-blue-500">View</button>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-6 px-4 items-center">
              <p>Bob Wilson</p>
              <p>CT Scan</p>
              <p>2025-10-27</p>
              <p>Normal</p>
              <span className="bg-green-200 px-4 py-1 rounded-full w-fit">
                Completed
              </span>
              <button className="text-blue-500">View</button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
