'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useDemoModal } from '@/context/DemoModalContext';
import { useRouter } from 'next/navigation'; // ✅ added

const navigation = [
  { name: 'Capabilities', href: '/features' },
  { name: 'Who It Is For', href: '/solutions' },
  { name: 'Platform', href: '/enterprise' },
  { name: 'Company', href: '/fabricators' },
  { name: 'Pricing', href: '/pricing' },
];

const dropdownMenus = {
  Capabilities: [
    "Visual Verification",
    "Takeoff Acceleration",
    "Scope Confidence",
    "Quote Readiness",
    "Review Confidence",
  ],
  "Who It Is For": [
    "For Steel Fabricators",
    "For Detailers",
    "For Estimators",
  ],
  Platform: [
    "How It Works",
    "AIIR Fusion Power",
    "FAQ",
  ],
  Company: [
    "About",
    "News",
    "Blogs",
  ],
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const { theme } = useTheme();
  const { openModal } = useDemoModal();
  const router = useRouter(); // ✅ added

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-300 top-0 ${
        isScrolled
          ? theme === 'dark'
            ? 'bg-[#121212]/95 backdrop-blur-md shadow-lg'
            : 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={isScrolled && theme === 'light' ? '/logo.svg' : '/Untitled .png'}
              alt="VizeEST"
              width={120}
              height={40}
              className="h-9 w-auto"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => {
              const hasDropdown = dropdownMenus[item.name];

              return (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => hasDropdown && setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                   onClick={() => {
                            if (hasDropdown) {
                              setOpenDropdown(openDropdown === item.name ? null : item.name);
                            } else {
                              router.push(item.href); // ✅ THIS FIXES PRICING
                            }
                          }}
                    className={`text-sm font-medium transition hover:text-[#4EBABD] ${
                      isScrolled
                        ? theme === 'dark'
                          ? 'text-gray-300'
                          : 'text-[#6B7280]'
                        : 'text-white/80'
                    }`}
                  >
                    {item.name}
                  </button>

                  {/* DROPDOWN */}
                  {hasDropdown && openDropdown === item.name && (
                    <div className="absolute top-full mt-1 left-0 w-[320px] rounded-3xl border border-[#1b3440] bg-[#061a24] p-4 shadow-xl z-50">
                      
                      {dropdownMenus[item.name].map((subItem, i) => (
                        <div
                          key={i}
                                                    onClick={() => {
                              setOpenDropdown(null);

                              // ✅ Capabilities (your existing logic)
                              if (subItem === "Visual Verification") {
                                router.push('/features/verification');
                              } else if (subItem === "Takeoff Acceleration") {
                                router.push('/features/accelaration');
                              } else if (subItem === "Scope Confidence") {
                                router.push('/features/confidence');
                              } else if (subItem === "Quote Readiness") {
                                router.push('/features/readliness');
                              } else if (subItem === "Review Confidence") {
                                router.push('/features/review');
                              }

                              // ✅ NEW: Who It Is For
                              else if (subItem === "For Steel Fabricators") {
                                router.push('/solutions/fabricators');
                              } else if (subItem === "For Detailers") {
                                router.push('/solutions/detailers');
                              } else if (subItem === "For Estimators") {
                                router.push('/solutions/estimators');
                              }

                              // ✅ NEW: Platform
                              else if (subItem === "How It Works") {
                                router.push('/enterprise/work');
                              } else if (subItem === "AIIR Fusion Power") {
                                router.push('/enterprise/fusion');
                              } else if (subItem === "FAQ") {
                                router.push('/enterprise/faq');
                              }

                              // ✅ NEW: Company
                              else if (subItem === "About") {
                                router.push('/solutions/fabricators/about');
                              } else if (subItem === "News") {
                                router.push('/solutions/fabricators/news');
                              } else if (subItem === "Blogs") {
                                router.push('/solutions/fabricators/blog');
                              }
                              
                            }}
                          className="px-4 py-3 rounded-xl cursor-pointer text-[#9fb0b9] hover:bg-[#0b2230] hover:text-white transition"
                        >
                          {subItem}
                        </div>
                      ))}

                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* DESKTOP BUTTONS */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => router.push('/book-now')}
              className="rounded-4xl border border-white/30 text-white text-sm py-2.5 px-5 hover:bg-white/10 transition"
            >
              Book Demo
            </button>
            <button
             onClick={() => router.push('/get-started')}
              className="bg-white text-black rounded-2xl py-2.5 px-5 hover:bg-[#3da9ac]"
            >
              Get Started Free
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <span className={`text-2xl ${
                isScrolled
                  ? theme === 'dark'
                    ? 'text-white'
                    : 'text-black'
                  : 'text-white'
              }`}>
                ☰
              </span>
            </button>
          </div>
        </div>

        {/* MOBILE MENU (UNCHANGED) */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden rounded-lg shadow-xl mt-2 p-4 ${
              theme === 'dark' ? 'bg-[#1E1E1E]' : 'bg-white'
            }`}
          >
            {navigation.map((item) => {
              const hasDropdown = dropdownMenus[item.name];

              return (
                <div key={item.name} className="mb-2">

                  <button
                    onClick={() =>
                      hasDropdown
                        ? setMobileDropdown(
                            mobileDropdown === item.name ? null : item.name
                          )
                        : setIsMobileMenuOpen(false)
                    }
                    className={`w-full flex justify-between items-center py-3 px-4 rounded-lg ${
                      theme === 'dark'
                        ? 'text-gray-300 hover:bg-[#2D2D2D]'
                        : 'text-[#6B7280] hover:bg-[#F8FAFB]'
                    }`}
                  >
                    <span>{item.name}</span>

                    {hasDropdown && (
                      <span className="text-xs">
                        {mobileDropdown === item.name ? '▲' : '▼'}
                      </span>
                    )}
                  </button>

                  {hasDropdown && mobileDropdown === item.name && (
                    <div className="ml-4 mt-1 space-y-1">
                      {dropdownMenus[item.name].map((subItem, i) => (
                        <div
                          key={i}
                          className={`px-4 py-2 rounded-md text-sm cursor-pointer ${
                            theme === 'dark'
                              ? 'text-gray-400 hover:text-white hover:bg-[#2D2D2D]'
                              : 'text-gray-600 hover:text-black hover:bg-gray-100'
                          }`}
                        >
                          {subItem}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}