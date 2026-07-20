import { useQuery } from "@tanstack/react-query";
import { getActivities } from "../services/activityService";

export function useActivities() {
  
  return useQuery({
    queryKey: ["activities"],
    queryFn: getActivities,
  });
}