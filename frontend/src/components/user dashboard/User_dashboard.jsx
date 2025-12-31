import React from "react";

export default function UserDashboard() {
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
              "Dashboard",
              "Appointment",
              "History",
              "Lab Reports",
              "Settings",
            ].map((item, index) => (
              <div
                key={item}
                className={`px-6 py-3 cursor-pointer ${
                  index === 0
                    ? "bg-[#7db9da] text-white font-semibold"
                    : "hover:bg-[#4f8fb1]"
                }`}
              >
                {item}
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

        {/* STATS CARDS */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            { title: "Upcoming Appointments", value: "2", color: "bg-red-200" },
            { title: "Pending Lab Reports", value: "1", color: "bg-yellow-200" },
            { title: "Recent Visits", value: "5", color: "bg-green-200" },
            { title: "Health Score", value: "92%", color: "bg-purple-200" },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-lg p-4 flex justify-between items-center"
            >
              <div>
                <p className="text-sm mb-1">{card.title}</p>
                <p className="text-xl font-bold">{card.value}</p>
              </div>
              <div className={`w-8 h-8 rounded ${card.color}`}></div>
            </div>
          ))}
        </div>

        {/* LOWER SECTIONS */}
        <div className="grid grid-cols-2 gap-6">

          {/* UPCOMING APPOINTMENTS */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="font-semibold mb-4">Upcoming Appointments</h2>

            {[
              {
                name: "Dr. Sarah Johnson",
                date: "Dec 5, 2024 at 10:00 AM",
                type: "Checkup",
              },
              {
                name: "Dr. Mike Chen",
                date: "Dec 12, 2024 at 2:30 PM",
                type: "Follow-up",
              },
            ].map((appt) => (
              <div
                key={appt.name}
                className="bg-[#e3f0f6] rounded-lg p-4 flex justify-between items-center mb-4"
              >
                <div>
                  <p className="font-semibold">{appt.name}</p>
                  <p className="text-sm text-gray-600">{appt.date}</p>
                  <p className="text-sm text-[#2f6f8f]">{appt.type}</p>
                </div>
                <button className="bg-[#7db9da] px-4 py-2 rounded-lg">
                  View
                </button>
              </div>
            ))}
          </div>

          {/* RECENT LAB REPORTS */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="font-semibold mb-4">Recent Lab Reports</h2>

            {[
              { test: "Blood Test", date: "Nov 28, 2024" },
              { test: "X-Ray", date: "Nov 25, 2024" },
            ].map((report) => (
              <div
                key={report.test}
                className="bg-[#e3f0f6] rounded-lg p-4 flex justify-between items-center mb-4"
              >
                <div>
                  <p className="font-semibold">{report.test}</p>
                  <p className="text-sm text-gray-600">{report.date}</p>
                </div>
                <span className="bg-green-200 px-4 py-1 rounded-lg text-sm">
                  Readygit
                </span>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
