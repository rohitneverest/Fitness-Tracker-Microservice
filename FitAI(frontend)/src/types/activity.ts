export interface Activity {
  id: string;
  keycloakId: string;
  type: string;
  duration: number;
  caloriesBurned: number;
  startTime: string;
  additionalMetrics: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}