export type Severity = 0 | 1 | 2;

export type GradingInput = {
  // 0 = centratura perfetta; 7 = 57/43; 10 = 60/40; 15 = 65/35, ecc.
  offCenterPct: number; // es: 7 => 57/43

  corners: { count: number; severity: Severity }; // micro dings agli angoli
  edges: { count: number; severity: Severity }; // micro-nicks sui bordi
  surface: { count: number; severity: Severity }; // graffi/impronte/indents
  creases: { present: boolean; severity?: Severity }; // pieghe/bends
};

const clamp05 = (x: number) => Math.round(x * 2) / 2; // step 0.5

function subgradeCentering(offCenterPct: number): number {
  // soglie ispirate a linee guida note: 60/40≈10, 65/35≈9, 70/30≈8, ecc.
  const p = offCenterPct;
  let base = 10;
  if (p <= 10) base = 10; // ~60/40 o migliore
  else if (p <= 15) base = 9.0; // ~65/35
  else if (p <= 20) base = 8.5; // ~70/30
  else if (p <= 25) base = 8.0; // ~75/25
  else if (p <= 30) base = 7.5; // ~80/20
  else if (p <= 35) base = 7.0;
  else if (p <= 45) base = 6.0;
  else base = 5.0;
  return clamp05(base);
}

function penalize(base: number, count: number, severity: Severity, weight: number): number {
  // penalità = count * severity * weight (weight differenziato per categoria)
  const penalty = count * severity * weight;
  return clamp05(Math.max(1, base - penalty));
}

function hardCapsFromCreases(present: boolean, severity: Severity = 0, current: number): number {
  if (!present) return current;
  if (severity >= 2) return Math.min(current, 6.0); // piega severa: massimo 6.0
  return Math.min(current, 7.5); // piega lieve: massimo 7.5
}

export type Subgrades = { centering: number; corners: number; edges: number; surface: number };

export function computeSubgrades(input: GradingInput): Subgrades {
  const centering = subgradeCentering(input.offCenterPct);

  // pesi penalità (tarati per dare severità realistica)
  const corners = hardCapsFromCreases(
    input.creases.present,
    input.creases.severity ?? 0,
    penalize(10, input.corners.count, input.corners.severity, 0.5)
  );

  const edges = penalize(10, input.edges.count, input.edges.severity, 0.35);
  const surfaceBase = penalize(10, input.surface.count, input.surface.severity, 0.6);
  const surface = hardCapsFromCreases(input.creases.present, input.creases.severity ?? 0, surfaceBase);

  return {
    centering: clamp05(centering),
    corners: clamp05(corners),
    edges: clamp05(edges),
    surface: clamp05(surface),
  };
}

export function computeOverall(sub: Subgrades): number {
  // media pesata
  const weighted = sub.centering * 0.25 + sub.corners * 0.3 + sub.edges * 0.2 + sub.surface * 0.25;

  // cap "BGS-like": il voto non può superare min(sub)+0.5
  const cap = Math.min(sub.centering, sub.corners, sub.edges, sub.surface) + 0.5;
  return clamp05(Math.min(weighted, cap));
}

export function labelFromGrade(
  grade: number
): "Gem Mint" | "Mint" | "Near Mint+" | "Near Mint" | "Played" {
  if (grade >= 9.5) return "Gem Mint";
  if (grade >= 9.0) return "Mint";
  if (grade >= 8.5) return "Near Mint+";
  if (grade >= 8.0) return "Near Mint";
  return "Played";
}
