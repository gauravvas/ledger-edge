import { KpiMetric } from '@/lib/types';

interface KpiCardProps {
  metric: KpiMetric;
}

export default function KpiCard({ metric }: KpiCardProps) {
  const changeColor =
    metric.changeType === 'positive'
      ? 'text-green'
      : metric.changeType === 'negative'
        ? 'text-red'
        : 'text-text-3';

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
      <p className="text-xs font-bold text-text-3 uppercase tracking-wider mb-2">
        {metric.label}
      </p>
      <p className="text-3xl font-bold text-navy mb-2">{metric.value}</p>
      {metric.change && (
        <p className={`text-xs font-medium ${changeColor}`}>{metric.change}</p>
      )}
    </div>
  );
}
