export default function ExportReportingPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white">

      {/* HERO */}
      {/* HERO */}
{/* HERO */}
<section className="relative py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                  grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

    {/* LEFT – MAIN CONTENT */}
    <div>
      <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-7xl
                     font-bold leading-[1.05] tracking-tight mb-8">
        Export &
        <br />
        <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                         bg-clip-text text-transparent">
          Reporting
        </span>
      </h1>

      <p className="text-lg md:text-xl text-white/50
                    leading-relaxed max-w-xl">
        Convert validated take-off data into structured exports and
        professional reports. Ensure smooth handoff from estimation
        to procurement, costing, and execution.
      </p>
    </div>

    {/* RIGHT – KEY OUTCOMES */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {[
        {
          title: 'Zero Rework',
          desc: 'Eliminate manual re-formatting and repeated data entry across teams.',
        },
        {
          title: 'Audit-Ready Outputs',
          desc: 'Every report retains full traceability back to drawings and assumptions.',
        },
        {
          title: 'Downstream Compatible',
          desc: 'Exports align with ERP, procurement, and costing workflows.',
        },
      ].map(item => (
        <div
          key={item.title}
          className="p-6 rounded-2xl
                     bg-white/[0.02]
                     border border-white/[0.05]
                     hover:border-[#4EBABD]/30
                     transition-all duration-300"
        >
          <h3 className="text-lg font-semibold mb-2">
            {item.title}
          </h3>
          <p className="text-white/40 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>



      {/* EXPORT TYPES */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl
                           font-bold mb-6">
              Flexible Export Formats
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">
              Designed to integrate seamlessly with downstream workflows
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Excel & CSV Exports',
                desc: 'Export quantities, weights, and itemized take-offs into Excel or CSV for pricing, analysis, and bid preparation.',
              },
              {
                title: 'ERP & Estimating Integration',
                desc: 'Structure export data to align with ERP and estimating systems, reducing manual re-entry and errors.',
              },
              {
                title: 'Client-Ready Reports',
                desc: 'Generate clear, professional reports summarizing quantities, assumptions, and revisions.',
              },
            ].map(item => (
              <div
                key={item.title}
                className="p-8 rounded-3xl
                           bg-gradient-to-b from-white/[0.04] to-white/[0.01]
                           border border-white/[0.06]
                           hover:border-[#4EBABD]/30
                           transition-all duration-500"
              >
                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-white/40 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* EXPORT WORKFLOW */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl
                           font-bold mb-6">
              How Export & Reporting Works
            </h2>
            <p className="text-lg text-white/40 max-w-2xl">
              A consistent pipeline from validated quantities to delivery
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 'Validate',
                desc: 'Final quantities are reviewed and approved before export.',
              },
              {
                step: 'Structure',
                desc: 'Data is organized into standardized formats and templates.',
              },
              {
                step: 'Export',
                desc: 'Outputs are generated for Excel, ERP, or reporting needs.',
              },
              {
                step: 'Deliver',
                desc: 'Reports are shared with internal teams or clients.',
              },
            ].map(item => (
              <div
                key={item.step}
                className="p-6 rounded-2xl
                           bg-white/[0.02]
                           border border-white/[0.05]
                           hover:border-[#4EBABD]/30
                           transition-all duration-300"
              >
                <p className="text-[#4EBABD] font-semibold mb-2">
                  {item.step}
                </p>
                <p className="text-white/40 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* REPORTING BENEFITS */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl
                           font-bold mb-6">
              Why Structured Reporting Matters
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Reduce manual data re-entry',
              'Improve bid clarity and consistency',
              'Ensure traceability of quantities',
              'Support audits and revisions',
              'Speed up procurement workflows',
              'Present professional client deliverables',
            ].map(item => (
              <div
                key={item}
                className="p-6 rounded-2xl
                           bg-white/[0.02]
                           border border-white/[0.05]
                           text-lg text-white/50
                           hover:text-white
                           hover:border-[#4EBABD]/30
                           transition-all duration-300"
              >
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-4xl md:text-5xl lg:text-6xl
                         font-bold mb-6">
            Clear Outputs.
            <br />
            Confident Decisions.
          </h2>

          <p className="text-lg text-white/40 leading-relaxed">
            Export & Reporting ensures every estimate is delivered in a
            format teams and clients can trust—accurate, structured,
            and ready for action.
          </p>

        </div>
      </section>

    </main>
  );
}
