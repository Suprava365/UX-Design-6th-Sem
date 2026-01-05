import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import LogoutConfirmModal from "./LogoutConfirmModal";
// If you have AuthContext:
// import { useAuth } from "../context/AuthContext";

export default function UserLayout() {
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();
  // const { logout } = useAuth();

  const handleLogout = () => {
    console.log("User logged out");
    // logout(); // clear auth state
    navigate("/login");
  };

  return (
    <>
      <div className="flex h-screen bg-[#e3f0f6]">

        {/* SIDEBAR */}
        <aside className="w-64 bg-[#2f6f8f] text-white flex flex-col justify-between">

          {/* TOP */}
          <div>
            <div className="px-6 py-6 border-b border-white/20">
              <h2 className="text-xl font-bold">User Panel</h2>
              <p className="text-sm opacity-80">Smartlite Medical</p>
            </div>

            {/* NAV */}
            <nav className="mt-6 text-sm space-y-1">
              {[
                { name: "Dashboard", path: "/user" },
                { name: "Appointments", path: "/user/appointments" },
                { name: "Lab Reports", path: "/user/lab-reports" },
                { name: "History", path: "/user/history" },
                { name: "Settings", path: "/user/settings" },
              ].map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end
                  className={({ isActive }) =>
                    `block px-6 py-3 rounded-r-full transition ${
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
          <div className="px-6 py-4 border-t border-white/20">
            <button
              onClick={() => setShowLogout(true)}
              className="w-full text-left text-sm hover:underline"
            >
              Logout
            </button>
          </div>
        </aside>

        {/* MAIN */}
        <main className="flex-1 p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* LOGOUT MODAL */}
      {showLogout && (
        <LogoutConfirmModal
          onClose={() => setShowLogout(false)}
          onConfirm={() => {
            setShowLogout(false);
            handleLogout();
          }}
        />
      )}
    </>
  );
}
