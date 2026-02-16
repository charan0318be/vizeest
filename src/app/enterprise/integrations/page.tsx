'use client';

import { useEffect, useRef, useState } from 'react';

export default function IntegrationsPage() {
  const listRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (listRef.current) observer.observe(listRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#030303] text-white">

      {/* HERO */}
      <section className="relative pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          <h1 className="text-4xl md:text-6xl lg:text-6xl
                         font-bold mt-4 mb-8 tracking-tight leading-[1.05]">
            Platform
            <br />
            <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                             bg-clip-text text-transparent">
              Integrations
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 leading-relaxed">
            Enterprise estimation does not operate in isolation.
            Integrations ensure quantities and outputs move
            reliably across systems—without manual handoffs.
          </p>

        </div>
      </section>

      {/* DATA FLOW */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div
          ref={listRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24"
        >

          {/* UPSTREAM */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-[#4EBABD] font-semibold mb-3">
                Upstream Systems
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Source Inputs
              </h2>
              <p className="text-white/40 leading-relaxed">
                Drawings, CAD files, BIM models, and design
                documentation form the inputs to the estimation process.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-[#0b0b0b]
                            border border-white/[0.08]
                            hover:border-[#4EBABD]
                            hover:-translate-y-1
                            transition-all duration-300">
              <ul className="space-y-4 text-white/50 ">
                {[
                  'CAD and BIM files remain synchronized',
                  'Design revisions propagate automatically',
                  'No manual re-upload or duplication',
                  'Structural context preserved',
                ].map((item, index) => (
                  <li
                    key={item}
                    className={`flex items-start gap-3
                      transition-all duration-700 ease-out
                      ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    <svg
                      className="w-4 h-4 mt-1 text-[#4EBABD]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CORE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1 p-10 rounded-3xl bg-[#0b0b0b]
                            border border-white/[0.08]
                            hover:border-[#4EBABD]
                            hover:-translate-y-1
                            transition-all duration-300">
              <ul className="space-y-4 text-white/50 ">
                {[
                  'Centralized quantities and validations',
                  'Governance and audit controls enforced',
                  'Single source of truth',
                  'Approval checkpoints preserved',
                ].map((item, index) => (
                  <li
                    key={item}
                    className={`flex items-start gap-3
                      transition-all duration-700 ease-out
                      ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    <svg
                      className="w-4 h-4 mt-1 text-[#4EBABD]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-1 lg:order-2">
              <div className="text-[#4EBABD]  font-semibold mb-3">
                Core Platform
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Estimation Engine
              </h2>
              <p className="text-white/40 leading-relaxed">
                Detected quantities, validations, and approvals
                are centralized—forming a reliable system of record.
              </p>
            </div>
          </div>

          {/* DOWNSTREAM */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-[#4EBABD]  font-semibold mb-3">
                Downstream Systems
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Business Operations
              </h2>
              <p className="text-white/40 leading-relaxed">
                Approved quantities flow into enterprise
                systems without re-entry or reconciliation.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-[#0b0b0b]
                            border border-white/[0.08]
                            hover:border-[#4EBABD]
                            hover:-translate-y-1
                            transition-all duration-300">
              <ul className="space-y-4 text-white/50 ">
                {[
                  'ERP and procurement integration',
                  'Cost control and reporting systems',
                  'Reduced downstream errors',
                  'Faster operational execution',
                ].map((item, index) => (
                  <li
                    key={item}
                    className={`flex items-start gap-3
                      transition-all duration-700 ease-out
                      ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    <svg
                      className="w-4 h-4 mt-1 text-[#4EBABD]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Enterprise Integrations Matter
          </h2>
          <p className="text-white/40 text-base leading-relaxed">
            Manual data transfer introduces delays, inconsistencies,
            and risk—especially at scale. Integrations ensure estimation
            outputs are immediately usable by downstream teams
            without compromising governance.
          </p>
        </div>
      </section>

      {/* FINAL VALUE */}
      <section className="relative py-24 bg-[#0a0a0a] border-t border-white/[0.06] text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          One Source of Truth. Everywhere It’s Needed.
        </h3>
        <p className="text-white/40 max-w-2xl mx-auto text-base">
          Integrations extend estimation value beyond the platform—
          without losing control.
        </p>
      </section>

    </main>
  );
}
