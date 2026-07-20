import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../services/userService";

export function useUpdateCurrentUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCurrentUser,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["current-user"],
      });
    },
  });
}