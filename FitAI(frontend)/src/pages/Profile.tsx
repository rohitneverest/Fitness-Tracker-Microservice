import { useState } from "react";
import {
  User,
  Mail,
  Edit3,
  Save,
  Dumbbell,
  Ruler,
  Weight,
  Calendar,
} from "lucide-react";

import { useCurrentUser } from "../hooks/useCurrentUser";
import { useUpdateCurrentUser } from "../hooks/useUpdatedCurrentUser";
import { useTheme } from "../context/ThemeContext";

function Profile() {
  const { data, isLoading, error } = useCurrentUser();
  const updateProfile = useUpdateCurrentUser();
  const { darkMode } = useTheme();

  const [editing, setEditing] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState("");
  const [fitnessGoal, setFitnessGoal] = useState("");

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

  const startEditing = () => {
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setAge(data.age ?? 0);
    setHeight(data.height ?? 0);
    setWeight(data.weight ?? 0);
    setGender(data.gender ?? "");
    setFitnessGoal(data.fitnessGoal ?? "");
    setEditing(true);
  };

  const saveProfile = () => {
    updateProfile.mutate(
      {
        firstName,
        lastName,
        age,
        height,
        weight,
        gender,
        fitnessGoal,
      },
      {
        onSuccess: () => setEditing(false),
      },
    );
  };

  const inputClass = `mt-2 w-full rounded-xl border px-4 py-3 outline-none transition ${
    darkMode
      ? "border-slate-600 bg-slate-700 text-white focus:border-blue-500"
      : "border-slate-300 bg-white text-slate-900 focus:border-blue-500"
  }`;

  return (
    <div className="space-y-8">
      {/* Header */}

      <div
        className={`rounded-3xl p-8 shadow-lg ${
          darkMode ? "bg-slate-800 text-white" : "bg-white"
        }`}
      >
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-6">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-4xl font-bold text-white shadow-lg">
              {data.firstName?.charAt(0).toUpperCase()}
            </div>

            <div>
              <h1 className="text-3xl font-bold">
                {data.firstName} {data.lastName}
              </h1>

              <div
                className={`mt-2 flex items-center gap-2 ${
                  darkMode ? "text-slate-300" : "text-slate-500"
                }`}
              >
                <Mail size={18} />
                {data.email}
              </div>
            </div>
          </div>

          {!editing ? (
            <button
              onClick={startEditing}
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              <Edit3 size={18} />
              Edit Profile
            </button>
          ) : (
            <button
              onClick={saveProfile}
              className="flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              <Save size={18} />
              Save Changes
            </button>
          )}
        </div>
      </div>

      {/* Account Information */}

      <div
        className={`rounded-2xl shadow ${
          darkMode ? "bg-slate-800" : "bg-white"
        }`}
      >
        <div className="border-b border-slate-200 px-6 py-4 dark:border-slate-700">
          <h2
            className={`text-xl font-bold ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Account Information
          </h2>

          <p className={darkMode ? "text-slate-400" : "text-slate-500"}>
            These details cannot be edited.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
          <div>
            <label className="text-sm font-semibold text-blue-600">
              Full Name
            </label>

            <p
              className={`mt-2 rounded-lg border p-3 ${
                darkMode
                  ? "border-slate-700 bg-slate-700"
                  : "border-slate-200 bg-slate-50"
              }`}
            >
              {data.firstName} {data.lastName}
            </p>
          </div>

          <div>
            <label className="text-sm font-semibold text-blue-600">
              Email Address
            </label>

            <p
              className={`mt-2 break-all rounded-lg border p-3 ${
                darkMode
                  ? "border-slate-700 bg-slate-700"
                  : "border-slate-200 bg-slate-50"
              }`}
            >
              {data.email}
            </p>
          </div>
        </div>
      </div>
      {/* Personal Information */}

      <div
        className={`rounded-2xl shadow ${
          darkMode ? "bg-slate-800" : "bg-white"
        }`}
      >
        <div className="border-b border-slate-200 px-6 py-4 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <User className="text-blue-600" size={22} />

            <div>
              <h2
                className={`text-xl font-bold ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Personal Information
              </h2>

              <p className={darkMode ? "text-slate-400" : "text-slate-500"}>
                Update your fitness profile.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
          {/* First Name */}

          <div>
            <label className="mb-2 block font-semibold">First Name</label>

            {editing ? (
              <input
                className={inputClass}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            ) : (
              <p
                className={`rounded-xl border p-3 ${
                  darkMode
                    ? "border-slate-700 bg-slate-700"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                {data.firstName}
              </p>
            )}
          </div>

          {/* Last Name */}

          <div>
            <label className="mb-2 block font-semibold">Last Name</label>

            {editing ? (
              <input
                className={inputClass}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            ) : (
              <p
                className={`rounded-xl border p-3 ${
                  darkMode
                    ? "border-slate-700 bg-slate-700"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                {data.lastName}
              </p>
            )}
          </div>

          {/* Age */}

          <div>
            <label className="mb-2 flex items-center gap-2 font-semibold">
              <Calendar size={18} />
              Age
            </label>

            {editing ? (
              <input
                type="number"
                className={inputClass}
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
              />
            ) : (
              <p
                className={`rounded-xl border p-3 ${
                  darkMode
                    ? "border-slate-700 bg-slate-700"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                {data.age || "-"}
              </p>
            )}
          </div>

          {/* Gender */}

          <div>
            <label className="mb-2 block font-semibold">Gender</label>

            {editing ? (
              <select
                className={inputClass}
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            ) : (
              <p
                className={`rounded-xl border p-3 ${
                  darkMode
                    ? "border-slate-700 bg-slate-700"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                {data.gender || "-"}
              </p>
            )}
          </div>

          {/* Height */}

          <div>
            <label className="mb-2 flex items-center gap-2 font-semibold">
              <Ruler size={18} />
              Height (cm)
            </label>

            {editing ? (
              <input
                type="number"
                className={inputClass}
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
              />
            ) : (
              <p
                className={`rounded-xl border p-3 ${
                  darkMode
                    ? "border-slate-700 bg-slate-700"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                {data.height ? `${data.height} cm` : "-"}
              </p>
            )}
          </div>

          {/* Weight */}

          <div>
            <label className="mb-2 flex items-center gap-2 font-semibold">
              <Weight size={18} />
              Weight (kg)
            </label>

            {editing ? (
              <input
                type="number"
                className={inputClass}
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
              />
            ) : (
              <p
                className={`rounded-xl border p-3 ${
                  darkMode
                    ? "border-slate-700 bg-slate-700"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                {data.weight ? `${data.weight} kg` : "-"}
              </p>
            )}
          </div>

          {/* Fitness Goal */}

          <div className="md:col-span-2">
            <label className="mb-2 flex items-center gap-2 font-semibold">
              <Dumbbell size={18} />
              Fitness Goal
            </label>

            {editing ? (
              <input
                className={inputClass}
                value={fitnessGoal}
                onChange={(e) => setFitnessGoal(e.target.value)}
              />
            ) : (
              <p
                className={`rounded-xl border p-3 ${
                  darkMode
                    ? "border-slate-700 bg-slate-700"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                {data.fitnessGoal || "Not specified"}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
