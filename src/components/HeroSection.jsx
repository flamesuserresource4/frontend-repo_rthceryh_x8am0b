import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroSection = ({ onExplore }) => {
  return (
    <section className="relative w-full min-h-[520px] sm:min-h-[600px] flex items-center justify-center overflow-hidden bg-neutral-950">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/40 to-neutral-950/90" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white space-y-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs sm:text-sm text-white/90 ring-1 ring-white/15">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Investor Workspace — Curate, Compare, Commit
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
          Discover high‑signal startups with clarity and confidence
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
          Explore by industry, stage, or check size. Scan key metrics at a glance and
          dive into due diligence with explicit risks and financial breakdowns.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={onExplore}
            className="pointer-events-auto inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-neutral-950 shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 transition"
          >
            Start Exploring
          </button>
          <a
            href="#startups"
            className="pointer-events-auto inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white hover:bg-white/15 ring-1 ring-white/15 backdrop-blur transition"
          >
            View Startups
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
