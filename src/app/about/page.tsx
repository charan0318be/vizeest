'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function AboutPage() {

  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index:number) => {
    setOpen(open === index ? null : index);
  };

  const sections = [
    {
      title: "Company Vision",
      content: `VizeEST was created to improve how steel fabrication companies
      approach estimation by introducing visual validation into the
      process. By combining drawing review with structural
      visualization, the platform helps estimators better understand
      project scope before finalizing their estimates.`
    },
    {
      title: "Industry Collaboration",
      content: `The platform is being developed with active input from steel
      fabricators to ensure it addresses real industry challenges.
      This collaboration allows the platform to evolve alongside the
      needs of estimation teams working on structural projects.`
    }
  ];

  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-gradient-to-b from-[#030303] via-[#0b1a1b] to-[#030303]">

        {/* GRID BACKGROUND */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(#4EBABD33_1px,transparent_1px),linear-gradient(90deg,#4EBABD33_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="relative z-10">

          {/* Hero */}
          <section className="py-24 text-center">
            <div className="max-w-4xl mx-auto px-4">

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                About VizeEST
              </h1>

              <p className="text-white/50 text-lg">
                A platform focused on improving structural steel estimation
                through better visualization and workflow clarity.
              </p>

            </div>
          </section>

          {/* Accordion Section */}
          <section className="pb-24">
            <div className="max-w-5xl mx-auto px-4 space-y-6">

              {sections.map((section, index) => (

                <div
                  key={index}
                  className="rounded-2xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#4EBABD]/40 transition-all duration-300"
                >

                  {/* Header */}
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex justify-between items-center p-8 text-left"
                  >

                    <h2 className="text-2xl font-semibold text-white">
                      {section.title}
                    </h2>

                    <motion.span
                      animate={{ rotate: open === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#4EBABD] text-2xl font-light"
                    >
                      +
                    </motion.span>

                  </button>

                  {/* Expand Content */}
                  <AnimatePresence>

                    {open === index && (

                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >

                        <div className="px-8 pb-8 text-white/60 leading-relaxed">
                          {section.content}
                        </div>

                      </motion.div>

                    )}

                  </AnimatePresence>

                </div>

              ))}

            </div>
          </section>

        </div>

      </main>

      <Footer />
    </>
  );
}