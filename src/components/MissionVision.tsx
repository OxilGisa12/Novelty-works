import React from 'react';

export const MissionVision = () => {
  return (
    <section className="w-full bg-white px-6 py-16 text-gray-900 select-none border-none">
      <div className="max-w-6xl mx-auto">
        
        {/* Two Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 -mt-10 md:-mt-12 mb-16 relative z-10">
          
          {/* Card 1: Vision */}
          <div className="bg-[#112240] rounded-[32px] p-10 text-white flex flex-col justify-between min-h-[420px] border border-sky-500/20 shadow-xl">
            <div className="space-y-6 max-w-sm">
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight leading-none">
                Our Vision
              </h3>
              <p className="text-sm md:text-base text-gray-300 font-medium leading-relaxed">
                To be the most trusted technology partner for businesses and institutions in East and Central Africa — recognized for innovation, reliability, and transformative impact.
              </p>
            </div>
            <button className="bg-transparent border border-sky-400 text-sky-400 font-bold text-sm px-8 py-3.5 rounded-full w-fit hover:bg-sky-400 hover:text-black transition-colors cursor-pointer mt-8">
              Learn More
            </button>
          </div>

          {/* Card 2: Mission */}
          <div className="bg-[#112240] rounded-[32px] p-10 text-white flex flex-col justify-between min-h-[420px] border border-sky-500/20 shadow-xl">
            <div className="space-y-6 max-w-sm">
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight leading-none">
                Our Mission
              </h3>
              <p className="text-sm md:text-base text-gray-300 font-medium leading-relaxed">
                To empower organizations across Rwanda and Africa with tailored, cost-efficient digital solutions that drive growth, streamline operations, and enhance visibility in an increasingly connected world.
              </p>
            </div>
            <button className="bg-transparent border border-sky-400 text-sky-400 font-bold text-sm px-8 py-3.5 rounded-full w-fit hover:bg-sky-400 hover:text-black transition-colors cursor-pointer mt-8">
              Learn More
            </button>
          </div>

        </div>

        {/* Clean Line / Divider Separation below cards */}
        <div className="w-full h-px bg-gray-200 max-w-6xl mx-auto"></div>

      </div>
    </section>
  );
};