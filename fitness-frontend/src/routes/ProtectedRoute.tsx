import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

interface Props {
  children: ReactNode;
}

function ProtectedRoute({ children }: Props) {
  const { authenticated } = useAuth();

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
