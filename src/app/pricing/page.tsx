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

export default function PricingPage() {

  const [year, setYear] = useState<"year1" | "year2" | "year3">("year1");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
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

        {/* GRID BACKGROUND */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(#4EBABD33_1px,transparent_1px),linear-gradient(90deg,#4EBABD33_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="relative z-10">

          {/* Pricing Philosophy */}
          <motion.section
            initial={{ opacity:0, y:40 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.6 }}
            className="py-24"
          >
            <div className="max-w-4xl mx-auto px-4 text-center">

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Pricing
              </h1>

              <p className="text-white/50 text-lg">
                VizeEST is priced per estimator user on an annual subscription basis.
                Early adopter programs provide reduced pricing while the platform
                evolves with customer feedback.
              </p>

            </div>
          </motion.section>


          {/* Year Toggle */}
          {/* Year Toggle */}
<motion.section
  initial={{ opacity:0 }}
  animate={{ opacity:1 }}
  transition={{ delay:0.2 }}
  className="pb-10"
>
  <div className="flex justify-center gap-4">

    {(["year1","year2","year3"] as const).map((y,i)=>(
      <motion.button
        whileTap={{ scale:0.9 }}
        whileHover={{ scale:1.05 }}
        key={y}
        onClick={()=>setYear(y)}
        className={`px-6 py-2 rounded-full border transition-all duration-300
        
        ${year===y
          ? "bg-[#4EBABD] text-black border-[#4EBABD]"
          : "border-white/20 text-white/70 hover:border-[#4EBABD]"}`}
      >
        Year {i+1}
      </motion.button>
    ))}

  </div>
</motion.section>


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
                  className="group p-8 rounded-2xl bg-white/[0.02] border border-white/[0.07] transition-all duration-300 hover:-translate-y-2 hover:border-[#4EBABD]/70 hover:bg-white/[0.07]"
                >

                  <h3 className="text-xl font-semibold mb-4 group-hover:text-[#4EBABD]">
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


          {/* Trial Section */}
          <motion.section
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.6 }}
            viewport={{ once:true }}
            className="pb-24"
          >
            <div className="max-w-4xl mx-auto px-4 text-center">

              <h2 className="text-3xl font-bold mb-6">
                Evaluation Period
              </h2>

              <p className="text-white/50">
                New customers can evaluate VizeEST during an initial evaluation
                period to confirm suitability for their estimation workflow.
              </p>

            </div>
          </motion.section>

        </div>

      </main>

      <Footer />
    </>
  );
}