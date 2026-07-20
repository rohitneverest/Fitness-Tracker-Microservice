import { useTheme } from "../context/ThemeContext";
import { useTodayGoal } from "../hooks/useTodayGoal";

function TodayGoal() {
  const { darkMode } = useTheme();

  const { completedMinutes, goal, progress } = useTodayGoal();

  return (
    <div
      className={`rounded-2xl p-6 shadow transition ${
        darkMode ? "bg-slate-800 text-white" : "bg-white text-slate-900"
      }`}
    >
      <h2 className="text-xl font-bold">Today's Goal</h2>

      <p className={`mt-2 ${darkMode ? "text-slate-300" : "text-slate-500"}`}>
        {completedMinutes} / {goal} mins completed
      </p>

      <div
        className={`mt-6 h-3 overflow-hidden rounded-full ${
          darkMode ? "bg-slate-700" : "bg-slate-200"
        }`}
      >
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-3 font-semibold">{progress}% Completed</p>
    </div>
  );
}

export default TodayGoal;
