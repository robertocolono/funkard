/**
 * gradeUtils.ts – Logica reale GradeLens (frontend)
 * Funkard © 2025 – Grading algoritmico simulato, senza AI
 */

export interface GradeSubScores {
  centering: number;
  surface: number;
  edges: number;
  corners: number;
}

export interface GradeResult {
  grade: number;
  subGrades: GradeSubScores;
  category: string;
}

/**
 * Calcola il grading simulato basato su parametri visivi oggettivi.
 * Funziona anche solo con metadati immagine (senza AI o librerie pesanti).
 */
export async function calculateGrade(frontImage: File, backImage: File): Promise<GradeResult> {
  const frontBitmap = await createImageBitmap(frontImage);
  const backBitmap = await createImageBitmap(backImage);

  // dimension ratios
  const ratioW = frontBitmap.width / backBitmap.width;
  const ratioH = frontBitmap.height / backBitmap.height;

  // CENTERING
  const centeringDiff = Math.abs(1 - (ratioW + ratioH) / 2);
  const centering = Math.max(6, 10 - centeringDiff * 40);

  // SURFACE (file size heuristic)
  const avgSize = (frontImage.size + backImage.size) / 2;
  const surface = Math.max(6, 10 - Math.log10(avgSize / 100000));

  // EDGES uniformity (dimension similarity)
  const edgeUniformity = 1 - Math.abs(frontBitmap.width - backBitmap.width) / frontBitmap.width;
  const edges = Math.max(6, 6 + edgeUniformity * 4);

  // CORNERS (simulate whitening via size delta)
  const whiteNoise = Math.abs(frontImage.size - backImage.size) / avgSize;
  const corners = Math.max(6, 10 - whiteNoise * 20);

  // Weighted aggregate
  const grade = centering * 0.35 + surface * 0.35 + edges * 0.2 + corners * 0.1;
  const finalGrade = Math.min(10, Math.round(grade * 10) / 10);

  let category = "POOR";
  if (finalGrade >= 9.5) category = "GEM MINT";
  else if (finalGrade >= 9.0) category = "MINT";
  else if (finalGrade >= 8.0) category = "NEAR MINT";
  else if (finalGrade >= 7.0) category = "EXCELLENT";
  else if (finalGrade >= 5.0) category = "LIGHT PLAYED";

  return {
    grade: finalGrade,
    subGrades: { centering, surface, edges, corners },
    category,
  };
}
