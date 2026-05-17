'use client';

import { enrichedEvents } from '@/lib/mock-data';

const formatCurrency = (amount: number, currency: string) => {
  const symbol = currency === 'EUR' ? '€' : '$';
  return `${symbol}${Math.abs(amount).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

const getStatusBadgeClass = (status: string) => {
  switch (status) {
    case 'Mapped':
      return 'badge-processed';
    case 'Enriched':
      return 'badge-processed';
    case 'Error':
      return 'badge-failed';
    default:
      return 'badge-pending';
  }
};

export default function EnrichedEventsPage() {
  return (
    <>
      <h1 className="text-2xl font-bold text-navy mb-6">
        Business Events Enriched
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-5 border-b border-slate-200">
              <select className="px-3 py-2 border border-slate-200 rounded text-sm bg-white cursor-pointer">
                <option>All Treatment Status</option>
                <option>Mapped</option>
                <option>Enriched</option>
                <option>Error</option>
              </select>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                      Event ID
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                      Debit
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                      Credit
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                      Entity
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                      Asset
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                      FX Rate
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {enrichedEvents.map((event, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-4 py-3 text-xs text-slate-700">
                        {event.id}
                      </td>
                      <td className="px-4 py-3 text-xs">
                        <span className="account-code">{event.debitAccount}</span>
                      </td>
                      <td className="px-4 py-3 text-xs">
                        <span className="account-code">
                          {event.creditAccount}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-xs font-semibold text-navy">
                        {formatCurrency(event.amount, event.currency)}
                      </td>
                      <td className="px-4 py-3 text-xs text-slate-700">
                        {event.legalEntity}
                      </td>
                      <td className="px-4 py-3 text-xs text-slate-700">
                        {event.assetClass}
                      </td>
                      <td className="px-4 py-3 text-xs text-slate-700">
                        {event.fxRate.toFixed(4)}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`text-xs font-semibold px-2 py-1 rounded ${getStatusBadgeClass(
                            event.treatmentStatus
                          )}`}
                        >
                          {event.treatmentStatus}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 h-fit">
          <h3 className="text-sm font-bold text-navy mb-4">YAML Mapping Rules</h3>
          <pre className="bg-slate-900 text-green-400 p-3 rounded text-xs overflow-x-auto">
{`mapping_rules:
  payments:
    - event_type: "transaction"
      debit: "1001"
      credit: "4100"
  subscriptions:
    - event_type: "renewal"
      debit: "1001"
      credit: "4500"`}
          </pre>
        </div>
      </div>
    </>
  );
}
