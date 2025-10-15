"use client";

export default function GradeLensDisclaimer() {
  return (
    <div className="mt-6 bg-yellow-50 border border-yellow-300 text-yellow-900 p-4 rounded-xl shadow-sm text-sm text-left">
      <p className="font-semibold mb-1">⚠️ Importante</p>
      <p>
        Il punteggio assegnato da <span className="font-medium">GradeLens</span> è una
        <span className="font-semibold"> stima simulata</span> basata su parametri tecnici
        e/o valutazione manuale. Non rappresenta una certificazione ufficiale di condizione o valore.
      </p>
      <p className="mt-2">
        Le valutazioni possono <span className="font-semibold">differire da quelle di enti di grading professionali</span> (PSA, BGS, CGC, ecc.).
      </p>
    </div>
  );
}
