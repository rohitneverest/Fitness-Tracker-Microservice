import { Plus, Pencil, Trash2 } from "lucide-react";
import { Dumbbell } from "lucide-react";
import { useActivities } from "../hooks/useActivities";
import { useState } from "react";
import AddActivityModal from "../components/AddActivityModal";
import { useDeleteActivity } from "../hooks/useDeleteActivity";
import { useTheme } from "../context/ThemeContext";
import { useSearch } from "../context/SearchContext";

function Activities() {
  const { data = [], isLoading, error } = useActivities();
  const deleteMutation = useDeleteActivity();

  const { darkMode } = useTheme();
  const { search } = useSearch();
  console.log("Search value:", search);

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<any>(null);

  const filteredActivities = data.filter((activity) =>
    activity.type.toLowerCase().includes(search.toLowerCase()),
  );
  console.log("Activities:", data);
  console.log("Filtered:", filteredActivities);

  if (isLoading)
    return (
      <div
        className={`flex h-screen flex-col items-center justify-center transition-colors duration-300 ${
          darkMode
            ? "bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 text-white"
            : "bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100 text-slate-900"
        }`}
      >
        <div className="animate-bounce">
          <Dumbbell
            size={60}
            className={darkMode ? "text-cyan-400" : "text-blue-600"}
          />
        </div>

        <h1 className="mt-6 text-3xl font-bold tracking-wide">Fitness AI</h1>

        <p className={darkMode ? "mt-2 text-slate-300" : "mt-2 text-slate-600"}>
          Fetching your workout history...
        </p>

        <div
          className={`mt-8 h-2 w-56 overflow-hidden rounded-full ${
            darkMode ? "bg-slate-700" : "bg-slate-300"
          }`}
        >
          <div
            className={`h-full w-1/2 animate-pulse rounded-full ${
              darkMode ? "bg-cyan-400" : "bg-blue-600"
            }`}
          />
        </div>
      </div>
    );

  if (error)
    return (
      <div
        className={`flex h-screen flex-col items-center justify-center px-6 text-center transition-colors duration-300 ${
          darkMode
            ? "bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 text-white"
            : "bg-gradient-to-br from-slate-50 via-red-50 to-orange-100 text-slate-900"
        }`}
      >
        <div
          className={`rounded-full p-5 ${
            darkMode ? "bg-red-500/15" : "bg-red-100"
          }`}
        >
          <Dumbbell
            size={60}
            className={darkMode ? "text-red-400" : "text-red-600"}
          />
        </div>

        <h1 className="mt-6 text-3xl font-bold">Oops!</h1>

        <p
          className={
            darkMode
              ? "mt-3 max-w-md text-slate-300"
              : "mt-3 max-w-md text-slate-600"
          }
        >
          We couldn't load your activities right now.
        </p>

        <p
          className={
            darkMode
              ? "mt-1 text-sm text-slate-500"
              : "mt-1 text-sm text-slate-500"
          }
        >
          Please try again in a few moments.
        </p>
      </div>
    );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1
            className={`text-3xl font-bold ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Activities
          </h1>

          <p className={darkMode ? "text-slate-400" : "text-gray-500"}>
            Track your workouts.
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
        >
          <Plus size={20} />
          Add Activity
        </button>
      </div>

      <div
        className={`overflow-hidden rounded-xl shadow ${
          darkMode ? "bg-slate-800" : "bg-white"
        }`}
      >
        <table className="w-full">
          <thead
            className={
              darkMode
                ? "bg-slate-700 text-white"
                : "bg-slate-100 text-slate-900"
            }
          >
            <tr>
              <th className="p-4 text-left">Type</th>
              <th className="p-4 text-left">Duration</th>
              <th className="p-4 text-left">Calories</th>
              <th className="p-4 text-left">Start Time</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredActivities.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className={`p-8 text-center ${
                    darkMode ? "text-slate-400" : "text-gray-500"
                  }`}
                >
                  No activities found.
                </td>
              </tr>
            ) : (
              filteredActivities.map((activity) => (
                <tr
                  key={activity.id}
                  className={`border-b ${
                    darkMode
                      ? "border-slate-700 text-white"
                      : "border-slate-200 text-slate-900"
                  }`}
                >
                  <td className="p-4">{activity.type}</td>

                  <td className="p-4">{activity.duration} min</td>

                  <td className="p-4">{activity.caloriesBurned}</td>

                  <td className="p-4">
                    {new Date(activity.startTime).toLocaleString()}
                  </td>

                  <td className="space-x-3 p-4">
                    <button
                      onClick={() => {
                        setEditing(true);
                        setSelectedActivity(activity);
                        setOpen(true);
                      }}
                      className="text-blue-500 hover:text-blue-600"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() => deleteMutation.mutate(activity.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <AddActivityModal
        open={open}
        editing={editing}
        activity={selectedActivity}
        onClose={() => {
          setOpen(false);
          setEditing(false);
          setSelectedActivity(null);
        }}
      />
    </div>
  );
}

export default Activities;
