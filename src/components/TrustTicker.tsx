
export const TrustTicker = () => {
  const trustItems = [
    {
      id: '1',
      title: '100% Tailored Digital Solutions',
      subtitle: "Built around each client's unique context and goals",
      icon: (
        <svg className="w-6 h-6 text-[#38bdf8]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      )
    },
    {
      id: '2',
      title: 'Local Expertise & Global Standards',
      subtitle: 'Executed to global standards with deep East African insight'
    },
    {
      id: '3',
      title: 'SLA-Backed Technical Support',
      subtitle: 'Reliable management and support contracts'
    },
    {
      id: '4',
      title: 'Transformative Digital Impact',
      subtitle: 'Driving growth, efficiency, and visibility'
    },
    {
      id: '5',
      title: 'Trusted Technology Partner',
      subtitle: 'Serving businesses, cooperatives, and NGOs in Rwanda'
    }
  ];

  return (
    <div className="w-full overflow-hidden py-10 bg-transparent text-white border-t border-sky-500/30 relative select-none pointer-events-none">
      {/* Keyframes for seamless infinite scrolling without hover pauses */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>

      <div className="flex w-max animate-marquee items-center gap-16 whitespace-nowrap px-8 select-none pointer-events-none">
        {/* Original Set */}
        {trustItems.map((item) => (
          <div key={`orig-${item.id}`} className="flex items-center gap-3 text-sm font-light text-gray-300 select-none pointer-events-none">
            {item.icon && <div className="shrink-0 select-none pointer-events-none">{item.icon}</div>}
            <div className="flex flex-col select-none pointer-events-none">
              <span className="font-bold text-white text-base select-none pointer-events-none">{item.title}</span>
              {item.subtitle && <span className="text-gray-400 text-xs mt-0.5 select-none pointer-events-none">{item.subtitle}</span>}
            </div>
          </div>
        ))}
        
        {/* Duplicate Set for Infinite Seamless Loop */}
        {trustItems.map((item) => (
          <div key={`dup-${item.id}`} className="flex items-center gap-3 text-sm font-light text-gray-300 select-none pointer-events-none">
            {item.icon && <div className="shrink-0 select-none pointer-events-none">{item.icon}</div>}
            <div className="flex flex-col select-none pointer-events-none">
              <span className="font-bold text-white text-base select-none pointer-events-none">{item.title}</span>
              {item.subtitle && <span className="text-gray-400 text-xs mt-0.5 select-none pointer-events-none">{item.subtitle}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};