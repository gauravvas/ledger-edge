import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LedgerEdge - Enterprise Subledger Accounting',
  description: 'Automated, accurate, auditable financial reporting',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}
