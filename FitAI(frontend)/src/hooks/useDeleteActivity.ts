import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteActivity } from "../services/activityService";

export function useDeleteActivity() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteActivity,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["activities"],
      });
    },
  });
}