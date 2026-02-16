'use client';
import { useEffect, useState } from 'react';

export default function AnimatedDrawingReview() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prev => (prev < 4 ? prev + 1 : 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto
                    rounded-3xl bg-white
                    shadow-[0_40px_120px_rgba(0,0,0,0.5)]
                    overflow-hidden">

      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 py-2
                      border-b bg-gray-100 text-xs text-gray-600">
        <span>SM03-3.PDF</span>
        <span>Page 1 / 1</span>
      </div>

      <div className="grid grid-cols-[1fr_320px]">

        {/* DRAWING CANVAS */}
        <div className="relative bg-white p-6">

          {/* Fake drawing grid */}
          <div className="absolute inset-0
                          bg-[linear-gradient(to_right,#eee_1px,transparent_1px),
                              linear-gradient(to_bottom,#eee_1px,transparent_1px)]
                          bg-[size:40px_40px]" />

          {/* Highlight boxes */}
          {step >= 1 && (
            <div className="absolute top-24 left-20
                            w-40 h-24 bg-green-400/40
                            border-2 border-green-500
                            animate-pulse" />
          )}

          {step >= 2 && (
            <div className="absolute top-44 left-64
                            w-32 h-20 bg-red-400/40
                            border-2 border-red-500
                            animate-pulse" />
          )}

          {/* Conflict markers */}
          {step >= 3 && (
            <Pin x={280} y={160} color="red" />
          )}

          {step >= 4 && (
            <Pin x={140} y={120} color="green" />
          )}
        </div>

        {/* COMMENTS PANEL */}
        <div className="border-l bg-gray-50 p-4 space-y-4 text-sm">

          <h3 className="font-semibold text-gray-700">
            Timeline
          </h3>

          <Comment
            active={step >= 1}
            color="green"
            text="Detected missing member in revision A"
          />

          <Comment
            active={step >= 2}
            color="red"
            text="Conflicting dimensions found"
          />

          <Comment
            active={step >= 3}
            color="yellow"
            text="Review required before approval"
          />
        </div>

      </div>
    </div>
  );
}

/* ---------- PIN ---------- */
function Pin({
  x,
  y,
  color,
}: {
  x: number;
  y: number;
  color: 'red' | 'green';
}) {
  return (
    <div
      className={`absolute rounded-full
                  animate-ping`}
      style={{
        top: y,
        left: x,
        width: 14,
        height: 14,
        background:
          color === 'red'
            ? 'rgba(239,68,68,0.8)'
            : 'rgba(34,197,94,0.8)',
      }}
    />
  );
}

/* ---------- COMMENT ---------- */
function Comment({
  active,
  color,
  text,
}: {
  active: boolean;
  color: 'red' | 'green' | 'yellow';
  text: string;
}) {
  return (
    <div
      className={`p-3 rounded-lg border text-gray-700
                  transition-all duration-500
                  ${
                    active
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-30 translate-x-2'
                  }`}
      style={{
        borderColor:
          color === 'red'
            ? '#ef4444'
            : color === 'green'
            ? '#22c55e'
            : '#eab308',
      }}
    >
      {text}
    </div>
  );
}
