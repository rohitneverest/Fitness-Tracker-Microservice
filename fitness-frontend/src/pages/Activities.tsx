import { Plus, Pencil, Trash2 } from "lucide-react";
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
      <h2 className={darkMode ? "text-white" : "text-slate-900"}>Loading...</h2>
    );

  if (error)
    return (
      <h2 className={darkMode ? "text-white" : "text-slate-900"}>
        Something went wrong.
      </h2>
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
