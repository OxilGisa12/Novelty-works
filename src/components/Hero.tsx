import React from 'react';
import NoveltyBanner from '../assets/NoveltyBanner.png';

export const Hero = () => {
  const handleScrollToFeature = (e: React.MouseEvent<HTMLAnchorElement>, featureId: string) => {
    e.preventDefault();
    window.location.hash = featureId;
    window.dispatchEvent(new HashChangeEvent('hashchange'));
    const section = document.getElementById('interactive-features');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-36 md:pt-40 pb-16 min-h-[85vh] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      
      {/* Left Column: Text & Elements - Strictly pinned to the left grid across all devices */}
      <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-white w-full max-w-2xl mx-auto lg:mx-0 items-start text-left">
        
        {/* Massive Headline */}
        <h1 className="text-3xl xs:text-4xl md:text-5xl font-semibold tracking-tight leading-tight break-words w-full">
          <span className="font-['Orpheus']">Rwanda's #1 <br />Choice For Smart <br />Digital Solutions</span>
        </h1>

        {/* Links List - Flawlessly left-aligned on the exact same vertical grid line */}
        <ul className="space-y-4 w-full flex flex-col items-start">
          <li className="flex items-start gap-3 w-full text-[11px] xs:text-xs sm:text-sm md:text-base font-medium">
            <span className="text-[#3B82F6] font-bold shrink-0 mt-0.5">✓</span>
            <span className="leading-tight">
              <a 
                href="#software-dev" 
                onClick={(e) => handleScrollToFeature(e, 'software-dev')} 
                className="cursor-pointer underline underline-offset-4 decoration-[#3B82F6] hover:decoration-blue-400 transition-colors"
              >
                Software Development
              </a> 
              {' & '}
              <a 
                href="#cloud-services" 
                onClick={(e) => handleScrollToFeature(e, 'cloud-services')} 
                className="cursor-pointer underline underline-offset-4 decoration-[#3B82F6] hover:decoration-blue-400 transition-colors"
              >
                Cloud Services Management
              </a>
            </span>
          </li>
          <li className="flex items-start gap-3 w-full text-[11px] xs:text-xs sm:text-sm md:text-base font-medium">
            <span className="text-[#3B82F6] font-bold shrink-0 mt-0.5">✓</span>
            <span className="leading-tight">
              <a 
                href="#it-consultancy" 
                onClick={(e) => handleScrollToFeature(e, 'it-consultancy')} 
                className="cursor-pointer underline underline-offset-4 decoration-[#3B82F6] hover:decoration-blue-400 transition-colors"
              >
                IT Services Consultancy
              </a>
              {' & '}
              <a 
                href="#digital-marketing" 
                onClick={(e) => handleScrollToFeature(e, 'digital-marketing')} 
                className="cursor-pointer underline underline-offset-4 decoration-[#3B82F6] hover:decoration-blue-400 transition-colors"
              >
                Digital Marketing & Visibility
              </a>
            </span>
          </li>
          <li className="flex items-start gap-3 w-full text-[11px] xs:text-xs sm:text-sm md:text-base font-medium">
            <span className="text-[#3B82F6] font-bold shrink-0 mt-0.5">✓</span>
            <span className="leading-tight">
              <a 
                href="#corporate-tools" 
                onClick={(e) => handleScrollToFeature(e, 'corporate-tools')} 
                className="cursor-pointer underline underline-offset-4 decoration-[#3B82F6] hover:decoration-blue-400 transition-colors"
              >
                Corporate Work Tools
              </a>
              {' & '}
              <a 
                href="#tech-integration" 
                onClick={(e) => handleScrollToFeature(e, 'tech-integration')} 
                className="cursor-pointer underline underline-offset-4 decoration-[#3B82F6] hover:decoration-blue-400 transition-colors"
              >
                Technology Integration & Support
              </a>
            </span>
          </li>
        </ul>

        {/* Mobile Banner Image */}
        <div className="flex items-center justify-start w-full py-4 lg:hidden">
          <img 
            src={NoveltyBanner} 
            alt="Novelty Digital Solutions Banner" 
            className="w-full max-w-[320px] h-auto object-contain rounded-2xl shadow-2xl border border-gray-700/40"
          />
        </div>

        {/* Email Capture Form */}
        <form className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-xl">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full text-sm sm:text-base px-4 py-3.5 rounded-lg bg-white/5 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-[#3B82F6] transition-colors"
          />
          <button 
            type="submit" 
            className="flex items-center justify-center bg-[#3B82F6] text-white text-base font-bold px-8 py-4 rounded-lg whitespace-nowrap hover:bg-blue-600 transition-colors shadow-sm cursor-pointer"
          >
            Get started
          </button>
        </form>

        {/* Disclaimer text */}
        <p className="text-xs text-gray-400 max-w-[500px] leading-relaxed break-words flex items-start gap-2 justify-start">
          <span className="inline-flex items-center justify-center w-3.5 h-3.5 border border-gray-400 rounded-full text-[9px] cursor-pointer shrink-0 mt-0.5 hover:bg-white hover:text-black transition-colors">i</span>
          <span>"We don't just implement technology — we build partnerships. Every client's success is a direct measure of our own" ~ Novelty Works Ltd</span>
        </p>

      </div>

      {/* Desktop Banner Image */}
      <div className="hidden lg:col-span-5 lg:flex items-center justify-center w-full h-full p-4">
        <img 
          src={NoveltyBanner} 
          alt="Novelty Digital Solutions Banner" 
          className="w-full max-w-md h-auto object-contain rounded-2xl shadow-2xl"
        />
      </div>
      
    </div>
  );
};