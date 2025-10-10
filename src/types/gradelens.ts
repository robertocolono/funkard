export interface GradeLensResult {
  id?: string;
  imageUrl: string;
  grade: number;
  centering: string;
  edges: string;
  corners: string;
  surface: string;
  valueLow: number;
  valueHigh: number;
  currency: string;
  notes: string;
  expiresAt: string; // ISO string
  createdAt?: string; // ISO string
}

export interface GradeLensAd {
  imageUrl: string;
  title: string;
  ctaText: string;
  ctaUrl: string;
}
