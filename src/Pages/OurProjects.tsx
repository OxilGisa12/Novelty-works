

export const OurProjects = () => {
  const projects = [
    {
      client: 'Tasks Africa CBC',
      scope: 'Google Workspace consolidation; data centralization; productivity systems setup',
      outcome: '43% productivity increase within 12 months',
      highlight: '43% Boost'
    },
    {
      client: 'RNSA-Intagamburuzwa',
      scope: 'Nationwide student fellowship platform; digital communication infrastructure',
      outcome: 'Established a reliable, country-wide communication channel for students',
      highlight: 'Country-wide Reach'
    },
    {
      client: 'Biokube Rwanda',
      scope: 'Digital marketing strategy; SEO & online visibility campaign',
      outcome: '17% increase in sales per quarter following visibility boost',
      highlight: '+17% Sales'
    },
    {
      client: 'Umutaka Ltd',
      scope: 'Inventory system harmonization; real-time business activity tracking',
      outcome: 'Streamlined operations with live inventory and activity monitoring',
      highlight: 'Real-time Tracking'
    }
  ];

  return (
    <div className="bg-white text-gray-900 py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-20">
      
      {/* Header */}
      <div className="space-y-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold font-['Orpheus'] text-[#1E40AF]">Our Projects & Track Record</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Since our founding, Novelty Works has partnered with organizations across the private, cooperative, and civil society sectors. We deliver across sectors—from cooperatives and student networks to private businesses and health-tech companies—producing measurable, tangible results.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-200 flex flex-col justify-between space-y-8 hover:border-gray-300 transition-colors">
            <div className="space-y-4">
              
              {/* Card Header: Stays side-by-side on all screens. Adjusted font size/padding to prevent breaking out */}
              <div className="flex justify-between items-center gap-3">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1E40AF] leading-tight break-words flex-1 pr-2">
                  {project.client}
                </h2>
                <span className="text-[10px] sm:text-xs font-semibold px-3 py-1.5 bg-[#1E40AF]/10 text-[#1E40AF] rounded-full border border-[#1E40AF]/20 whitespace-nowrap">
                  {project.highlight}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Scope of Work</h3>
                <p className="text-gray-700 leading-relaxed text-base">{project.scope}</p>
              </div>
            </div>
            
            <div className="pt-6 border-t border-gray-200 space-y-2">
              <h3 className="text-sm font-medium text-[#1E40AF] uppercase tracking-wider">Key Outcome</h3>
              <p className="text-gray-900 font-medium text-lg leading-relaxed">{project.outcome}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};