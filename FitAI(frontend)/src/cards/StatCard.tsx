import type { LucideIcon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface Props {
  title: string;
  value: string;
  icon: LucideIcon;
  color: string;
}

function StatCard({ title, value, icon: Icon, color }: Props) {
  const { darkMode } = useTheme();

  return (
    <div
      className={`rounded-2xl p-6 shadow transition-all duration-300 ${
        darkMode ? "bg-slate-800 text-white" : "bg-white text-slate-800"
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className={darkMode ? "text-slate-400" : "text-slate-500"}>
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">{value}</h2>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-xl ${color}`}
        >
          <Icon className="text-white" size={28} />
        </div>
      </div>
    </div>
  );
}

export default StatCard;
