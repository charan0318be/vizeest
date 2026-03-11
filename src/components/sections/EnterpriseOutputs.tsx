'use client';

import { useTheme } from '@/context/ThemeContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function EarlyAdoption() {
  const { theme } = useTheme();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      className={`py-24 transition-colors ${
        theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div
          ref={ref}
          className={`scroll-fade-up ${isVisible ? 'animate-in' : ''}`}
        >
          {/* Headline */}
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-[#121212]'
            }`}
          >
            Built in Collaboration
            <br />
            <span className="gradient-text">with Fabricators</span>
          </h2>

          {/* Text */}
          <p
            className={`text-lg max-w-2xl mx-auto mb-10 ${
              theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'
            }`}
          >
            VizeEst is currently being developed with a group of early industry
            partners to refine the platform and ensure it solves real estimation
            challenges.
          </p>

          {/* Button */}
          <button className="px-6 py-3 bg-gradient-to-r from-[#4EBABD] to-[#2C7181] text-white font-medium rounded-xl hover:shadow-[0_0_30px_rgba(78,186,189,0.3)] transition-all">
            View Programs
          </button>
        </div>

      </div>
    </section>
  );
}