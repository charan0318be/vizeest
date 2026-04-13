'use client';

import { useTheme } from '@/context/ThemeContext';

const menuItems = [
  "Home",
  "Pricing",
  "Get Started",
  "Book Demo",
  "Visual Verification",
  "For Estimators",
  "News",
  "Blogs",
];

export default function Navbar() {
  const { theme } = useTheme();

  return (
    <nav className={`w-full border-b border-[#0f2a35] ${theme === 'dark' ? 'bg-[#051821]' : 'bg-white'}`}>
      
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-white text-xl font-semibold">
            VizeEst
          </h1>
          <p className="text-[#9fb0b9] text-sm">
            Estimator-first steel takeoff platform
          </p>
        </div>

        {/* RIGHT SIDE MENU */}
        <div className="hidden lg:flex items-center gap-3">

          {menuItems.map((item, index) => (
            <button
              key={index}
              className="px-5 py-2 rounded-full border border-[#1f3a46] text-[#9fb0b9] text-sm hover:text-white hover:border-[#2c4a57] transition-all duration-300"
            >
              {item}
            </button>
          ))}

        </div>

      </div>
    </nav>
  );
}