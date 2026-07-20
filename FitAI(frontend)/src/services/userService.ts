import api from "../api/axios";
import keycloak from "../auth/keycloak";

export async function getCurrentUser() {
  const keycloakId = keycloak.tokenParsed?.sub;

  const response = await api.get("/api/users/me", {
    headers: {
      "X-User-ID": keycloakId,
    },
  });

  return response.data;
}

export async function updateCurrentUser(data: any) {
  const keycloakId = keycloak.tokenParsed?.sub;

  const response = await api.put("/api/users/me", data, {
    headers: {
      "X-User-ID": keycloakId,
    },
  });

  return response.data;
}