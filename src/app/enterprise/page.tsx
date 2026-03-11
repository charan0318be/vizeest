'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const capabilities = [
  {
    title: "Drawing Processing",
    description:
      "Supports project drawing packages and organizes them for structured review.",
    bullets: [
      "Upload project drawing packages",
      "Organized drawing structure",
      "Supports engineering documentation"
    ]
  },
  {
    title: "Visualization Engine",
    description:
      "Creates a visual representation of the structure to assist estimator interpretation.",
    bullets: [
      "Structural layout visualization",
      "Improved understanding of geometry",
      "Supports validation of assumptions"
    ]
  },
  {
    title: "Estimation Workflow",
    description:
      "Supports estimation steps from drawing review through proposal preparation.",
    bullets: [
      "Drawing review",
      "Quantity review",
      "Validation",
      "Proposal preparation"
    ]
  },
  {
    title: "Audit & Review",
    description:
      "Provides traceability of estimation work and ensures accountability.",
    bullets: [
      "Revision tracking",
      "Review checkpoints",
      "Estimator accountability"
    ]
  }
];

export default function TechnologyPage() {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-gradient-to-b from-[#030303] via-[#0b1a1b] to-[#030303] text-white">

        {/* GRID BACKGROUND */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(#4EBABD33_1px,transparent_1px),linear-gradient(90deg,#4EBABD33_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="relative z-10">

          {/* Header Section */}
          <section className="py-20 md:py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

              <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Platform Technology
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-white/50 text-lg"
              >
                VizeEST combines drawing processing, estimation workflows,
                and visual validation into a single integrated platform designed
                for structural steel estimation.
              </motion.p>

            </div>
          </section>

          {/* Key Capabilities */}
          <section className="pb-20 md:pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="text-center mb-14 md:mb-16">

                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-3xl md:text-4xl font-bold mb-4"
                >
                  Key Capabilities
                </motion.h2>

                <p className="text-white/40">
                  Core components that support the estimation workflow.
                </p>

              </div>

              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                {capabilities.map((item, index) => {

                  const isActive = activeIndex === index;

                  return (

                    <motion.div
                      key={index}

                      initial={{ opacity: 0, y: 60 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}

                      whileHover={{
                        scale: 1.04,
                        boxShadow: "0 10px 40px rgba(78,186,189,0.25)"
                      }}

                      onClick={() => toggleCard(index)}

                      className={`cursor-pointer rounded-2xl border p-6 md:p-8 transition-all duration-300
                      ${
                        isActive
                          ? "border-[#4EBABD] bg-[#4EBABD]/10"
                          : "border-white/[0.05] bg-white/[0.02] hover:border-[#4EBABD]/40"
                      }`}
                    >

                      <div className="flex items-center justify-between mb-4">

                        <h3 className={`text-lg md:text-xl font-semibold
                        ${isActive ? "text-[#4EBABD]" : "text-white"}`}>
                          {item.title}
                        </h3>

                        <span className="text-xl text-[#4EBABD]">
                          {isActive ? "−" : "+"}
                        </span>

                      </div>

                      <p className="text-white/50 mb-4">
                        {item.description}
                      </p>

                      <AnimatePresence>

                        {isActive && (

                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="overflow-hidden"
                          >

                            <ul className="space-y-3 mt-4">

                              {item.bullets.map((bullet, i) => (

                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-center gap-3"
                                >

                                  <div className="w-2 h-2 bg-[#4EBABD] rounded-full"></div>

                                  <span className="text-white/80">
                                    {bullet}
                                  </span>

                                </motion.li>

                              ))}

                            </ul>

                          </motion.div>

                        )}

                      </AnimatePresence>

                    </motion.div>

                  );
                })}

              </div>

            </div>
          </section>

        </div>

      </main>

      <Footer />
    </>
  );
}