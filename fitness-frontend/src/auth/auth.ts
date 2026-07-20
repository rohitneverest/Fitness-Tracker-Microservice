import keycloak from "./keycloak";

export async function initKeycloak() {
  try {
    const authenticated = await keycloak.init({
      onLoad: "check-sso",
      pkceMethod: "S256",
      checkLoginIframe: false,
    });

    console.log("Authenticated:", authenticated);

    return authenticated;
  } catch (error) {
    console.error("Keycloak initialization failed:", error);
  }
}