'use client';

import { useEffect, useRef, useState } from "react";

export default function RealTimeProcessingPage() {
  const listRef = useRef<HTMLDivElement>(null);
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

  const points = [
    'Eliminate waiting time between uploads and results',
    'Reduce rework caused by outdated quantities',
    'Support rapid design iterations',
    'Improve estimator productivity',
    'Enable faster bid turnaround',
    'Maintain accuracy throughout project changes',
  ];

  return (
    <main className="min-h-screen bg-[#030303] text-white">

      {/* WHY REAL-TIME MATTERS (ANIMATED CHECKLIST) */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Why Real-Time Processing Matters
            </h2>
          </div>

          <div
            ref={listRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6"
          >
            {points.map((item, index) => (
              <div
                key={item}
                className={`
                  flex items-start gap-4
                  transition-all duration-700 ease-out
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
                `}
                style={{ transitionDelay: `${index * 140}ms` }}
              >
                <span
                  className={`
                    mt-1 flex h-6 w-6 items-center justify-center
                    rounded-full bg-[#4EBABD]/25 text-[#4EBABD]
                    transition-transform duration-500
                    ${visible ? 'scale-100' : 'scale-75'}
                  `}
                >
                  ✓
                </span>

                <span className="text-lg text-white/55 leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Core Capabilities
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">
              Built for speed, accuracy, and uninterrupted workflows
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Fast Uploads',
                desc: 'Optimized ingestion pipelines handle large PDF, CAD, and BIM files without delays.',
              },
              {
                title: 'Instant Results',
                desc: 'Detected elements and quantities are computed immediately as processing completes.',
              },
              {
                title: 'Auto Re-Processing',
                desc: 'Any drawing update automatically triggers recalculation without manual intervention.',
              },
              {
                title: 'Live Progress Tracking',
                desc: 'Monitor processing status in real time with clear visual feedback.',
              },
              {
                title: 'Scalable Performance',
                desc: 'Built to support multiple drawings and concurrent users without performance degradation.',
              },
              {
                title: 'Non-Blocking Workflows',
                desc: 'Continue reviewing and editing while background processing runs.',
              },
            ].map(item => (
              <div
                key={item.title}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05]
                           hover:border-[#4EBABD] transition-all duration-300
                           hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,20,20,0.8)]"
              >
                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-white/40 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* VALUE STATEMENT */}
      <section className="relative py-32 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Always Working
            <br />
            With the Latest Data
          </h2>

          <p className="text-lg text-white/40 leading-relaxed">
            Real-time processing ensures estimators never fall behind
            design changes—keeping bids accurate, current, and competitive.
          </p>

        </div>
      </section>

    </main>
  );
}
