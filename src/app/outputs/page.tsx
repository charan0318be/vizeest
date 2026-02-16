'use client';

export default function OutputsPage() {
  return (
    <main className="bg-black text-white relative overflow-hidden">

      {/* HERO */}
      <section className=" border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">

          <span className="text-[#4EBABD] text-sm font-semibold uppercase tracking-wide">
            Outputs & Deliverables
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            From Estimation to Execution
          </h1>

          <p className="text-white/40 max-w-4xl text-base sm:text-lg leading-relaxed">
            VizeEST converts validated estimation data into structured,
            review-ready outputs. Every deliverable is traceable,
            defensible, and designed to integrate seamlessly with
            procurement, reporting, and enterprise systems.
          </p>

        </div>
      </section>

      {/* OUTPUT FLOW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-12">
          How Outputs Are Generated
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            {
              step: '01',
              title: 'Validated Quantities',
              desc: 'Only reviewed and approved quantities move into deliverables.',
            },
            {
              step: '02',
              title: 'Structured Formatting',
              desc: 'Outputs are automatically organized for their intended use.',
            },
            {
              step: '03',
              title: 'Enterprise-Ready Delivery',
              desc: 'Results are prepared for reporting, export, and downstream systems.',
            },
          ].map(item => (
            <div
              key={item.step}
              className="rounded-3xl bg-[#0b0b0b]
                         border border-white/[0.08]
                         p-6 transition-all duration-300
                         hover:-translate-y-2
                         hover:border-[#4EBABD]/40
                         hover:shadow-[0_12px_35px_rgba(0,0,0,0.6)]"
            >
              <p className="text-[#4EBABD] text-sm font-semibold mb-2">
                Step {item.step}
              </p>

              <h3 className="font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-white/40 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* CORE DELIVERABLES */}
      <section className="bg-[#0a0a0a]  border-white/[0.06] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-2xl sm:text-3xl font-semibold mb-12">
            Core Deliverables
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                title: 'Material Schedules',
                desc: 'Fabrication-ready schedules with sizes, weights, and quantities.',
              },
              {
                title: 'Cost Estimates',
                desc: 'Quantity-driven cost breakdowns with transparent assumptions.',
              },
              {
                title: 'Visual Reports',
                desc: 'Drawing-based reports that simplify review and approval.',
              },
              {
                title: 'Export Formats',
                desc: 'Excel, PDF, and enterprise-ready formats for downstream use.',
              },
            ].map(item => (
              <div
                key={item.title}
                className="rounded-3xl bg-[#0b0b0b]
                           border border-white/[0.08]
                           p-6 transition-all duration-300
                           hover:-translate-y-2
                           hover:border-[#4EBABD]/40
                           hover:shadow-[0_12px_35px_rgba(0,0,0,0.6)]"
              >
                <h3 className="font-semibold mb-2">
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

      {/* WHY OUTPUTS MATTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              Why High-Quality Outputs Matter
            </h2>

            <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-6">
              Poor outputs create confusion, rework, and disputes.
              Clear, structured deliverables ensure stakeholders
              understand quantities, assumptions, and decisions
              without ambiguity.
            </p>
          </div>

          <ul className="space-y-3 text-white/40 text-sm sm:text-base">
            {[
              'Faster approvals and fewer clarifications',
              'Reduced procurement and fabrication risk',
              'Strong audit and compliance support',
              'Consistent delivery across projects',
            ].map(item => (
              <li key={item} className="flex items-start gap-3">
                <GreenTick />
                <span>{item}</span>
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0a0a0a] border-t border-white/[0.06] py-16 text-center">
        <h3 className="text-xl sm:text-2xl font-semibold mb-3">
          Outputs You Can Trust
        </h3>
        <p className="text-white/40 max-w-2xl mx-auto text-sm sm:text-base">
          Every deliverable produced by VizeEST is built on
          validated data—ensuring confidence, clarity, and
          enterprise-grade reliability.
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
