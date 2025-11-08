import React from 'react';
import { ArrowRight, TrendingUp, ShieldAlert, Users, DollarSign } from 'lucide-react';

const Metric = ({ label, value, tone = 'neutral' }) => (
  <div className={`rounded-lg px-3 py-2 text-xs sm:text-sm font-medium border ${
    tone === 'bad' ? 'bg-red-50 border-red-200 text-red-700 dark:bg-red-950/30 dark:border-red-900/40 dark:text-red-300' :
    tone === 'good' ? 'bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-950/30 dark:border-emerald-900/40 dark:text-emerald-300' :
    'bg-neutral-50 border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-300'
  }`}>
    <span className="block text-[10px] uppercase tracking-wide opacity-70">{label}</span>
    <span className="text-sm sm:text-base">{value}</span>
  </div>
);

const RiskBadge = ({ text }) => (
  <div className="inline-flex items-center gap-1 rounded-md bg-red-500/10 text-red-600 dark:text-red-300 ring-1 ring-red-500/30 px-2 py-1 text-xs">
    <ShieldAlert className="h-3.5 w-3.5" />
    {text}
  </div>
);

const StartupCard = ({ startup, onOpen }) => {
  return (
    <div className="group bg-white/80 dark:bg-neutral-900/70 backdrop-blur border border-neutral-200/70 dark:border-white/10 rounded-xl p-4 sm:p-5 hover:shadow-xl hover:shadow-emerald-500/10 transition">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-white">{startup.name}</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">{startup.industry} • {startup.stage}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 ring-1 ring-emerald-500/30 px-2 py-1 text-xs">
            <TrendingUp className="h-3.5 w-3.5" /> {startup.signal}
          </div>
        </div>
      </div>

      <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300 line-clamp-2">{startup.description}</p>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
        <Metric label="Burn % of runway" value={startup.metrics.burnPercent} tone={startup.metrics.burnTone} />
        <Metric label="Valuation cap %" value={startup.metrics.valuationCapPercent} tone={startup.metrics.valuationTone} />
        <Metric label="Equity pool left" value={startup.metrics.remainingEquity} tone={startup.metrics.equityTone} />
        <Metric label="Monthly revenue" value={startup.metrics.mrr} tone={startup.metrics.mrrTone} />
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {startup.risks.slice(0,3).map((r, i) => (
          <RiskBadge key={i} text={r} />
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400">
          <div className="inline-flex items-center gap-1"><Users className="h-4 w-4" /> Team {startup.teamSize}</div>
          <div className="inline-flex items-center gap-1"><DollarSign className="h-4 w-4" /> Raising {startup.raising}</div>
        </div>
        <button
          onClick={() => onOpen(startup)}
          className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:underline"
        >
          View profile <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default StartupCard;
