'use client';

export default function EngineeringFirmsPage() {
  return (
    <main className="bg-black text-white relative overflow-hidden">

      {/* HERO */}
      <section className="relative pt-15 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 max-w-4xl scroll-fade-up animate-in">

          

          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-8 tracking-tight leading-[1.05]">
            Solutions for
            <br />
            <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                             bg-clip-text text-transparent">
              Engineering Firms
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 leading-relaxed">
            Engineering teams demand precision, traceability,
            and alignment with design intent—especially as
            drawings evolve across revisions.
          </p>

        </div>
      </section>

      {/* DESIGN INTENT */}
      <section className="relative py-20 bg-[#0a0a0a] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6
                        grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* CONTENT */}
          <div className="scroll-fade-left animate-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Preserve Design Intent
            </h2>

            <p className="text-white/40 mb-6  sm:text-base leading-relaxed">
              Detected beams, columns, and connections are interpreted
              in the context of engineering drawings—ensuring quantities
              reflect actual structural logic rather than assumptions.
            </p>

            <ul className="space-y-3 text-white/50  sm:text-base">
              {[
                'Structural hierarchy awareness',
                'Connection-sensitive detection',
                'Alignment with engineering standards',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <GreenTick />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ANIMATED PREVIEW */}
          <div className="scroll-fade-right animate-in">
            <AnimatedPreview title="Design Intent Overlay" />
          </div>

        </div>
      </section>

      {/* REVISION HANDLING */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6
                        grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* PREVIEW */}
          <div className="scroll-fade-left animate-in">
            <AnimatedPreview title="Revision Comparison View" />
          </div>

          {/* CONTENT */}
          <div className="scroll-fade-right animate-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built for Iterative Design Changes
            </h2>

            <p className="text-white/40  sm:text-base leading-relaxed mb-4">
              Engineering drawings change frequently. Quantities
              automatically adapt as revisions are uploaded—keeping
              estimation aligned with the latest design intent.
            </p>

            <p className="text-white/40  leading-relaxed">
              This reduces RFIs, rework, and coordination gaps
              between engineering and estimating teams.
            </p>
          </div>

        </div>
      </section>

      {/* OUTCOMES */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6
                        grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">

          {[
            {
              label: 'Fewer RFIs',
              desc: 'Clear traceability from drawing to quantity',
            },
            {
              label: 'Better Coordination',
              desc: 'Aligned outputs across engineering and estimation',
            },
            {
              label: 'Higher Confidence',
              desc: 'Defensible, review-ready estimates',
            },
          ].map((item, i) => (
            <div
              key={item.label}
              style={{ transitionDelay: `${i * 120}ms` }}
              className="
                p-8 rounded-3xl bg-[#0b0b0b]
                border border-white/[0.08] hover:border-[#4EBABD]
                scroll-scale-up animate-in
                hover-lift hover-glow
              "
            >
              <p className="text-[#4EBABD] font-semibold mb-2">
                {item.label}
              </p>
              <p className="text-white/40 ">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}

/* =====================================
   ANIMATED PREVIEW PANEL (WITH MOVING TEXT)
   ===================================== */
function AnimatedPreview({ title }: { title: string }) {
  return (
    <div
      className="
        relative rounded-3xl overflow-hidden
        min-h-[240px] sm:min-h-[360px]
        bg-[#0b0b0b]
        border border-white/[0.08]
        grid-pattern
        hover-lift hover-glow
      "
    >
      {/* Scan line */}
      <div className="absolute inset-0 animate-scan-line opacity-15" />

      {/* STREAM 1 */}
      <div className="absolute top-[32%] left-0 w-full h-[2px] bg-[#4EBABD]/30">
        <div className="absolute left-0 -top-4 flex gap-2 animate-data-stream whitespace-nowrap">
          <span className="text-[11px] text-[#4EBABD]/80">Detecting beams</span>
          <span className="text-[10px] text-white/40">structural hierarchy</span>
        </div>
      </div>

      {/* STREAM 2 */}
      <div className="absolute top-[52%] left-0 w-full h-[2px] bg-[#4EBABD]/20">
        <div className="absolute right-0 -top-4 flex gap-2 animate-data-stream-reverse whitespace-nowrap">
          <span className="text-[11px] text-[#4EBABD]/70">Validating connections</span>
          <span className="text-[10px] text-white/40">load paths</span>
        </div>
      </div>

      {/* STREAM 3 */}
      <div className="absolute top-[72%] left-0 w-full h-[2px] bg-[#4EBABD]/25">
        <div className="absolute left-0 -top-4 flex gap-2 animate-data-stream whitespace-nowrap">
          <span className="text-[11px] text-[#4EBABD]/80">Recalculating quantities</span>
          <span className="text-[10px] text-white/40">revision aware</span>
        </div>
      </div>

      {/* Pulse */}
      <div className="absolute inset-0 animate-structure-pulse opacity-10" />

      {/* Center label */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <span className="text-[#4EBABD] text-sm font-semibold mb-2 animate-pulse-slow">
          Live Engineering Analysis
        </span>
        <p className="text-white/40 text-sm">{title}</p>
      </div>
    </div>
  );
}

/* GREEN TICK */
function GreenTick() {
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
