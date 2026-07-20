import api from "../api/axios";

export interface WaterResponse {
  id: string;
  keycloakId: string;
  amount: number;
  date: string;
}

export interface WaterRequest {
  amount: number;
}

export const getTodayWater = async (keycloakId: string) => {
  const { data } = await api.get<WaterResponse>("/api/water", {
    headers: {
      "X-User-ID": keycloakId,
    },
  });

  return data;
};

export const saveWater = async (
  keycloakId: string,
  request: WaterRequest
) => {
  const { data } = await api.put<WaterResponse>(
    "/api/water",
    request,
    {
      headers: {
        "X-User-ID": keycloakId,
      },
    }
  );

  return data;
};