import { useActivities } from "./useActivities";

const DAILY_GOAL = 60;

export function useTodayGoal() {
  const { data: activities = [] } = useActivities();

  const today = new Date().toISOString().split("T")[0];

const completedMinutes = activities
  .filter(
    (activity) =>
      activity.startTime &&
      activity.startTime.startsWith(today)
  )
  .reduce((sum, activity) => sum + activity.duration, 0);

  const progress = Math.min(
    Math.round((completedMinutes / DAILY_GOAL) * 100),
    100
  );

  return {
    completedMinutes,
    goal: DAILY_GOAL,
    progress,
  };
}