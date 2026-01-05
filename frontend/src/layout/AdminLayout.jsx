import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function AdminLayout() {
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

          {/* MENU */}
          <nav className="mt-6 text-sm space-y-1">
            {[
              { name: "Overview", path: "/admin" },
              { name: "Patient", path: "/admin/patient" },
              { name: "Appointment", path: "/admin/appointment" },
              { name: "Doctors", path: "/admin/doctors" },
              { name: "Staff", path: "/admin/staff" },
            
              { name: "Lab Reports", path: "/admin/lab-reports" },
              { name: "Settings", path: "/admin/settings" },
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end
                className={({ isActive }) =>
                  `block px-6 py-3 ${
                    isActive
                      ? "bg-[#7db9da] font-semibold"
                      : "hover:bg-[#4f8fb1]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* LOGOUT */}
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

        {/* 🔁 THIS IS WHERE PAGE CONTENT CHANGES */}
        <Outlet />

      </main>
    </div>
  );
}
