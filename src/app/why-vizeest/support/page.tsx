'use client';

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white">

      {/* HERO */}
      <section className="relative pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          

          <h1 className="text-4xl md:text-6xl lg:text-6xl
                         font-bold mt-4 mb-8 tracking-tight leading-[1.05]">
            Enterprise-Grade
            <br />
            <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                             bg-clip-text text-transparent">
              Support from Day One
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 leading-relaxed">
            Adopting VizeEST is not just about software.
            It’s about enabling teams to succeed quickly,
            confidently, and consistently.
          </p>

        </div>
      </section>

      {/* ONBOARDING FLOW */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-4xl md:text-5xl font-bold mb-14">
            How We Get Your Team Productive
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                step: '01',
                title: 'Guided Onboarding',
                desc: 'Structured onboarding aligned to your workflows, standards, and data formats.',
              },
              {
                step: '02',
                title: 'Role-Based Training',
                desc: 'Hands-on sessions for estimators, reviewers, managers, and admins.',
              },
              {
                step: '03',
                title: 'Go-Live Support',
                desc: 'Real-time assistance during early projects to ensure smooth adoption.',
              },
              {
                step: '04',
                title: 'Continuous Enablement',
                desc: 'Ongoing guidance as teams scale usage across projects and regions.',
              },
            ].map(item => (
              <div
                key={item.step}
                className="relative p-8 rounded-3xl bg-[#0b0b0b]
                           border border-white/[0.08]
                           hover:border-[#4EBABD]
                           hover:-translate-y-1
                           transition-all duration-300"
              >
                <span className="absolute -top-4 left-6
                                 px-3 py-1 rounded-full text-xs
                                 border border-white/[0.08]
                                 bg-[#030303] text-[#4EBABD]">
                  Step {item.step}
                </span>

                <h3 className="font-semibold mb-3 mt-4">
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

      {/* SUPPORT MODEL */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                        grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ongoing Support You Can Rely On
            </h2>

            <p className="text-white/40 mb-8 max-w-xl">
              Our support model is designed for enterprise
              environments—responsive, knowledgeable, and
              aligned with real-world estimation pressures.
            </p>

            <ul className="space-y-4 text-white/50">
              {[
                'Dedicated enterprise support channels',
                'Fast response SLAs',
                'Workflow and usage guidance',
                'Continuous product education',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* VISUAL CARD */}
          <div
            className="p-10 rounded-3xl bg-[#0b0b0b]
                       border border-white/[0.08]
                       hover:border-[#4EBABD]
                       hover:-translate-y-1
                       transition-all duration-300"
          >
            <h4 className="text-lg font-bold mb-3">
              Support Dashboard
            </h4>
            <p className="text-white/40  leading-relaxed">
              Centralized visibility into onboarding,
              tickets, enablement, and ongoing assistance.
            </p>
          </div>

        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Why Support & Onboarding Matter
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              'Faster team adoption',
              'Lower operational risk',
              'Consistent estimation quality',
              'Higher confidence in delivery',
              'Reduced training overhead',
              'Scalable enterprise rollout',
            ].map(item => (
              <div
                key={item}
                className="p-6 rounded-3xl bg-[#0b0b0b]
                           border border-white/[0.08]
                           hover:border-[#4EBABD]
                           hover:-translate-y-1
                           transition-all duration-300"
              >
                <p className="text-white/50 ">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-20 bg-[#0a0a0a]  text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          We Don’t Just Deploy Software
        </h3>
        <p className="text-white/40 max-w-2xl mx-auto mb-8">
          With structured onboarding and continuous support,
          VizeEST enables teams from the first estimate
          to enterprise-scale adoption.
        </p>

        <button
          className="px-8 py-4 rounded-2xl font-semibold
                     bg-gradient-to-r from-[#4EBABD] to-[#2C7181]
                     hover:opacity-90 transition cursor-pointer"
        >
          Talk to Support →
        </button>
      </section>

    </main>
  );
}

function Check() {
  return (
    <svg
      className="w-4 h-4 mt-1 text-[#4EBABD]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
