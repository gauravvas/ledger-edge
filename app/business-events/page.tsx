'use client';

import { useState } from 'react';
import { businessEvents } from '@/lib/mock-data';

const formatCurrency = (amount: number, currency: string) => {
  const symbol = currency === 'EUR' ? '€' : '$';
  return `${symbol}${Math.abs(amount).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

const getStatusBadgeClass = (status: string) => {
  switch (status) {
    case 'Processed':
      return 'badge-processed';
    case 'Pending':
      return 'badge-pending';
    case 'Failed':
      return 'badge-failed';
    default:
      return '';
  }
};

export default function BusinessEventsPage() {
  const [selectedProduct, setSelectedProduct] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredEvents = businessEvents.filter((event) => {
    const matchProduct =
      selectedProduct === 'all' || event.product === selectedProduct;
    const matchStatus =
      selectedStatus === 'all' || event.status === selectedStatus;
    return matchProduct && matchStatus;
  });

  const products = ['all', ...new Set(businessEvents.map((e) => e.product))];
  const statuses = ['all', ...new Set(businessEvents.map((e) => e.status))];

  return (
    <>
      <h1 className="text-2xl font-bold text-navy mb-6">Business Events</h1>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="flex gap-3 p-5 border-b border-slate-200">
          <select
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            className="px-3 py-2 border border-slate-200 rounded text-sm bg-white cursor-pointer"
          >
            {products.map((product) => (
              <option key={product} value={product}>
                {product === 'all'
                  ? 'All Products'
                  : product.charAt(0).toUpperCase() + product.slice(1)}
              </option>
            ))}
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3 py-2 border border-slate-200 rounded text-sm bg-white cursor-pointer"
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status === 'all'
                  ? 'All Status'
                  : status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                  Event ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                  Event Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                  Currency
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-text-3 uppercase tracking-wider">
                  Timestamp
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.map((event, idx) => (
                <tr
                  key={idx}
                  className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm text-slate-700">
                    {event.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">
                    {event.product}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">
                    {event.eventType}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-navy">
                    {formatCurrency(event.amount, event.currency)}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">
                    {event.currency}
                  </td>
                  <td className="px-6 py-4">
                    <span className={getStatusBadgeClass(event.status)}>
                      {event.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">
                    {event.timestamp}
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
