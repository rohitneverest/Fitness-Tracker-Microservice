import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

function Login() {
  const { login, authenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) {
      navigate("/", { replace: true });
    }
  }, [authenticated, navigate]);

  return (
    <div className="flex h-screen items-center justify-center bg-slate-100">
      <button
        onClick={login}
        className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
      >
        Login with Keycloak
      </button>
    </div>
  );
}

export default Login;
