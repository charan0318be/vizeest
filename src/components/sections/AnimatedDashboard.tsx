'use client';

import { useEffect, useState } from 'react';

export default function AnimatedDashboard() {
  const [oil, setOil] = useState(0);
  const [battery, setBattery] = useState(0);

  useEffect(() => {
    let o = 0;
    let b = 0;

    const interval = setInterval(() => {
      if (o < 74) setOil(prev => prev + 1);
      if (b < 82) setBattery(prev => prev + 1);
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative rounded-3xl bg-[#0b1220] border border-white/[0.08]
                    p-6 w-full max-w-4xl mx-auto shadow-[0_40px_120px_rgba(0,0,0,0.6)]">

      {/* TOP ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

        {/* OIL LEVEL */}
        <Card title="Current Oil Level">
          <div className="relative w-28 h-28 mx-auto">
            <div className="absolute inset-0 rounded-full border-8 border-white/10" />
            <div
              className="absolute inset-0 rounded-full border-8 border-[#4EBABD]"
              style={{
                clipPath: `inset(${100 - oil}% 0 0 0)`,
                transition: 'clip-path 0.3s ease-out',
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold">
              {oil}%
            </div>
          </div>
        </Card>

        {/* BATTERY */}
        <Card title="Battery State">
          <div className="flex gap-2 items-end justify-center h-24">
            {[1, 2, 3, 4].map(i => (
              <div
                key={i}
                className={`w-6 rounded transition-all duration-300 ${
                  battery / 25 >= i
                    ? 'bg-green-400'
                    : 'bg-white/10'
                }`}
                style={{ height: `${i * 20}px` }}
              />
            ))}
          </div>
          <p className="text-center text-sm text-white/60 mt-2">
            {battery}%
          </p>
        </Card>

        {/* MACHINE INFO */}
        <Card title="Machine Info">
          <ul className="space-y-2 text-sm text-white/60">
            <li>Model: N-350</li>
            <li>Status: Active</li>
            <li>Hours: 12,480</li>
          </ul>
        </Card>
      </div>

      {/* GRAPH */}
      <div className="rounded-2xl bg-[#0f1a2f] p-4 border border-white/[0.06]">
        <p className="text-sm text-white/60 mb-3">
          History Module Temperature
        </p>

        <div className="relative h-32">
          <svg viewBox="0 0 300 100" className="w-full h-full">
            <polyline
              fill="none"
              stroke="#4EBABD"
              strokeWidth="3"
              strokeDasharray="300"
              strokeDashoffset="300"
              points="0,70 40,40 80,50 120,30 160,60 200,45 240,55 300,35"
              className="animate-draw-line"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ---------- CARD ---------- */
function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-[#0f1a2f] p-4 border border-white/[0.06]
                    hover:border-[#4EBABD]/40 transition">
      <p className="text-sm text-white/60 mb-3">{title}</p>
      {children}
    </div>
  );
}
