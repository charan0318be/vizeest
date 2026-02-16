'use client';

export default function FeatureComparisonPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white">

      {/* HERO */}
      <section className="relative pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          <span className="text-[#4EBABD]  font-semibold  tracking-wide">
            Platform Plans
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-6xl
                         font-bold mt-4 mb-8 tracking-tight leading-[1.05]">
            Feature
            <br />
            <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                             bg-clip-text text-transparent">
              Comparison
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 leading-relaxed">
            Compare capabilities across plans and choose the right balance
            of automation, governance, and enterprise scale.
          </p>

        </div>
      </section>

      {/* DESKTOP TABLE */}
      <section className="relative py-20 bg-[#0a0a0a]  hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-4 gap-6 ">

            {/* HEADERS */}
            {['Features', 'Starter', 'Enterprise', 'Custom'].map((col, i) => (
              <div
                key={col}
                className={`pb-4 font-semibold 
                  ${i === 0 ? 'text-white/70' : 'text-[#4EBABD]'}`}
              >
                {col}
              </div>
            ))}

            {[
              ['Beam Detection', true, true, true],
              ['Automated Take-Off', true, true, true],
              ['Manual Review Workflow', false, true, true],
              ['Audit Trails & Governance', false, true, true],
              ['SSO & Identity', false, true, true],
              ['Custom Integrations', false, false, true],
              ['Dedicated Support', false, true, true],
            ].map(([feature, starter, enterprise, custom]) => (
              <div key={feature} className="contents group">

                {/* FEATURE */}
                <div className="py-4 text-white/50 group-hover:text-white transition">
                  {feature}
                </div>

                {/* STARTER */}
                <div className="py-4 flex justify-center">
                  {starter ? <Check /> : <Dash />}
                </div>

                {/* ENTERPRISE */}
                <div className="py-4 flex justify-center
                                group-hover:bg-[#0b0b0b]
                                rounded-xl transition">
                  {enterprise ? <Check /> : <Dash />}
                </div>

                {/* CUSTOM */}
                <div className="py-4 flex justify-center
                                group-hover:bg-[#0b0b0b]
                                rounded-xl transition">
                  {custom ? <Check /> : <Dash />}
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* MOBILE CARDS */}
      <section className="relative py-20 md:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">

          {[
            {
              feature: 'Beam Detection',
              starter: true,
              enterprise: true,
              custom: true,
            },
            {
              feature: 'Manual Review Workflow',
              starter: false,
              enterprise: true,
              custom: true,
            },
            {
              feature: 'SSO & Identity',
              starter: false,
              enterprise: true,
              custom: true,
            },
            {
              feature: 'Custom Integrations',
              starter: false,
              enterprise: false,
              custom: true,
            },
          ].map(item => (
            <div
              key={item.feature}
              className="p-8 rounded-3xl bg-[#0b0b0b]
                         border border-white/[0.08]
                         hover:border-[#4EBABD]/40
                         hover:-translate-y-1
                         transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-6">
                {item.feature}
              </h3>

              <ul className="space-y-3 ">
                <li className="flex justify-between">
                  <span className="text-white/50">Starter</span>
                  {item.starter ? <Check /> : <Dash />}
                </li>
                <li className="flex justify-between">
                  <span className="text-white/50">Enterprise</span>
                  {item.enterprise ? <Check /> : <Dash />}
                </li>
                <li className="flex justify-between">
                  <span className="text-white/50">Custom</span>
                  {item.custom ? <Check /> : <Dash />}
                </li>
              </ul>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-[#0a0a0a]  text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 cursor-pointer">
          Need Help Choosing?
        </h3>
        <p className="text-white/40 max-w-xl mx-auto mb-8">
          Our team can help you select the right plan based on
          your workflow, team size, and growth goals.
        </p>

        <button className="px-8 py-4 rounded-2xl font-semibold
                           bg-gradient-to-r from-[#4EBABD] to-[#2C7181]
                           hover:opacity-90 transition cursor-pointer">
          Talk to Sales →
        </button>
      </section>

    </main>
  );
}

/* ICONS */
function Check() {
  return (
    <svg className="w-4 h-4 text-[#4EBABD]"
         fill="none" viewBox="0 0 24 24"
         stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Dash() {
  return <span className="text-white/30">—</span>;
}
