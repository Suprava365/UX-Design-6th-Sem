import React from "react";

export default function AdminPatients() {
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
                  item === "Patient"
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
          <h1 className="text-2xl font-bold">Patient</h1>
          <button className="bg-[#7db9da] px-5 py-2 rounded-lg font-medium">
            + Add Patient
          </button>
        </div>

        {/* SEARCH + FILTER */}
        <div className="bg-white rounded-xl p-4 flex gap-4 items-center mb-6">
          <div className="flex-1 h-10 bg-[#e3f0f6] rounded-full"></div>
          <div className="w-24 h-10 bg-[#e3f0f6] rounded-full flex items-center justify-center text-sm">
            All
          </div>
        </div>

        {/* TABLE CARD */}
        <div className="bg-white rounded-xl p-6">

          {/* TABLE HEADER PLACEHOLDER */}
          <div className="h-10 bg-[#e3f0f6] rounded-lg mb-4"></div>

          {/* ROWS */}
          <div className="space-y-3 text-sm">

            {/* Row */}
            <div className="grid grid-cols-5 items-center">
              <p>Suprava Giri</p>
              <p>Supravagi12@gmail.com</p>
              <p>555-0101</p>
              <p>123 Main St</p>
              <span className="bg-green-200 px-4 py-1 rounded-full text-center w-fit">
                Confirmed
              </span>
            </div>

            <div className="grid grid-cols-5 items-center">
              <p>Jane Smith</p>
              <p>janeexample@gmail.com</p>
              <p>555-0102</p>
              <p>456 Oak Ave</p>
              <span className="bg-yellow-200 px-4 py-1 rounded-full text-center w-fit">
                Pending
              </span>
            </div>

            <div className="grid grid-cols-5 items-center">
              <p>Bob Wilson</p>
              <p>bobexam12@gmail.com</p>
              <p>555-014</p>
              <p>789 Pine Rd</p>
              <span className="bg-green-200 px-4 py-1 rounded-full text-center w-fit">
                Confirmed
              </span>
            </div>

            <div className="grid grid-cols-5 items-center">
              <p>Alice Smith</p>
              <p>Alicessmt43@gmail.com</p>
              <p>555-0167</p>
              <p>234 Elm St</p>
              <span className="bg-red-200 px-4 py-1 rounded-full text-center w-fit">
                Inactive
              </span>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}
