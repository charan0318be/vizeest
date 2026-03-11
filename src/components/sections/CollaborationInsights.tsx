'use client';

import { useTheme } from '@/context/ThemeContext';
import { useScrollAnimation, useScrollAnimationGroup } from '@/hooks/useScrollAnimation';

const audience = [
  "Structural steel fabricators",
  "Estimation teams",
  "Commercial managers",
  "Fabrication business owners",
];

export default function BuiltForFabricators() {

  const { theme } = useTheme();

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  const {
    ref: listRef,
    getStaggerClass,
    getStaggerStyle
  } = useScrollAnimationGroup(audience.length);

  return (
    <section
      className={`py-24 ${
        theme === 'dark' ? 'bg-[#0E0E0E]' : 'bg-[#F9FAFB]'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center scroll-fade-up ${
            headerVisible ? 'animate-in' : ''
          }`}
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-[#121212]'
            }`}
          >
            Built for
            <br />
            <span className="gradient-text">
              Steel Fabricators
            </span>
          </h2>

          <p
            className={`text-lg max-w-2xl mx-auto mb-16 ${
              theme === 'dark'
                ? 'text-[#9CA3AF]'
                : 'text-[#6B7280]'
            }`}
          >
            VizeEst is designed specifically for steel fabrication companies
            that handle structural projects and require reliable estimation
            workflows.
          </p>
        </div>


        {/* Centered Content */}
        <div className="max-w-2xl mx-auto">

          {/* Bullet Grid */}
          <div
            ref={listRef}
            className="grid grid-cols-2 gap-y-6 gap-x-20 mb-14"
          >
            {audience.map((item, index) => (

              <div
                key={index}
                className={`
                  flex items-center gap-2
                  scroll-fade-up
                  ${getStaggerClass(index)}
                `}
                style={getStaggerStyle(index)}
              >
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

                <p
                  className={`text-lg ${
                    theme === 'dark'
                      ? 'text-[#E5E7EB]'
                      : 'text-[#374151]'
                  }`}
                >
                  {item}
                </p>
              </div>

            ))}
          </div>


          {/* Button perfectly centered between columns */}
          <div className="flex justify-center">

            <button
              className="
              px-7 py-3
              rounded-xl
              text-white
              font-medium
              bg-gradient-to-r
              from-[#4EBABD]
              to-[#2C7181]
              transition-all
              hover:-translate-y-0.5
              hover:shadow-[0_0_30px_rgba(78,186,189,0.35)]
              "
            >
              Learn More
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}