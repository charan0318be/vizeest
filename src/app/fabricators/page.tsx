'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useTheme } from '@/context/ThemeContext';
import { useScrollAnimationGroup } from '@/hooks/useScrollAnimation';

import {
  
  Clock,
  FileText,
  GitBranch,
  Eye,
  FileSearch,
  Gauge,
  Users,
  ShieldCheck
} from "lucide-react";

export default function SteelFabricatorsPage() {

  const { theme } = useTheme();

  const challenges = [
    { text: "Tight bidding timelines", icon: Clock },
    { text: "Complex drawing packages", icon: FileText },
    { text: "Multiple revisions", icon: GitBranch },
    { text: "Limited time for detailed visual review", icon: Eye }
  ];

  const benefits = [
  {
    icon: Eye,
    text: "Faster drawing interpretation",
  },
  {
    icon: FileSearch,
    text: "Easier internal review",
  },
  {
    icon: Gauge,
    text: "Reduced oversight risk",
  },
  {
    icon: ShieldCheck,
    text: "Greater estimator confidence",
  },
];

  const {
    ref: challengesRef,
    getStaggerClass: getChallengeClass,
    getStaggerStyle: getChallengeStyle
  } = useScrollAnimationGroup(challenges.length);

  const {
    ref: benefitsRef,
    getStaggerClass: getBenefitClass,
    getStaggerStyle: getBenefitStyle
  } = useScrollAnimationGroup(benefits.length);

  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-gradient-to-b from-[#030303] via-[#0b1a1b] to-[#030303] text-white">

        {/* GRID BACKGROUND */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(#4EBABD33_1px,transparent_1px),linear-gradient(90deg,#4EBABD33_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="relative z-10">

          {/* SECTION 1 — Industry Context */}

          <section className="py-24 text-center">
            <div className="max-w-4xl mx-auto px-4">

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Estimation is Critical in Steel{" "}
                <span className="bg-gradient-to-r from-[#4EBABD] via-[#5CC8CB] to-[#2C7181] bg-clip-text text-transparent">
                  Fabrication
                </span>
              </h1>

              <p className="opacity-70 text-lg leading-relaxed">
                A small oversight in estimation can lead to significant cost
                overruns during fabrication or erection. Accurate estimation is
                essential for steel fabrication companies managing complex
                structural projects.
              </p>

            </div>
          </section>


          {/* SECTION 2 — Challenges */}

          <section className="relative py-20">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#4EBABD12,transparent_60%)]"></div>

            <div className="relative max-w-7xl mx-auto px-6">

              <div className="text-center mb-14">

                <h2 className="text-3xl font-bold mb-4">
                  Common Estimation Challenges
                </h2>

                <p className="opacity-60">
                  Structural estimation often involves reviewing complex drawings
                  under tight deadlines.
                </p>

              </div>

              <div
                ref={challengesRef}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              >

                {challenges.map((item, index) => {

                  const Icon = item.icon;

                  return (

                    <div
                      key={index}
                      className={`
                        group relative p-6 rounded-2xl
                        border border-white/10
                        bg-white/[0.03]
                        transition-all duration-500
                        scroll-fade-up
                        ${getChallengeClass(index)}
                        hover:-translate-y-2
                        hover:border-[#4EBABD]/40
                        hover:bg-white/[0.05]
                        shadow-[0_0_20px_rgba(78,186,189,0.15)]
                        hover:shadow-[0_0_40px_rgba(78,186,189,0.35)]
                      `}
                      style={getChallengeStyle(index)}
                    >

                      <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-r from-[#4EBABD] to-[#2C7181] flex items-center justify-center">

                        <Icon
                          size={22}
                          className="text-white transition-transform group-hover:scale-110"
                        />

                      </div>

                      <p className="opacity-80">
                        {item.text}
                      </p>

                    </div>

                  );

                })}

              </div>

            </div>

          </section>


          {/* SECTION 3 — Benefits */}

         <section className="relative py-20">

  {/* radial glow background */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4EBABD15,transparent_70%)]"></div>

  <div className="relative max-w-7xl mx-auto px-6">

    {/* Section Header */}
    <div className="text-center mb-14">
      <h2 className="text-3xl font-bold mb-4">
        How VizeEST Helps
      </h2>

      <p className="opacity-60 max-w-2xl mx-auto">
        VizeEST introduces a visual workflow to help estimation teams
        review drawings with greater clarity and confidence.
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {benefits.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="
              group relative p-6 rounded-2xl
              border border-white/10
              bg-white/[0.03]
              transition-all duration-500
              hover:-translate-y-2
              hover:border-[#4EBABD]/40
              hover:bg-white/[0.05]
              shadow-[0_0_20px_rgba(78,186,189,0.15)]
              hover:shadow-[0_0_40px_rgba(78,186,189,0.35)]
            "
          >

            {/* Icon Box */}
            <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-r from-[#4EBABD] to-[#2C7181] flex items-center justify-center">
              <Icon
                size={22}
                className="text-white transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Text */}
            <p className="opacity-80 text-sm leading-relaxed">
              {item.text}
            </p>

          </div>
        );
      })}

    </div>

  </div>
</section>

        </div>

      </main>

      <Footer />
    </>
  );
}