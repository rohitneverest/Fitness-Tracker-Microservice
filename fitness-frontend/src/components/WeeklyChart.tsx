import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { useActivities } from "../hooks/useActivities";
import { getWeeklyCalories } from "../utils/chartData";

function WeeklyChart() {
  const { data = [] } = useActivities();

  const chartData = getWeeklyCalories(data);

  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold text-slate-800">
        Weekly Calories Burned
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="4 4" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="calories"
              stroke="#2563EB"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default WeeklyChart;
