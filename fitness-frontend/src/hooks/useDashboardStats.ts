import { useMemo } from "react";
import { useActivities } from "./useActivities";

export function useDashboardStats() {
  const { data = [] } = useActivities();

  return useMemo(() => {
    const totalActivities = data.length;

    const totalDuration = data.reduce(
      (sum, activity) => sum + activity.duration,
      0
    );

    const totalCalories = data.reduce(
      (sum, activity) => sum + activity.caloriesBurned,
      0
    );

    const averageCalories =
      totalActivities === 0
        ? 0
        : Math.round(totalCalories / totalActivities);

    return {
      totalActivities,
      totalDuration,
      totalCalories,
      averageCalories,
    };
  }, [data]);
}