import { useEffect, useState } from "react";
import { useUpdateCurrentUser } from "../hooks/useUpdatedCurrentUser";

interface Props {
  open: boolean;
  onClose: () => void;
  user: any;
}

function EditProfileModal({ open, onClose, user }: Props) {
  const updateMutation = useUpdateCurrentUser();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [weight, setWeight] = useState<number | "">("");
  const [gender, setGender] = useState("");
  const [fitnessGoal, setFitnessGoal] = useState("");

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName ?? "");
      setLastName(user.lastName ?? "");
      setAge(user.age ?? "");
      setHeight(user.height ?? "");
      setWeight(user.weight ?? "");
      setGender(user.gender ?? "");
      setFitnessGoal(user.fitnessGoal ?? "");
    }
  }, [user]);

  if (!open) return null;

  const handleSubmit = () => {
    updateMutation.mutate(
      {
        firstName,
        lastName,
        age: age === "" ? null : Number(age),
        height: height === "" ? null : Number(height),
        weight: weight === "" ? null : Number(weight),
        gender,
        fitnessGoal,
      },
      {
        onSuccess: () => {
          onClose();
        },
      },
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="w-[500px] rounded-2xl bg-white p-6">
        <h2 className="mb-6 text-2xl font-bold">Edit Profile</h2>

        <div className="space-y-4">
          <input
            className="w-full rounded border p-2"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            className="w-full rounded border p-2"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <input
            type="number"
            className="w-full rounded border p-2"
            placeholder="Age"
            value={age}
            onChange={(e) =>
              setAge(e.target.value === "" ? "" : Number(e.target.value))
            }
          />

          <input
            type="number"
            className="w-full rounded border p-2"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) =>
              setHeight(e.target.value === "" ? "" : Number(e.target.value))
            }
          />

          <input
            type="number"
            className="w-full rounded border p-2"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) =>
              setWeight(e.target.value === "" ? "" : Number(e.target.value))
            }
          />

          <select
            className="w-full rounded border p-2"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <input
            className="w-full rounded border p-2"
            placeholder="Fitness Goal"
            value={fitnessGoal}
            onChange={(e) => setFitnessGoal(e.target.value)}
          />
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onClose} className="rounded border px-4 py-2">
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={updateMutation.isPending}
            className="rounded bg-blue-600 px-4 py-2 text-white"
          >
            {updateMutation.isPending ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfileModal;
