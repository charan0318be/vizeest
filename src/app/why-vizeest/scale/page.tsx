'use client';

import { useEffect, useState } from 'react';

export default function PlatformScalePage() {
  const [metrics, setMetrics] = useState({
    drawings: 0,
    users: 0,
    speed: 0,
    uptime: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        drawings: Math.min(prev.drawings + 20, 500),
        users: Math.min(prev.users + 5, 200),
        speed: Math.min(prev.speed + 2, 95),
        uptime: Math.min(prev.uptime + 1, 99),
      }));
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#030303] text-white">

      {/* HERO */}
      <section className="relative pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          

          <h1 className="text-4xl md:text-6xl lg:text-6xl
                         font-bold mt-4 mb-8 tracking-tight leading-[1.05]">
            Built to Scale
            <br />
            <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                             bg-clip-text text-transparent">
              With Enterprise Demand
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 leading-relaxed">
            VizeEST is engineered for real-world enterprise workloads—
            handling large drawing sets, concurrent users,
            and peak bid-day pressure without compromise.
          </p>

        </div>
      </section>

      {/* LIVE METRICS */}
      <section className="relative py-20 bg-[#0a0a0a] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6
                        grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">

          <Metric value={`${metrics.drawings}+`} label="Drawings per Project" />
          <Metric value={`${metrics.users}+`} label="Concurrent Users" />
          <Metric value={`${metrics.speed}%`} label="Processing Efficiency" />
          <Metric value={`${metrics.uptime}%`} label="Platform Uptime" />

        </div>
      </section>

      {/* SCALE CAPABILITIES */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Designed for Real-World Scale
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                title: 'Large Project Handling',
                desc: 'Process hundreds of drawings and thousands of elements without slowdown.',
              },
              {
                title: 'Concurrent Collaboration',
                desc: 'Multiple estimators and reviewers working simultaneously.',
              },
              {
                title: 'Fast Reprocessing',
                desc: 'Instant recalculation during drawing revisions.',
              },
              {
                title: 'Peak Load Stability',
                desc: 'Reliable performance during bid deadlines.',
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
                <h3 className="font-semibold mb-3">
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

      {/* PERFORMANCE CONTENT */}
      <section className="relative py-20 bg-[#0a0a0a] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6
                        grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* VISUAL CARD */}
          <div
            className="p-10 rounded-3xl bg-[#0b0b0b]
                       border border-white/[0.08]
                       hover:border-[#4EBABD]
                       hover:-translate-y-1
                       transition-all duration-300"
          >
            <h4 className="text-lg font-semibold mb-4">
              System Performance Summary
            </h4>
            <p className="text-white/40  leading-relaxed">
              Optimized pipelines ensure consistent responsiveness
              from early estimates to enterprise rollouts.
            </p>
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Performance You Can Depend On
            </h2>

            <p className="text-white/40 mb-8">
              The platform remains predictable, responsive,
              and stable—even under peak demand.
            </p>

            <ul className="space-y-4 text-white/50">
              {[
                'Low-latency processing pipelines',
                'Efficient revision handling',
                'Optimized resource utilization',
                'Minimal downtime during peak load',
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

      {/* FINAL CTA */}
      <section className="relative py-20 bg-[#0a0a0a]  text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Scale Without Compromise
        </h3>
        <p className="text-white/40 max-w-2xl mx-auto mb-8">
          From single projects to enterprise portfolios,
          VizeEST grows with you—without slowing you down.
        </p>

        <button
          className="px-8 py-4 rounded-2xl font-semibold
                     bg-gradient-to-r from-[#4EBABD] to-[#2C7181]
                     hover:opacity-90 transition cursor-pointer"
        >
          See Platform Performance →
        </button>
      </section>

    </main>
  );
}

/* METRIC CARD */
function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="p-8 rounded-3xl bg-[#0b0b0b]
                 border border-white/[0.08]
                 hover:border-[#4EBABD]/40
                 hover:-translate-y-1
                 transition-all duration-300"
    >
      <p className="text-3xl sm:text-4xl font-bold text-[#4EBABD] mb-2">
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
