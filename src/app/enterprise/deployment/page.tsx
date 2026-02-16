'use client';

import { useEffect, useRef, useState } from 'react';

export default function DeploymentOptionsPage() {
  const listRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (listRef.current) observer.observe(listRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#030303] text-white ">

      {/* HERO */}
      <section className="relative pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

         
          <h1 className="text-4xl md:text-6xl lg:text-6xl
                         font-bold mt-4 mb-8 tracking-tight leading-[1.05]">
            Deployment
            <br />
            <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                             bg-clip-text text-transparent">
              Options
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 leading-relaxed">
            Enterprise environments vary widely. Deployment flexibility
            ensures the platform fits your infrastructure, compliance
            requirements, and operational constraints—without compromise.
          </p>

        </div>
      </section>

      {/* DEPLOYMENT OPTIONS */}
      <section
        ref={listRef}
        className="relative py-20 bg-[#0a0a0a] "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

          {/* CLOUD */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Cloud Deployment
              </h2>

              <p className="text-white/40 leading-relaxed mb-8">
                Ideal for organizations prioritizing speed, scalability,
                and minimal infrastructure management.
              </p>

              <ul className="space-y-3 text-white/50">
                {[
                  'Rapid onboarding',
                  'Elastic compute and storage',
                  'Automatic updates and maintenance',
                  'Reduced internal IT overhead',
                ].map((item, index) => (
                  <li
                    key={item}
                    className={`flex items-start gap-3
                      transition-all duration-700 ease-out
                      ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
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

            <div className="p-10 rounded-3xl bg-[#0b0b0b]
                            border border-white/[0.08]
                            hover:border-[#4EBABD]
                            hover:-translate-y-1
                            transition-all duration-300">
              <h4 className="text-lg font-semibold mb-3">
                Cloud Infrastructure
              </h4>
              <p className="text-white/40">
                Fully managed, scalable environment optimized for
                rapid deployment and global access.
              </p>
            </div>
          </div>

          {/* PRIVATE CLOUD */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1 p-10 rounded-3xl bg-[#0b0b0b]
                            border border-white/[0.08]
                            hover:border-[#4EBABD]
                            hover:-translate-y-1
                            transition-all duration-300">
              <h4 className="text-lg font-semibold mb-3">
                Dedicated Private Environment
              </h4>
              <p className="text-white/40">
                Isolated infrastructure providing enhanced control,
                security customization, and predictable performance.
              </p>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Private Cloud
              </h2>

              <p className="text-white/40 leading-relaxed mb-8">
                Designed for enterprises requiring isolation,
                enhanced control, and stricter security boundaries.
              </p>

              <ul className="space-y-3 text-white/50 ">
                {[
                  'Dedicated infrastructure',
                  'Strong data isolation',
                  'Custom security configurations',
                  'Balance between control and scalability',
                ].map((item, index) => (
                  <li
                    key={item}
                    className={`flex items-start gap-3
                      transition-all duration-700 ease-out
                      ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
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

          {/* ON-PREMISE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                On-Premise Deployment
              </h2>

              <p className="text-white/40 leading-relaxed mb-8">
                Best suited for organizations with strict regulatory,
                data residency, or internal governance requirements.
              </p>

              <ul className="space-y-3 text-white/50">
                {[
                  'Full infrastructure control',
                  'Data remains within corporate network',
                  'Custom compliance enforcement',
                  'Integration with internal systems',
                ].map((item, index) => (
                  <li
                    key={item}
                    className={`flex items-start gap-3
                      transition-all duration-700 ease-out
                      ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
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

            <div className="p-10 rounded-3xl bg-[#0b0b0b]
                            border border-white/[0.08]
                            hover:border-[#4EBABD]
                            hover:-translate-y-1
                            transition-all duration-300">
              <h4 className="text-lg font-semibold mb-3">
                On-Premise Environment
              </h4>
              <p className="text-white/40 ">
                Deployed within your own data center or
                controlled internal infrastructure.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* GUIDANCE */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choosing the Right Deployment Model
          </h2>
          <p className="text-white/40 text-base leading-relaxed">
            The right deployment depends on your security posture,
            compliance requirements, and operational maturity.
            Our team works closely with enterprise IT stakeholders
            to determine the optimal strategy.
          </p>
        </div>
      </section>

      {/* FINAL VALUE */}
      <section className="relative py-24 bg-[#0a0a0a] border-t border-white/[0.06] text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Flexibility Without Compromise
        </h3>
        <p className="text-white/40 max-w-4xl mx-auto text-base">
          Deploy the platform in a way that aligns with your
          enterprise architecture—today and as you scale.
        </p>
      </section>

    </main>
  );
}
