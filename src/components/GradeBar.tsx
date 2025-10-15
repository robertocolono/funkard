"use client";

interface GradeBarProps {
  label: string;
  value: number;
}

export default function GradeBar({ label, value }: GradeBarProps) {
  const percentage = Math.min(100, (value / 10) * 100);

  const getColor = () => {
    if (value >= 9) return "bg-green-500";
    if (value >= 8) return "bg-yellow-500";
    if (value >= 7) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span className="capitalize text-gray-300">{label}</span>
        <span className="font-semibold text-white">{value.toFixed(2)}</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
        <div
          className={`${getColor()} h-3 transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
