import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'LedgerEdge - Enterprise Subledger Accounting',
  description: 'Automated, accurate, auditable financial reporting',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen overflow-hidden bg-slate-50">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <header className="bg-white border-b border-slate-200 px-8 py-5 flex justify-between items-center">
              <h1 className="text-2xl font-bold text-navy" id="pageTitle">
                Dashboard
              </h1>
              <div className="flex gap-2 bg-slate-100 p-1.5 rounded">
                <button className="px-3 py-1.5 rounded text-xs font-semibold bg-white text-indigo active">
                  DEV
                </button>
                <button className="px-3 py-1.5 rounded text-xs font-semibold text-text-3">
                  UAT
                </button>
                <button className="px-3 py-1.5 rounded text-xs font-semibold text-text-3">
                  PROD
                </button>
              </div>
            </header>
            <main className="flex-1 overflow-y-auto px-8 py-8">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
