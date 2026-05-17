'use client';

import { exceptions } from '@/lib/mock-data';

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'High':
      return 'bg-red-100 text-red-900';
    case 'Medium':
      return 'bg-amber-100 text-amber-900';
    case 'Low':
      return 'bg-emerald-100 text-emerald-900';
    default:
      return 'bg-slate-100 text-slate-900';
  }
};

export default function ExceptionsPage() {
  return (
    <>
      <h1 className="text-2xl font-bold text-navy mb-6">Exception Management</h1>

      <div className="space-y-4">
        {exceptions.map((exception) => (
          <div
            key={exception.id}
            className="bg-white rounded-lg border border-slate-200 p-4 hover:border-indigo hover:shadow-sm transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-bold text-navy">{exception.title}</h3>
              <span
                className={`inline-block px-2 py-1 rounded text-xs font-semibold ${getSeverityColor(
                  exception.severity
                )}`}
              >
                {exception.severity}
              </span>
            </div>

            <p className="text-xs text-text-3 mb-3">
              Exception ID: {exception.id} | Assigned to: {exception.assignedTeam}{' '}
              | Created: {exception.createdAt}
            </p>

            <p className="text-sm text-slate-700 mb-3">{exception.description}</p>

            <div className="flex items-center justify-between">
              <span
                className={`text-xs font-semibold ${
                  exception.status === 'Open'
                    ? 'text-red'
                    : exception.status === 'In Review'
                      ? 'text-amber'
                      : 'text-green'
                }`}
              >
                {exception.status === 'Open'
                  ? '● Open'
                  : exception.status === 'In Review'
                    ? '● In Review'
                    : '✓ Resolved'}
              </span>
              <button className="px-3 py-1.5 text-xs font-semibold text-indigo hover:bg-slate-50 rounded transition-colors">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
