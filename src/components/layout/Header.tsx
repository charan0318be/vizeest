'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useDemoModal } from '@/context/DemoModalContext';

const navigation = [
  {
    name: 'Features',
    href: '/features',
    children: [
      { name: 'Intelligent Detection', href: '/features/intelligent-detection' },
      { name: 'Automated Take-Off', href: '/features/automated-takeoff' },
      { name: 'Visual Verification', href: '/features/visual-verification' },
      { name: 'PDF Markup & Editing', href: '/features/pdf-markup' },
      { name: 'Real-Time Processing', href: '/features/real-time-processing' },
      { name: 'Manual Override & QC', href: '/features/manual-override' },
      { name: 'Steel Library & Standards', href: '/features/steel-library' },
      { name: 'Export & Reporting', href: '/features/export-reporting' },
    ],
  },
  {
    name: 'Core Technology',
    href: '/technology',
    children: [
      { name: 'End-to-End Beam Detection', href: '/technology/beam-detection' },
      { name: 'AI Material Take-Off Engine', href: '/technology/material-takeoff-engine' },
      { name: 'CAD & BIM Processing', href: '/technology/cad-bim-support' },
      { name: 'Accuracy & Validation Framework', href: '/technology/accuracy-validation' },
      { name: 'Quality Control Workflow', href: '/technology/quality-control' },
      
    ],
  },
  {
  name: 'Solutions',
  href: '/solutions',
  children: [
    
    {
      name: 'By Industry',
      children: [
        { name: 'Steel Fabricators', href: '/solutions/industry/steel-fabricators' },
        { name: 'General Contractors', href: '/solutions/industry/general-contractors' },
        { name: 'Engineering Firms', href: '/solutions/industry/engineering-firms' },
        { name: 'Enterprise Teams', href: '/solutions/industry/enterprise-teams' },
      ],
    },
    {
      name: 'By Role',
      children: [
        { name: 'Steel Estimators', href: '/solutions/roles/steel-estimators' },
        { name: 'Structural Engineers', href: '/solutions/roles/structural-engineers' },
        { name: 'Project Managers', href: '/solutions/roles/project-managers' },
        { name: 'Fabrication Teams', href: '/solutions/roles/fabrication-teams' },
      ],
    },
  ],
}
,
  {
    name: 'Enterprise',
    href: '/enterprise',
    children: [
      { name: 'Security & Compliance', href: '/enterprise/security-compliance' },
      { name: 'SSO & Identity', href: '/enterprise/sso-identity' },
      { name: 'Integrations', href: '/enterprise/integrations' },
      { name: 'Deployment Options', href: '/enterprise/deployment' },
      { name: 'Audit Trails & Governance', href: '/enterprise/governance' },
      
    ],
    
  },
  {
    name: 'Platform',
    href: '/platform',
    children: [
      { name: 'Web Application', href: '/platform/web-application' },
      { name: 'Collaboration & Analytics', href: '/platform/collaboration-analytics' },
      { name: ' Document Management', href: '/platform/document-management' },
      
    ],
    
  },
  {
    name: 'Outputs & Deliverables',
    href: '/outputs',
    children: [
      { name: 'Material Schedules', href: '/outputs/material-schedule' },
      { name: 'Cost Estimates', href: '/outputs/cost-estimates' },
      { name: ' Visual Reports', href: '/outputs/visual-reports' },
      { name: 'Export Formats', href: '/outputs/export-formats' },
      
    ],
    
  },
  {
    name: 'Quality & Trust',
    href: '/quality',
    children: [
      { name: 'Accuracy Validation', href: '/quality/accuracy-validation' },
      { name: 'Conflict Detection', href: '/quality/conflict-detection' },
      { name: 'Audit Trail', href: '/quality/audit-trail' },
      { name: 'Manual Review Workflow', href: '/quality/manual-review' },
      
    ],
    
  },
  {
    name: 'Why VizeEST',
    href: '/why-vizeest',
    children: [
      { name: 'ROI & Business Impact', href: '/why-vizeest/roi' },
      { name: 'Customer Success Stories', href: '/why-vizeest/customers' },
      { name: 'Platform Scale & Performance', href: '/why-vizeest/scale' },
      { name: 'Support & Onboarding', href: '/why-vizeest/support' },
      
    ],
    
  },
  {
    name: 'Pricing',
    href: '/pricing',
    children: [
      { name: 'Founder Accelerator Program', href: '/pricing/founder-accelerator' },
      { name: 'Enterprise Pricing', href: '/pricing/enterprise' },
      { name: 'Full Feature Comparison', href: '/pricing/compare' },
      
    ],
    
  },
//  {
//     name: 'Demo & Conversion',
//     href: '/demo-conversion',
//     children: [
//       { name: 'Request Demo', href: '/request-demo' },
//       { name: 'Start Free Trial', href: '/start-free-trial' },
//       { name: 'Watch Demo', href: '/watch-demo' },
      
//     ],
    
//   },
//   {
//     name: 'Company',
//     href: '/company',
//     children: [
//       { name: 'About Us', href: '/about' },
//       { name: 'Contact', href: '/contact' },
//       { name: 'Careers ', href: '/careers' },
      
//     ],
    
//   },
//  {
//     name: 'Resources',
//     href: '/resources',
//     children: [
//       { name: 'Blog / Insights', href: '/blog' },
//       { name: 'Steel Estimation Guides', href: '/steel-estimation-guides' },
//       { name: 'Case Studies', href: '/case-studies' },
//       { name: 'Case Studies', href: '/case-studies' },
//       { name: 'Case Studies', href: '/case-studies' },
      
//     ],
    
//   },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme } = useTheme();
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const { openModal } = useDemoModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 top-0 ${
          isScrolled
            ? theme === 'dark'
              ? 'bg-[#121212]/95 backdrop-blur-md shadow-lg'
              : 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src={isScrolled && theme === 'light' ? '/logo.svg' : '/logo-white.svg'}
              alt="VizeEST"
              width={48}
              height={48}
              className="h-12 w-12 transition-opacity group-hover:opacity-80"
              priority
            />
            <span
              className={`text-3xl font-bold transition-colors ${
                isScrolled
                  ? theme === 'dark'
                    ? 'text-white'
                    : 'text-[#121212]'
                  : 'text-white'
              }`}
            >
              Vize<span className="gradient-text">est</span>
            </span>
          </Link>

         {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5 relative">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >


                  <Link
            href={item.href}
            className={`text-sm font-medium transition-colors hover:text-[#4EBABD] ${
              isScrolled
                ? theme === 'dark'
                  ? 'text-gray-300'
                  : 'text-[#6B7280]'
                : 'text-white/80'
            }`}
          >
            {item.name}
          </Link>


        {openDropdown === item.name && (
          <div
            className={`absolute top-full left-0 pt-3 w-72 rounded-xl shadow-xl border ${
              theme === 'dark'
                ? 'bg-[#1E1E1E] border-[#2D2D2D]'
                : 'bg-white border-[#E5E7EB]'
            }`}
          >
            <ul className="py-1">
  {item.children.map((child) => {
    // SIMPLE LINK (Overview)
    if (!child.children) {
      return (
        <li key={child.name}>
          <Link
            href={child.href}
            className="block px-4 py-2 text-sm hover:text-[#4EBABD]"
          >
            {child.name}
          </Link>
        </li>
      );
    }

    // NESTED MENU (By Industry / By Role)
    return (
      <li
        key={child.name}
        className="relative"
        onMouseEnter={() => setOpenSubMenu(child.name)}
        onMouseLeave={() => setOpenSubMenu(null)}
      >
        <div className="px-4 py-2 text-sm cursor-pointer hover:text-[#4EBABD]">
          {child.name}
        </div>

        {openSubMenu === child.name && (
          <div className="absolute top-0 left-full ml-1 w-56 rounded-xl shadow-lg border border-[#2D2D2D] bg-[#1E1E1E]">
            <ul className="py-1">
              {child.children.map((sub) => (
                <li key={sub.name}>
                  <Link
                    href={sub.href}
                    className="block px-4 py-2 text-sm hover:text-[#4EBABD]"
                  >
                    {sub.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </li>
    );
  })}
</ul>

          </div>
        )}
      </div>
    ) : (
      <Link
        key={item.name}
        href={item.href}
        className={`text-sm font-medium transition-colors hover:text-[#4EBABD] ${
          isScrolled
            ? theme === 'dark'
              ? 'text-gray-300'
              : 'text-[#6B7280]'
            : 'text-white/80'
        }`}
      >
        {item.name}
      </Link>
    )
  )}
</div>


          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={openModal}
              className="btn btn-primary text-sm py-2.5 px-5"
            >
              Request Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className={`w-6 h-6 ${
                  isScrolled
                    ? theme === 'dark'
                      ? 'text-white'
                      : 'text-[#121212]'
                    : 'text-white'
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden rounded-lg shadow-xl mt-2 p-4 animate-fade-in ${
              theme === 'dark' ? 'bg-[#1E1E1E]' : 'bg-white'
            }`}
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-3 px-4 rounded-lg transition-colors ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-[#4EBABD] hover:bg-[#2D2D2D]'
                    : 'text-[#6B7280] hover:text-[#4EBABD] hover:bg-[#F8FAFB]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div
              className={`border-t mt-4 pt-4 ${
                theme === 'dark' ? 'border-[#2D2D2D]' : 'border-[#E5E7EB]'
              }`}
            >
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openModal();
                }}
                className="block btn btn-primary w-full text-center"
              >
                Request Demo
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
    </>
  );
}
