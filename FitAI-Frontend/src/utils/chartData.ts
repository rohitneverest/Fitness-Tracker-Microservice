import type { Activity } from "../types/activity";

export function getWeeklyCalories(activities: Activity[]) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const result = days.map((day) => ({
    day,
    calories: 0,
  }));

  activities.forEach((activity) => {
    const date = new Date(activity.startTime);
    const index = date.getDay();

    result[index].calories += activity.caloriesBurned;
  });

  return result;
}