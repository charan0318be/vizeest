'use client';

import { useState } from 'react';

export default function EnterprisePricingPage() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('annual');
  const [persona, setPersona] = useState<'fabricator' | 'gc'>('fabricator');

  return (
    <main className="min-h-screen bg-[#030303] text-white">

      {/* HERO */}
      <section className="relative pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

         

          <h1 className="text-4xl md:text-6xl lg:text-6xl
                         font-bold mt-4 mb-8 tracking-tight leading-[1.05]">
            Enterprise
            <br />
            <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                             bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 leading-relaxed">
            Flexible pricing designed for large-scale estimation teams—
            built for security, performance, and governance.
          </p>

          {/* TOGGLES */}
          <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center">

            {/* BILLING */}
            <div className="flex bg-[#0b0b0b] border border-white/[0.08]
                            rounded-full p-1">
              {['monthly', 'annual'].map(type => (
                <button
                  key={type}
                  onClick={() => setBilling(type as any)}
                  className={`px-5 py-2 text-sm rounded-full transition
                    ${billing === type
                      ? 'bg-[#4EBABD] text-black'
                      : 'text-white/50 hover:text-white'
                    }`}
                >
                  {type === 'annual' ? 'Annual (Save 15%)' : 'Monthly'}
                </button>
              ))}
            </div>

            {/* PERSONA */}
            <div className="flex bg-[#0b0b0b] border border-white/[0.08]
                            rounded-full p-1">
              {[
                { key: 'fabricator', label: 'Steel Fabricator' },
                { key: 'gc', label: 'General Contractor' },
              ].map(p => (
                <button
                  key={p.key}
                  onClick={() => setPersona(p.key as any)}
                  className={`px-5 py-2 text-sm rounded-full transition
                    ${persona === p.key
                      ? 'bg-[#4EBABD] text-black'
                      : 'text-white/50 hover:text-white'
                    }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* PRICING DETAILS */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                title: 'Team Scale',
                desc:
                  persona === 'fabricator'
                    ? 'Supports large fabrication and detailing teams.'
                    : 'Designed for multi-project contractor teams.',
              },
              {
                title: 'Project Volume',
                desc:
                  persona === 'fabricator'
                    ? 'Handles dense structural drawings and frequent revisions.'
                    : 'Optimized for bid-heavy, multi-scope workflows.',
              },
              {
                title: 'Governance',
                desc: 'Audit trails, approvals, and role-based access included.',
              },
              {
                title: 'Integrations',
                desc: 'ERP, procurement, reporting, and enterprise exports.',
              },
              {
                title: 'Deployment',
                desc: 'Cloud, private cloud, or hybrid deployment options.',
              },
              {
                title: 'Support',
                desc:
                  billing === 'annual'
                    ? 'Dedicated enterprise success manager included.'
                    : 'Enterprise support with SLAs.',
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
                <h3 className="text-lg font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-white/40  leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PDF */}
      <section className="relative py-20 text-center">
        <p className="text-3xl md:text-4xl font-bold mb-4">
          Need an offline comparison?
        </p>

        <button
          className="px-8 py-4 rounded-2xl font-semibold
                     bg-gradient-to-r from-[#4EBABD] to-[#2C7181]
                     hover:opacity-90 transition"
        >
          Download Full Feature Comparison (PDF)
        </button>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06] text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Get a Custom Enterprise Quote
        </h3>
        <p className="text-white/40 max-w-xl mx-auto mb-8">
          Pricing tailored to your team size, workflows,
          and long-term growth plans.
        </p>

        <button
          className="px-8 py-4 rounded-2xl font-semibold
                     bg-gradient-to-r from-[#4EBABD] to-[#2C7181]
                     hover:opacity-90 transition"
        >
          Talk to Sales →
        </button>
      </section>

    </main>
  );
}
