'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const pricing = {
  year1: [
    { name: "Founding Partners", price: "Closed", note: "Program completed" },
    { name: "Accelerators", price: "$1,200", note: "Early-stage adoption program" },
    { name: "Builders", price: "$2,400", note: "Growing estimation teams" },
    { name: "Industry Circle", price: "$4,800", note: "Advanced enterprise adoption" }
  ],
  year2: [
    { name: "Founding Partners", price: "Closed", note: "Program completed" },
    { name: "Accelerators", price: "$1,800", note: "Transition pricing" },
    { name: "Builders", price: "$3,000", note: "Standard pricing tier" },
    { name: "Industry Circle", price: "$5,400", note: "Enterprise pricing" }
  ],
  year3: [
    { name: "Founding Partners", price: "Closed", note: "Program completed" },
    { name: "Accelerators", price: "$2,400", note: "Full program pricing" },
    { name: "Builders", price: "$3,600", note: "Standard pricing tier" },
    { name: "Industry Circle", price: "$6,000", note: "Enterprise pricing" }
  ]
};

type PricingKey = keyof typeof pricing;

export default function PricingPage() {

  const [year, setYear] = useState<PricingKey>("year1");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-gradient-to-b from-[#030303] via-[#0b1a1b] to-[#030303] text-white">

        <div className="relative z-10">

          {/* Pricing Title */}
          <section className="py-24">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Pricing
              </h1>

              <p className="text-white/50 text-lg">
                VizeEST is priced per estimator user on an annual subscription basis.
              </p>
            </div>
          </section>

          {/* Year Toggle */}
          <section className="pb-10">
            <div className="flex justify-center gap-4">

              {(Object.keys(pricing) as PricingKey[]).map((y,i)=>(
                <button
                  key={y}
                  onClick={()=>setYear(y)}
                  className={`px-6 py-2 rounded-full border transition-all duration-300
                  ${year===y
                    ? "bg-[#4EBABD] text-black border-[#4EBABD]"
                    : "border-white/20 text-white/70 hover:border-[#4EBABD]"}`}
                >
                  Year {i+1}
                </button>
              ))}

            </div>
          </section>

          {/* Pricing Cards */}
          <section className="pb-24">
            <motion.div
              key={year}
              variants={container}
              initial="hidden"
              animate="show"
              className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >

              {pricing[year].map((tier,index)=>(
                <motion.div
                  variants={item}
                  whileHover={{ scale:1.05 }}
                  key={index}
                  className="group p-8 rounded-2xl bg-white/[0.02] border border-white/[0.07]"
                >

                  <h3 className="text-xl font-semibold mb-4">
                    {tier.name}
                  </h3>

                  <div className="text-3xl font-bold mb-4">
                    {tier.price}
                  </div>

                  <p className="text-white/50 text-sm">
                    {tier.note}
                  </p>

                </motion.div>
              ))}

            </motion.div>
          </section>

        </div>

      </main>

      <Footer />
    </>
  );
}