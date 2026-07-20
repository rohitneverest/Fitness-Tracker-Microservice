import api from "../api/axios";
import keycloak from "../auth/keycloak";
import type { Activity } from "../types/activity";

export async function getActivities(): Promise<Activity[]> {
  const keycloakId = keycloak.tokenParsed?.sub;

  const response = await api.get("/api/activities", {
    headers: {
      "X-User-ID": keycloakId,
    },
  });

  return response.data;
}

// 👇 Add this below getActivities()

export async function addActivity(activity: {
  type: string;
  duration: number;
  caloriesBurned: number;
  startTime: string;
}) {
  const keycloakId = keycloak.tokenParsed?.sub;

  const response = await api.post("/api/activities", {
    keycloakId,
    type: activity.type,
    duration: activity.duration,
    caloriesBurned: activity.caloriesBurned,
    startTime: activity.startTime,
    additionalMetrics: {},
  });

  return response.data;
}

//delete activity
export const deleteActivity = async (id: string) => {
  await api.delete(`/api/activities/${id}`);
};

//update activity
export const updateActivity = async ({
  id,
  data,
}: {
  id: string;
  data: any;
}) => {
  const response = await api.put(`/api/activities/${id}`, data);

  return response.data;
};