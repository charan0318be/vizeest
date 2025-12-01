'use client';

import { useTheme } from '@/context/ThemeContext';

const markupTools = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: 'Annotation Tools',
    description: 'Add notes, comments, and callouts directly on your structural drawings.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Shape & Highlight',
    description: 'Draw rectangles, circles, arrows, and highlight areas of interest.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Multi-Page Support',
    description: 'Navigate and markup across multiple pages in a single document.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Version History',
    description: 'Track all changes with full revision history and rollback capability.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Measurement Tools',
    description: 'Measure distances, areas, and angles directly on the PDF.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Layer Management',
    description: 'Organize annotations in layers for better visibility control.',
  },
];

export default function PDFMarkup() {
  const { theme } = useTheme();

  return (
    <section
      className={`py-24 transition-colors ${
        theme === 'dark' ? 'bg-[#1E1E1E]' : 'bg-[#F8FAFB]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4EBABD]/10 text-[#4EBABD] text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              PDF Markup & Editing
            </div>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-[#121212]'
            }`}>
              Powerful PDF
              <br />
              <span className="gradient-text">Markup Tools</span>
            </h2>
            <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              Review, annotate, and edit structural drawings directly in your browser.
              Our comprehensive markup tools let you collaborate on documents without
              leaving the platform.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {markupTools.map((tool, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 p-4 rounded-xl border transition-colors ${
                    theme === 'dark'
                      ? 'bg-[#121212] border-[#2D2D2D] hover:border-[#4EBABD]'
                      : 'bg-white border-[#E5E7EB] hover:border-[#4EBABD]'
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#4EBABD] to-[#2C7181] flex items-center justify-center text-white flex-shrink-0">
                    {tool.icon}
                  </div>
                  <div>
                    <h3 className={`font-semibold mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-[#121212]'
                    }`}>{tool.title}</h3>
                    <p className={`text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                      {tool.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className={`rounded-2xl p-6 border ${
              theme === 'dark'
                ? 'bg-[#121212] border-[#2D2D2D]'
                : 'bg-white border-[#E5E7EB] shadow-xl'
            }`}>
              {/* PDF Viewer Header */}
              <div className={`flex items-center justify-between pb-4 mb-4 border-b ${
                theme === 'dark' ? 'border-[#2D2D2D]' : 'border-[#E5E7EB]'
              }`}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-gradient-to-br from-[#4EBABD] to-[#2C7181] flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                    structural_plan_v2.pdf
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                    Page 3 of 12
                  </span>
                </div>
              </div>

              {/* Toolbar */}
              <div className={`flex items-center gap-2 pb-4 mb-4 border-b ${
                theme === 'dark' ? 'border-[#2D2D2D]' : 'border-[#E5E7EB]'
              }`}>
                {['Select', 'Pen', 'Highlight', 'Text', 'Shape', 'Measure'].map((tool, i) => (
                  <button
                    key={tool}
                    className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                      i === 1
                        ? 'bg-[#4EBABD] text-white'
                        : theme === 'dark'
                          ? 'bg-[#2D2D2D] text-[#9CA3AF] hover:text-white'
                          : 'bg-[#F8FAFB] text-[#6B7280] hover:text-[#121212]'
                    }`}
                  >
                    {tool}
                  </button>
                ))}
              </div>

              {/* PDF Preview Area */}
              <div className={`aspect-[4/3] rounded-xl flex items-center justify-center relative overflow-hidden ${
                theme === 'dark' ? 'bg-[#1E1E1E]' : 'bg-[#F8FAFB]'
              }`}>
                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `
                      linear-gradient(${theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'} 1px, transparent 1px),
                      linear-gradient(90deg, ${theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'} 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px',
                  }}
                />

                {/* Sample annotations */}
                <div className="absolute top-8 left-8 w-32 h-16 border-2 border-[#4EBABD] rounded-lg opacity-80" />
                <div className="absolute top-12 left-12 bg-[#4EBABD] text-white text-xs px-2 py-1 rounded">
                  W12x26
                </div>
                <div className="absolute bottom-16 right-12 w-24 h-24 border-2 border-[#F59E0B] rounded opacity-80" />
                <div className="absolute bottom-20 right-16 bg-[#F59E0B] text-white text-xs px-2 py-1 rounded">
                  Check dimensions
                </div>
                <div className="absolute top-1/2 left-1/3 w-40 h-0.5 bg-[#10B981] transform -rotate-12" />

                <p className={`text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                  Interactive PDF Preview
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
