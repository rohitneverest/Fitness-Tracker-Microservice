export interface Recommendation {
  id: string;
  activityId: string;
  keycloakId: string;
  activityType: string;
  recommendation: string;
  improvements: string[];
  suggestions: string[];
  safety: string[];
  createdAt: string;
}