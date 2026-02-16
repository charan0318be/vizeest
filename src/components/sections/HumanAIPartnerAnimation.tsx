'use client';

export default function HumanAIPartnerAnimation() {
  return (
    <div className="relative w-full max-w-6xl mx-auto
                    h-[420px] rounded-3xl overflow-hidden
                    bg-[#05070b]
                    border border-white/[0.08]
                    shadow-[0_40px_120px_rgba(0,0,0,0.7)]">

      {/* BINARY BACKGROUND */}
      <div className="absolute inset-0
        bg-[radial-gradient(circle_at_center,rgba(78,186,189,0.12),transparent_65%)]" />

      <BinaryColumn left="18%" delay="0s" />
      <BinaryColumn left="30%" delay="1s" />
      <BinaryColumn left="42%" delay="0.5s" />
      <BinaryColumn left="58%" delay="1.3s" />
      <BinaryColumn left="72%" delay="0.8s" />

      {/* LEFT (HUMAN SIDE) */}
      <HandSide align="left" label="Human Intelligence" />

      {/* RIGHT (AI SIDE) */}
      <HandSide align="right" label="AI Intelligence" />

      {/* CONNECTION CORE */}
      <div className="absolute left-1/2 top-1/2
                      -translate-x-1/2 -translate-y-1/2">

        {/* core glow */}
        <div className="w-24 h-24 rounded-full
                        bg-[#4EBABD]/30 blur-2xl animate-pulse" />

        {/* core ring */}
        <div className="absolute inset-0
                        rounded-full border-2 border-[#4EBABD]
                        animate-core-spin" />
      </div>

      {/* DATA STREAM */}
      <DataStream direction="left" />
      <DataStream direction="right" />

      {/* HUD LABEL */}
      <div className="absolute bottom-4 left-1/2
                      -translate-x-1/2
                      bg-black/60 backdrop-blur
                      px-4 py-2 rounded-md
                      text-xs text-white/70">
        Neural Sync Established
      </div>
    </div>
  );
}

/* ---------- COMPONENTS ---------- */

function HandSide({
  align,
  label,
}: {
  align: 'left' | 'right';
  label: string;
}) {
  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2
                  ${align === 'left' ? 'left-8' : 'right-8'}`}
    >
      {/* abstract hand lines */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="w-28 h-[2px] bg-[#4EBABD]/50 mb-4
                     animate-hand-line"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}

      <span className="block mt-4 text-xs text-white/60">
        {label}
      </span>
    </div>
  );
}

function DataStream({ direction }: { direction: 'left' | 'right' }) {
  return (
    <div
      className={`absolute top-1/2 h-[2px]
                  bg-gradient-to-r
                  ${direction === 'left'
                    ? 'from-[#4EBABD] to-transparent right-1/2'
                    : 'from-transparent to-[#4EBABD] left-1/2'}
                  animate-data-flow`}
      style={{ width: '30%' }}
    />
  );
}

function BinaryColumn({
  left,
  delay,
}: {
  left: string;
  delay: string;
}) {
  return (
    <div
      className="absolute top-0 bottom-0 text-[#4EBABD]/20
                 text-xs tracking-widest
                 animate-binary-fall"
      style={{ left, animationDelay: delay }}
    >
      0101010101010101
    </div>
  );
}
