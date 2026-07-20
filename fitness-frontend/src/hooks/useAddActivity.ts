import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addActivity } from "../services/activityService";

export function useAddActivity() {

  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: addActivity,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["activities"],
      });
    },

  });

}