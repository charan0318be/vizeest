'use client';

export default function QualityAssurancePage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white relative overflow-hidden">

      {/* FLOATING BACKGROUND GLOWS */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#4EBABD]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] bg-[#4EBABD]/5 rounded-full blur-3xl animate-pulse delay-200" />
      <div className="absolute bottom-24 left-1/4 w-40 h-40 bg-[#4EBABD]/10 rounded-full blur-2xl animate-bounce" />

      {/* HERO */}
      <section className="relative pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 max-w-4xl">

          <span className="text-[#4EBABD] text-sm font-semibold uppercase tracking-wide">
            Quality & Trust
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-8 leading-[1.05]">
            Quality
            <br />
            <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                             bg-clip-text text-transparent">
              Assurance
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 leading-relaxed">
            Quality is enforced continuously — not inspected at the end.
            Every estimate passes through automated checks, expert review,
            and full accountability before delivery.
          </p>

        </div>
      </section>

      {/* QUALITY PILLARS */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-4xl md:text-5xl font-bold mb-14">
            Core Quality Pillars
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                title: 'Accuracy Validation',
                desc: 'Quantities are verified against drawings, tolerances, and revisions.',
              },
              {
                title: 'Conflict Detection',
                desc: 'Missing, duplicated, or contradictory elements are flagged early.',
              },
              {
                title: 'Audit Trail',
                desc: 'Every decision is logged with user, timestamp, and reason.',
              },
              {
                title: 'Manual Review',
                desc: 'Human expertise is applied where professional judgement matters.',
              },
            ].map(item => (
              <div
                key={item.title}
                className="p-8 rounded-3xl bg-[#0b0b0b]
                           border border-white/[0.08]
                           transition-all duration-300
                           hover:-translate-y-1
                           hover:border-[#4EBABD]/40
                           hover:shadow-[0_12px_35px_rgba(0,0,0,0.65)]"
              >
                <h3 className="text-lg font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* QUALITY PROCESS FLOW (REPLACED IMAGE) */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-4xl md:text-5xl font-bold mb-14">
            How Quality Is Enforced
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl">

            {[
              {
                step: '01',
                title: 'Automated Validation',
                desc: 'AI validates quantities, dimensions, and consistency across drawings.',
              },
              {
                step: '02',
                title: 'Estimator Review',
                desc: 'Experts review flagged areas and apply professional judgement.',
              },
              {
                step: '03',
                title: 'Approval & Audit',
                desc: 'Final outputs are approved and fully logged for traceability.',
              },
            ].map(item => (
              <div
                key={item.step}
                className="relative p-8 rounded-3xl bg-[#0b0b0b]
                           border border-white/[0.08]
                           transition-all duration-300
                           hover:-translate-y-1
                           hover:border-[#4EBABD]/40"
              >
                <span className="text-[#4EBABD] text-sm font-semibold">
                  Step {item.step}
                </span>

                <h3 className="text-xl font-semibold mt-3 mb-3">
                  {item.title}
                </h3>

                <p className="text-white/40 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

          <p className="text-white/40 text-base leading-relaxed mt-12 max-w-3xl">
            This layered approach ensures quality is not dependent on a single
            check, but continuously reinforced throughout the estimation lifecycle.
          </p>

        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06] text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Quality by Design, Not by Chance
        </h3>

        <p className="text-white/40 max-w-2xl mx-auto text-base">
          VizeEST embeds quality into every step of estimation —
          protecting accuracy, accountability, and trust from
          first detection to final delivery.
        </p>
      </section>

    </main>
  );
}
