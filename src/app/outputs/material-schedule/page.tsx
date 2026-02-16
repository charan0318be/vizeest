'use client';

export default function MaterialSchedulePage() {
  return (
    <main className="bg-black text-white relative overflow-hidden">

      {/* HERO */}
      <section className=" border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">

          <span className="text-[#4EBABD]  font-semibold  tracking-wide">
            Fabrication Outputs
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Material Schedules
          </h1>

          <p className="text-white/40 max-w-7xl text-base sm:text-lg leading-relaxed">
            Generate structured, fabrication-ready material schedules
            directly from validated take-offs. Every schedule remains
            consistent, revision-aware, and fully traceable.
          </p>

        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-12">
          Fabrication-Ready by Design
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            'Automatically structured by member type',
            'Consistent naming and grouping logic',
            'Linked to drawings and revisions',
            'Ready for downstream fabrication workflows',
          ].map(item => (
            <div
              key={item}
              className="rounded-3xl bg-[#0b0b0b]
                         border border-white/[0.08]
                         p-6 transition-all duration-300
                         hover:-translate-y-1
                         hover:border-[#4EBABD]/40"
            >
              <div className="flex items-start gap-3">
                <GreenTick />
                <p className="text-white/40 text-sm sm:text-base leading-relaxed">
                  {item}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* WHAT’S INCLUDED */}
      <section className="bg-[#0a0a0a]  border-white/[0.06] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-2xl sm:text-3xl font-semibold mb-12">
            What’s Included in a Material Schedule
          </h2>

          <div className="space-y-6 max-w-4xl">

            {[
              {
                title: 'Member Profiles',
                desc: 'Beam, column, plate, and connection profiles organized by type.',
              },
              {
                title: 'Lengths & Weights',
                desc: 'Accurate lengths, weights, and totals derived from validated quantities.',
              },
              {
                title: 'Quantity Counts',
                desc: 'Clear counts to support procurement and fabrication planning.',
              },
              {
                title: 'Assemblies & Grouping',
                desc: 'Logical grouping to improve fabrication efficiency.',
              },
              {
                title: 'Drawing References',
                desc: 'Every line item linked back to source drawings and revisions.',
              },
              {
                title: 'Revision Awareness',
                desc: 'Schedules update automatically when drawings change.',
              },
            ].map(item => (
              <div
                key={item.title}
                className="rounded-3xl bg-[#0b0b0b]
                           border border-white/[0.08]
                           p-6 transition-all duration-300
                           hover:border-[#4EBABD]
                           hover:shadow-[0_12px_35px_rgba(0,0,0,0.6)]"
              >
                <h3 className="font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-white/40  sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* USE CASES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              How Teams Use Material Schedules
            </h2>

            <ul className="space-y-3 text-white/40 text-sm sm:text-base">
              {[
                'Fabrication planning and sequencing',
                'Procurement and material ordering',
                'Cost estimation and pricing validation',
                'Coordination with detailing teams',
                'Client and stakeholder reporting',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <GreenTick />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              Why Structured Schedules Matter
            </h2>

            <p className="text-white/40  sm:text-base leading-relaxed mb-6">
              Poorly structured schedules introduce errors,
              rework, and miscommunication. By generating
              schedules directly from validated data, teams
              reduce friction and improve execution confidence.
            </p>

            <ul className="space-y-3 text-white/40 text-sm sm:text-base">
              {[
                'Reduced fabrication errors',
                'Faster procurement cycles',
                'Fewer revision-related surprises',
                'Better cross-team alignment',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <GreenTick />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="bg-[#0a0a0a]  border-white/[0.06] py-16 text-center">
        <h3 className="text-xl sm:text-2xl font-semibold mb-3">
          Structured Outputs. Reliable Execution.
        </h3>
        <p className="text-white/40 max-w-2xl mx-auto text-sm sm:text-base">
          Material schedules transform validated quantities
          into clear, fabrication-ready outputs—supporting
          accurate planning and confident delivery.
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
