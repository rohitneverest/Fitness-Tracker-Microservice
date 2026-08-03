import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useTheme } from "../context/ThemeContext";

function MainLayout() {
  const { darkMode } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className={`flex h-screen transition-colors duration-300 ${
        darkMode ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-900"
      }`}
    >
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar setSidebarOpen={setSidebarOpen} />

        <main
          className={`flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 transition-colors duration-300 ${
            darkMode ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-900"
          }`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
