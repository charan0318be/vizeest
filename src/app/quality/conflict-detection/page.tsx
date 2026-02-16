'use client';
import AnimatedDashboard from '@/components/sections/AnimatedDashboard';
import AnimatedDrawingReview from '@/components/sections/AnimatedDrawingReview';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function ConflictDetectionPage() {
  /* ---------- BULLET 1 ---------- */
  const bulletOneRef = useRef<HTMLUListElement>(null);
  const [bulletOneVisible, setBulletOneVisible] = useState(false);
  const [activeBulletOne, setActiveBulletOne] = useState(-1);

  /* ---------- BULLET 2 ---------- */
  const bulletTwoRef = useRef<HTMLUListElement>(null);
  const [bulletTwoVisible, setBulletTwoVisible] = useState(false);
  const [activeBulletTwo, setActiveBulletTwo] = useState(-1);

  useEffect(() => {
    const observerOne = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBulletOneVisible(true);
          observerOne.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    const observerTwo = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBulletTwoVisible(true);
          observerTwo.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (bulletOneRef.current) observerOne.observe(bulletOneRef.current);
    if (bulletTwoRef.current) observerTwo.observe(bulletTwoRef.current);

    return () => {
      observerOne.disconnect();
      observerTwo.disconnect();
    };
  }, []);

  /* Progressive activation */
  useEffect(() => {
    if (!bulletOneVisible) return;
    bulletOne.forEach((_, i) => {
      setTimeout(() => setActiveBulletOne(i), i * 300);
    });
  }, [bulletOneVisible]);

  useEffect(() => {
    if (!bulletTwoVisible) return;
    bulletTwo.forEach((_, i) => {
      setTimeout(() => setActiveBulletTwo(i), i * 300);
    });
  }, [bulletTwoVisible]);

  const bulletOne = [
    'Missing members across drawings',
    'Duplicated or overlapping elements',
    'Conflicting dimensions or quantities',
    'Revision-to-revision inconsistencies',
  ];

  const bulletTwo = [
    'Fewer estimation surprises',
    'Reduced downstream rework',
    'Better coordination across teams',
    'Stronger audit-ready documentation',
  ];

  return (
    <main className="bg-black text-white relative overflow-hidden">

      {/* INTRO STRIP */}
      <section className="relative border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <span className="text-[#4EBABD] text-sm tracking-wide font-medium">
            Quality & Validation
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            Conflict Detection
          </h1>

          <p className="text-white/40 max-w-4xl text-base sm:text-lg leading-relaxed">
            Conflict Detection automatically identifies missing,
            duplicated, or contradictory elements across drawings
            and revisions—before they become costly estimation errors.
          </p>
        </div>
      </section>

      {/* VISUAL + EXPLANATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <div className="relative overflow-hidden rounded-3xl bg-[#0b0b0b]
                        border border-white/[0.08] min-h-[260px]">
          <AnimatedDrawingReview />

        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Detect Issues Before They Become Risk
          </h2>

          <p className="text-white/40 text-sm sm:text-base mb-5">
            Conflict detection continuously scans detected elements
            to surface problems early.
          </p>

          {/* BULLET LIST 1 */}
          <ul ref={bulletOneRef} className="space-y-3 text-sm sm:text-base">
            {bulletOne.map((item, index) => {
              const active = activeBulletOne >= index;
              return (
                <li key={item} className="flex gap-3 items-center">
                  <span
                    className={`h-5 w-5 rounded-full flex items-center justify-center text-sm
                      transition-all duration-300
                      ${
                        active
                          ? 'bg-[#4EBABD] text-black opacity-100 scale-100'
                          : 'bg-[#4EBABD]/20 text-[#4EBABD]/40 opacity-40 scale-90'
                      }`}
                  >
                    ✓
                  </span>

                  <span
                    className={`transition-all duration-300 ${
                      active ? 'text-white' : 'text-white/40'
                    }`}
                  >
                    {item}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Reduce Errors. Increase Confidence.
          </h2>

          <p className="text-white/40 text-sm sm:text-base mb-4">
            Early detection protects both accuracy and credibility.
          </p>

          {/* BULLET LIST 2 */}
          <ul ref={bulletTwoRef} className="space-y-3 text-sm sm:text-base">
            {bulletTwo.map((item, index) => {
              const active = activeBulletTwo >= index;
              return (
                <li key={item} className="flex gap-3 items-center">
                  <span
                    className={`h-5 w-5 rounded-full flex items-center justify-center text-sm
                      transition-all duration-300
                      ${
                        active
                          ? 'bg-[#4EBABD] text-black opacity-100 scale-100'
                          : 'bg-[#4EBABD]/20 text-[#4EBABD]/40 opacity-40 scale-90'
                      }`}
                  >
                    ✓
                  </span>

                  <span
                    className={`transition-all duration-300 ${
                      active ? 'text-white' : 'text-white/40'
                    }`}
                  >
                    {item}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-[#0b0b0b]
                        border border-white/[0.08] min-h-[260px]">
          <AnimatedDashboard />

        </div>
      </section>

    </main>
  );
}
