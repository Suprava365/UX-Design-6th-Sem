import React from "react";

export default function UserAppointments() { 
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
              { name: "Appointment", active: true },
              { name: "History", active: false },
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
        <div className="flex justify-between items-center mb-8">
          <div className="w-2/3 h-10 bg-[#d7e7ef] rounded-full"></div>
          <div className="text-right">
            <p className="font-semibold">John Doe</p>
            <p className="text-sm text-gray-500">Patient</p>
          </div>
        </div>

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">My Appointments</h1>
          <button className="bg-[#7db9da] px-5 py-2 rounded-lg font-medium">
            + Add Appointment
          </button>
        </div>

        {/* APPOINTMENT LIST */}
        <div className="space-y-6">

          {/* Appointment Card */}
          <div className="bg-white rounded-xl p-6 flex justify-between items-center">
            <div className="space-y-1">
              <p className="font-semibold">Dr. Sarah Johnson</p>
              <p className="text-sm text-gray-600">General Practitioner</p>
              <span className="inline-block mt-2 bg-green-200 text-sm px-4 py-1 rounded-full">
                Confirmed
              </span>
            </div>

            <div className="text-sm text-gray-700">
              <p>Dec 5, 2024</p>
              <p>10:00 AM</p>
            </div>

            <div className="text-sm text-gray-700">
              <p>Building A, Room 101</p>
              <p>+(555) 123-4567</p>
            </div>
          </div>

          {/* Appointment Card */}
          <div className="bg-white rounded-xl p-6 flex justify-between items-center">
            <div className="space-y-1">
              <p className="font-semibold">Dr. Mike Chen</p>
              <p className="text-sm text-gray-600">Cardiologist</p>
              <span className="inline-block mt-2 bg-green-200 text-sm px-4 py-1 rounded-full">
                Confirmed
              </span>
            </div>

            <div className="text-sm text-gray-700">
              <p>Dec 12, 2024</p>
              <p>2:30 PM</p>
            </div>

            <div className="text-sm text-gray-700">
              <p>Building B, Room 205</p>
              <p>+(555) 234-5678</p>
            </div>
          </div>

          {/* Appointment Card */}
          <div className="bg-white rounded-xl p-6 flex justify-between items-center">
            <div className="space-y-1">
              <p className="font-semibold">Dr. Emily Rodriguez</p>
              <p className="text-sm text-gray-600">Dermatologist</p>
              <span className="inline-block mt-2 bg-yellow-200 text-sm px-4 py-1 rounded-full">
                Pending
              </span>
            </div>

            <div className="text-sm text-gray-700">
              <p>Dec 19, 2024</p>
              <p>3:00 PM</p>
            </div>

            <div className="text-sm text-gray-700">
              <p>Building C, Room 302</p>
              <p>+(555) 345-6789</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
