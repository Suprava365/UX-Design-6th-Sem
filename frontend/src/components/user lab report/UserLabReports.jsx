import React from "react";

export default function UserLabReports() {
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
              { name: "History", active: false },
              { name: "Lab Reports", active: true },
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

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Lab Reports</h1>
            <p className="text-sm text-gray-600">
              View and download your laboratory test results
            </p>
          </div>
          <button className="bg-[#7db9da] px-5 py-2 rounded-lg font-medium">
            Request Lab Test
          </button>
        </div>

        
        <div className="space-y-5">

          {/* REPORT CARD */}
          <div className="bg-white rounded-xl p-6 flex justify-between items-center">
            <div>
              <p className="font-semibold">Complete Blood Count (CBC)</p>
              <p className="text-sm text-gray-600">
                Nov 28, 2024 &nbsp; | &nbsp; Ordered by: Dr. Sarah Johnson
              </p>
              <div className="mt-3 flex gap-3">
                <button className="bg-[#7db9da] px-4 py-2 rounded-lg text-sm">
                  View Report
                </button>
                <button className="bg-[#7db9da] px-4 py-2 rounded-lg text-sm">
                  Download
                </button>
              </div>
            </div>
            <span className="bg-green-200 px-4 py-1 rounded-full text-sm">
              Ready
            </span>
          </div>

          <div className="bg-white rounded-xl p-6 flex justify-between items-center">
            <div>
              <p className="font-semibold">Lipid Panel</p>
              <p className="text-sm text-gray-600">
                Nov 25, 2024 &nbsp; | &nbsp; Ordered by: Dr. Mike Chen
              </p>
              <div className="mt-3 flex gap-3">
                <button className="bg-[#7db9da] px-4 py-2 rounded-lg text-sm">
                  View Report
                </button>
                <button className="bg-[#7db9da] px-4 py-2 rounded-lg text-sm">
                  Download
                </button>
              </div>
            </div>
            <span className="bg-green-200 px-4 py-1 rounded-full text-sm">
              Ready
            </span>
          </div>

          <div className="bg-white rounded-xl p-6 flex justify-between items-center">
            <div>
              <p className="font-semibold">X-Ray Chest</p>
              <p className="text-sm text-gray-600">
                Nov 20, 2024 &nbsp; | &nbsp; Ordered by: Dr. Radiology
              </p>
              <div className="mt-3 flex gap-3">
                <button className="bg-[#7db9da] px-4 py-2 rounded-lg text-sm">
                  View Report
                </button>
                <button className="bg-[#7db9da] px-4 py-2 rounded-lg text-sm">
                  Download
                </button>
              </div>
            </div>
            <span className="bg-green-200 px-4 py-1 rounded-full text-sm">
              Ready
            </span>
          </div>

          <div className="bg-white rounded-xl p-6 flex justify-between items-center">
            <div>
              <p className="font-semibold">Blood Glucose Test</p>
              <p className="text-sm text-gray-600">
                Nov 15, 2024 &nbsp; | &nbsp; Ordered by: Dr. Sarah Johnson
              </p>
              <div className="mt-3 flex gap-3">
                <button className="bg-[#7db9da] px-4 py-2 rounded-lg text-sm">
                  View Report
                </button>
                <button className="bg-[#7db9da] px-4 py-2 rounded-lg text-sm">
                  Download
                </button>
              </div>
            </div>
            <span className="bg-green-200 px-4 py-1 rounded-full text-sm">
              Ready
            </span>
          </div>

          <div className="bg-white rounded-xl p-6 flex justify-between items-center">
            <div>
              <p className="font-semibold">Thyroid Function Test</p>
              <p className="text-sm text-gray-600">
                Nov 10, 2024 &nbsp; | &nbsp; Ordered by: Dr. Emily Rodriguez
              </p>
              <div className="mt-3 flex gap-3">
                <button className="bg-[#7db9da] px-4 py-2 rounded-lg text-sm">
                  View Report
                </button>
                <button className="bg-[#7db9da] px-4 py-2 rounded-lg text-sm">
                  Download
                </button>
              </div>
            </div>
            <span className="bg-yellow-200 px-4 py-1 rounded-full text-sm">
              Processing
            </span>
          </div>

        </div>
      </main>
    </div>
  );
}
