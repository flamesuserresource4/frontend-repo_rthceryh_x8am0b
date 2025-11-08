import React from 'react';
import { X, ShieldAlert, FileText, Percent, Coins } from 'lucide-react';

const Stat = ({ label, value, tone = 'neutral' }) => (
  <div className={`rounded-lg p-3 border text-sm ${
    tone === 'bad' ? 'bg-red-50 border-red-200 text-red-700 dark:bg-red-950/30 dark:border-red-900/40 dark:text-red-300' :
    tone === 'good' ? 'bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-950/30 dark:border-emerald-900/40 dark:text-emerald-300' :
    'bg-neutral-50 border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-300'
  }`}>
    <div className="text-[11px] uppercase tracking-wide opacity-70 mb-1">{label}</div>
    <div className="text-base font-medium">{value}</div>
  </div>
);

const FounderModal = ({ open, onClose, startup }) => {
  if (!open || !startup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-200/70 dark:border-neutral-800">
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">{startup.name}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">{startup.industry} • {startup.stage}</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 space-y-4">
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4">
              <h4 className="font-medium mb-2 inline-flex items-center gap-2"><FileText className="h-4 w-4" /> Pitch & Overview</h4>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">{startup.description}</p>
            </div>

            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4">
              <h4 className="font-medium mb-3 inline-flex items-center gap-2"><ShieldAlert className="h-4 w-4 text-red-500" /> Explicit Risks & Red Flags</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                {startup.risks.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4">
              <h4 className="font-medium mb-3 inline-flex items-center gap-2"><Percent className="h-4 w-4" /> Key Percentages</h4>
              <div className="grid grid-cols-2 gap-2">
                <Stat label="Burn % of runway" value={startup.metrics.burnPercent} tone={startup.metrics.burnTone} />
                <Stat label="Valuation cap %" value={startup.metrics.valuationCapPercent} tone={startup.metrics.valuationTone} />
                <Stat label="Equity pool left" value={startup.metrics.remainingEquity} tone={startup.metrics.equityTone} />
                <Stat label="Revenue growth" value={startup.metrics.revenueGrowth} tone={startup.metrics.growthTone} />
              </div>
            </div>

            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4">
              <h4 className="font-medium mb-3 inline-flex items-center gap-2"><Coins className="h-4 w-4" /> Financial Snapshot</h4>
              <div className="grid grid-cols-2 gap-2">
                <Stat label="MRR" value={startup.metrics.mrr} />
                <Stat label="Runway" value={startup.metrics.runway} tone={startup.metrics.runwayTone} />
                <Stat label="Raise" value={startup.raising} />
                <Stat label="Cap table clarity" value={startup.metrics.capTableClarity} tone={startup.metrics.capTableTone} />
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 pb-5">
          <a
            href={startup.pitchDeckUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center w-full rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-3 text-sm font-medium hover:opacity-90"
          >
            Open Pitch Deck
          </a>
        </div>
      </div>
    </div>
  );
};

export default FounderModal;
