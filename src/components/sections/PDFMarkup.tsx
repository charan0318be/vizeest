'use client';

import { useTheme } from '@/context/ThemeContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const benefits = [
  "Faster drawing interpretation",
  "Easier internal review",
  "Reduced oversight risk",
  "Greater estimator confidence",
];

export default function VisualEstimation() {
  const { theme } = useTheme();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      className={`py-24 transition-colors ${
        theme === 'dark' ? 'bg-[#0E0E0E]' : 'bg-[#F9FAFB]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 items-center scroll-fade-up ${
            isVisible ? 'animate-in' : ''
          }`}
        >

          {/* LEFT CONTENT */}
          <div>

            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-[#121212]'
              }`}
            >
              Visual-Centric
              <br />
              <span className="gradient-text">Estimation</span>
            </h2>

            <p
              className={`text-lg mb-8 ${
                theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'
              }`}
            >
              VizeEst introduces a visual approach to estimation where drawings
              can be reviewed alongside a generated 3D view. This allows
              estimators to quickly cross-check elements visually and validate
              assumptions before submitting a quote.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-start gap-3">

                  <div className="w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <p
                    className={`text-lg ${
                      theme === 'dark' ? 'text-[#E5E7EB]' : 'text-[#374151]'
                    }`}
                  >
                    {item}
                  </p>

                </div>
              ))}
            </div>

            {/* Button */}
            <button className="px-6 py-3 bg-gradient-to-r from-[#4EBABD] to-[#2C7181] text-white font-medium rounded-xl hover:shadow-[0_0_30px_rgba(78,186,189,0.3)] transition-all">
              Explore Visual Estimation
            </button>

          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">

            <div className="rounded-2xl overflow-hidden border border-[#2D2D2D] bg-[#0a0a0a] shadow-xl">
              <img
                src="/visual.jpeg"
                alt="Visual estimation interface"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#4EBABD]/10 to-[#2C7181]/10 blur-[80px] -z-10"></div>

          </div>

        </div>

      </div>
    </section>
  );
}