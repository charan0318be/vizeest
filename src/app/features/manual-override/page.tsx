export default function ManualOverridePage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white">

      {/* HERO */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                        grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-7xl
                           font-bold leading-[1.05] tracking-tight mb-8">
              Manual Override
              <br />
              <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                               bg-clip-text text-transparent">
                & Quality Control
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/50
                          leading-relaxed max-w-xl mb-6">
              While AI accelerates estimation, final responsibility remains
              with the estimator. Manual Override & QC ensures complete
              human control over quantities, assumptions, and final outputs.
            </p>

            <p className="text-lg text-white/40 leading-relaxed max-w-xl">
              Review, adjust, and validate AI-generated results to meet
              project-specific requirements, internal standards, and
              client expectations before submission.
            </p>
          </div>

          {/* QC FEATURES */}
          <div className="space-y-6">
            {[
              {
                title: 'Manual Quantity Adjustments',
                desc: 'Modify detected members, quantities, and measurements when drawings require expert interpretation.',
              },
              {
                title: 'Approval & Review Workflows',
                desc: 'Introduce review checkpoints to validate estimates before final approval or export.',
              },
              {
                title: 'Audit Trail & Change Tracking',
                desc: 'Track every manual change with timestamps and user attribution for transparency and accountability.',
              },
              
            ].map(item => (
              <div
                key={item.title}
                className="p-8 rounded-3xl
                           bg-white/[0.02]
                           border border-white/[0.05]
                           hover:border-[#4EBABD]/30
                           transition-all duration-300"
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

      {/* QC WORKFLOW */}
      <section className="relative py-32 bg-[#0a0a0a]  border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl
                           font-bold mb-6">
              Quality Control Workflow
            </h2>
            <p className="text-lg text-white/40 max-w-2xl">
              Structured review steps to ensure confidence and accountability
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 'Review',
                desc: 'Visually inspect AI-detected elements and quantities.',
              },
              {
                step: 'Adjust',
                desc: 'Apply manual corrections where estimator judgement is required.',
              },
              {
                step: 'Validate',
                desc: 'Confirm quantities align with drawings and scope.',
              },
              {
                step: 'Approve',
                desc: 'Finalize results for export and reporting.',
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

      {/* WHY IT MATTERS */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl
                           font-bold mb-6">
              Why Manual Control Matters
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Reduce risk of automated estimation errors',
              'Ensure compliance with internal standards',
              'Support multi-reviewer approval processes',
              'Maintain accountability across teams',
              'Improve confidence in final bids',
              'Enable audit-ready documentation',
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

      {/* VALUE STATEMENT */}
      <section className="relative py-32 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-4xl md:text-5xl lg:text-6xl
                         font-bold mb-6">
            AI Speed.
            <br />
            Human Accountability.
          </h2>

          <p className="text-lg text-white/40 leading-relaxed">
            Manual Override & Quality Control ensures estimators remain
            in control—combining automation efficiency with human
            expertise for reliable, defensible estimates.
          </p>

        </div>
      </section>

    </main>
  );
}
