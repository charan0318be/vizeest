'use client';

import { useEffect, useState } from 'react';

export default function FounderAcceleratorPage() {
  const [counts, setCounts] = useState({
    discount: 0,
    speed: 0,
    influence: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => ({
        discount: Math.min(prev.discount + 2, 40),
        speed: Math.min(prev.speed + 5, 90),
        influence: Math.min(prev.influence + 1, 25),
      }));
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#030303] text-white relative overflow-hidden">

      {/* HERO */}
      <section className="relative pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                        grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl">

          {/* LEFT */}
          <div>
            <span className="text-[#4EBABD] text-xl font-semibold  tracking-wide">
              Founder Program
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-6xl
                           font-bold mt-4 mb-8 tracking-tight leading-[1.05]">
              Founder
              <br />
              <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                               bg-clip-text text-transparent">
                Accelerator
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-xl">
              Built for early movers who want to scale faster,
              influence the roadmap, and secure long-term
              strategic advantages.
            </p>
          </div>

          {/* RIGHT CARD */}
          <div
            className="p-10 rounded-3xl bg-[#0b0b0b]
                       border border-white/[0.08]
                       hover:border-[#4EBABD]/40
                       hover:-translate-y-1
                       transition-all duration-300"
          >
            <h3 className="text-lg font-semibold mb-6">
              Program Includes
            </h3>

            <ul className="space-y-4 text-white/50 ">
              {[
                'Locked-in early adopter pricing',
                'Direct access to product leadership',
                'Priority feature rollouts',
                'White-glove onboarding',
                'Flexible scaling as you grow',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* KPI STRIP */}
      <section className="relative py-20 bg-[#0a0a0a] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6
                        grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">

          <KPI value={`${counts.discount}%`} label="Early Pricing Advantage" />
          <KPI value={`${counts.speed}%`} label="Faster Platform Adoption" />
          <KPI value={`${counts.influence}+`} label="Roadmap Influence Points" />

        </div>
      </section>

      {/* WHY FOUNDERS JOIN */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Why Founders Choose This Program
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                title: 'Lower Risk',
                desc: 'Adopt enterprise-grade estimation without heavy upfront cost.',
              },
              {
                title: 'Faster Market Entry',
                desc: 'Win bids earlier with automation-backed accuracy.',
              },
              {
                title: 'Product Influence',
                desc: 'Your feedback directly shapes future platform capabilities.',
              },
              {
                title: 'Scalable Foundation',
                desc: 'Built to grow with your team and project complexity.',
              },
              {
                title: 'Founder-Level Support',
                desc: 'Priority onboarding and direct escalation paths.',
              },
              {
                title: 'Long-Term Advantage',
                desc: 'Early access and pricing compounds as you scale.',
              },
            ].map(card => (
              <div
                key={card.title}
                className="p-8 rounded-3xl bg-[#0b0b0b]
                           border border-white/[0.08]
                           hover:border-[#4EBABD]
                           hover:-translate-y-1
                           transition-all duration-300"
              >
                <h3 className="text-lg font-bold mb-3">
                  {card.title}
                </h3>
                <p className="text-white/40 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-[#0a0a0a]  text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Join the Founder Accelerator
        </h3>
        <p className="text-white/40 max-w-2xl mx-auto mb-8">
          Secure early pricing, influence the roadmap,
          and scale with confidence from day one.
        </p>

        <button
          className="px-8 py-4 rounded-2xl font-semibold
                     bg-gradient-to-r from-[#4EBABD] to-[#2C7181]
                     hover:opacity-90 transition cursor-pointer"
        >
          Apply Now →
        </button>
      </section>

    </main>
  );
}

/* REUSABLE PARTS */
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

function KPI({ value, label }: { value: string; label: string }) {
  return (
    <div className="hover:-translate-y-1 transition">
      <p className="text-4xl font-bold text-[#4EBABD]">
        {value}
      </p>
      <p className="text-white/40 text-sm mt-2">
        {label}
      </p>
    </div>
  );
}
