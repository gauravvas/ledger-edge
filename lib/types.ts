export interface BusinessEvent {
  id: string;
  product: string;
  eventType: string;
  amount: number;
  currency: string;
  status: 'Processed' | 'Pending' | 'Failed';
  timestamp: string;
}

export interface EnrichedEvent extends BusinessEvent {
  debitAccount: string;
  creditAccount: string;
  legalEntity: string;
  assetClass: string;
  fxRate: number;
  treatmentStatus: string;
}

export interface JournalEntry {
  id: string;
  date: string;
  account: string;
  debit: number;
  credit: number;
  balance: number;
  description: string;
}

export interface GLPosting {
  batchId: string;
  journalEntries: number;
  amount: number;
  status: 'Ready to Post' | 'Posted' | 'Failed';
  netsuiteRef: string;
  postedDate: string;
}

export interface ReconItem {
  subledgerId: string;
  glId: string;
  amount: number;
  subledgerAmount: number;
  glAmount: number;
  difference: number;
  status: 'Matched' | 'Unmatched';
  matchDate: string;
}

export interface Exception {
  id: string;
  title: string;
  severity: 'High' | 'Medium' | 'Low';
  description: string;
  assignedTeam: string;
  createdAt: string;
  status: 'Open' | 'In Review' | 'Resolved';
}

export interface KpiMetric {
  label: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
}

export interface ActivityFeedItem {
  id: string;
  type: 'success' | 'warning' | 'info' | 'alert';
  title: string;
  description: string;
  timestamp: string;
}
