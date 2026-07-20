import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import keycloak from "./keycloak";

interface AuthContextType {
  authenticated: boolean;
  token: string | undefined;
  username: string;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authenticated, setAuthenticated] = useState(
    keycloak.authenticated ?? false,
  );
  const [token, setToken] = useState<string | undefined>(keycloak.token);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setAuthenticated(!!keycloak.authenticated);
    setToken(keycloak.token);

    setUsername(
      (keycloak.tokenParsed?.preferred_username as string) ||
        (keycloak.tokenParsed?.name as string) ||
        "",
    );

    console.log("Authenticated:", keycloak.authenticated);
    console.log("Access Token:", keycloak.token);
    console.log("Token Parsed:", keycloak.tokenParsed);
  }, []);

  const login = () => keycloak.login();

  const logout = () =>
    keycloak.logout({
      redirectUri: window.location.origin,
    });

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        token,
        username,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
