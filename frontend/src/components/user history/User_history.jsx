import React from "react";

export default function UserHistory() {
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
          <nav className="mt-6">
            {[
              { name: "Dashboard", active: false },
              { name: "Appointment", active: false },
              { name: "History", active: true },
              { name: "Lab Reports", active: false },
              { name: "Settings", active: false },
            ].map((item) => (
              <div
                key={item.name}
                className={`px-6 py-3 cursor-pointer ${
                  item.active
                    ? "bg-[#7db9da] font-semibold"
                    : "hover:bg-[#4f8fb1]"
                }`}
              >
                {item.name}
              </div>
            ))}
          </nav>
        </div>

        {/* Logout */}
        <div className="px-6 py-4">Logout</div>
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

        {/* TITLE */}
        <h1 className="text-2xl font-bold mb-4">Medical History</h1>

        {/* FILTER BAR */}
        <div className="bg-white rounded-xl p-4 flex gap-4 items-center mb-6">
          <div className="flex-1 h-10 bg-[#e3f0f6] rounded-full"></div>
          <div className="w-32 h-10 bg-[#e3f0f6] rounded-full flex items-center justify-center text-sm text-gray-600">
            mm/dd/yyyy
          </div>
        </div>

        {/* HISTORY LIST */}
        <div className="space-y-6">

          
          <div className="bg-white rounded-xl p-6 flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <span className="bg-[#d7e7ef] px-4 py-1 rounded-full text-sm">
                Clinic Visit
              </span>
              <div>
                <p className="font-semibold">Dr. Sarah Johnson</p>
                <p className="text-sm text-gray-600">Regular Checkup</p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-semibold">Nov 28, 2024</p>
              <p className="text-sm text-gray-600">Normal</p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="bg-white rounded-xl p-6 flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <span className="bg-green-200 px-4 py-1 rounded-full text-sm">
                Lab Test
              </span>
              <div>
                <p className="font-semibold">Lab Technician</p>
                <p className="text-sm text-gray-600">Blood Test</p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-semibold">Nov 25, 2024</p>
              <p className="text-sm text-gray-600">Completed</p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="bg-white rounded-xl p-6 flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <span className="bg-yellow-200 px-4 py-1 rounded-full text-sm">
                Prescription
              </span>
              <div>
                <p className="font-semibold">Dr. Sarah Johnson</p>
                <p className="text-sm text-gray-600">Pain Medication</p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-semibold">Nov 15, 2024</p>
              <p className="text-sm text-gray-600">Active</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
