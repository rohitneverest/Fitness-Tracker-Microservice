import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useTheme } from "../context/ThemeContext";

function MainLayout() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex h-screen transition-colors duration-300 ${
        darkMode ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-900"
      }`}
    >
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Navbar />

        <main
          className={`flex-1 overflow-y-auto p-8 transition-colors duration-300 ${
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
