'use client';

import { useTheme } from '@/context/ThemeContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function AboutPage() {

  const { theme } = useTheme();

  return (
    <>
      <Header />

      <main
        className={`min-h-screen transition-colors duration-300 ${
          theme === 'dark'
            ? 'bg-[#030303] text-white'
            : 'bg-white text-[#121212]'
        }`}
      >

        {/* Hero */}
        <section className="py-24 pb-12 text-center">
          <div className="max-w-4xl mx-auto px-4">

            <h1 className="text-4xl md:text-5xl font-bold mb-10">
              About VizeEST
            </h1>

            <p className="text-lg opacity-70 max-w-xl mx-auto">
              A platform focused on improving structural steel estimation
              through better visualization and workflow clarity.
            </p>

          </div>
        </section>


        {/* Company Vision */}
        <section className="pt-6 pb-16">
          <div className="max-w-5xl mx-auto px-2">

            <div className="relative group">

              {/* Glow Layer */}
              <div className="absolute -inset-1 rounded-2xl bg-[#4EBABD]/20 blur-xl opacity-40 group-hover:opacity-70 transition"></div>

              <div
                className={`
                relative p-10 rounded-2xl border border-[#4EBABD]/40
                transition-all duration-300
                bg-gradient-to-b from-[#1b1b1b] to-[#111]

                shadow-[0_0_20px_rgba(78,186,189,0.25)]
                hover:shadow-[0_0_40px_rgba(78,186,189,0.45)]
                hover:border-[#4EBABD]
                hover:-translate-y-1
                `}
              >

                <h2 className="text-3xl font-bold mb-6">
                  Company Vision
                </h2>

                <p className="leading-relaxed opacity-80">
                  VizeEST was created to improve how steel fabrication companies
                  approach estimation by introducing visual validation into the
                  process. By combining drawing review with structural
                  visualization, the platform helps estimators better understand
                  project scope before finalizing their estimates.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* Industry Collaboration */}
        <section className="pb-24">
          <div className="max-w-5xl mx-auto px-4">

            <div className="relative group">

              {/* Glow Layer */}
              <div className="absolute -inset-1 rounded-2xl bg-[#4EBABD]/20 blur-xl opacity-40 group-hover:opacity-70 transition"></div>

              <div
                className={`
                relative p-10 rounded-2xl border border-[#4EBABD]/40
                transition-all duration-300
                bg-gradient-to-b from-[#1b1b1b] to-[#111]

                shadow-[0_0_20px_rgba(78,186,189,0.25)]
                hover:shadow-[0_0_40px_rgba(78,186,189,0.45)]
                hover:border-[#4EBABD]
                hover:-translate-y-1
                `}
              >

                <h2 className="text-3xl font-bold mb-6">
                  Industry Collaboration
                </h2>

                <p className="leading-relaxed opacity-80">
                  The platform is being developed with active input from steel
                  fabricators to ensure it addresses real industry challenges.
                  This collaboration allows the platform to evolve alongside the
                  needs of estimation teams working on structural projects.
                </p>

              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}