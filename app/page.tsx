import KpiCard from '@/components/KpiCard';
import { kpiMetrics, activityFeed } from '@/lib/mock-data';

export default function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-4 gap-5 mb-8">
        {kpiMetrics.map((metric) => (
          <KpiCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <h2 className="text-lg font-bold text-navy mb-5">Recent Activity</h2>
        <div className="space-y-4">
          {activityFeed.map((item) => (
            <div key={item.id} className="flex gap-4">
              <div
                className={`w-10 h-10 rounded flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${
                  item.type === 'success'
                    ? 'bg-indigo'
                    : item.type === 'warning'
                      ? 'bg-amber'
                      : item.type === 'alert'
                        ? 'bg-red'
                        : 'bg-indigo'
                }`}
              >
                {item.type === 'success'
                  ? '✓'
                  : item.type === 'warning'
                    ? '⚠'
                    : item.type === 'alert'
                      ? '!'
                      : '📊'}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-navy mb-1">
                  {item.title}
                </p>
                <p className="text-xs text-text-3">{item.description}</p>
                <p className="text-xs text-text-3 mt-1">{item.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
