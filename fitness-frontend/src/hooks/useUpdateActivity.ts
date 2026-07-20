import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateActivity } from "../services/activityService";

export function useUpdateActivity() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateActivity,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["activities"],
      });
    },
  });
}