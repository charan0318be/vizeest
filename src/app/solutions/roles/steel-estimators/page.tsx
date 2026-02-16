'use client';

export default function SteelEstimatorsPage() {
  return (
    <main className="bg-black text-white relative overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#4EBABD]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] bg-[#4EBABD]/5 rounded-full blur-3xl animate-pulse delay-200" />

      {/* HERO */}
      <section className="relative pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 max-w-4xl scroll-fade-up animate-in">

          

          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-8 tracking-tight leading-[1.05]">
            Solutions for
            <br />
            <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                             bg-clip-text text-transparent">
              Steel Estimators
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 leading-relaxed">
            Steel estimation demands speed, accuracy, and accountability.
            Every quantity must be defensible, traceable, and aligned
            with drawings—especially under tight bid deadlines.
          </p>

        </div>
      </section>

      {/* ESTIMATOR REALITY */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 scroll-fade-up animate-in">

          <h2 className="text-3xl md:text-4xl font-semibold mb-10">
            The Reality of Steel Estimation
          </h2>

          <div className="max-w-5xl space-y-6">
            <p className="text-white/40  sm:text-base leading-relaxed">
              Manual take-offs are time-consuming and prone to missed
              elements. Drawing revisions introduce rework, and
              estimators are often forced to defend numbers
              without clear traceability.
            </p>

            <p className="text-white/40 text-sm sm:text-base leading-relaxed">
              Under constant pressure, estimators need tools that
              accelerate quantity extraction without sacrificing
              professional judgment or accountability.
            </p>
          </div>

        </div>
      </section>

      {/* WORKFLOW VALUE CARDS */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-3xl md:text-4xl font-semibold mb-12 scroll-fade-up animate-in">
            Designed Around the Estimator Workflow
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              {
                title: 'Automated Detection',
                desc: 'Beams, columns, and connections are extracted directly from drawings—eliminating manual marking and repetitive measurement.',
              },
              {
                title: 'Visual Verification',
                desc: 'Quantities can be reviewed directly on drawings, allowing estimators to apply expertise where interpretation is required.',
              },
              {
                title: 'Revision Awareness',
                desc: 'Updated drawings trigger automatic recalculation, so estimators never restart take-offs from scratch.',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                style={{ transitionDelay: `${i * 120}ms` }}
                className="
                  group relative rounded-3xl bg-[#0b0b0b]
                  border border-white/[0.08] hover:border-[#4EBABD]
                  p-8 scroll-scale-up animate-in
                  hover-lift hover-glow
                "
              >
                <h3 className="text-xl font-semibold mb-3
                               group-hover:text-[#4EBABD] transition">
                  {item.title}
                </h3>

                <p className="text-white/40 text-sm leading-relaxed">
                  {item.desc}
                </p>

                <div className="absolute inset-0 rounded-3xl bg-[#4EBABD]/5
                                opacity-0 group-hover:opacity-100 transition" />
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* DEFENSIBILITY SECTION */}
      <section className="relative py-20 bg-[#0a0a0a] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6
                        grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* CONTENT */}
          <div className="scroll-fade-left animate-in">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Defend Every Number
            </h2>

            <p className="text-white/40  sm:text-base leading-relaxed mb-6">
              Every quantity remains traceable back to its source
              drawing location. Estimators can confidently explain,
              validate, and defend numbers during reviews and audits.
            </p>

            <ul className="space-y-3 text-white/50 text-sm">
              <li>Drawing-to-quantity traceability</li>
              <li>Audit-ready validation trails</li>
              <li>Reduced bid risk and disputes</li>
            </ul>
          </div>

          {/* 🔥 ANIMATED PREVIEW PANEL */}
          <div className="scroll-fade-right animate-in">
            <AnimatedPreview title="Quantity Traceability View" />
          </div>

        </div>
      </section>

      {/* OUTCOMES */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-semibold mb-12 scroll-fade-up animate-in">
            What Steel Estimators Gain
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

            {[
              {
                title: 'Faster Bids',
                desc: 'Reduce take-off time without sacrificing accuracy.',
              },
              {
                title: 'Higher Confidence',
                desc: 'Defensible quantities backed by traceable data.',
              },
              {
                title: 'Consistent Results',
                desc: 'Repeatable estimation quality across projects.',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                style={{ transitionDelay: `${i * 120}ms` }}
                className="scroll-scale-up animate-in hover-lift"
              >
                <p className="text-[#4EBABD] font-semibold mb-2">
                  {item.title}
                </p>
                <p className="text-white/40 ">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="relative py-16 bg-[#0a0a0a]  text-center scroll-fade-up animate-in">
        <h3 className="text-xl sm:text-2xl font-semibold mb-3">
          Estimation with Speed, Accuracy, and Confidence
        </h3>

        <p className="text-white/40 max-w-4xl mx-auto  sm:text-base">
          Steel estimators gain time back without losing control—
          delivering faster bids, consistent results, and
          defensible estimates.
        </p>
      </section>

    </main>
  );
}

/* =====================================
   ANIMATED PREVIEW PANEL
   ===================================== */
function AnimatedPreview({ title }: { title: string }) {
  return (
    <div
      className="
        relative rounded-3xl overflow-hidden
        min-h-[260px]
        bg-[#0b0b0b]
        border border-white/[0.08]
        grid-pattern
        hover-lift hover-glow
        transition-all duration-500
      "
    >
      {/* Scan Line */}
      <div className="absolute inset-0 animate-scan-line opacity-20" />

      {/* Data Streams */}
      <div className="absolute top-1/3 left-0 w-full h-[2px]
                      bg-[#4EBABD]/30 animate-data-stream" />
      <div className="absolute top-2/3 left-0 w-full h-[2px]
                      bg-[#4EBABD]/20 animate-data-stream-reverse" />

      {/* Pulse Layer */}
      <div className="absolute inset-0 animate-structure-pulse opacity-10" />

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center
                      justify-center h-full text-center px-6">
        <span className="text-[#4EBABD] text-sm font-semibold mb-2
                         animate-pulse-slow">
          Live Preview
        </span>
        <p className="text-white/40 text-sm">
          {title}
        </p>
      </div>
    </div>
  );
}
