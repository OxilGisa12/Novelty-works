

export const Insights = () => {
  const insights = [
    {
      title: 'Increasing Digital Adoption',
      description: 'Accelerating digital adoption among Rwandan SMEs and institutions to ensure they remain competitive in a connected world.'
    },
    {
      title: 'Building Local ICT Capacity',
      description: 'Empowering local talent and reducing dependency on expensive foreign technology providers by offering world-class local expertise.'
    },
    {
      title: 'Digitization Efforts',
      description: 'Actively supporting government and civil society digitization efforts to streamline public and community services.'
    },
    {
      title: 'Employment & Skills Development',
      description: 'Creating high-quality employment and continuous skills development opportunities within the thriving Rwandan tech sector.'
    },
    {
      title: 'Kigali as a Tech Hub',
      description: 'Positioning Kigali as a premier destination for high-quality, regionally-competitive digital and software services.'
    }
  ];

  return (
    <div className="bg-white text-gray-900 py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-20">
      
      {/* Header */}
      <div className="space-y-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold font-['Orpheus'] text-[#1E40AF]">Insights & Strategic Alignment</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Novelty Works Ltd operates in direct alignment with Rwanda's national development priorities, including the Smart Rwanda Master Plan and the country's vision for a knowledge-based, digitally-enabled economy.
        </p>
      </div>

      {/* Insights List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {insights.map((insight, index) => (
          <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-200 space-y-3 hover:border-gray-300 transition-colors">
            <h2 className="text-xl font-bold text-[#1E40AF]">{insight.title}</h2>
            <p className="text-gray-700 leading-relaxed">{insight.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
};