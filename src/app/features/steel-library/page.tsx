export default function SteelLibraryPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white">

      {/* HERO */}
      <section className="relative py-20">
  <div
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
               grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
  >

    {/* LEFT – TEXT */}
    <div>
      <h1
        className="text-4xl md:text-6xl lg:text-7xl xl:text-7xl
                   font-bold leading-[1.05] tracking-tight mb-8"
      >
        Steel Library
        <br />
        <span
          className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                     bg-clip-text text-transparent"
        >
          & Standards
        </span>
      </h1>

      <p
        className="text-lg md:text-xl text-white/50
                   leading-relaxed max-w-xl"
      >
        Access a comprehensive library of structural steel profiles
        and global standards to ensure accurate quantities, compliance,
        and consistency across every estimate.
      </p>
    </div>

    {/* RIGHT – PREVIEW (NOT IMAGE) */}
    <div
      className="relative rounded-3xl overflow-hidden
                 border border-white/[0.08]
                 bg-[#020617]
                 min-h-[380px]"
    >

      {/* Subtle technical grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(#4EBABD 1px, transparent 1px),
            linear-gradient(90deg, #4EBABD 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      />

      {/* Mock steel section boxes */}
      <div className="absolute top-14 left-14 w-40 h-28
                      border border-[#4EBABD]/40 rounded-md" />
      <div className="absolute top-24 right-20 w-32 h-20
                      border border-[#4EBABD]/30 rounded-md" />
      <div className="absolute bottom-16 left-1/3 w-48 h-24
                      border border-[#4EBABD]/20 rounded-md" />

      {/* Center label */}
      <div className="relative z-10 h-full flex flex-col
                      items-center justify-center text-center px-6">
        <p className="text-sm uppercase tracking-wider
                      text-[#4EBABD] mb-3">
          Steel Standards Preview
        </p>
        <p className="text-white/60 max-w-sm leading-relaxed">
          Reference-grade steel sections and
          standards mapped for estimation accuracy
        </p>
      </div>

    </div>

  </div>
</section>


      {/* STANDARDS GRID */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl
                           font-bold mb-6">
              Global Standards Coverage
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">
              Built-in libraries and custom profiles for every region
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'AISC',
                desc: 'American Institute of Steel Construction profiles and specifications.',
              },
              {
                title: 'Eurocode',
                desc: 'European standards for structural steel design and classification.',
              },
              {
                title: 'IS Codes',
                desc: 'Indian Standard sections and steel grades for regional compliance.',
              },
              {
                title: 'Custom Profiles',
                desc: 'Define and manage project-specific or proprietary steel sections.',
              },
            ].map(item => (
              <div
                key={item.title}
                className="p-8 rounded-3xl text-center
                           bg-[#0f0f0f]
                           border border-white/[0.05]
                           hover:border-[#4EBABD]
                                  hover:-translate-y-1
                                  hover:shadow-[0_30px_80px_rgba(0,20,20,0.8)]
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

      {/* CAPABILITIES */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl
                           font-bold mb-6">
              Built for Accuracy & Compliance
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">
              A standards-driven foundation for reliable estimation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Standardized Section Data',
                desc: 'Ensure consistent dimensions, weights, and properties across all estimates.',
              },
              {
                title: 'Project-Specific Libraries',
                desc: 'Create custom libraries tailored to client or project requirements.',
              },
              {
                title: 'Automatic Mapping',
                desc: 'Map detected elements to correct steel sections based on selected standards.',
              },
              {
                title: 'Version Control',
                desc: 'Track updates to steel libraries to maintain traceability and audit readiness.',
              },
              {
                title: 'Global Coverage',
                desc: 'Support multi-region projects with mixed standards in a single workflow.',
              },
              {
                title: 'Estimator-Friendly Management',
                desc: 'Easily browse, search, and apply steel sections without manual lookups.',
              },
            ].map(item => (
              <div
                key={item.title}
                className="p-8 rounded-3xl
                           bg-white/[0.02]
                           border border-white/[0.05]
                           hover:border-[#4EBABD]
                           hover:-translate-y-1
                           hover:shadow-[0_30px_80px_rgba(0,20,20,0.8)]
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

    </main>
  );
}
