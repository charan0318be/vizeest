export default function CostEstimatesPage() {
  return (
    <main className="bg-black text-white relative overflow-hidden">

      {/* HERO / INTRO */}
      <section className=" border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Cost Estimates
          </h1>

          <p className="text-white/40 max-w-7xl text-base sm:text-lg leading-relaxed">
            Transform validated material quantities into
            transparent, revision-aware cost estimates.
            Built to support bidding, budgeting, and
            enterprise financial decision-making.
          </p>
        </div>
      </section>

      {/* COST ESTIMATION OVERVIEW */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 py-10
                   grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
            From Quantities to Cost Confidence
          </h2>

          <p className="text-white/40  sm:text-base leading-relaxed mb-6">
            Cost estimates are generated directly from validated
            quantities—ensuring pricing remains aligned with
            actual scope, drawings, and revisions.
          </p>

          <ul className="space-y-3 text-white/40  sm:text-base">
            {[
              'Quantity-driven pricing logic',
              'Fully traceable cost line items',
              'Automatic recalculation on revisions',
              'Ready for review, approval, and export',
            ].map(item => (
              <li key={item} className="flex items-start gap-3">
                <GreenTick />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT – VISUAL */}
        <div
          className="rounded-3xl bg-[#0b0b0b]
                     border border-white/[0.08]
                     min-h-[240px] sm:min-h-[360px]
                     flex items-center justify-center text-white/30
                     transition-all duration-300
                     hover:border-[#4EBABD]
                     hover:shadow-[0_18px_45px_rgba(0,0,0,0.7)]"
        >
          Cost Breakdown View
        </div>

      </section>

      {/* COST MODEL PRINCIPLES */}
      <section className="bg-[#0a0a0a]  border-white/[0.06] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-2xl sm:text-3xl font-semibold mb-12">
            How Cost Estimates Are Built
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Quantity-Driven Costs',
                desc: 'Every cost is calculated directly from validated quantities—eliminating guesswork and manual entry.',
              },
              {
                title: 'Transparent Assumptions',
                desc: 'Each line item remains traceable to drawings, revisions, and detection logic.',
              },
              {
                title: 'Revision-Aware Updates',
                desc: 'When drawings change, quantities and costs update automatically.',
              },
              {
                title: 'Configurable Cost Inputs',
                desc: 'Apply material rates, labor factors, and overhead assumptions consistently.',
              },
              {
                title: 'Review & Approval Ready',
                desc: 'Cost estimates align with governance, review, and approval workflows.',
              },
              {
                title: 'Enterprise-Grade Consistency',
                desc: 'Standardized cost structures across projects and teams.',
              },
            ].map(item => (
              <div
                key={item.title}
                className="group relative rounded-3xl bg-[#0b0b0b]
                           border border-white/[0.08]
                           p-6 transition-all duration-300
                           hover:-translate-y-2
                           hover:border-[#4EBABD]
                           hover:shadow-[0_12px_35px_rgba(0,0,0,0.65)]"
              >
                <h3 className="font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-white/40  leading-relaxed">
                  {item.desc}
                </p>

                <div className="absolute inset-0 rounded-3xl bg-[#4EBABD]/5
                                opacity-0 group-hover:opacity-100 transition" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* USE CASES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20
                          grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
            Where Cost Estimates Are Used
          </h2>

          <ul className="space-y-3 text-white/40  sm:text-base">
            {[
              'Bid preparation and tender submissions',
              'Internal budgeting and cost forecasting',
              'Procurement planning and material ordering',
              'Client-facing cost breakdowns',
              'Enterprise financial reviews',
            ].map(item => (
              <li key={item} className="flex items-start gap-3">
                <GreenTick />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
            Why Accuracy Matters
          </h2>

          <p className="text-white/40  sm:text-base leading-relaxed mb-6">
            Inaccurate cost estimates introduce risk.
            By anchoring costs to validated quantities
            and revision-aware logic, teams reduce surprises
            and improve confidence at every decision point.
          </p>

          <ul className="space-y-3 text-white/40 text-sm sm:text-base">
            {[
              'Reduced bid risk',
              'Fewer downstream disputes',
              'Improved financial predictability',
              'Stronger client trust',
            ].map(item => (
              <li key={item} className="flex items-start gap-3">
                <GreenTick />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </section>

      {/* FINAL VALUE STATEMENT */}
      <section className="bg-[#0a0a0a] border-white/[0.06] py-16 text-center">
        <h3 className="text-xl sm:text-2xl font-semibold mb-3">
          Cost Estimates You Can Defend
        </h3>
        <p className="text-white/40 max-w-2xl mx-auto  sm:text-base">
          With quantity-driven logic and full traceability,
          cost estimates remain accurate, reviewable,
          and ready for enterprise decision-making.
        </p>
      </section>

    </main>
  );
}

/* GREEN TICK ICON */
function GreenTick() {
  return (
    <svg
      className="w-4 h-4 mt-1 text-[#4EBABD] flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
