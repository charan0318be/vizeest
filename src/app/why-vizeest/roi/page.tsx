'use client';

import { useEffect, useState } from 'react';

export default function ROIPage() {
  const [stats, setStats] = useState({
    speed: 0,
    accuracy: 0,
    rework: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        speed: Math.min(prev.speed + 2, 80),
        accuracy: Math.min(prev.accuracy + 2, 98),
        rework: Math.min(prev.rework + 1, 50),
      }));
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#030303] text-white">

      {/* HERO + KPI */}
      <section className="relative pt-20 pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                        grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            

            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-8 leading-[1.05]">
              Proven ROI
              <br />
              <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                               bg-clip-text text-transparent">
                You Can Defend
              </span>
            </h1>

            <p className="text-lg text-white/50 leading-relaxed max-w-xl">
              Measurable gains in speed, accuracy, and delivery confidence—
              backed by real estimation workflows.
            </p>
          </div>

          {/* KPI GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <KPI value={`${stats.speed}%`} label="Faster Cycles" />
            <KPI value={`${stats.accuracy}%+`} label="Accuracy Confidence" />
            <KPI value={`${stats.rework}%`} label="Less Rework" />
          </div>

        </div>
      </section>

      {/* ROI TRANSFORMATION */}
      <section className="relative py-20 bg-[#0a0a0a] border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-4xl tracking-wide md:text-5xl font-bold mb-16">
            From Bottlenecks to Business Impact
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

            {[
              {
                title: 'Before',
                desc: 'Manual take-offs, duplicated effort, missed quantities, and slow bid cycles.',
              },
              {
                title: 'With VizeEST',
                desc: 'AI-driven detection with human validation—fast, controlled, and auditable.',
              },
              {
                title: 'After',
                desc: 'Confident bids, fewer disputes, and predictable estimation performance.',
              },
            ].map(item => (
              <div
                key={item.title}
                className="p-8 rounded-3xl bg-[#0b0b0b]
                           border border-white/[0.08]
                           hover:border-[#4EBABD]
                           hover:-translate-y-1
                           transition-all duration-300"
              >
                <p className="text-[#4EBABD]  font-semibold mb-3">
                  {item.title}
                </p>
                <p className="text-white/40  leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* BUSINESS IMPACT SPLIT */}
      <section className="relative py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6
                        grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ROI That Compounds Over Time
            </h2>

            <p className="text-white/40 mb-10 max-w-lg">
              ROI isn’t just speed—it’s reduced risk, consistent
              quality, and confidence that scales across projects.
            </p>

            <ul className="space-y-4 text-white/50">
              {[
                'Faster bid submissions',
                'Fewer scope-related disputes',
                'Higher estimator productivity',
                'Defensible pricing decisions',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* PROOF CARD */}
          <div
            className="p-12 rounded-3xl bg-[#0b0b0b]
                       border border-white/[0.08]
                       hover:border-[#4EBABD]
                       hover:-translate-y-1
                       transition-all duration-300"
          >
            <h4 className="text-lg font-semibold mb-4">
              ROI Impact Summary
            </h4>

            <p className="text-white/40 leading-relaxed">
              Teams experience faster estimation cycles,
              fewer downstream disputes, and repeatable
              performance across bids and projects.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-[#0a0a0a]
                           text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          See ROI in Your Own Workflow
        </h3>

        <p className="text-white/40 max-w-2xl mx-auto mb-10">
          Replace assumptions with measurable outcomes.
        </p>

        <button
          className="px-10 py-4 rounded-2xl font-semibold
                     bg-gradient-to-r from-[#4EBABD] to-[#2C7181]
                     hover:opacity-90 transition cursor-pointer"
        >
          Calculate Your ROI →
        </button>
      </section>

    </main>
  );
}

/* COMPONENTS */
function KPI({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="p-8 rounded-3xl bg-[#0b0b0b]
                 border border-white/[0.08]
                 hover:border-[#4EBABD]/40
                 hover:-translate-y-1
                 transition-all duration-300 text-center"
    >
      <p className="text-4xl font-bold text-[#4EBABD] mb-2">
        {value}
      </p>
      <p className="text-white/40 text-sm">
        {label}
      </p>
    </div>
  );
}

function Check() {
  return (
    <svg
      className="w-4 h-4 mt-1 text-[#4EBABD]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
