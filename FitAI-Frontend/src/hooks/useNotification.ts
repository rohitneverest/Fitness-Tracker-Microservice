import { useActivities } from "./useActivities";
import { useWaterTracker } from "./useWaterTracker";

export function useNotifications() {
  const { data: activities = [] } = useActivities();
  const { water, goal } = useWaterTracker();

  const notifications = [];

  if (water < goal) {
    notifications.push({
      id: 1,
      type: "water",
      message: `You've had ${water} ml of water today. Stay hydrated!`,
    });
  } else {
    notifications.push({
      id: 2,
      type: "success",
      message: "🎉 Daily water goal completed!",
    });
  }

  if (activities.length === 0) {
    notifications.push({
      id: 3,
      type: "activity",
      message: "No workout logged today.",
    });
  } else {
    notifications.push({
      id: 4,
      type: "activity",
      message: `${activities.length} workout(s) logged.`,
    });
  }

  return notifications;
}