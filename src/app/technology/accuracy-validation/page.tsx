import Squares from "@/components/Squares";

export default function AccuracyValidationPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white">

      {/* HERO */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        {/* background depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#030303_70%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-8 tracking-tight leading-[1.05]">
            Accuracy & Validation
            <br />
            <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB] bg-clip-text text-transparent">
              Framework
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 max-w-5xl mx-auto leading-relaxed">
            Accuracy is enforced through layered verification.
            Every estimate passes automated checks that surface risk,
            highlight uncertainty, and guide human review.
          </p>
        </div>
      </section>

      {/* VALIDATION TIMELINE */}
      <section className="relative py-10">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Validation Timeline
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto">
              A structured flow that continuously verifies estimation accuracy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stage: 'Input', title: 'Drawing Ingestion', desc: 'Plans, sections, and revisions are analyzed together.' },
              { stage: 'Check', title: 'Automated Verification', desc: 'Detected elements are evaluated for consistency.' },
              { stage: 'Signal', title: 'Risk Identification', desc: 'Mismatches, gaps, and anomalies are flagged.' },
              { stage: 'Guide', title: 'Estimator Review', desc: 'Attention is directed where it matters most.' },
            ].map(item => (
              <div key={item.stage} className="group relative">
                {/* glow */}
                <div className="absolute -inset-px rounded-3xl
                                bg-gradient-to-b from-[#4EBABD]/20 via-transparent to-transparent
                                opacity-0 group-hover:opacity-100
                                transition-opacity duration-500 blur-sm" />

                <div className="relative p-8 rounded-3xl
                                bg-gradient-to-b from-white/[0.04] to-white/[0.01]
                                border border-white/[0.06]
                                hover:border-[#4EBABD]/30
                                transition-all duration-500">
                  <div className="text-[#4EBABD] font-bold mb-2">
                    {item.stage}
                  </div>
                  <h3 className="text-lg font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/40 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* INSPECTOR VIEW */}
      <section className="relative py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                        grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* VISUAL */}
          <div className="group relative">
            <div className="absolute -inset-px rounded-3xl
                            bg-gradient-to-b from-[#4EBABD]/20 via-transparent to-transparent
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-500 blur-sm" />

            <div className="relative rounded-3xl
                border border-white/[0.06]
                min-h-[320px]
                overflow-hidden
                hover:border-[#4EBABD]/30
                transition-all duration-500">

  {/* BALLPIT BACKGROUND */}
  <div className="absolute inset-0 pointer-events-none">

  
<Squares
  speed={1.5}
  squareSize={40}

  direction="diagonal"
  
/>

  </div>

  {/* OVERLAY PANEL CONTENT */}
  <div className="relative z-10 p-10
                 ">
    Validation Inspector Panel
  </div>

</div>

          </div>

          {/* CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Validation Inspector
            </h2>

            <p className="text-white/40 text-base leading-relaxed mb-8">
              Instead of hiding uncertainty, the framework exposes it.
              Each detected element carries validation signals that
              indicate confidence, risk, or required review.
            </p>

            <ul className="space-y-3 text-white/50 text-sm">
              <li>Cross-drawing consistency checks</li>
              <li>Tolerance-based deviation detection</li>
              <li>Duplicate and missing element flags</li>
              <li>Revision-aware comparisons</li>
            </ul>
          </div>

        </div>
      </section>

      {/* VALIDATION SIGNALS */}
      <section className="relative py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Validation Signals You Can Trust
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto">
              Clear, actionable indicators that reinforce confidence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Consistency Signal', desc: 'Elements align across drawings and revisions.' },
              { title: 'Tolerance Signal', desc: 'Quantities fall within acceptable deviation limits.' },
              { title: 'Conflict Signal', desc: 'Potential overlaps or contradictions detected.' },
              { title: 'Completeness Signal', desc: 'Scope gaps and missing elements identified early.' },
              { title: 'Revision Impact Signal', desc: 'Design changes quantified instantly.' },
              { title: 'Export Readiness Signal', desc: 'Estimate cleared for downstream use.' },
            ].map(signal => (
              <div key={signal.title} className="group relative">
                <div className="absolute -inset-px rounded-3xl
                                bg-gradient-to-b from-[#4EBABD]/20 via-transparent to-transparent
                                opacity-0 group-hover:opacity-100
                                transition-opacity duration-500 blur-sm" />

                <div className="relative p-8 rounded-3xl
                                bg-gradient-to-b from-white/[0.04] to-white/[0.01]
                                border border-white/[0.06]
                                hover:border-[#4EBABD]/30
                                hover:-translate-y-1
                                transition-all duration-500">
                  <h4 className="text-lg font-semibold mb-3">
                    {signal.title}
                  </h4>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {signal.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* OUTCOME */}
      <section className="relative py-20">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Accuracy Without Guesswork
          </h3>
          <p className="text-white/40 text-lg leading-relaxed">
            The Accuracy & Validation Framework transforms uncertainty
            into actionable insight—helping teams deliver estimates
            that hold up under scrutiny.
          </p>
        </div>
      </section>

    </main>
  );
}
