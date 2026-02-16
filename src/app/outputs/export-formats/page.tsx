'use client';

export default function ExportFormatsPage() {
  return (
    <main className="bg-black text-white relative overflow-hidden">

      {/* HERO */}
      <section className=" border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-18">

         

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Export Formats
          </h1>

          <p className="text-white/40 max-w-7xl text-base sm:text-lg leading-relaxed">
            Estimation results are only valuable when they can be used.
            VizeEST delivers clean, structured export formats designed
            for procurement, ERP systems, client deliverables,
            and enterprise workflows.
          </p>

        </div>
      </section>

      {/* EXPORT PRINCIPLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-12">
          Built for Downstream Systems
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            'Consistent column structures',
            'Revision-aware data outputs',
            'Audit-ready traceability',
            'Enterprise reporting compatibility',
          ].map(item => (
            <div
              key={item}
              className="rounded-3xl bg-[#0b0b0b]
                         border border-white/[0.08]
                         p-6 transition-all duration-300
                         hover:-translate-y-1
                         hover:border-[#4EBABD]"
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

      {/* SUPPORTED EXPORT FORMATS – STACKED */}
      <section className="bg-[#0a0a0a]  border-white/[0.06] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-2xl sm:text-3xl font-semibold mb-12">
            Supported Export Formats
          </h2>

          <div className="space-y-6 max-w-4xl">

            {[
              {
                title: 'Excel / CSV',
                desc: 'Structured spreadsheets for estimating, procurement, and internal review workflows.',
              },
              {
                title: 'ERP-Compatible Formats',
                desc: 'Exports designed for integration with ERP, MRP, and cost management systems.',
              },
              {
                title: 'Client-Ready PDFs',
                desc: 'Presentation-ready outputs suitable for submissions, approvals, and client reporting.',
              },
              {
                title: 'Custom Enterprise Exports',
                desc: 'Tailored export schemas aligned with enterprise data standards and workflows.',
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

      {/* GOVERNANCE STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              Governed & Traceable Outputs
            </h2>

            <p className="text-white/40  sm:text-base leading-relaxed mb-6">
              All exports maintain full traceability back to detected
              elements, revisions, and approval stages—ensuring
              exported data remains defensible and audit-ready.
            </p>

            <ul className="space-y-3 text-white/40 sm:text-base">
              {[
                'Linked to validation and review workflows',
                'Time-stamped and user-attributed',
                'Revision history preserved',
                'Audit and compliance ready',
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
              Where Exports Are Used
            </h2>

            <ul className="space-y-3 text-white/40 sm:text-base">
              {[
                'Procurement and material ordering',
                'Bid submissions and cost reviews',
                'Client approvals and reporting',
                'ERP and enterprise ingestion',
                'Historical record keeping',
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
          Outputs That Fit Real-World Workflows
        </h3>
        <p className="text-white/40 max-w-2xl mx-auto  sm:text-base">
          Export formats are designed to move estimation data forward—
          cleanly, confidently, and without friction.
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
