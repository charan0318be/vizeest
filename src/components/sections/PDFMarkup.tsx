'use client';

import { useTheme } from '@/context/ThemeContext';

const steps = [
  {
    number: "01",
    title: "Bring in the drawing",
    desc: "Start with what your team already uses. No need to change how you begin the estimation process.",
  },
  {
    number: "02",
    title: "See it in 3D",
    desc: "Understand the building faster. What used to take time to mentally interpret becomes easier to verify.",
  },
  {
    number: "03",
    title: "Estimate with confidence",
    desc: "Price with less second-guessing. Fewer pauses, fewer doubts, clearer decisions.",
  },
  {
    number: "04",
    title: "Move forward stronger",
    desc: "Cleaner review. Better trust. Easier conversations across the team before the number goes out.",
  },
];

export default function HowItWorks() {
  const { theme } = useTheme();

  return (
    <section className={`py-28 ${theme === 'dark' ? 'bg-[#0e171f]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4">

        {/* Tag */}
        <div className="mb-6">
          <span className="px-5 py-2 rounded-full text-xs tracking-widest font-semibold border border-[#2c4a57] text-[#9adbea]">
            HOW IT WORKS
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-white max-w-4xl mb-16 leading-tight">
          Upload the drawing. Verify visually. Price with more confidence.
        </h2>

        {/* Cards */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

  {steps.map((item, index) => (
    <div
      key={index}
      className="p-8 rounded-[28px] border border-[#212a33] bg-[#0e1e2b] transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,150,200,0.06)]"
    >

      {/* Step Number */}
      <div className="text-[#7fb3c9] text-sm font-medium mb-6">
        {item.number}
      </div>

      {/* ONLY ONE Inner Card (Correct) */}
      <div className="h-36 rounded-2xl bg-[#0e1e2b] border border-[#212a33] mb-8" />

      {/* Title */}
      <h3 className="text-[20px] font-semibold text-white mb-4">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-[#b0b4b8] text-[15px] leading-7">
        {item.desc}
      </p>

    </div>
  ))}

</div>
      </div>
    </section>
  );
}