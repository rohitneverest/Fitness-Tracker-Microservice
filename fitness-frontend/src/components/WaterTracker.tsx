import { Droplets, Minus, Plus } from "lucide-react";
import { useWater } from "../hooks/useWater";
import { useTheme } from "../context/ThemeContext";

function WaterTracker() {
  const { water, goal, percent, loading, addWater, removeWater } = useWater();
  const { darkMode } = useTheme();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={`rounded-2xl p-6 shadow transition ${
        darkMode ? "bg-slate-800 text-white" : "bg-white text-slate-900"
      }`}
    >
      <div className="mb-5 flex items-center gap-3">
        <Droplets className="text-cyan-500" size={28} />

        <div>
          <h2 className="text-xl font-bold">Water Intake</h2>

          <p
            className={`text-sm ${
              darkMode ? "text-slate-300" : "text-gray-500"
            }`}
          >
            Daily Goal
          </p>
        </div>
      </div>

      <div className="mb-3 flex justify-between">
        <span className="font-semibold">{water} ml</span>

        <span className={darkMode ? "text-slate-300" : "text-gray-500"}>
          {goal} ml
        </span>
      </div>

      <div
        className={`h-3 overflow-hidden rounded-full ${
          darkMode ? "bg-slate-700" : "bg-slate-200"
        }`}
      >
        <div
          className="h-full rounded-full bg-cyan-500 transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>

      <p className="mt-3 text-center font-semibold text-cyan-600">
        {percent}% Complete
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={removeWater}
          className="rounded-full bg-red-500 p-3 text-white hover:bg-red-600"
        >
          <Minus size={20} />
        </button>

        <button
          onClick={addWater}
          className="rounded-full bg-cyan-500 p-3 text-white hover:bg-cyan-600"
        >
          <Plus size={20} />
        </button>
      </div>

      <p
        className={`mt-4 text-center text-sm ${
          darkMode ? "text-slate-300" : "text-gray-500"
        }`}
      >
        Each click = 250 ml
      </p>
    </div>
  );
}

export default WaterTracker;
