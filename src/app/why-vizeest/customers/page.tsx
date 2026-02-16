'use client';

import { useEffect, useState } from 'react';

export default function CustomersPage() {
  const [visible, setVisible] = useState(false);
  const [roi, setRoi] = useState(500000);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
  }, []);

  const Counter = ({ value }: { value: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!visible) return;
      let start = 0;
      const duration = 1200;
      const step = value / (duration / 16);

      const interval = setInterval(() => {
        start += step;
        if (start >= value) {
          start = value;
          clearInterval(interval);
        }
        setCount(Math.floor(start));
      }, 16);

      return () => clearInterval(interval);
    }, [visible, value]);

    return <>{count.toLocaleString()}</>;
  };

  return (
    <main className="min-h-screen bg-[#030303] text-white">

      {/* HERO + KPI */}
      <section className="relative pt-20 pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                        grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div>
            

            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-8 leading-[1.05]">
              Real Results
              <br />
              <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                               bg-clip-text text-transparent">
                From Real Teams
              </span>
            </h1>

            <p className="text-lg text-white/50 leading-relaxed max-w-xl">
              Fabricators, contractors, and engineering firms
              rely on VizeEST to estimate faster, reduce risk,
              and scale with confidence.
            </p>
          </div>

          {/* KPI GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <KPI value={<><Counter value={80} />%</>} label="Faster Cycles" />
            <KPI value={<><Counter value={98} />%</>} label="Accuracy Confidence" />
            <KPI value={<><Counter value={50} />%</>} label="Less Rework" />
          </div>

        </div>
      </section>

      {/* CASE STUDIES – TIMELINE */}
      <section className="relative py-24 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            How Teams Win with VizeEST
          </h2>

          <div className="space-y-14">

            {[
              {
                title: 'Large Steel Fabricator',
                result: '70% faster bid turnaround',
                desc:
                  'Automated beam detection replaced manual take-offs, allowing estimators to focus on pricing strategy and risk review.',
              },
              {
                title: 'Regional General Contractor',
                result: 'Higher bid confidence',
                desc:
                  'Visual reports and audit trails aligned estimating, procurement, and project teams before submission.',
              },
              {
                title: 'Enterprise Engineering Firm',
                result: 'Standardized estimation at scale',
                desc:
                  'Consistency checks and validation workflows enabled cross-office quality control without slowing delivery.',
              },
            ].map((story, i) => (
              <div
                key={story.title}
                className="relative pl-8  border-white/[0.08]
                           hover:border-[#4EBABD] transition"
              >
                <span className="absolute -left-[7px] top-2
                                 w-3 h-3 rounded-full bg-[#4EBABD]" />

                <h3 className="text-lg font-bold mb-3">
                  {story.title}
                </h3>

                <p className="text-[#4EBABD]  mb-4">
                  {story.result}
                </p>

                <p className="text-white/40  leading-relaxed max-w-3xl">
                  {story.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ROI CALCULATOR – FOCUS SECTION */}
      <section className="relative py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6
                        grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Does ROI Look Like?
            </h2>

            <p className="text-white/40 mb-10 max-w-lg">
              Move the slider to estimate the financial impact
              of faster estimation and reduced rework.
            </p>

            <input
              type="range"
              min={100000}
              max={2000000}
              step={50000}
              value={roi}
              onChange={e => setRoi(Number(e.target.value))}
              className="w-full accent-[#4EBABD]"
            />

            <p className="text-white/40 mt-6 text-sm">
              Annual Estimation Cost
            </p>
            <p className="text-2xl font-bold text-[#4EBABD]">
              ${roi.toLocaleString()}
            </p>
          </div>

          {/* RIGHT */}
          <div
            className="p-12 rounded-3xl bg-[#0b0b0b]
                       border border-white/[0.08]
                       hover:border-[#4EBABD]/40
                       hover:-translate-y-1
                       transition-all duration-300 text-center"
          >
            <p className="text-white/40 mb-4">
              Estimated Annual Savings
            </p>
            <p className="text-4xl md:text-5xl font-bold text-[#4EBABD] mb-4">
              ${(roi * 0.4).toLocaleString()}
            </p>
            <p className="text-white/30 text-sm">
              Faster cycles + reduced rework
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-[#0a0a0a]
                          text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          See What This Could Mean for Your Team
        </h3>

        <p className="text-white/40 max-w-2xl mx-auto mb-10">
          Join teams already estimating faster,
          bidding smarter, and scaling with confidence.
        </p>

        <button
          className="px-10 py-4 rounded-2xl font-bold
                     bg-gradient-to-r from-[#4EBABD] to-[#2C7181]
                     hover:opacity-90 transition"
        >
          Request a Demo →
        </button>
      </section>

    </main>
  );
}

/* KPI CARD */
function KPI({ value, label }: { value: React.ReactNode; label: string }) {
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
