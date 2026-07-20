import StatCard from "../cards/StatCard";
import TodayGoal from "../components/TodayGoal";
import WeeklyChart from "../components/WeeklyChart";
import { useDashboardStats } from "../hooks/useDashboardStats";

import { Flame, Footprints, Dumbbell, Droplets } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

import WaterTracker from "../components/WaterTracker";
import { useWater } from "../hooks/useWaterTracker";

function Dashboard() {
  const { darkMode } = useTheme();
  const { totalActivities, totalDuration, totalCalories } = useDashboardStats();
  const { water } = useWater();
  return (
    <div>
      <h1
        className={`mb-8 text-3xl font-bold ${
          darkMode ? "text-white" : "text-slate-800"
        }`}
      >
        Fitness Dashboard
      </h1>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Calories Burned"
          value={`${totalCalories} kcal`}
          icon={Flame}
          color="bg-red-500"
        />

        <StatCard
          title="Workout Time"
          value={`${totalDuration} min`}
          icon={Footprints}
          color="bg-blue-500"
        />

        <StatCard
          title="Activities"
          value={String(totalActivities)}
          icon={Dumbbell}
          color="bg-green-500"
        />

        <StatCard
          title="Water Intake"
          value={`${(water / 1000).toFixed(2)} L`}
          icon={Droplets}
          color="bg-cyan-500"
        />
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <WeeklyChart />
        </div>

        <div className="space-y-6">
          <TodayGoal />
          <WaterTracker />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
