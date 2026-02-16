'use client';

export default function SsoIdentityPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white">

      {/* HERO */}
      <section className="relative pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

         

          <h1 className="text-4xl md:text-6xl lg:text-6xl
                         font-bold mt-4 mb-8 tracking-tight leading-[1.05]">
            SSO &
            <br />
            <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                             bg-clip-text text-transparent">
              Identity Management
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 leading-relaxed">
            Control access across your organization using centralized
            identity providers—without compromising security or usability.
          </p>

        </div>
      </section>

      {/* IDENTITY FLOW */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-20 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Identity Control Flow
            </h2>
            <p className="text-white/40">
              Secure authentication, authorization, and governance
              built into a single workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Authenticate',
                desc: 'Users sign in through trusted enterprise identity providers.',
              },
              {
                step: '02',
                title: 'Authorize',
                desc: 'Role-based access limits visibility and actions by responsibility.',
              },
              {
                step: '03',
                title: 'Govern',
                desc: 'Access changes and revocations remain auditable and controlled.',
              },
            ].map(item => (
              <div
                key={item.step}
                className="p-8 rounded-3xl bg-[#0b0b0b]
                           border border-white/[0.08]
                           transition-all duration-300
                           hover:border-[#4EBABD]
                           hover:-translate-y-1"
              >
                <div className="text-[#4EBABD]  font-bold mb-2">
                  Step {item.step}
                </div>
                <h4 className="text-lg font-bold mb-3">
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

      {/* IT CONTROL */}
      <section className="relative py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                        grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Centralized Control for IT Teams
            </h2>

            <p className="text-white/40 leading-relaxed mb-8">
              Identity management integrates directly with
              enterprise directories—reducing administrative
              overhead and improving security posture.
            </p>

            <div className="p-8 rounded-3xl bg-[#0b0b0b]
                            border border-white/[0.08] hover:border-[#4EBABD]">
              <ul className="space-y-4 text-white/50">
                {[
                  'Centralized onboarding and offboarding',
                  'Immediate access revocation',
                  'Consistent permissions across teams',
                  'Reduced credential sprawl',
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

          {/* VISUAL CARD */}
          <div className="p-10 rounded-3xl bg-[#0b0b0b]
                          border border-white/[0.08]
                          hover:border-[#4EBABD]/40
                          hover:-translate-y-1
                          transition-all duration-300">
            <h4 className="text-lg font-semibold mb-3">
              Identity Provider Integration
            </h4>
            <p className="text-white/40 text-sm">
              Native support for enterprise IdPs such as
              Azure AD, Okta, and SAML-based providers.
            </p>
          </div>

        </div>
      </section>

      {/* FINAL VALUE */}
      <section className="relative py-24 bg-[#0a0a0a] border-t border-white/[0.06] text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Secure Access Without Friction
        </h3>
        <p className="text-white/40 max-w-2xl mx-auto text-base">
          Simplify identity management while maintaining
          enterprise-grade security and governance.
        </p>
      </section>

    </main>
  );
}
