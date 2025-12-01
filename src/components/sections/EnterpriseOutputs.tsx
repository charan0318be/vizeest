'use client';

import { useTheme } from '@/context/ThemeContext';

const reportTypes = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    name: 'Material Schedule',
    description: 'Complete bill of materials with member sizes, quantities, and weights',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    name: 'Cost Estimate',
    description: 'Detailed pricing with labor, material, and overhead calculations',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    name: 'Visual Report',
    description: 'Annotated drawings with color-coded member identification',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    name: 'Export Formats',
    description: 'Excel, CSV, PDF, and direct ERP system integration',
  },
];

const exportFormats = [
  { name: 'Excel', icon: '📊' },
  { name: 'CSV', icon: '📄' },
  { name: 'PDF', icon: '📑' },
  { name: 'JSON', icon: '{ }' },
  { name: 'XML', icon: '< >' },
  { name: 'SAP', icon: '🔗' },
];

export default function EnterpriseOutputs() {
  const { theme } = useTheme();

  return (
    <section className={`py-24 transition-colors ${
      theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10B981]/10 text-[#10B981] text-sm font-medium mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Professional Deliverables
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-[#121212]'
          }`}>
            Enterprise-Grade
            <br />
            <span className="gradient-text">Outputs & Reporting</span>
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
            Generate professional reports that meet the highest industry standards. From detailed material schedules to executive summaries, VizeEST delivers what your clients expect.
          </p>
        </div>

        {/* Report Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reportTypes.map((report, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 border transition-colors group ${
                theme === 'dark'
                  ? 'bg-[#1E1E1E] border-[#2D2D2D] hover:border-[#4EBABD]'
                  : 'bg-[#F8FAFB] border-[#E5E7EB] hover:border-[#4EBABD]'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4EBABD] to-[#2C7181] flex items-center justify-center text-white mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                {report.icon}
              </div>
              <h3 className={`text-lg font-bold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-[#121212]'
              }`}>{report.name}</h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>{report.description}</p>
            </div>
          ))}
        </div>

        {/* Export Formats */}
        <div className={`rounded-2xl p-8 md:p-12 border ${
          theme === 'dark'
            ? 'bg-[#1E1E1E] border-[#2D2D2D]'
            : 'bg-gradient-to-br from-[#121212] to-[#1E1E1E] border-transparent'
        }`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Export to Any Format
              </h3>
              <p className="text-[#9CA3AF] mb-8">
                Seamlessly integrate with your existing tools and workflows. VizeEST supports all major file formats and direct integration with popular ERP and project management systems.
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                {exportFormats.map((format, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-colors border border-white/10"
                  >
                    <div className="text-2xl mb-1">{format.icon}</div>
                    <div className="text-xs text-[#9CA3AF]">{format.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Report Preview */}
            <div className={`rounded-xl p-6 shadow-2xl ${
              theme === 'dark' ? 'bg-[#2D2D2D]' : 'bg-white'
            }`}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>Material Schedule</h4>
                  <p className={`text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>Project: Steel Frame Building</p>
                </div>
                <div className={`text-xs px-3 py-1 rounded-full ${
                  theme === 'dark' ? 'text-[#9CA3AF] bg-[#1E1E1E]' : 'text-[#6B7280] bg-[#F8FAFB]'
                }`}>
                  Generated by VizeEST
                </div>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className={`border-b ${theme === 'dark' ? 'border-[#3D3D3D]' : 'border-[#E5E7EB]'}`}>
                    <th className={`text-left py-2 font-medium ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>Member</th>
                    <th className={`text-left py-2 font-medium ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>Size</th>
                    <th className={`text-right py-2 font-medium ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>Qty</th>
                    <th className={`text-right py-2 font-medium ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { member: 'W12x26', size: '20\'-0"', qty: 12, weight: '6,240 lbs' },
                    { member: 'W16x40', size: '30\'-0"', qty: 8, weight: '9,600 lbs' },
                    { member: 'W24x55', size: '40\'-0"', qty: 4, weight: '8,800 lbs' },
                    { member: 'HSS6x6x1/4', size: '15\'-0"', qty: 16, weight: '3,840 lbs' },
                  ].map((row, index) => (
                    <tr key={index} className={`border-b ${theme === 'dark' ? 'border-[#3D3D3D]' : 'border-[#E5E7EB]'}`}>
                      <td className={`py-2 font-medium ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>{row.member}</td>
                      <td className={`py-2 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>{row.size}</td>
                      <td className={`py-2 text-right ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>{row.qty}</td>
                      <td className={`py-2 text-right font-medium ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>{row.weight}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={3} className={`py-3 text-right font-bold ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>Total:</td>
                    <td className="py-3 text-right font-bold text-[#4EBABD]">28,480 lbs</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
