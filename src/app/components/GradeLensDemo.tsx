import { Brain } from "lucide-react";

export default function GradeLensDemo() {
  return (
    <section className="mt-20 px-6 md:px-16 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-bold text-white">
          Valuta le tue carte (GradeLens)
        </h3>
        <a 
          href="/gradelens" 
          className="text-white hover:text-yellow-400 transition-colors"
        >
          Prova ora →
        </a>
      </div>

      {/* Card Bianca Centrale */}
      <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
        {/* Titolo con Icona Brain */}
        <div className="flex items-center justify-center mb-6">
          <Brain className="w-8 h-8 text-pink-500 mr-3" />
          <h4 className="text-2xl font-bold text-black">
            GradeLens – Scansione simulata
          </h4>
        </div>

        {/* Bottone Analizza */}
        <div className="text-center mb-6">
          <button className="bg-gray-300 text-white font-semibold rounded-lg px-8 py-3 hover:bg-gray-400 transition-colors">
            Analizza la carta
          </button>
        </div>

        {/* Warning Box Giallo */}
        <div className="bg-yellow-200 rounded-lg p-4 mb-4">
          <div className="flex items-start">
            <div className="text-black font-bold mr-2">⚠️ Importante</div>
          </div>
          <p className="text-black text-sm mt-2">
            Il punteggio assegnato da GradeLens è una stima simulata basata su parametri tecnici e/o valutazione manuale. 
            Non rappresenta una certificazione ufficiale di condizione o valore. Le valutazioni possono differire 
            da quelle delle entità di grading professionali (PSA, BGS, CGC, ecc.).
          </p>
        </div>

        {/* Disclaimer */}
        <p className="text-gray-600 text-xs text-center">
          *Valutazione simulata non ufficiale. Le carte possono differire da grading professionali.
        </p>
      </div>
    </section>
  );
}
