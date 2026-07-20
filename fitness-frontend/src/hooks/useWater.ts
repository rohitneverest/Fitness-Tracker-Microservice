import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import keycloak from "../auth/keycloak";
import { getTodayWater, saveWater } from "../services/waterService";

const GOAL = 3000;

export function useWater() {
  const queryClient = useQueryClient();

  const keycloakId = keycloak.tokenParsed?.sub!;

  const { data, isLoading } = useQuery({
    queryKey: ["water"],
    queryFn: () => getTodayWater(keycloakId),
  });

  const mutation = useMutation({
    mutationFn: (amount: number) =>
      saveWater(keycloakId, { amount }),

    onSuccess: (updatedWater) => {
      queryClient.setQueryData(["water"], updatedWater);
    },
  });

  const water = data?.amount ?? 0;

  const addWater = () => {
    mutation.mutate(Math.min(water + 250, GOAL));
  };

  const removeWater = () => {
    mutation.mutate(Math.max(water - 250, 0));
  };

  return {
    water,
    goal: GOAL,
    percent: Math.round((water / GOAL) * 100),
    loading: isLoading,
    addWater,
    removeWater,
  };
}