import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`rounded-lg border p-2 transition ${
        darkMode
          ? "border-slate-700 bg-slate-800 text-yellow-400"
          : "border-gray-300 bg-white text-slate-700"
      }`}
    >
      {darkMode ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  );
}

export default ThemeToggle;
