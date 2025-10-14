export interface UserCard {
  id: string;
  userId: string;
  name: string;
  setName: string;
  condition: string;
  estimatedValue: number;
  frontImage?: string;
  backImage?: string;
  createdAt: string;
  source: string;
}