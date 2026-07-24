import { useEffect, useState } from "react";
import { useAddActivity } from "../hooks/useAddActivity";
import { useUpdateActivity } from "../hooks/useUpdateActivity";
import { useTheme } from "../context/ThemeContext";

interface Props {
  open: boolean;
  onClose: () => void;
  editing?: boolean;
  activity?: any;
}

function AddActivityModal({ open, onClose, editing = false, activity }: Props) {
  const { mutate, isPending } = useAddActivity();
  const updateMutation = useUpdateActivity();

  const { darkMode } = useTheme();

  const [type, setType] = useState("RUNNING");
  const [duration, setDuration] = useState(30);
  const [caloriesBurned, setCaloriesBurned] = useState(200);
  const [startTime, setStartTime] = useState("");

  useEffect(() => {
    if (editing && activity) {
      setType(activity.type);
      setDuration(activity.duration);
      setCaloriesBurned(activity.caloriesBurned);

      setStartTime(
        activity.startTime
          ? new Date(activity.startTime).toISOString().slice(0, 16)
          : "",
      );
    }
  }, [editing, activity]);

  if (!open) return null;

  const resetForm = () => {
    setType("RUNNING");
    setDuration(30);
    setCaloriesBurned(200);
    setStartTime("");
  };

  const handleSubmit = () => {
    const payload = {
      type,
      duration,
      caloriesBurned,
      startTime,
    };

    if (editing) {
      updateMutation.mutate(
        {
          id: activity.id,
          data: payload,
        },
        {
          onSuccess: () => {
            resetForm();
            onClose();
          },
        },
      );
    } else {
      mutate(payload, {
        onSuccess: () => {
          resetForm();
          onClose();
        },
      });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div
        className={`w-[450px] rounded-2xl p-6 shadow-xl ${
          darkMode ? "bg-slate-800 text-white" : "bg-white text-slate-900"
        }`}
      >
        <h2 className="mb-6 text-2xl font-bold">
          {editing ? "Edit Activity" : "Add Activity"}
        </h2>

        <div className="space-y-4">
          <div>
            <label>Activity Type</label>

            <select
              className={`mt-1 w-full rounded border p-2 outline-none ${
                darkMode
                  ? "border-slate-600 bg-slate-700 text-white"
                  : "border-slate-300 bg-white text-slate-900"
              }`}
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option>RUNNING</option>
              <option>WALKING</option>
              <option>CYCLING</option>
              <option>SWIMMING</option>
              <option>GYM</option>
            </select>
          </div>

          <div>
            <label>Duration (minutes)</label>

            <input
              type="number"
              className="mt-1 w-full rounded border p-2"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
            />
          </div>

          <div>
            <label>Calories Burned</label>

            <input
              type="number"
              className="mt-1 w-full rounded border p-2"
              value={caloriesBurned}
              onChange={(e) => setCaloriesBurned(Number(e.target.value))}
            />
          </div>

          <div>
            <label>Start Time</label>

            <input
              type="datetime-local"
              className="mt-1 w-full rounded border p-2"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={() => {
              resetForm();
              onClose();
            }}
            className={`rounded px-4 py-2 transition ${
              darkMode
                ? "border border-slate-600 bg-slate-700 text-white hover:bg-slate-600"
                : "border bg-white hover:bg-slate-100"
            }`}
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={isPending || updateMutation.isPending}
            className="rounded bg-blue-600 px-4 py-2 text-white"
          >
            {editing
              ? updateMutation.isPending
                ? "Updating..."
                : "Update Activity"
              : isPending
                ? "Saving..."
                : "Save Activity"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddActivityModal;
