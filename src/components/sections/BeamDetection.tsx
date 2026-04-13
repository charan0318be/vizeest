'use client';

import { useTheme } from '@/context/ThemeContext';
import { Eye, Boxes, ClipboardCheck, FileText, GitBranch, Layers } from 'lucide-react';

export default function WhyAndWhatSection() {

  const { theme } = useTheme();

  const features = [
    {
      icon: Eye,
      title: "Visual Verification",
      desc: "See the structure more clearly before you commit to the number. Verification becomes faster, and confidence becomes easier to build.",
    },
    {
      icon: Boxes,
      title: "Takeoff Acceleration",
      desc: "Move through takeoffs faster with a workflow built to reduce manual rechecking and mental reconstruction.",
    },
    {
      icon: ClipboardCheck,
      title: "Scope Confidence",
      desc: "Catch missing items,unclear interpretation,andscope doubts earlier before they become bid risk or downstream headaches.",
    },
    {
      icon: FileText,
      title: "Quote Readiness",
      desc: "Reach pricing with stronger internal confidence.The estimators says accountable,but the path to the number becomes clearer.",
    },
    {
      icon: GitBranch,
      title: "Review Confidence",
      desc: "Give reviewers and leaders a workflow that is easier to understand,explain, and trust before the quote goes out.",
    },
    {
      icon: Layers,
      title: "Estimator Workflow",
      desc: "From drawing upload to final confidence.A practicalflow build real etsimation work",
    },
  ];

  return (
    <>
      {/* ================= WHY THIS MATTERS ================= */}
      <section className={`py-28 ${theme === 'dark' ? 'bg-[#060f17]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4">

          <div className="mb-6">
            <span className="px-5 py-2 rounded-full text-xs border border-[#2c4a57] text-[#9adbea]">
              WHY THIS MATTERS
            </span>
          </div>

          <h2 className={`text-4xl md:text-5xl font-semibold mb-16 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Speed is easy to claim. Trust is harder to earn.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Why does estimator control matter?",
                desc: "Because steel estimation is not just counting. It is interpretation, judgment, and risk. The best workflows help estimators verify and decide with more confidence instead of asking them to blindly trust the output..",
              },
              {
                title: "What makes this different?",
                desc: "VizeEst is built around visual verification and estimator empowerment. The estimator can see more, verify more, and trust the output more before pricing goes out..",
              },
              {
                title: "Why for smaller teams?",
                desc: "Because not every fabricator has deep bench strength. A clearer workflow helps less-experienced estimators perform with more confidence and fewer misses.",
              },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl border bg-[#101921] border-[#1f3a46] text-white hover:shadow-xl">
                <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
                <p className="text-[#b2b5b8]">{item.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= WHAT YOU GET ================= */}
      <section className={`py-2 ${theme === 'dark' ? 'bg-[#060f17]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4">

          <div className="mb-6">
            <span className="px-5 py-2 rounded-full text-xs border border-[#2c4a57] text-[#9adbea]">
              WHAT YOU GET
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white">
              Faster takeoffs with stronger accuracy.
            </h2>

            <div className="text-gray-400 ">
              <p>The edge is not just faster counting. The edge is helping estimators understand what they are pricing with more clarity and less hesitation.</p>
              <p>That creates better output quality, better internal trust, and a workflow your team can actually stand behind.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                     <div
                          key={index}
                          className="group relative p-[1px] rounded-2xl bg-[gradient-to-b from-[#1f3a46] to-[#0b1f29]] hover:from-[#2c4a57] hover:to-[#12313d] transition-all duration-300"
                        >
                          {/* Inner Card */}
                          <div className="p-6 rounded-3xl border border-[#1e3a46] bg-[#101921] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,200,0.08)]">

  {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-[#0e2430] border border-[#2c4a57] flex items-center justify-center mb-6">
                        <Icon className="w-5 h-5 text-[#9adbea]" />
                      </div>

                      {/* Inner Preview Box */}
                      <div className="rounded-2xl border border-[#1f3a46] bg-[#122536] p-4 mb-6">
                        
                        <div className="grid grid-cols-2 gap-4">
                          
                          {/* Box 1 */}
                          <div className="h-28 rounded-xl bg-[#172633] border border-[#2c4a57]" />
                          
                          {/* Box 2 */}
                          <div className="h-28 rounded-xl bg-[#152836] border border-[#2c4a57]" />
                        
                        </div>

                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[#9aa4ab] text-[15px] leading-relaxed mb-5">
                        {item.desc}
                      </p>

                      {/* Learn More */}
                      <div className="flex items-center gap-2 text-[#9adbea] text-sm font-medium">
                        Learn more <span className="text-lg">→</span>
                      </div>

                    </div>
                        </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}