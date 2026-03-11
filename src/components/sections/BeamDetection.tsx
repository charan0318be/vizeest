'use client';

import { useTheme } from '@/context/ThemeContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const benefits = [
  "Faster Drawing Interpretation",
  "Easier Internal Review",
  "Reduced Oversight Risk",
  "Greater Estimator Confidence"
];

export default function BeamDetection() {

  const { theme } = useTheme();
  const { ref, isVisible } = useScrollAnimation();

  const scrollingBenefits = [...benefits, ...benefits]; // duplicate for infinite loop

  return (

    <section
      className={`py-28 overflow-hidden ${
        theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
      }`}
    >

      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}

        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2
            className={`text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-[#121212]'
            }`}
          >
            Key Benefits Of Visual Estimation
          </h2>

          <p
            className={`text-lg ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Visual validation allows estimators to review drawings faster and
            reduce costly oversights during estimation.
          </p>

        </div>

        {/* Auto Scrolling Cards */}

        <div
          ref={ref}
          className={`relative ${
            isVisible
              ? "animate-in fade-in slide-in-from-bottom-8 duration-700"
              : "opacity-0"
          }`}
        >

          <div className="overflow-hidden">

            <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">

              {scrollingBenefits.map((item, index) => (

                <div
                  key={index}
                  className={`min-w-[260px] p-6 rounded-xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${
                    theme === "dark"
                      ? "bg-[#1b1b1b] border-gray-700 text-white"
                      : "bg-white border-gray-200 text-[#121212]"
                  }`}
                >

                  {/* Number */}

                  <div className="w-10 h-10 rounded-full bg-[#4EBABD] text-white flex items-center justify-center font-semibold mb-4 shadow">
                    {`0${(index % benefits.length) + 1}`}
                  </div>

                  {/* Text */}

                  <p className="text-lg font-medium leading-snug">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

      {/* Animation Style */}

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
      `}</style>

    </section>

  );
}