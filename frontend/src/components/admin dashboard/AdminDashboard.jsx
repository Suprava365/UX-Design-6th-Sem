import React from "react";

export default function AdminDashboard() {
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
                  item === "Overview"
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

        {/* WELCOME */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Welcome Back, Suprava</h1>
          <p className="text-sm text-gray-600">
            There is the latest update in 7 days, Check Out.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {[
            { title: "Total Patients", value: "2,305" },
            { title: "Total Doctors", value: "10" },
            { title: "Total Visitors", value: "23,051" },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-xl p-6"
            >
              <p className="text-sm text-gray-600 mb-1">{card.title}</p>
              <p className="text-2xl font-bold">{card.value}</p>
            </div>
          ))}
        </div>

        {/* PATIENT TRENDS */}
        <div className="mb-4">
          <h2 className="font-semibold mb-3">Patient Trends</h2>

          <div className="bg-white rounded-xl p-6">
            <p className="font-semibold mb-3">Patient Trends</p>

            {/* Chart (Pure SVG) */}
            <svg viewBox="0 0 600 200" className="w-full h-48">
              {/* Grid lines */}
              {[0, 50, 100, 150].map((y) => (
                <line
                  key={y}
                  x1="0"
                  y1={y}
                  x2="600"
                  y2={y}
                  stroke="#e5e7eb"
                />
              ))}

              {/* Line */}
              <polyline
                fill="none"
                stroke="#2563eb"
                strokeWidth="2"
                points="
                  0,140
                  80,120
                  160,135
                  240,95
                  320,110
                  400,85
                  480,80
                  560,60
                "
              />

              {/* Dots */}
              {[140, 120, 135, 95, 110, 85, 80, 60].map((y, i) => (
                <circle
                  key={i}
                  cx={i * 80}
                  cy={y}
                  r="4"
                  fill="#2563eb"
                />
              ))}
            </svg>

            {/* X Labels */}
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"].map(
                (m) => (
                  <span key={m}>{m}</span>
                )
              )}
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
