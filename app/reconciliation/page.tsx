'use client';

import KpiCard from '@/components/KpiCard';
import { reconItems } from '@/lib/mock-data';

const formatCurrency = (amount: number) => {
  return `$${Math.abs(amount).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

const reconciliationMetrics = [
  {
    label: 'Match Rate',
    value: '99.98%',
    change: '↑ Best this month',
    changeType: 'positive' as const,
  },
  {
    label: 'Matched Items',
    value: '8,847',
    change: 'Today',
    changeType: 'neutral' as const,
  },
  {
    label: 'Unmatched Items',
    value: '2',
    change: 'Requires review',
    changeType: 'negative' as const,
  },
  {
    label: 'Time to Recon',
    value: '2.3 min',
    change: 'Avg daily',
    changeType: 'positive' as const,
  },
];

export default function ReconciliationPage() {
  const getDifferenceColor = (difference: number) => {
    if (difference === 0) return 'text-text-3';
    if (difference > 0) return 'text-green';
    return 'text-red';
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-navy mb-6">Reconciliation</h1>

      <div className="grid grid-cols-4 gap-5 mb-8">
        {reconciliationMetrics.map((metric) => (
          <KpiCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-5 border-b border-slate-200">
          <select className="px-3 py-2 border border-slate-200 rounded text-sm bg-white cursor-pointer">
            <option>All Status</option>
            <option>Matched</option>
            <option>Unmatched</option>
            <option>In Review</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                  Subledger ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                  GL ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                  Subledger Amt
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                  GL Amt
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                  Difference
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                  Match Date
                </th>
              </tr>
            </thead>
            <tbody>
              {reconItems.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm text-slate-700">
                    {item.subledgerId}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">
                    {item.glId}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-navy">
                    {formatCurrency(item.amount)}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-navy">
                    {formatCurrency(item.subledgerAmount)}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-navy">
                    {formatCurrency(item.glAmount)}
                  </td>
                  <td
                    className={`px-6 py-4 text-sm font-semibold ${getDifferenceColor(
                      item.difference
                    )}`}
                  >
                    {formatCurrency(item.difference)}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`text-xs font-semibold ${
                        item.status === 'Matched'
                          ? 'text-green'
                          : 'text-red'
                      }`}
                    >
                      {item.status === 'Matched' ? '✓' : '⚠'} {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">
                    {item.matchDate || 'In Review'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
