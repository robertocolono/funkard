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

// --- Tipi per risposta analisi GradeLens ---
export interface Subgrades {
  centering: number;
  corners: number;
  edges: number;
  surface: number;
}

export interface AnalysisMeta {
  sharpness: number;
  glare: number;
  skew: number;
}

export interface GradeLensResponse {
  overall: number;
  subgrades: Subgrades;
  diagnostics: string[];
  analysisMeta: AnalysisMeta;
  gradedAt: string;
}

// --- Payload di conferma per salvataggio in collezione ---
export interface ConfirmGradeLensPayload {
  userId: string;
  frontImageUrl: string;
  backImageUrl: string;
  subgrades: Subgrades;
  overallGrade: number;
  analysisMeta: AnalysisMeta;
  diagnostics: string[];
  setName: string;
  name: string;
  condition: string; // es. "NM", "LP", ...
}

export interface ConfirmGradeLensResponse {
  status: string; // "saved"
  userCardId: string; // UUID della card creata
}
