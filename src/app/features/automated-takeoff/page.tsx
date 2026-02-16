'use client';

import HumanAIPartnerAnimation from '@/components/sections/HumanAIPartnerAnimation';
import ManualFactoryAnimation from '@/components/sections/ManualFactoryAnimation';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function AutomatedTakeoffPage() {
  /* ---------- PROCESS ---------- */
  const processRef = useRef<HTMLDivElement>(null);
  const [processVisible, setProcessVisible] = useState(false);

  /* ---------- BENEFITS ---------- */
  const benefitRef = useRef<HTMLUListElement>(null);
  const [benefitVisible, setBenefitVisible] = useState(false);
  const [activeBenefitIndex, setActiveBenefitIndex] = useState(-1);

  useEffect(() => {
    const processObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProcessVisible(true);
          processObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.25 }
    );

    const benefitObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBenefitVisible(true);
          benefitObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.25 }
    );

    if (processRef.current) processObserver.observe(processRef.current);
    if (benefitRef.current) benefitObserver.observe(benefitRef.current);

    return () => {
      processObserver.disconnect();
      benefitObserver.disconnect();
    };
  }, []);

  /* Progressive activation like screenshot */
  useEffect(() => {
    if (!benefitVisible) return;

    const timers: NodeJS.Timeout[] = [];

    benefits.forEach((_, index) => {
      const timer = setTimeout(() => {
        setActiveBenefitIndex(index);
      }, index * 350);
      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, [benefitVisible]);

  const steps = [
    {
      step: '01',
      title: 'Drawing Ingestion',
      desc: 'Upload PDFs, CAD, or BIM files directly into the platform. No manual preparation required.',
    },
    {
      step: '02',
      title: 'AI-Driven Detection',
      desc: 'Structural elements are identified, classified, and interpreted using trained AI models.',
    },
    {
      step: '03',
      title: 'Instant Quantification',
      desc: 'Lengths, weights, counts, and assemblies are generated instantly and remain traceable.',
    },
  ];

  const benefits = [
    'Eliminate manual quantity calculations',
    'Reduce estimation cycles by up to 90%',
    'Maintain consistency across estimators',
    'Instantly adapt to drawing revisions',
  ];

  return (
    <main className="min-h-screen bg-[#030303] text-white">

      {/* HERO */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                        grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="relative rounded-3xl overflow-hidden
                          border border-white/[0.06]
                          hover:border-[#4EBABD]/30 transition-all duration-500">
            <ManualFactoryAnimation />


          </div>

          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-7xl
                           font-bold leading-[1.05] mb-4">
              Automated
              <br />
              <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                               bg-clip-text text-transparent">
                Take-Off
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/50 mb-6 max-w-xl">
              Replace manual take-offs with AI-driven quantity generation
              that stays accurate, fast, and revision-aware.
            </p>

            <p className="text-lg text-white/40 max-w-xl">
              Convert drawings directly into material quantities—eliminating
              spreadsheets, reducing rework, and accelerating bid delivery.
            </p>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="relative py-32 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
              How Automated Take-Off Works
            </h2>
            <p className="text-lg text-white/40 max-w-2xl">
              A streamlined AI-powered pipeline from drawings to quantities
            </p>
          </div>

          <div ref={processRef} className="space-y-16 max-w-4xl">
            {steps.map((item, index) => (
              <div key={item.step} className="flex gap-6">
                <span
                  className={`pop text-[#4EBABD] font-semibold text-lg ${
                    processVisible ? 'visible' : ''
                  }`}
                  style={{ transitionDelay: `${index * 0.12}s` }}
                >
                  {item.step}
                </span>

                <div
                  className={`reveal ${processVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 0.12 + 0.1}s` }}
                >
                  <h3 className="text-2xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/40 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BENEFITS – progressive checklist */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                        grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
              Faster Estimates.
              <br />
              Fewer Errors.
            </h2>

            <ul ref={benefitRef} className="space-y-4 text-lg">
              {benefits.map((item, index) => {
                const active = activeBenefitIndex >= index;

                return (
                  <li key={item} className="flex gap-3 items-center">
                    <span
                      className={`h-5 w-5 rounded-full flex items-center justify-center text-sm
                        transition-all duration-300
                        ${
                          active
                            ? 'bg-[#4EBABD] text-black scale-100 opacity-100'
                            : 'bg-[#4EBABD]/20 text-[#4EBABD]/40 scale-90 opacity-40'
                        }`}
                    >
                      ✓
                    </span>

                    <span
                      className={`transition-all duration-300 ${
                        active ? 'text-white opacity-100' : 'text-white/40 opacity-50'
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rounded-3xl overflow-hidden
                          border border-white/[0.06]
                          hover:border-[#4EBABD]/30 transition-all duration-500">
            <HumanAIPartnerAnimation />

          </div>

        </div>
      </section>

    </main>
  );
}
