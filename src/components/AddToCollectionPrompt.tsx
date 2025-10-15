"use client";

type Props = {
  defaultName?: string;
  defaultCondition?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function AddToCollectionPrompt({ onConfirm, onCancel }: Props) {
  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-sm w-full text-black">
        <h2 className="text-xl font-semibold mb-4">📦 Vuoi aggiungere questa carta alla tua collezione?</h2>
        <div className="flex justify-center gap-3">
          <button
            onClick={onConfirm}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
          >
            Sì, aggiungila
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            No, grazie
          </button>
        </div>
      </div>
    </div>
  );
}
