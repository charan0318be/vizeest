'use client';

import { useTheme } from '@/context/ThemeContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useDemoModal } from '@/context/DemoModalContext';

export default function FinalCTA() {
  const { theme } = useTheme();
  const { openModal } = useDemoModal();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      className={`py-24 relative overflow-hidden ${
        theme === 'dark' ? 'bg-[#0B0B0B]' : 'bg-[#F9FAFB]'
      }`}
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-[#4EBABD]/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div
          ref={ref}
          className={`scroll-fade-up ${isVisible ? 'animate-in' : ''}`}
        >

          {/* Headline */}
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-10 ${
              theme === 'dark' ? 'text-white' : 'text-[#121212]'
            }`}
          >
            See Your Estimate
            <br />
            <span className="gradient-text">Before You Quote.</span>
          </h2>

          {/* Button */}
          <button
            onClick={openModal}
            className="px-8 py-4 bg-gradient-to-r from-[#4EBABD] to-[#2C7181] text-white font-medium rounded-xl text-lg hover:shadow-[0_0_40px_rgba(78,186,189,0.4)] transition-all"
          >
            Request Demo
          </button>

        </div>

      </div>
    </section>
  );
}