import { useEffect } from "react";
import { useAuth } from "../auth/AuthContext";
import { Dumbbell } from "lucide-react";

function Login() {
  const { login } = useAuth();

  useEffect(() => {
    login();
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 text-white">
      <div className="animate-bounce">
        <Dumbbell size={60} className="text-cyan-400" />
      </div>

      <h1 className="mt-6 text-3xl font-bold tracking-wide">Fitness AI</h1>

      <p className="mt-2 text-slate-300">Preparing your workout...</p>

      <div className="mt-8 h-2 w-56 overflow-hidden rounded-full bg-slate-700">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-cyan-400"></div>
      </div>
    </div>
  );
}

export default Login;
