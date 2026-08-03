import { Search, Menu } from "lucide-react";
import { useAuth } from "../auth/AuthContext";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../context/ThemeContext";
import ProfileMenu from "./ProfileMenu";
import NotificationMenu from "./NotificationMenu";
import { useSearch } from "../context/SearchContext";
import { useLocation } from "react-router-dom";

interface NavbarProps {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({ setSidebarOpen }: NavbarProps) {
  const { fullName } = useAuth();
  const { darkMode } = useTheme();
  const { search, setSearch } = useSearch();
  const location = useLocation();

  const showSearch = location.pathname === "/activities";

  return (
    <header
      className={`flex h-20 items-center justify-between border-b px-4 md:px-6 lg:px-8 transition-colors duration-300 ${
        darkMode ? "border-slate-700 bg-slate-900" : "border-gray-200 bg-white"
      }`}
    >
      {/* Left */}
      <div className="flex items-center gap-4">
        <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
          <Menu size={28} />
        </button>

        <div>
          <h2
            className={`text-xl md:text-2xl font-bold ${
              darkMode ? "text-white" : "text-slate-800"
            }`}
          >
            Dashboard
          </h2>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 md:gap-5">
        {showSearch && (
          <div
            className={`hidden md:flex items-center rounded-lg border px-3 py-2 ${
              darkMode
                ? "border-slate-700 bg-slate-800"
                : "border-gray-300 bg-white"
            }`}
          >
            <Search
              size={18}
              className={darkMode ? "text-slate-300" : "text-gray-500"}
            />

            <input
              type="text"
              placeholder="Search activities..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`ml-2 w-44 bg-transparent outline-none ${
                darkMode ? "text-white" : "text-slate-800"
              }`}
            />
          </div>
        )}

        <ThemeToggle />

        <NotificationMenu />

        <ProfileMenu username={fullName} />
      </div>
    </header>
  );
}

export default Navbar;
