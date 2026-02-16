'use client';

import Image from 'next/image';

export default function CollaborationAnalyticsPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white">

      {/* HERO */}
      <section className="relative pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          
          <h1 className="text-4xl md:text-6xl lg:text-6xl
                         font-bold mt-4 mb-8 tracking-tight leading-[1.05]">
           
           
            <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                             bg-clip-text text-transparent">
              Collaboration & Analytics
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 leading-relaxed">
            Estimation is never a solo activity. Collaboration and analytics
            bring visibility into how teams review, validate, and approve
            quantities—together.
          </p>

        </div>
      </section>

      {/* COLLABORATION OVERVIEW */}
      <section className="relative py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How Teams Work Together
          </h2>

          <p className="text-white/40 leading-relaxed mb-12">
            The platform connects people, actions, and decisions—ensuring
            collaboration happens efficiently while remaining fully auditable.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Parallel Collaboration',
                desc: 'Multiple users review and validate quantities simultaneously.',
              },
              {
                title: 'Change Transparency',
                desc: 'Every adjustment is logged with user, timestamp, and context.',
              },
              {
                title: 'Structured Approvals',
                desc: 'Role-based approval stages reduce ambiguity and rework.',
              },
              {
                title: 'Controlled Export',
                desc: 'Only approved data moves downstream into business systems.',
              },
            ].map(item => (
              <div
                key={item.title}
                className="p-8 rounded-3xl bg-[#0b0b0b]
                           border border-white/[0.08]
                           transition-all duration-300
                           hover:border-[#4EBABD]
                           hover:-translate-y-1"
              >
                <h4 className="text-lg font-semibold mb-3">
                  {item.title}
                </h4>
                <p className="text-white/40  leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ANALYTICS */}
      <section className="relative py-20 bg-[#0a0a0a]  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                        grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Analytics That Reveal the Truth
            </h2>

            <p className="text-white/40 leading-relaxed mb-8">
              Analytics provide leadership with defensible insights
              into estimator workload, review cycles, and quality trends.
            </p>

            <div className="p-8 rounded-3xl bg-[#0b0b0b]
                            border border-white/[0.08] hover:border-[#4EBABD] ">
              <ul className="space-y-4 text-white/50 ">
                {[
                  'Identify bottlenecks in review cycles',
                  'Measure estimator workload and turnaround time',
                  'Track quality trends across projects',
                  'Provide leadership with auditable performance metrics',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-4 h-4 mt-1 text-[#4EBABD]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* VISUAL */}
          <div className="p-6 rounded-3xl bg-[#0b0b0b]
                          border border-white/[0.08]
                          hover:border-[#4EBABD]
                          hover:-translate-y-1
                          transition-all duration-300">
            <Image
              src="/3256740c-10c6-4573-9b31-4024bd0a2e4b.png"
              alt="Collaboration analytics dashboard"
              width={900}
              height={600}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

        </div>
      </section>

      {/* FINAL VALUE */}
      <section className="relative py-20 bg-[#0a0a0a]  text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Collaboration with Accountability
        </h3>
        <p className="text-white/40 max-w-4xl mx-auto text-base">
          When collaboration and analytics work together,
          teams move faster, errors drop, and leadership
          gains confidence in every estimate.
        </p>
      </section>

    </main>
  );
}
