'use client';

import { useTheme } from '@/context/ThemeContext';

const collaborationFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Real-Time Collaboration',
    description: 'Work together on projects with live updates and shared workspaces.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Comments & Mentions',
    description: 'Tag team members and discuss specific elements directly on drawings.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Task Assignment',
    description: 'Assign review tasks and track completion across your team.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: 'Smart Notifications',
    description: 'Stay updated with intelligent alerts for changes and approvals.',
  },
];

const insightMetrics = [
  { label: 'Projects Analyzed', value: '1,247', change: '+12%' },
  { label: 'Avg. Estimation Time', value: '2.4 hrs', change: '-45%' },
  { label: 'Accuracy Rate', value: '98.7%', change: '+3%' },
  { label: 'Cost Savings', value: '$847K', change: '+28%' },
];

const documentFeatures = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
    title: 'Smart Folders',
    description: 'Organize projects with intelligent folder structures',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'Advanced Search',
    description: 'Find any document instantly with full-text search',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Access Control',
    description: 'Granular permissions for teams and projects',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
    title: 'Bulk Upload',
    description: 'Upload multiple files with drag & drop',
  },
];

export default function CollaborationInsights() {
  const { theme } = useTheme();

  return (
    <section
      className={`py-24 transition-colors ${
        theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4EBABD]/10 text-[#4EBABD] text-sm font-medium mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Insights & Collaboration
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-[#121212]'
          }`}>
            Actionable Data Insights
            <br />
            <span className="gradient-text">& Team Collaboration</span>
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
            Make data-driven decisions with powerful analytics and keep your team aligned with real-time collaboration tools.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Analytics Dashboard */}
          <div className={`rounded-2xl p-6 border ${
            theme === 'dark'
              ? 'bg-[#1E1E1E] border-[#2D2D2D]'
              : 'bg-[#F8FAFB] border-[#E5E7EB]'
          }`}>
            <h3 className={`text-xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-[#121212]'
            }`}>
              Analytics Dashboard
            </h3>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {insightMetrics.map((metric, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl ${
                    theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
                  }`}
                >
                  <p className={`text-sm mb-1 ${
                    theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'
                  }`}>{metric.label}</p>
                  <div className="flex items-end gap-2">
                    <span className={`text-2xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-[#121212]'
                    }`}>{metric.value}</span>
                    <span className={`text-sm font-medium ${
                      metric.change.startsWith('+') ? 'text-[#10B981]' : 'text-[#F59E0B]'
                    }`}>{metric.change}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Chart Placeholder */}
            <div className={`h-40 rounded-xl flex items-end justify-around p-4 ${
              theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
            }`}>
              {[60, 80, 45, 90, 70, 85, 95].map((height, i) => (
                <div
                  key={i}
                  className="w-8 rounded-t-lg bg-gradient-to-t from-[#4EBABD] to-[#2C7181]"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>

            <p className={`text-center text-sm mt-4 ${
              theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'
            }`}>
              Weekly Estimation Performance
            </p>
          </div>

          {/* Collaboration Features */}
          <div className={`rounded-2xl p-6 border ${
            theme === 'dark'
              ? 'bg-[#1E1E1E] border-[#2D2D2D]'
              : 'bg-[#F8FAFB] border-[#E5E7EB]'
          }`}>
            <h3 className={`text-xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-[#121212]'
            }`}>
              Team Collaboration
            </h3>

            <div className="space-y-4">
              {collaborationFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-4 rounded-xl transition-colors ${
                    theme === 'dark'
                      ? 'bg-[#121212] hover:bg-[#2D2D2D]'
                      : 'bg-white hover:bg-[#F8FAFB]'
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#4EBABD] to-[#2C7181] flex items-center justify-center text-white flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-[#121212]'
                    }`}>{feature.title}</h4>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'
                    }`}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Document Management Section */}
        <div className={`rounded-2xl p-8 border ${
          theme === 'dark'
            ? 'bg-[#1E1E1E] border-[#2D2D2D]'
            : 'bg-[#F8FAFB] border-[#E5E7EB]'
        }`}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] text-sm font-medium mb-4">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                Document Management
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-[#121212]'
              }`}>
                Centralized Document Hub
              </h3>
              <p className={`mb-6 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                Keep all your structural drawings, estimates, and reports organized in one secure location. Access any document from anywhere, anytime.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {documentFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      theme === 'dark'
                        ? 'bg-[#4EBABD]/20 text-[#4EBABD]'
                        : 'bg-[#4EBABD]/10 text-[#4EBABD]'
                    }`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className={`font-medium text-sm ${
                        theme === 'dark' ? 'text-white' : 'text-[#121212]'
                      }`}>{feature.title}</h4>
                      <p className={`text-xs ${
                        theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'
                      }`}>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Document Preview */}
            <div className={`rounded-xl p-4 ${
              theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
            }`}>
              {/* Folder Structure */}
              <div className="space-y-2">
                {[
                  { name: 'Commercial Projects', count: 24, type: 'folder' },
                  { name: 'Industrial Buildings', count: 18, type: 'folder' },
                  { name: 'Residential Steel', count: 12, type: 'folder' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      theme === 'dark' ? 'bg-[#1E1E1E]' : 'bg-[#F8FAFB]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                      </svg>
                      <span className={theme === 'dark' ? 'text-white' : 'text-[#121212]'}>
                        {item.name}
                      </span>
                    </div>
                    <span className={`text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                      {item.count} files
                    </span>
                  </div>
                ))}

                <div className={`border-t my-3 ${theme === 'dark' ? 'border-[#2D2D2D]' : 'border-[#E5E7EB]'}`} />

                {/* Recent Files */}
                {[
                  { name: 'warehouse_structure.pdf', date: '2 hours ago', size: '4.2 MB' },
                  { name: 'office_tower_est.xlsx', date: 'Yesterday', size: '1.8 MB' },
                  { name: 'bridge_analysis.pdf', date: '3 days ago', size: '12.4 MB' },
                ].map((file, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      theme === 'dark' ? 'bg-[#1E1E1E]' : 'bg-[#F8FAFB]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#4EBABD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <div>
                        <span className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                          {file.name}
                        </span>
                        <p className={`text-xs ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                          {file.date}
                        </p>
                      </div>
                    </div>
                    <span className={`text-xs ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                      {file.size}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
