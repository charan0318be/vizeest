'use client';

import { useEffect, useRef, useState } from 'react';

export default function CadBimProcessingPage() {

  /* 🔹 BULLET ANIMATION STATE (ADDED ONLY) */
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

          <h1 className="text-4xl md:text-6xl lg:text-6xl
                         font-bold mt-4 mb-8 tracking-tight leading-[1.05]">
            CAD & BIM
            <br />
            <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                             bg-clip-text text-transparent">
              Processing
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 max-w-7xl leading-relaxed">
            Process CAD and BIM drawings while preserving structural intent,
            scale, and geometry integrity—without heavy preprocessing.
          </p>

        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="relative py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-4xl md:text-5xl font-bold mb-20">
            Core Processing Capabilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'DWG & BIM Format Support', desc: 'Industry-standard CAD and BIM formats without conversion.' },
              { title: 'Layer-Aware Interpretation', desc: 'Isolate relevant structural information using layer context.' },
              { title: 'Scale & Unit Normalization', desc: 'Prevent quantity errors by normalizing units automatically.' },
              { title: 'Complex Geometry Handling', desc: 'Accurately interpret curved, angled, and composite elements.' },
              { title: 'Cross-File Consistency', desc: 'Maintain consistent interpretation across revisions.' },
              { title: 'Minimal Preprocessing', desc: 'Eliminate the need for extensive drawing cleanup.' },
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
                <p className="text-white/40 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESSING FLOW */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-4xl md:text-5xl font-bold mb-20">
            CAD & BIM Processing Flow
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Ingest', desc: 'Upload CAD or BIM files directly.' },
              { step: '02', title: 'Interpret', desc: 'Analyze geometry, layers, and annotations.' },
              { step: '03', title: 'Normalize', desc: 'Automatically standardize scale and units.' },
              { step: '04', title: 'Extract', desc: 'Prepare clean structured data for take-off.' },
            ].map(item => (
              <div
                key={item.step}
                className="p-8 rounded-3xl bg-[#2b2727]
                           hover:border-[#4EBABD]
                           hover:-translate-y-1
                           hover:shadow-[0_30px_80px_rgba(0,20,20,0.8)]
                           transition-all duration-300"
              >
                <div className="text-[#4EBABD] font-semibold mb-2">
                  Step {item.step}
                </div>
                <h4 className="font-semibold mb-3">
                  {item.title}
                </h4>
                <p className="text-white/40 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Why CAD & BIM Processing Matters
          </h2>

          <div className="p-10 rounded-3xl bg-[#0b0b0b]
                          border border-white/[0.08] hover:border-[#4EBABD] max-w-4xl">

            {/* ✅ ANIMATED BULLET LIST (ONLY CHANGE HERE) */}
            <ul
              ref={listRef}
              className="space-y-4"
            >
              {[
                'Preserve original design intent',
                'Avoid errors caused by scale mismatches',
                'Handle complex geometry reliably',
                'Reduce manual cleanup time',
                'Support frequent drawing revisions',
                'Enable accurate downstream take-offs',
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
                  <span
                    className={`
                      mt-1 flex h-5 w-5 items-center justify-center
                      rounded-full bg-[#4EBABD]/10 text-[#4EBABD]
                      transition-transform duration-500
                      ${visible ? 'scale-100' : 'scale-75'}
                    `}
                  >
                    ✓
                  </span>
                  <span className="text-white/55 text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

          </div>

        </div>
      </section>

      {/* VALUE STATEMENT */}
      <section className="relative py-20 bg-[#0a0a0a] border-white/[0.06] text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Accurate Interpretation Starts at the Source
        </h3>
        <p className="text-white/40 max-w-4xl mx-auto text-base">
          Robust CAD & BIM processing ensures all downstream detection,
          take-off, and reporting workflows are built on reliable,
          correctly interpreted drawing data.
        </p>
      </section>

    </main>
  );
}
