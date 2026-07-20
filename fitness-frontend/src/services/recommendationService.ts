import api from "../api/axios";
import keycloak from "../auth/keycloak";
import type { Recommendation } from "../types/recommendation";

export async function getRecommendations(): Promise<Recommendation[]> {
  const keycloakId = keycloak.tokenParsed?.sub;

  const response = await api.get(
    `/api/recommendations/user/${keycloakId}`
  );

  return response.data;
}