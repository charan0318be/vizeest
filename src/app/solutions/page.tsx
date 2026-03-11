'use client';

import { useState } from "react";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const workflowSteps = [
  {
    number: 1,
    title: "Upload Drawings",
    description:
      "Upload project drawings and documentation directly into the platform.",
    bullets: [
      "PDF drawings",
      "Structural drawings",
      "Project packages"
    ]
  },
  {
    number: 2,
    title: "Structural Visualization",
    description:
      "The platform generates a visual interpretation of the structure, helping estimators quickly understand the overall layout.",
    bullets: []
  },
  {
    number: 3,
    title: "Visual Validation",
    description:
      "Estimators review drawings alongside the visualization to verify critical structural details.",
    bullets: [
      "Layout",
      "Member orientation",
      "Structural arrangement"
    ]
  },
  {
    number: 4,
    title: "Estimation Completion",
    description:
      "Estimators finalize quantities and cost estimation. Results can be exported into structured formats.",
    bullets: []
  }
];

export default function HowItWorksPage() {

  const [activeStep, setActiveStep] = useState(0);
  const step = workflowSteps[activeStep];

  return (
    <>
      <Header />

      <main className="relative text-white overflow-hidden bg-gradient-to-b from-[#020202] via-[#071416] to-[#020202]">

        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(#4EBABD33_1px,transparent_1px),linear-gradient(90deg,#4EBABD33_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* Radial Glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#4EBABD]/10 blur-[120px] rounded-full pointer-events-none"></div>


        {/* Header */}
        <section className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h1>

            <p className="text-white/50 max-w-2xl mx-auto">
              VizeEST provides a structured workflow that helps estimators
              review drawings, validate structural layouts, and complete
              estimates with greater confidence.
            </p>

          </div>
        </section>


        {/* Interactive Steps */}
        <section className="pb-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Step Navigation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">

              {workflowSteps.map((item, index) => (
                <button
                  key={item.number}
                  onClick={() => setActiveStep(index)}
                  className={`group p-6 rounded-2xl border text-center transition-all duration-300
                  
                  ${activeStep === index
                    ? "bg-[#4EBABD]/10 border-[#4EBABD] shadow-lg shadow-[#4EBABD]/20"
                    : "bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04] hover:border-[#4EBABD]/40 hover:-translate-y-1"}
                  `}
                >

                  <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center font-bold text-lg transition-transform duration-300
                    
                    ${activeStep === index
                      ? "bg-gradient-to-r from-[#4EBABD] to-[#2C7181]"
                      : "bg-white/10 group-hover:scale-110"}
                  `}>
                    {item.number}
                  </div>

                  <h3 className="text-sm md:text-base font-semibold">
                    {item.title}
                  </h3>

                </button>
              ))}

            </div>


            {/* Active Step Content */}
            <div className="max-w-3xl mx-auto text-center transition-all duration-500">

              <h2 className="text-3xl font-bold mb-6">
                Step {step.number} — {step.title}
              </h2>

              <p className="text-white/60 mb-8">
                {step.description}
              </p>

              {step.bullets.length > 0 && (
                <ul className="space-y-4 inline-block text-left">

                  {step.bullets.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">

                     <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#22C55E] flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3.5 h-3.5 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 5.29a1 1 0 00-1.408 0L8.5 12.086 5.704 9.29a1 1 0 10-1.408 1.42l3.5 3.5a1 1 0 001.408 0l7.5-7.5a1 1 0 000-1.42z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>

                      <span className="text-white/80">
                        {item}
                      </span>

                    </li>
                  ))}

                </ul>
              )}

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}