'use client';

export default function ManualFactoryAnimation() {
  return (
    <div className="relative w-full max-w-6xl mx-auto
                    h-[420px] rounded-3xl overflow-hidden
                    bg-[#0a0f14]
                    border border-white/[0.08]
                    shadow-[0_40px_100px_rgba(0,0,0,0.6)]">

      {/* GRID FLOOR */}
      <div className="absolute inset-0
                      bg-[linear-gradient(to_right,rgba(78,186,189,0.06)_1px,transparent_1px),
                          linear-gradient(to_bottom,rgba(78,186,189,0.06)_1px,transparent_1px)]
                      bg-[size:60px_60px]" />

      {/* STRUCTURE LINES */}
      <Line x="20%" y="15%" h="70%" />
      <Line x="40%" y="10%" h="80%" />
      <Line x="60%" y="15%" h="70%" />
      <Beam y="28%" />
      <Beam y="52%" />

      {/* DETECTION BOXES */}
      <Box x="18%" y="30%" w="18%" h="22%" />
      <Box x="42%" y="18%" w="20%" h="26%" />
      <Box x="58%" y="55%" w="22%" h="18%" />

      {/* SCAN SWEEP */}
      <div className="absolute inset-x-0 h-[3px]
                      bg-gradient-to-r from-transparent
                      via-[#4EBABD]
                      to-transparent
                      animate-scan" />

      {/* DETECTION DOTS */}
      <Dot x="26%" y="40%" />
      <Dot x="52%" y="32%" />
      <Dot x="66%" y="62%" />

      {/* HUD LABEL */}
      <div className="absolute bottom-4 left-4
                      text-xs text-white/70
                      bg-black/50 backdrop-blur
                      px-3 py-2 rounded-md">
        AI Detection: Steel Members Identified
      </div>
    </div>
  );
}

/* ---------- COMPONENTS ---------- */

function Line({ x, y, h }: { x: string; y: string; h: string }) {
  return (
    <div
      className="absolute w-[3px] bg-[#4EBABD]/40
                 animate-line"
      style={{ left: x, top: y, height: h }}
    />
  );
}

function Beam({ y }: { y: string }) {
  return (
    <div
      className="absolute left-[10%] right-[10%] h-[3px]
                 bg-[#4EBABD]/40
                 animate-beam"
      style={{ top: y }}
    />
  );
}

function Box({
  x,
  y,
  w,
  h,
}: {
  x: string;
  y: string;
  w: string;
  h: string;
}) {
  return (
    <div
      className="absolute border-2 border-[#4EBABD]
                 bg-[#4EBABD]/10
                 animate-box"
      style={{ left: x, top: y, width: w, height: h }}
    />
  );
}

function Dot({ x, y }: { x: string; y: string }) {
  return (
    <div
      className="absolute w-3 h-3 rounded-full
                 bg-[#4EBABD]
                 animate-dot"
      style={{ left: x, top: y }}
    />
  );
}
