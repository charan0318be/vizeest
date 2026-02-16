'use client';

export default function StructuralEngineersPage() {
  return (
    <main className="bg-black text-white relative overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#4EBABD]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] bg-[#4EBABD]/5 rounded-full blur-3xl animate-pulse delay-200" />

      {/* HERO */}
      <section className="relative pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 max-w-4xl">

          
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-8 tracking-tight leading-[1.05]">
            Solutions for
            <br />
            <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                             bg-clip-text text-transparent">
              Structural Engineers
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 leading-relaxed">
            Structural engineers require confidence that quantities
            reflect true design intent, load paths, and member logic—
            not just detected geometry.
          </p>

        </div>
      </section>

      {/* DESIGN INTENT */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Quantities Anchored to Design Intent
            </h2>

            <p className="text-white/40  sm:text-base leading-relaxed mb-6">
              Detected beams, columns, and connections remain linked
              to structural intent—preserving hierarchy, orientation,
              and engineering logic as drawings evolve.
            </p>

            <p className="text-white/40  leading-relaxed">
              This ensures estimation outputs stay aligned with
              the engineered structure—not abstract geometry.
            </p>
          </div>

          <div className="rounded-3xl bg-[#0b0b0b]
                          border border-white/[0.08] hover:border-[#4EBABD]
                          min-h-[260px]
                          flex items-center justify-center
                          text-white/30">
            Design Intent Validation Overview
          </div>

        </div>
      </section>

      {/* VALIDATION CARDS */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            Multi-Layer Validation for Engineering Confidence
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              {
                title: 'Structural Consistency Checks',
                desc: 'Automatically surface missing members, duplicated elements, and misaligned connections across drawings.',
              },
              {
                title: 'Revision-Aware Comparison',
                desc: 'When drawings change, updated quantities are compared against previous revisions to reveal structural impact.',
              },
              {
                title: 'Traceable Decisions',
                desc: 'Every quantity remains linked to its drawing location—supporting explanation and justification during reviews.',
              },
            ].map(item => (
              <div
                key={item.title}
                className="group relative rounded-3xl bg-[#0b0b0b]
                           border border-white/[0.08]
                           p-8 transition-all duration-300
                           hover:-translate-y-2
                           hover:border-[#4EBABD]
                           hover:shadow-[0_20px_55px_rgba(0,0,0,0.75)]"
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

      {/* COORDINATION */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="rounded-3xl bg-[#0b0b0b]
                          border border-white/[0.08]
                          min-h-[260px]
                          flex items-center justify-center
                          text-white/30">
            Engineer–Estimator Coordination View
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Stronger Coordination, Fewer RFIs
            </h2>

            <p className="text-white/40  sm:text-base leading-relaxed mb-6">
              Validated, traceable quantities reduce ambiguity
              between engineering and estimation—minimizing
              misinterpretation and rework.
            </p>

            <ul className="space-y-3 text-white/50 ">
              <li>Clear alignment with design intent</li>
              <li>Faster cross-discipline reviews</li>
              <li>Reduced RFIs during estimation</li>
            </ul>
          </div>

        </div>
      </section>

      {/* OUTCOME */}
      <section className="relative py-16 text-center">
        <h3 className="text-xl sm:text-2xl font-bold mb-3">
          Engineering Accuracy Without Extra Overhead
        </h3>

        <p className="text-white/40 max-w-4xl mx-auto  sm:text-base">
          Structural engineers gain confidence that estimates
          reflect engineered reality—without additional
          documentation or manual cross-checks.
        </p>
      </section>

    </main>
  );
}
