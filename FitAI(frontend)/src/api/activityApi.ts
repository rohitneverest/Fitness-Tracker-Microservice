import api from "./axios";

export interface Activity {
  id: string;
  type: string;
  duration: number;
  caloriesBurned: number;
  startTime: string;
}

export interface ActivityRequest {
  type: string;
  duration: number;
  caloriesBurned: number;
  startTime: string;
}

export const getActivities = async (): Promise<Activity[]> => {
  const response = await api.get("/api/activities");
  return response.data;
};

export const addActivity = async (activity: ActivityRequest) => {
  const response = await api.post("/api/activities", activity);
  return response.data;
};