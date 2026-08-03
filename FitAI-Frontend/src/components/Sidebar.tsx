import { Home, Activity, Brain, User, LogOut, Dumbbell, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { useTheme } from "../context/ThemeContext";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const { logout } = useAuth();
  const { darkMode } = useTheme();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 rounded-lg px-4 py-3 transition ${
      isActive
        ? "bg-blue-600 text-white"
        : darkMode
          ? "text-slate-300 hover:bg-slate-800 hover:text-white"
          : "text-slate-700 hover:bg-slate-200 hover:text-slate-900"
    }`;

  return (
    <>
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:static z-40 flex h-screen w-64 flex-col border-r p-5 transition-all duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0
        ${
          darkMode
            ? "border-slate-700 bg-slate-900"
            : "border-slate-200 bg-white"
        }`}
      >
        {/* Close Button (Mobile) */}
        <button
          className="mb-4 self-end lg:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <X />
        </button>

        <div className="mb-10 flex items-center gap-3">
          <Dumbbell className="text-blue-500" size={34} />

          <h1
            className={`text-2xl font-bold ${
              darkMode ? "text-white" : "text-slate-800"
            }`}
          >
            FitAI
          </h1>
        </div>

        <nav className="flex flex-col gap-3">
          <NavLink
            to="/"
            end
            className={linkClass}
            onClick={() => setSidebarOpen(false)}
          >
            <Home size={20} />
            Dashboard
          </NavLink>

          <NavLink
            to="/activities"
            className={linkClass}
            onClick={() => setSidebarOpen(false)}
          >
            <Activity size={20} />
            Activities
          </NavLink>

          <NavLink
            to="/recommendations"
            className={linkClass}
            onClick={() => setSidebarOpen(false)}
          >
            <Brain size={20} />
            AI Coach
          </NavLink>

          <NavLink
            to="/profile"
            className={linkClass}
            onClick={() => setSidebarOpen(false)}
          >
            <User size={20} />
            Profile
          </NavLink>
        </nav>

        <button
          onClick={logout}
          className="mt-auto flex items-center gap-3 rounded-lg bg-red-500 px-4 py-3 text-white transition hover:bg-red-600"
        >
          <LogOut size={20} />
          Logout
        </button>
      </aside>
    </>
  );
}

export default Sidebar;
