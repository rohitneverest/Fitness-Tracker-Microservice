import { useState, useRef, useEffect } from "react";
import { User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import keycloak from "../auth/keycloak";
import { useTheme } from "../context/ThemeContext";

interface Props {
  username: string;
}

function ProfileMenu({ username }: Props) {
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <div
        onClick={() => setOpen(!open)}
        className="flex cursor-pointer items-center gap-3"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
          {username.charAt(0).toUpperCase()}
        </div>

        <div>
          <p
            className={`font-semibold ${
              darkMode ? "text-white" : "text-slate-800"
            }`}
          >
            {username.charAt(0).toUpperCase() + username.slice(1)}
          </p>
        </div>
      </div>

      {open && (
        <div
          className={`absolute right-0 mt-3 w-52 rounded-xl shadow-lg ${
            darkMode ? "bg-slate-800 text-white" : "bg-white text-slate-800"
          }`}
        >
          <button
            onClick={() => navigate("/profile")}
            className="flex w-full items-center gap-3 px-4 py-3 hover:bg-blue-500 hover:text-white"
          >
            <User size={18} />
            My Profile
          </button>

          <button
            onClick={() => keycloak.logout()}
            className="flex w-full items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-500 hover:text-white"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;
