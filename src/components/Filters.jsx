import React from 'react';
import { SlidersHorizontal, Search } from 'lucide-react';

const Filters = ({ filters, setFilters }) => {
  const update = (key, value) => setFilters(prev => ({ ...prev, [key]: value }));

  return (
    <div className="w-full bg-white/70 dark:bg-neutral-900/60 backdrop-blur border border-neutral-200/70 dark:border-white/10 rounded-xl p-4 sm:p-5 flex flex-col gap-3">
      <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-200">
        <SlidersHorizontal className="h-5 w-5" />
        <span className="font-medium">Filter</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
        <label className="relative col-span-2">
          <Search className="h-4 w-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search startup, founder, or keyword"
            value={filters.query}
            onChange={(e) => update('query', e.target.value)}
            className="w-full pl-10 pr-3 py-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </label>

        <select
          value={filters.industry}
          onChange={(e) => update('industry', e.target.value)}
          className="w-full px-3 py-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          <option value="">All Industries</option>
          <option value="fintech">Fintech</option>
          <option value="saas">SaaS</option>
          <option value="health">Health</option>
          <option value="climate">Climate</option>
          <option value="ai">AI</option>
        </select>

        <select
          value={filters.stage}
          onChange={(e) => update('stage', e.target.value)}
          className="w-full px-3 py-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          <option value="">All Stages</option>
          <option value="pre-seed">Pre‑Seed</option>
          <option value="seed">Seed</option>
          <option value="series-a">Series A</option>
          <option value="series-b">Series B</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="flex items-center justify-between gap-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2">
          <span className="text-sm text-neutral-600 dark:text-neutral-300">Check Size</span>
          <select
            value={filters.checkSize}
            onChange={(e) => update('checkSize', e.target.value)}
            className="bg-transparent text-sm outline-none"
          >
            <option value="">Any</option>
            <option value="<50k">Under $50k</option>
            <option value="50k-250k">$50k–$250k</option>
            <option value="250k-1m">$250k–$1M</option>
            <option value=">1m">Over $1M</option>
          </select>
        </div>

        <div className="flex items-center justify-between gap-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2">
          <span className="text-sm text-neutral-600 dark:text-neutral-300">Sort</span>
          <select
            value={filters.sort}
            onChange={(e) => update('sort', e.target.value)}
            className="bg-transparent text-sm outline-none"
          >
            <option value="signal">Signal</option>
            <option value="recent">Recently added</option>
            <option value="traction">Traction</option>
            <option value="valuation">Valuation</option>
          </select>
        </div>

        <button
          onClick={() => setFilters({ query: '', industry: '', stage: '', checkSize: '', sort: 'signal' })}
          className="inline-flex items-center justify-center rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-3 py-2 text-sm font-medium hover:opacity-90"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Filters;
