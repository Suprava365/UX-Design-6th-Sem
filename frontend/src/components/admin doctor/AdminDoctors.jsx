import React from "react";

export default function AdminDoctors() {
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
                  item === "Doctors"
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
          <h1 className="text-2xl font-bold">Doctors</h1>
          <button className="bg-[#7db9da] px-5 py-2 rounded-lg font-medium">
            + Add Doctor
          </button>
        </div>

        {/* DOCTORS GRID */}
        <div className="grid grid-cols-4 gap-6">

          {/* Doctor Card */}
          <div className="bg-white rounded-xl p-6 text-center">
            <h3 className="font-semibold text-lg">Dr. Smith</h3>
            <p className="text-sm text-gray-600 mb-4">Cardiology</p>

            <p className="text-sm mb-1">
              <span className="font-semibold">Patients:</span> 45
            </p>

            <span className="inline-block bg-green-200 px-4 py-1 rounded-full text-sm mb-4">
              Active
            </span>

            <div className="flex justify-center gap-6 text-sm">
              <button className="text-blue-500">Edit</button>
              <button className="text-red-500">Delete</button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 text-center">
            <h3 className="font-semibold text-lg">Dr. Johnson</h3>
            <p className="text-sm text-gray-600 mb-4">Neurology</p>

            <p className="text-sm mb-1">
              <span className="font-semibold">Patients:</span> 32
            </p>

            <span className="inline-block bg-green-200 px-4 py-1 rounded-full text-sm mb-4">
              Active
            </span>

            <div className="flex justify-center gap-6 text-sm">
              <button className="text-blue-500">Edit</button>
              <button className="text-red-500">Delete</button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 text-center">
            <h3 className="font-semibold text-lg">Dr. Davis</h3>
            <p className="text-sm text-gray-600 mb-4">Orthopedics</p>

            <p className="text-sm mb-1">
              <span className="font-semibold">Patients:</span> 28
            </p>

            <span className="inline-block bg-yellow-200 px-4 py-1 rounded-full text-sm mb-4">
              On Leave
            </span>

            <div className="flex justify-center gap-6 text-sm">
              <button className="text-blue-500">Edit</button>
              <button className="text-red-500">Delete</button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 text-center">
            <h3 className="font-semibold text-lg">Dr. Wilson</h3>
            <p className="text-sm text-gray-600 mb-4">Pediatrics</p>

            <p className="text-sm mb-1">
              <span className="font-semibold">Patients:</span> 55
            </p>

            <span className="inline-block bg-green-200 px-4 py-1 rounded-full text-sm mb-4">
              Active
            </span>

            <div className="flex justify-center gap-6 text-sm">
              <button className="text-blue-500">Edit</button>
              <button className="text-red-500">Delete</button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
