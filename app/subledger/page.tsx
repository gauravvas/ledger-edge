'use client';

import { journalEntries } from '@/lib/mock-data';

const formatCurrency = (amount: number) => {
  return `$${Math.abs(amount).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

export default function SubledgerPage() {
  const totalDebits = journalEntries.reduce((sum, je) => sum + je.debit, 0);
  const totalCredits = journalEntries.reduce((sum, je) => sum + je.credit, 0);

  return (
    <>
      <h1 className="text-2xl font-bold text-navy mb-6">Subledger</h1>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 border border-slate-200">
          <p className="text-xs uppercase font-bold text-text-3 mb-2">
            Total Debits
          </p>
          <p className="text-2xl font-bold text-navy">
            {formatCurrency(totalDebits)}
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-slate-200">
          <p className="text-xs uppercase font-bold text-text-3 mb-2">
            Total Credits
          </p>
          <p className="text-2xl font-bold text-navy">
            {formatCurrency(totalCredits)}
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-slate-200">
          <p className="text-xs uppercase font-bold text-text-3 mb-2">
            Difference
          </p>
          <p className="text-2xl font-bold text-slate-600">
            {formatCurrency(totalDebits - totalCredits)}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="flex gap-3 p-5 border-b border-slate-200">
          <select className="px-3 py-2 border border-slate-200 rounded text-sm bg-white cursor-pointer">
            <option>All Entities</option>
            <option>NA Legal</option>
            <option>EU Legal</option>
            <option>APAC Legal</option>
          </select>
          <select className="px-3 py-2 border border-slate-200 rounded text-sm bg-white cursor-pointer">
            <option>All Accounts</option>
            <option>1001 - Cash</option>
            <option>2001 - AP</option>
            <option>4100 - Revenue</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                  Journal Entry
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                  Account
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                  Debit
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                  Credit
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                  Balance
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {journalEntries.map((je, idx) => (
                <tr
                  key={idx}
                  className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm text-slate-700">{je.date}</td>
                  <td className="px-6 py-4 text-sm text-slate-700">{je.id}</td>
                  <td className="px-6 py-4">
                    <span className="account-code">{je.account}</span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {je.debit > 0 ? (
                      <span className="debit">{formatCurrency(je.debit)}</span>
                    ) : (
                      '-'
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {je.credit > 0 ? (
                      <span className="credit">{formatCurrency(je.credit)}</span>
                    ) : (
                      '-'
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className="debit">{formatCurrency(je.balance)}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">
                    {je.description}
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
