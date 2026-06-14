import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    id: 'software-dev',
    title: 'Software Dev',
    headline: 'Custom Software & Applications',
    bullets: [
      'Custom web and mobile applications tailored to your needs.',
      'Internal management systems built for your workflows.',
      'Automation tools designed to scale as your business grows.'
    ],
    buttonText: 'Learn More'
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    headline: 'Cloud Services Management',
    bullets: [
      'Seamless migration and configuration of cloud environments.',
      'Expert management across AWS, Google Cloud, and Microsoft Azure.',
      'Ensuring high reliability, security, and cost efficiency.'
    ],
    buttonText: 'Learn More'
  },
  {
    id: 'it-consultancy',
    title: 'IT Consultancy',
    headline: 'IT Services Consultancy',
    bullets: [
      'Independent technology audits and infrastructure planning.',
      'Procurement guidance to get the right hardware and software.',
      'Digital transformation roadmaps for organizations at any stage.'
    ],
    buttonText: 'Learn More'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    headline: 'Online Visibility & Marketing',
    bullets: [
      'Search engine optimization (SEO) to rank higher.',
      'Social media management and Google Business setup.',
      'Targeted ad campaigns backed by deep performance analytics.'
    ],
    buttonText: 'Learn More'
  },
  {
    id: 'corporate-tools',
    title: 'Corporate Tools',
    headline: 'CMS & Productivity Tools',
    bullets: [
      'Deployment and management of modern content management systems.',
      'Expert setup of Google Workspace and Microsoft 365.',
      'Bespoke internal portals that significantly improve team collaboration.'
    ],
    buttonText: 'Learn More'
  },
  {
    id: 'tech-integration',
    title: 'Tech Integration',
    headline: 'Integration & Support',
    bullets: [
      'Connecting disparate systems like ERP, CRM, and inventory tools.',
      'Payment gateway integrations for seamless transactions.',
      'Reliable, SLA-backed technical support contracts.'
    ],
    buttonText: 'Learn More'
  }
];

export const InteractiveFeatures = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeFeature = features[activeIdx];

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const index = features.findIndex((f) => f.id === hash);
      if (index !== -1) {
        setActiveIdx(index);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <section 
      id="interactive-features" 
      className="w-full bg-transparent py-16 md:py-24 px-6 md:px-12 text-white select-none scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* Left Column: Kept uniformly small, using CSS scale from the left edge so the straight margin is perfectly maintained */}
        <div className="lg:col-span-5 flex flex-col justify-start gap-6">
          {features.map((feature, index) => {
            const isActive = index === activeIdx;
            return (
              <button
                key={feature.id}
                onClick={() => {
                  setActiveIdx(index);
                  window.history.pushState(null, '', `#${feature.id}`);
                  const section = document.getElementById('interactive-features');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`text-left w-full font-['Abril_Fatface'] tracking-tight transition-all duration-300 ease-in-out text-2xl sm:text-3xl origin-left ${
                  isActive 
                    ? 'opacity-100 text-white scale-110 font-semibold' 
                    : 'opacity-40 hover:opacity-70 text-gray-400 hover:text-white font-normal cursor-pointer scale-100'
                }`}
              >
                {feature.title}
              </button>
            );
          })}
        </div>

        {/* Right Column: Active Content Display (Dark Blue Accents) */}
        <div className="lg:col-span-7 bg-[#112240]/80 backdrop-blur-md rounded-3xl p-6 md:p-12 flex flex-col gap-6 border border-[#1E40AF]/30 shadow-2xl w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-none">
            {activeFeature.headline}
          </h2>
          <ul className="space-y-3 max-w-2xl">
            {activeFeature.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm md:text-base font-medium text-gray-200">
                <span className="text-[#1E40AF] font-bold mt-0.5 shrink-0">✓</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <Link 
            to={`/services#${activeFeature.id}`}
            className="bg-transparent border border-[#1E40AF] text-white font-bold px-6 py-3 rounded-full w-fit hover:bg-[#1E40AF] transition-colors cursor-pointer mt-2 text-sm md:text-base text-center inline-block no-underline shadow-sm"
          >
            {activeFeature.buttonText}
          </Link>
        </div>

      </div>
    </section>
  );
};