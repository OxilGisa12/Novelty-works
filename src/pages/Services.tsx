
import { 
  FaCode, 
  FaCloud, 
  FaLightbulb, 
  FaBullhorn, 
  FaThList, 
  FaTools 
} from 'react-icons/fa';

export const Services = () => {
  const serviceList = [
    {
      icon: <FaCode className="w-8 h-8 text-[#1E40AF]" />,
      title: 'Software Development',
      description: 'Custom web and mobile applications, internal management systems, and automation tools built to fit each client\'s specific workflows and scale as they grow.'
    },
    {
      icon: <FaCloud className="w-8 h-8 text-[#1E40AF]" />,
      title: 'Cloud Services Management',
      description: 'Migration, configuration, and ongoing management of cloud environments (Google Cloud, AWS, Microsoft Azure), ensuring reliability, security, and cost efficiency.'
    },
    {
      icon: <FaLightbulb className="w-8 h-8 text-[#1E40AF]" />,
      title: 'IT Services Consultancy',
      description: 'Independent technology audits, infrastructure planning, procurement guidance, and digital transformation roadmaps for organizations at any stage of their digital journey.'
    },
    {
      icon: <FaBullhorn className="w-8 h-8 text-[#1E40AF]" />,
      title: 'Digital Marketing & Online Visibility',
      description: 'Search engine optimization (SEO), social media management, Google Business setup, targeted ad campaigns, and performance analytics to expand your reach.'
    },
    {
      icon: <FaThList className="w-8 h-8 text-[#1E40AF]" />,
      title: 'Corporate Work Tools (CMS & Productivity)',
      description: 'Deployment and management of content management systems, Google Workspace, Microsoft 365, and bespoke internal portals that improve team collaboration.'
    },
    {
      icon: <FaTools className="w-8 h-8 text-[#1E40AF]" />,
      title: 'Technology Integration & Support',
      description: 'Connecting disparate systems (ERP, CRM, payment gateways, inventory tools) and providing reliable, SLA-backed technical support contracts.'
    }
  ];

  return (
    <div className="bg-white text-gray-900 py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold font-['Orpheus'] text-[#1E40AF]">Our Core Service Areas</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Novelty Works offers an integrated portfolio of technology services designed to support organizations at every stage of their digital journey. We combine internationally recognized tools with deep local expertise.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceList.map((service, index) => (
          <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-200 space-y-4 hover:border-gray-300 transition-colors flex flex-col justify-between">
            <div className="space-y-4">
              <div className="p-3 bg-[#1E40AF]/10 w-fit rounded-xl border border-[#1E40AF]/20">
                {service.icon}
              </div>
              <h2 className="text-xl font-bold text-[#1E40AF]">{service.title}</h2>
              <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};