import { useScrollAnimation, useCountUp } from "../hooks/useScrollAnimation";

interface StatsCardProps {
  value: number;
  suffix: string;
  label: string;
}

export function StatsCard({ value, suffix, label }: StatsCardProps) {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const count = useCountUp(value, 2000, isVisible);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center">
      <div className="text-4xl font-bold text-blue-900 mb-2">
        {count}{suffix}
      </div>
      <div className="text-slate-600">{label}</div>
    </div>
  );
}
