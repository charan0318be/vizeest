'use client';
import { useEffect, useRef, useState } from 'react';

export default function BeamDetectionPage() {

  /* ---------- HOOK ---------- */
  function useReveal() {
    const ref = useRef<HTMLUListElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.25 }
      );

      observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);

    return { ref, visible };
  }

  /* ---------- DATA ---------- */
  const holisticPoints = [
    'Multi-drawing context awareness',
    'Framing pattern recognition',
    'Structural intent preservation',
    'Noise & annotation filtering',
  ];

  const isolatePoints = [
    'Horizontal, vertical, and angled beam recognition',
    'Dense framing and overlapping layout handling',
    'Multi-span and irregular geometry support',
    'Structural vs non-structural differentiation',
  ];

  const isolationEnginePoints = [
    'Beam, column & brace separation',
    'Overlapping geometry handling',
    'Dense framing support',
    'Structural vs non-structural filtering',
  ];

  const confirmPoints = [
    'Visual confirmation on source drawings',
    'Seamless handoff to take-off engine',
    'Reduced downstream corrections',
  ];

  /* ---------- HOOK INSTANCES ---------- */
  const holistic = useReveal();
  const isolate = useReveal();
  const isolationEngine = useReveal();
  const confirm = useReveal();

  return (
    <main className="min-h-screen bg-[#030303] text-white">

      {/* HERO */}
      <section className="relative pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-[1.05]">
            End-to-End<br />
            <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB] bg-clip-text text-transparent">
              Beam Detection
            </span>
          </h1>

          <p className="text-lg text-white/50 max-w-5xl">
            Structural elements are identified directly from drawings using AI trained on real-world steel layouts.
          </p>
        </div>
      </section>

      {/* HOLISTIC SCAN */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-10 rounded-3xl bg-[#0b0b0b] border border-white/[0.08] hover:border-[#4EBABD] hover:-translate-0.5s transition-all duration-300">
            <h4 className="text-lg font-bold mb-4">Holistic Structural Scan</h4>
            <p className="text-white/40  mb-8 max-w-3xl">
              The system analyzes framing layouts, drawing hierarchy, and member relationships.
            </p>

            <ul ref={holistic.ref} className="grid sm:grid-cols-2 gap-y-4 gap-x-10">
              {holisticPoints.map((item, i) => (
                <li
                  key={item}
                  className={`flex gap-3 transition-all duration-700
                    ${holistic.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${i * 140}ms` }}
                >
                  <span className="h-5 w-5 mt-0.5 flex items-center justify-center rounded-full bg-[#4EBABD]/25 text-[#4EBABD]">✓</span>
                  <span className="text-white/55 ">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ISOLATE STRUCTURAL MEMBERS */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6">Isolate Structural Members</h2>
            <p className="text-white/40 mb-8">
              Detection focuses only on load-bearing structure.
            </p>

            <ul ref={isolate.ref} className="space-y-3">
              {isolatePoints.map((item, i) => (
                <li
                  key={item}
                  className={`flex gap-3 transition-all duration-700
                    ${isolate.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <span className="h-5 w-5 mt-0.5 flex items-center justify-center rounded-full bg-[#4EBABD]/25 text-[#4EBABD]">✓</span>
                  <span className="text-white/55 ">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-10 rounded-3xl bg-[#0b0b0b] border border-white/[0.08] hover:border-[#4EBABD] hover:-translate-0.5s transition-all duration-300">
            <h4 className="text-lg font-semibold mb-4">Member Isolation Engine</h4>
            <p className="text-white/40 mb-6">
              Structural members are separated from annotations.
            </p>

            <ul ref={isolationEngine.ref} className="space-y-3">
              {isolationEnginePoints.map((item, i) => (
                <li
                  key={item}
                  className={`flex gap-3 transition-all duration-700
                    ${isolationEngine.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <span className="h-5 w-5 mt-0.5 flex items-center justify-center rounded-full bg-[#4EBABD]/25 text-[#4EBABD]">✓</span>
                  <span className="text-white/55">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* CONFIRM BEFORE TAKE-OFF */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6">Confirm Before Take-Off</h2>
            <p className="text-white/40 mb-8">
              Ensuring downstream quantities are built on accurate identification.
            </p>

            {/* ✅ THIS NOW RENDERS + ANIMATES */}
            <ul ref={confirm.ref} className="space-y-3">
              {confirmPoints.map((item, i) => (
                <li
                  key={item}
                  className={`flex gap-3 transition-all duration-700
                    ${confirm.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <span className="h-5 w-5 mt-0.5 flex items-center justify-center rounded-full bg-[#4EBABD]/25 text-[#4EBABD]">✓</span>
                  <span className="text-white/55 ">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

    </main>
  );
}
