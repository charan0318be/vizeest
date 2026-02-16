'use client';

import { useEffect, useRef, useState } from 'react';

export default function MaterialTakeoffEnginePage() {

  /* ---------- BULLET ANIMATION ---------- */
  const listRef = useRef<HTMLUListElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!listRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(listRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#030303] text-white relative overflow-hidden">

      {/* FLOATING BACKGROUND */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#4EBABD]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] bg-[#4EBABD]/5 rounded-full blur-3xl animate-pulse delay-200" />

      {/* HERO */}
      <section className="relative pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-[1.05]">
            AI Material<br />
            <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB] bg-clip-text text-transparent">
              Take-Off Engine
            </span>
          </h1>

          <p className="text-lg text-white/50 max-w-7xl">
            Transform detected structural elements into accurate quantities,
            weights, and counts using an AI-driven take-off engine.
          </p>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="relative py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-4xl md:text-5xl font-bold mb-20">
            Core Capabilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Automated Quantity Calculation', desc: 'Generate precise quantities directly from detected elements.' },
              { title: 'Weight & Length Computation', desc: 'Accurately compute weights and lengths.' },
              { title: 'Real-Time Updates', desc: 'Quantities update instantly when drawings change.' },
              { title: 'Standardized Take-Off Logic', desc: 'Ensure consistent results across teams.' },
              { title: 'Multi-User Consistency', desc: 'Eliminate estimation variations.' },
              { title: 'Faster Estimation Cycles', desc: 'Reduce take-off time significantly.' },
            ].map(item => (
              <div
                key={item.title}
                className="p-8 rounded-3xl bg-[#0b0b0b]
                           border border-white/[0.08]
                           hover:border-[#4EBABD]
                           hover:-translate-y-1
                           transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-white/40">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Why AI-Driven Take-Off Matters
          </h2>

          <div className="p-10 rounded-3xl bg-[#0b0b0b]
                          border border-white/[0.08]
                          hover:border-[#4EBABD]
                          transition-all duration-300
                          max-w-4xl">

            {/* ✅ ANIMATED BULLET LIST */}
            <ul
              ref={listRef}
              className="space-y-4"
            >
              {[
                'Reduce manual calculation errors',
                'Improve consistency across estimates',
                'Handle large and complex projects',
                'Respond quickly to design revisions',
                'Increase estimator productivity',
                'Deliver reliable quantities for costing',
              ].map((item, index) => (
                <li
                  key={item}
                  className={`
                    flex items-start gap-3
                    transition-all duration-700 ease-out
                    ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
                  `}
                  style={{ transitionDelay: `${index * 140}ms` }}
                >
                  {/* BLUE TICK */}
                  <span
                    className={`
                      mt-1 flex h-5 w-5 items-center justify-center
                      rounded-full bg-[#4EBABD]/25 text-[#4EBABD]
                      transition-transform duration-500
                      ${visible ? 'scale-100' : 'scale-75'}
                    `}
                  >
                    ✓
                  </span>

                  <span className="text-white/55">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

          </div>

        </div>
      </section>

      {/* VALUE STATEMENT */}
      <section className="relative py-24 bg-[#0a0a0a] border-t border-white/[0.06] text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Accurate Take-Offs at Machine Speed
        </h3>
        <p className="text-white/40 max-w-5xl mx-auto">
          Deliver consistent, reviewable quantities without compromising accuracy.
        </p>
      </section>

    </main>
  );
}
