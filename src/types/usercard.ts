export interface UserCard {
  id: string;
  userId: string;
  name: string;
  setName?: string;
  condition?: string;
  estimatedValue?: number;
  frontImage?: string;
  backImage?: string;
  addedAt: string; // rinomina da createdAt per coerenza con richiesta
  source?: "manual" | "purchase" | "gradelens";
  gradedAt?: string; // Data grading (se temporanea)
  permanent?: boolean; // Se TRUE non scade mai
}