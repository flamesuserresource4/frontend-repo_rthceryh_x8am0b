import React, { useMemo, useState } from 'react';
import HeroSection from './components/HeroSection';
import Filters from './components/Filters';
import StartupCard from './components/StartupCard';
import FounderModal from './components/FounderModal';

const SAMPLE_DATA = [
  {
    id: 1,
    name: 'Glasmint',
    industry: 'fintech',
    stage: 'seed',
    signal: 'High Signal',
    teamSize: 9,
    raising: '$1.2M',
    description: 'Card‑first treasury for SMBs with real‑time spend controls and automated yield routing.',
    metrics: {
      burnPercent: '38%',
      burnTone: 'good',
      valuationCapPercent: '62%',
      valuationTone: 'neutral',
      remainingEquity: '12% ESOP',
      equityTone: 'bad',
      mrr: '$85k',
      mrrTone: 'good',
      revenueGrowth: '18% MoM',
      growthTone: 'good',
      runway: '11 months',
      runwayTone: 'neutral',
      capTableClarity: 'Medium',
      capTableTone: 'neutral',
    },
    risks: [
      'Customer concentration risk: top 2 clients = 41% of revenue',
      'Burn exceeds target if growth slips below 10% MoM',
      'ESOP remaining may limit senior hires without top‑ups',
    ],
    pitchDeckUrl: 'https://example.com/deck.pdf',
  },
  {
    id: 2,
    name: 'MedSynapse',
    industry: 'health',
    stage: 'pre-seed',
    signal: 'Emerging',
    teamSize: 4,
    raising: '$600k',
    description: 'AI triage for specialty clinics reducing wait times by 35% via intake automation.',
    metrics: {
      burnPercent: '55%',
      burnTone: 'bad',
      valuationCapPercent: '40%',
      valuationTone: 'good',
      remainingEquity: '22% ESOP',
      equityTone: 'good',
      mrr: '$12k',
      mrrTone: 'neutral',
      revenueGrowth: '9% MoM',
      growthTone: 'neutral',
      runway: '7 months',
      runwayTone: 'bad',
      capTableClarity: 'High',
      capTableTone: 'good',
    },
    risks: [
      'Regulatory approvals pending in two key states',
      'Integration dependencies with 3 major EHRs',
      'Clinical validation limited to pilot cohort',
    ],
    pitchDeckUrl: 'https://example.com/deck2.pdf',
  },
  {
    id: 3,
    name: 'ClimaGrid',
    industry: 'climate',
    stage: 'series-a',
    signal: 'Leader',
    teamSize: 28,
    raising: '$8M',
    description: 'Grid‑scale forecasting API cutting renewable curtailment by 12% for utilities.',
    metrics: {
      burnPercent: '29%',
      burnTone: 'good',
      valuationCapPercent: '75%',
      valuationTone: 'bad',
      remainingEquity: '15% ESOP',
      equityTone: 'neutral',
      mrr: '$410k',
      mrrTone: 'good',
      revenueGrowth: '7% MoM',
      growthTone: 'neutral',
      runway: '18 months',
      runwayTone: 'good',
      capTableClarity: 'Medium',
      capTableTone: 'neutral',
    },
    risks: [
      'Sales cycles 6–9 months; revenue lumpiness likely',
      'Two legacy contracts priced below current rate card',
      'High cap % may compress future round dynamics',
    ],
    pitchDeckUrl: 'https://example.com/deck3.pdf',
  },
];

export default function App() {
  const [filters, setFilters] = useState({ query: '', industry: '', stage: '', checkSize: '', sort: 'signal' });
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    let items = [...SAMPLE_DATA];

    if (filters.query) {
      const q = filters.query.toLowerCase();
      items = items.filter(s =>
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.industry.toLowerCase().includes(q)
      );
    }
    if (filters.industry) items = items.filter(s => s.industry === filters.industry);
    if (filters.stage) items = items.filter(s => s.stage === filters.stage);

    // naive sort examples
    if (filters.sort === 'valuation') {
      items = items.sort((a, b) => (parseInt(b.metrics.valuationCapPercent) - parseInt(a.metrics.valuationCapPercent)));
    } else if (filters.sort === 'traction') {
      items = items.sort((a, b) => (parseInt(b.metrics.mrr.replace(/[^0-9]/g, '')) - parseInt(a.metrics.mrr.replace(/[^0-9]/g, ''))));
    }

    return items;
  }, [filters]);

  const scrollToList = () => {
    const el = document.getElementById('startups');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <HeroSection onExplore={scrollToList} />

      <main className="max-w-6xl mx-auto px-6 -mt-16 relative z-10">
        <div className="mb-4">
          <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">Welcome back. What kind of startups are you interested in exploring today — industry, stage, or investment size?</div>
          <Filters filters={filters} setFilters={setFilters} />
        </div>

        <section id="startups" className="space-y-4 pb-16">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recommended Startups</h2>
            <div className="text-xs text-neutral-500">{filtered.length} results</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filtered.map(s => (
              <StartupCard key={s.id} startup={s} onOpen={setSelected} />
            ))}
          </div>
        </section>
      </main>

      <FounderModal open={!!selected} onClose={() => setSelected(null)} startup={selected} />
    </div>
  );
}
