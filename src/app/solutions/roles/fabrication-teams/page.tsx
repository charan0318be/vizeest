'use client';

export default function FabricationTeamsPage() {
  return (
    <main className="bg-black text-white relative overflow-hidden">

      {/* FLOATING BACKGROUND GLOWS */}
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
              Fabrication Teams
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 leading-relaxed">
            Fabrication teams depend on estimates that translate
            directly into production. Quantities must align with
            real members, shop practices, and fabrication sequencing—
            not abstract calculations.
          </p>

        </div>
      </section>

      {/* CORE VALUE STRIP */}
      <section className="relative py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            From Estimate to Shop Floor
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              {
                title: 'Fabrication-Ready Quantities',
                desc: 'Detected members are converted into quantities that reflect real fabrication logic, not abstract take-offs.',
              },
              {
                title: 'Shop-Aligned Grouping',
                desc: 'Members can be reviewed and grouped in ways that match cutting, welding, and assembly workflows.',
              },
              {
                title: 'Production Confidence',
                desc: 'What gets fabricated matches what was estimated—reducing surprises on the shop floor.',
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

      {/* WORKFLOW ALIGNMENT */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-3xl md:text-4xl font-semibold mb-10">
            Fabrication Workflow Alignment
          </h2>

          <div className="space-y-8 max-w-4xl">

            {[
              {
                title: 'Material Planning',
                desc: 'Reliable quantities support procurement, cutting plans, and inventory control—reducing excess orders and shortages.',
              },
              {
                title: 'Production Sequencing',
                desc: 'Quantities align with fabrication sequencing, enabling smoother coordination across shop activities.',
              },
              {
                title: 'Shop Drawing Coordination',
                desc: 'Estimates stay aligned with shop drawings and detailing outputs, reducing downstream corrections.',
              },
            ].map(item => (
              <div
                key={item.title}
                className="relative border-l border-white/[0.08] pl-6
                           transition-all duration-300
                           hover:border-[#4EBABD]"
              >
                <span className="absolute -left-[6px] top-1.5
                                 w-3 h-3 rounded-full bg-[#4EBABD]" />

                <h3 className="font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-white/40  leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* REVISION HANDLING */}
      <section className="relative py-20 bg-[#0a0a0a] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Built for Design Changes
            </h2>

            <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-6">
              When drawings change, fabrication teams need immediate clarity.
              Quantities are automatically recalculated and differences are
              easy to identify—without restarting the take-off process.
            </p>

            <ul className="space-y-3 text-white/50 ">
              <li>Instant quantity deltas</li>
              <li>Reduced downstream rework</li>
              <li>Faster response to revised drawings</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-[#0b0b0b]
                          border border-white/[0.08]
                          min-h-[260px]
                          flex items-center justify-center
                          text-white/30">
            Revision Impact Comparison
          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            Benefits for Fabrication Teams
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

            {[
              {
                title: 'Fewer Errors',
                desc: 'Quantities reflect fabrication reality.',
              },
              {
                title: 'Less Rework',
                desc: 'Reduced corrections between estimation and production.',
              },
              {
                title: 'Higher Throughput',
                desc: 'Faster transitions from drawings to fabrication.',
              },
            ].map(item => (
              <div
                key={item.title}
                className="transition-all duration-300
                           hover:-translate-y-1"
              >
                <p className="text-[#4EBABD] font-bold mb-2">
                  {item.title}
                </p>
                <p className="text-white/40">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="relative py-16 bg-[#0a0a0a] border-t border-white/[0.06] text-center">
        <h3 className="text-xl sm:text-2xl font-bold mb-3">
          Fabrication Starts with the Right Numbers
        </h3>

        <p className="text-white/40 max-w-4xl mx-auto sm:text-base">
          When estimates reflect fabrication reality,
          teams build faster, waste less, and deliver
          with confidence.
        </p>
      </section>

    </main>
  );
}
