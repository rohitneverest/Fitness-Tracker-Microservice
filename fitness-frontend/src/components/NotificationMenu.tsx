import { Bell, CheckCircle, Droplets } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useNotifications } from "../hooks/useNotification";

function NotificationMenu() {
  const { darkMode } = useTheme();
  const [open, setOpen] = useState(false);
  const notifications = useNotifications();

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`rounded-full p-2 transition ${
          darkMode
            ? "bg-slate-700 hover:bg-slate-600"
            : "bg-slate-100 hover:bg-slate-200"
        }`}
      >
        <Bell size={20} className={darkMode ? "text-white" : ""} />
      </button>

      {open && (
        <div
          className={`absolute right-0 mt-3 w-80 rounded-xl border shadow-xl z-50 ${
            darkMode
              ? "border-slate-700 bg-slate-800"
              : "border-gray-200 bg-white"
          }`}
        >
          <div
            className={`border-b px-4 py-3 font-semibold ${
              darkMode
                ? "border-slate-700 text-white"
                : "border-gray-200 text-slate-800"
            }`}
          >
            Notifications
          </div>

          {notifications.length === 0 ? (
            <p
              className={`p-4 text-sm ${
                darkMode ? "text-slate-300" : "text-gray-500"
              }`}
            >
              No new notifications.
            </p>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`flex items-center gap-3 border-b px-4 py-3 last:border-none ${
                  darkMode
                    ? "border-slate-700 hover:bg-slate-700"
                    : "border-gray-100 hover:bg-gray-50"
                }`}
              >
                {notification.type === "water" && (
                  <Droplets size={16} className="text-cyan-500" />
                )}

                {notification.type === "success" && (
                  <CheckCircle size={16} className="text-green-500" />
                )}

                {notification.type === "activity" && (
                  <Bell size={16} className="text-blue-500" />
                )}

                <span
                  className={`text-sm ${
                    darkMode ? "text-white" : "text-slate-700"
                  }`}
                >
                  {notification.message}
                </span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default NotificationMenu;
