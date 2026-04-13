'use client';

import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

const faqs = [
  {
    question: "Is this replacing the estimator?",
    answer:
      "No. That is the wrong frame. VizeEst is built to strengthen estimator judgment, not sideline it.",
  },
  {
    question: "So what is the real value?",
    answer:
      "Faster verification, less doubt, stronger output confidence, and an easier review path before the quote goes out.",
  },
  {
    question: "Why is this useful for smaller estimating teams?",
    answer:
      "Because it helps fabricators perform with more consistency even when senior estimator bandwidth is limited.",
  },
  {
    question: "What should I do first?",
    answer:
      "Start free or book a demo based on how hands-on you want the first look to be.",
  },
];

export default function FAQSection() {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-28 ${theme === 'dark' ? 'bg-[#0e171f]' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto px-4 text-center">

        {/* Tag */}
        <div className="mb-6">
          <span className="px-5 py-2 rounded-full text-xs tracking-widest font-medium border border-[#2c4a57] text-[#9adbea]">
            FAQ
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-16">
          Questions real fabricators will ask.
        </h2>

        {/* FAQ Cards */}
        <div className="space-y-6 text-left">

          {faqs.map((item, index) => (
            <div
              key={index}
              onClick={() => toggle(index)}
              className="cursor-pointer p-8 rounded-3xl border border-[#1b3440] bg-[#0a1621] transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,150,200,0.06)]"
            >

              {/* Question */}
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-white">
                  {item.question}
                </h3>

                {/* Icon */}
                <span className="text-[#9adbea] text-xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </div>

              {/* Answer */}
              {openIndex === index && (
                <p className="mt-4 text-[#9fb0b9] text-[15px] leading-7">
                  {item.answer}
                </p>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}