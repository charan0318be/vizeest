'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function WhyVizeESTPage() {
  const [teamSize, setTeamSize] = useState(5);
  const [hoursSaved, setHoursSaved] = useState(12);

  const annualSavings = teamSize * hoursSaved * 52 * 75;

  return (
    <main className="min-h-screen bg-[#030303] text-white">

      {/* HERO */}
      <section className="relative pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                        grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
           
            <h1 className="text-4xl md:text-6xl lg:text-6xl
                           font-bold mt-4 mb-8 tracking-tight leading-[1.05]">
              Built for Accuracy,
              <br />
              <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                               bg-clip-text text-transparent">
                Trust & Scale
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/50 max-w-3xl leading-relaxed">
              VizeEST helps estimation teams move faster without
              compromising accuracy, accountability, or confidence—
              from first take-off to final approval.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-[#0b0b0b]
                       border border-white/[0.08]
                       hover:border-[#4EBABD]
                       transition-all duration-300"
          >
            <h4 className="text-lg font-semibold mb-3">
              Platform Impact Overview
            </h4>
            <p className="text-white/40  leading-relaxed">
              Speed, accuracy, governance, and scale—
              delivered in one unified estimation platform.
            </p>
          </motion.div>

        </div>
      </section>

      {/* BENCHMARK */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          <h2 className="text-4xl md:text-5xl font-bold mb-14">
            Manual vs Vizeest
          </h2>

          <div className="space-y-10">
            {[
              ['Estimation Speed', 30, 85],
              ['Accuracy Confidence', 70, 98],
              ['Rework Reduction', 40, 80],
            ].map(([label, manual, vize]) => (
              <div key={label}>
                <p className="text-white/50 mb-3">{label}</p>

                <div className="space-y-3">
                  <Bar label="Manual" value={manual as number} muted />
                  <Bar label="Vizeest" value={vize as number} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ROI CALCULATOR */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                        grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Estimate Your ROI
            </h2>

            <div className="space-y-8 max-w-md">
              <Range
                label="Team Size"
                value={teamSize}
                min={1}
                max={30}
                onChange={setTeamSize}
              />
              <Range
                label="Hours Saved / Week"
                value={hoursSaved}
                min={2}
                max={25}
                onChange={setHoursSaved}
              />
            </div>
          </div>

          <div
            className="p-10 rounded-3xl bg-[#0b0b0b]
                       border border-white/[0.08]
                       hover:border-[#4EBABD]/40
                       transition-all duration-300 text-center"
          >
            <p className="text-white/40 mb-3">
              Estimated Annual Savings
            </p>
            <p className="text-4xl md:text-5xl font-bold text-[#4EBABD] mb-4">
              ${annualSavings.toLocaleString()}
            </p>
            <p className="text-white/30 ">
              Productivity gains only
            </p>
          </div>

        </div>
      </section>

      {/* TRUST */}
      <section className="relative py-20 bg-[#0a0a0a]  text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Trusted by Estimation Leaders
        </h3>

        <p className="text-white/40 max-w-3xl mx-auto italic mb-6">
          “Vizeest helped us cut estimation time nearly in half
          while improving confidence across bids.”
        </p>

        <p className="text-[#4EBABD] ">
          — Director of Estimating, Steel Fabrication Firm
        </p>
      </section>

    </main>
  );
}

/* COMPONENTS */

function Bar({ label, value, muted }: any) {
  return (
    <div className="flex items-center gap-4">
      <span className={`text-xs w-20 ${muted ? 'text-white/40' : 'text-[#4EBABD]'}`}>
        {label}
      </span>
      <div className="h-2 w-full bg-white/[0.08] rounded">
        <div
          className={`h-2 rounded ${muted ? 'bg-white/30' : 'bg-[#4EBABD]'}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function Range({ label, value, min, max, onChange }: any) {
  return (
    <div>
      <p className="text-white/50 text-sm mb-2">
        {label}: <span className="text-white">{value}</span>
      </p>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={e => onChange(+e.target.value)}
        className="w-full accent-[#4EBABD]"
      />
    </div>
  );
}
