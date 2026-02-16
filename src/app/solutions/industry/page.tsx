'use client';

export default function IndustrySolutionsPage() {
  return (
    <main className="bg-black text-white relative overflow-hidden">

      {/* FLOATING BACKGROUND GLOWS */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#4EBABD]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] bg-[#4EBABD]/5 rounded-full blur-3xl animate-pulse delay-200" />
      <div className="absolute bottom-24 left-1/4 w-40 h-40 bg-[#4EBABD]/10 rounded-full blur-2xl animate-bounce" />

      {/* HERO */}
      <section className="relative pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 max-w-4xl">

          <span className="text-[#4EBABD] text-sm font-semibold uppercase tracking-wide">
            Industry Solutions
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-8 tracking-tight leading-[1.05]">
            Solutions by
            <br />
            <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                             bg-clip-text text-transparent">
              Industry
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 leading-relaxed">
            Every industry faces unique estimation challenges.
            VizeEST adapts workflows, validation, and outputs to
            real-world industry needs—without sacrificing speed
            or accuracy.
          </p>

        </div>
      </section>

      {/* INDUSTRY CARDS */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

            {[
              {
                title: 'Steel Fabricators',
                desc: 'Fabrication-ready quantities aligned with shop standards, profiles, and production workflows.',
                path: '/solutions/steel-fabricators',
              },
              {
                title: 'General Contractors',
                desc: 'Fast, transparent take-offs that support bid evaluation, scope control, and cost confidence.',
                path: '/solutions/general-contractors',
              },
              {
                title: 'Engineering Firms',
                desc: 'Quantities that preserve design intent and remain consistent across revisions and deliverables.',
                path: '/solutions/engineering-firms',
              },
              {
                title: 'Enterprise Teams',
                desc: 'Standardized, scalable estimation workflows across regions, teams, and large project portfolios.',
                path: '/solutions/enterprise-teams',
              },
            ].map(item => (
              <a
                key={item.title}
                href={item.path}
                className="group relative rounded-3xl bg-[#0b0b0b]
                           border border-white/[0.08]
                           p-8 transition-all duration-300
                           hover:-translate-y-2
                           hover:border-[#4EBABD]/40
                           hover:shadow-[0_20px_55px_rgba(0,0,0,0.75)]"
              >
                <h3 className="text-xl font-semibold mb-3
                               transition-colors
                               group-hover:text-[#4EBABD]">
                  {item.title}
                </h3>

                <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-6">
                  {item.desc}
                </p>

                <span className="inline-flex items-center gap-2
                                 text-sm font-medium text-[#4EBABD]">
                  View solution
                  <span className="transition-transform
                                   group-hover:translate-x-1">
                    →
                  </span>
                </span>

                {/* CARD GLOW */}
                <div className="absolute inset-0 rounded-3xl bg-[#4EBABD]/5
                                opacity-0 group-hover:opacity-100 transition" />
              </a>
            ))}

          </div>

        </div>
      </section>

      {/* VALUE STATEMENT */}
      <section className="relative py-16 text-center">
        <h3 className="text-xl sm:text-2xl font-semibold mb-3">
          Industry-Specific Workflows. One Unified Platform.
        </h3>

        <p className="text-white/40 max-w-2xl mx-auto text-sm sm:text-base">
          Whether you fabricate, build, design, or manage at scale,
          VizeEST adapts to your industry while maintaining accuracy,
          traceability, and consistency across projects.
        </p>
      </section>

    </main>
  );
}
