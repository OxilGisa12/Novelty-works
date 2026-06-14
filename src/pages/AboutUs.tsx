import React from 'react';

export const AboutUs = () => {
  return (
    <div className="bg-white text-gray-900 py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-20">
      
      {/* Section: About Novelty Works Ltd */}
      <div className="space-y-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold font-['Orpheus'] text-[#1E40AF]">About Novelty Works Ltd</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Novelty Works Ltd is a Kigali-based technology firm dedicated to helping organizations across Rwanda and the wider East African region harness the full potential of digital technology. We design, build, and manage tailored technology solutions that solve real operational challenges—driving growth, improving efficiency, and enhancing the digital presence of our clients.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          We were founded with a clear conviction: technology only creates value when it is accessible, relevant, and well-supported. Too many organizations in Rwanda have invested in tech solutions that are either too complex, expensive, or disconnected from local realities, and we exist to change that.
        </p>
        
        {/* Quick Facts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-gray-200">
          <div>
            <span className="block text-3xl font-bold text-[#1E40AF]">Kigali</span>
            <span className="text-sm text-gray-500">Location</span>
          </div>
          <div>
            <span className="block text-3xl font-bold text-[#1E40AF]">ICT</span>
            <span className="text-sm text-gray-500">Industry</span>
          </div>
          <div>
            <span className="block text-3xl font-bold text-[#1E40AF]">5</span>
            <span className="text-sm text-gray-500">Core Service Areas</span>
          </div>
          <div>
            <span className="block text-3xl font-bold text-[#1E40AF]">Agile</span>
            <span className="text-sm text-gray-500">Team</span>
          </div>
        </div>
      </div>

      {/* Section: Vision & Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 space-y-4">
          <h2 className="text-2xl font-bold text-[#1E40AF]">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To be the most trusted technology partner for businesses and institutions in East and Central Africa — recognized for innovation, reliability, and transformative impact.
          </p>
        </div>
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 space-y-4">
          <h2 className="text-2xl font-bold text-[#1E40AF]">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To empower organizations across Rwanda and Africa with tailored, cost-efficient digital solutions that drive growth, streamline operations, and enhance visibility in an increasingly connected world.
          </p>
        </div>
      </div>

      {/* Section: Our Team */}
      <div className="space-y-6 max-w-4xl">
        <h2 className="text-3xl font-bold font-['Orpheus']">Our Team</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Novelty Works is led by a core team of two dedicated technology professionals, combining expertise across software engineering, cloud infrastructure, digital marketing, and IT consulting. We operate with a trusted network of specialist associates and partners, allowing us to scale delivery capacity for large or complex engagements without compromising quality or responsiveness.
        </p>
      </div>

      {/* Section: Strategic Alignment */}
      <div className="space-y-6 max-w-4xl">
        <h2 className="text-3xl font-bold font-['Orpheus']">Strategic Alignment</h2>
        <p className="text-gray-700 leading-relaxed">
          Novelty Works Ltd operates in direct alignment with Rwanda's national development priorities, including the Smart Rwanda Master Plan and the country's vision for a knowledge-based, digitally-enabled economy.
        </p>
      </div>

      {/* Commitment Quote */}
      <div className="border-l-4 border-[#1E40AF] pl-6 py-4 space-y-2">
        <p className="italic text-xl text-gray-800">
          "We don't just implement technology — we build partnerships. Every client's success is a direct measure of our own."
        </p>
        <p className="text-sm text-gray-500">— Novelty Works Ltd</p>
      </div>

    </div>
  );
};