'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Dashboard', icon: '📊' },
  { href: '/business-events', label: 'Business Events', icon: '🎯' },
  { href: '/enriched-events', label: 'Events Enriched', icon: '⚙️' },
  { href: '/subledger', label: 'Subledger', icon: '📖' },
  { href: '/gl-posting', label: 'GL Posting', icon: '📤' },
  { href: '/reconciliation', label: 'Reconciliation', icon: '✅' },
  { href: '/exceptions', label: 'Exceptions', icon: '⚠️' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[280px] bg-gradient-to-b from-navy to-navy-2 text-white p-6 overflow-y-auto">
      <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10">
        <div className="w-8 h-8 bg-indigo rounded flex items-center justify-center font-bold text-sm">
          LE
        </div>
        <span className="font-bold text-lg">LedgerEdge</span>
      </div>

      <nav className="space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-6 py-3 text-sm font-medium transition-all border-l-4 ${
                isActive
                  ? 'bg-indigo/20 text-white border-l-indigo'
                  : 'text-white/70 hover:bg-indigo/10 border-l-transparent'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
