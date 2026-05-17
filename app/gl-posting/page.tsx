'use client';

import { glPostings } from '@/lib/mock-data';

const formatCurrency = (amount: number) => {
  return `$${Math.abs(amount).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

const getStatusBadgeClass = (status: string) => {
  switch (status) {
    case 'Posted':
      return 'badge-processed';
    case 'Ready to Post':
      return 'badge-pending';
    case 'Failed':
      return 'badge-failed';
    default:
      return '';
  }
};

export default function GLPostingPage() {
  return (
    <>
      <h1 className="text-2xl font-bold text-navy mb-6">GL Posting</h1>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden mb-6">
        <div className="flex gap-3 p-5 border-b border-slate-200 justify-between items-center">
          <select className="px-3 py-2 border border-slate-200 rounded text-sm bg-white cursor-pointer">
            <option>All Status</option>
            <option>Ready to Post</option>
            <option>Posted</option>
            <option>Failed</option>
          </select>
          <button className="px-4 py-2 bg-indigo text-white rounded text-sm font-semibold hover:bg-indigo-2 transition-colors">
            Batch Post to NetSuite
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                  Batch ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                  Journal Entries
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                  NetSuite Ref
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                  Posted Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {glPostings.map((posting, idx) => (
                <tr
                  key={idx}
                  className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm font-semibold text-navy">
                    {posting.batchId}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">
                    {posting.journalEntries}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-navy">
                    {formatCurrency(posting.amount)}
                  </td>
                  <td className="px-6 py-4">
                    <span className={getStatusBadgeClass(posting.status)}>
                      {posting.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {posting.netsuiteRef ? (
                      <span className="account-code">{posting.netsuiteRef}</span>
                    ) : (
                      '-'
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">
                    {posting.postedDate || '-'}
                  </td>
                  <td className="px-6 py-4">
                    <button className="px-3 py-1.5 bg-slate-100 text-navy rounded text-xs font-semibold hover:bg-slate-200 transition-colors">
                      {posting.status === 'Ready to Post' ? 'Post Now' : posting.status === 'Failed' ? 'Retry' : 'View'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-bold text-navy mb-4">
          Recent Posting History
        </h3>
        <div className="space-y-3">
          <div className="p-4 bg-slate-50 rounded border-l-4 border-indigo">
            <p className="font-semibold text-navy mb-1">
              Batch #NS-2026-04-08-087 Posted
            </p>
            <p className="text-xs text-text-3">2026-04-08 23:45:12 UTC</p>
            <p className="font-mono text-xs text-navy mt-2">
              Reference: NS-2026-04-08-087 | 234 entries | $823,100.50
            </p>
          </div>
          <div className="p-4 bg-slate-50 rounded border-l-4 border-indigo">
            <p className="font-semibold text-navy mb-1">
              Batch #NS-2026-04-08-086 Posted
            </p>
            <p className="text-xs text-text-3">2026-04-08 18:22:34 UTC</p>
            <p className="font-mono text-xs text-navy mt-2">
              Reference: NS-2026-04-08-086 | 189 entries | $645,300.25
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
