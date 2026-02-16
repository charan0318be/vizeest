'use client';

export default function SteelFabricatorsPage() {
  return (
    <main className="bg-black text-white relative overflow-hidden">

      {/* HERO */}
      <section className="relative pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 max-w-4xl animate-fade-up">

          

          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-8 tracking-tight leading-[1.05]">
            Solutions for
            <br />
            <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                             bg-clip-text text-transparent">
              Steel Fabricators
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 leading-relaxed">
            Steel fabrication demands precision. Quantities must align
            with shop practices, member profiles, and real fabrication
            logic—not abstract estimates.
          </p>

        </div>
      </section>

      {/* FABRICATION ALIGNMENT */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Fabrication-Aligned Quantities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                title: 'Member-Level Precision',
                desc: 'Beams, columns, and connections reflect real profiles and orientations.',
              },
              {
                title: 'Shop-Ready Outputs',
                desc: 'Quantities structured for fabrication, not abstract take-offs.',
              },
              {
                title: 'Detailing Alignment',
                desc: 'Reduced mismatch between estimation and shop drawings.',
              },
              {
                title: 'Production Confidence',
                desc: 'What gets estimated is what gets fabricated.',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                style={{ animationDelay: `${i * 80}ms` }}
                className="p-7 rounded-3xl bg-[#0b0b0b]
                           border border-white/[0.08]
                           transition-all duration-300
                           hover:-translate-y-2
                           hover:border-[#4EBABD]
                           hover:shadow-[0_22px_50px_rgba(0,0,0,0.75)]
                           animate-fade-up"
              >
                <p className="text-[#4EBABD] font-semibold mb-2">
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

      {/* REVISION INTELLIGENCE */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Built for Drawing Revisions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: 'Automatic Quantity Deltas',
                desc: 'Instantly identify what changed between revisions.',
              },
              {
                title: 'No Restart Required',
                desc: 'Updated drawings don’t reset your take-off work.',
              },
              {
                title: 'Bid Turnaround Speed',
                desc: 'Respond faster to revised drawings and RFQs.',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                style={{ animationDelay: `${i * 100}ms` }}
                className="p-8 rounded-3xl bg-[#0b0b0b]
                           border border-white/[0.08]
                           transition-all duration-300
                           hover:-translate-y-2
                           hover:border-[#4EBABD]
                           hover:shadow-[0_18px_45px_rgba(0,0,0,0.7)]
                           animate-fade-up"
              >
                <p className="text-[#4EBABD] font-semibold mb-3">
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

      {/* FABRICATION BENEFITS */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Fabrication-Focused Benefits
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">

            {[
              {
                title: 'Accuracy',
                desc: 'Quantities match fabrication standards and profiles.',
              },
              {
                title: 'Speed',
                desc: 'Faster bids and quicker reaction to drawing changes.',
              },
              {
                title: 'Confidence',
                desc: 'Reduced shop-floor surprises and rework.',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                style={{ animationDelay: `${i * 120}ms` }}
                className="p-8 rounded-3xl bg-[#0b0b0b]
                           border border-white/[0.08]
                           transition-all duration-300
                           hover:-translate-y-2
                           hover:border-[#4EBABD]
                           hover:shadow-[0_20px_45px_rgba(0,0,0,0.7)]
                           animate-fade-up"
              >
                <p className="text-[#4EBABD] font-bold mb-2">
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

      {/* FINAL VALUE */}
      <section className="relative py-16 text-center animate-fade-up">
        <h3 className="text-xl sm:text-2xl font-semibold mb-3">
          Estimation Built for Fabrication Reality
        </h3>

        <p className="text-white/40 max-w-4xl mx-auto  sm:text-base">
          Fabrication-ready quantities, revision-aware workflows,
          and shop-aligned outputs—so steel fabricators build
          faster, cleaner, and with confidence.
        </p>
      </section>

    </main>
  );
}
