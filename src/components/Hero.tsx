import React from 'react';
// 1. Import the image directly (adjust the relative path to where your image actually is)
import noveltyBanner from '../assets/noveltybanner.png'; // or './noveltybanner.png' if it's in the same folder

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
    <div className="pt-24 pb-16 min-h-screen w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Left Column: Text */}
      <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-white w-full max-w-xl lg:max-w-2xl mx-auto lg:mx-0">
        
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight break-words">
          <span className="font-['Orpheus']">Rwanda's #1 <br />Choice For Smart <br />Digital Solutions</span>
        </h1>

        <ul className="space-y-4 w-full">
          <li className="flex items-center gap-2.5 text-[11px] xs:text-xs sm:text-sm md:text-base font-medium pl-0 py-1 w-full">
            <span className="text-[#3B82F6] font-bold shrink-0">✓</span>
            <span className="leading-none whitespace-nowrap">
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
          <li className="flex items-center gap-2.5 text-[11px] xs:text-xs sm:text-sm md:text-base font-medium pl-0 py-1 w-full">
            <span className="text-[#3B82F6] font-bold shrink-0">✓</span>
            <span className="leading-none whitespace-nowrap">
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
          <li className="flex items-center gap-2.5 text-[11px] xs:text-xs sm:text-sm md:text-base font-medium pl-0 py-1 w-full">
            <span className="text-[#3B82F6] font-bold shrink-0">✓</span>
            <span className="leading-none whitespace-nowrap">
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

        {/* Mobile Banner Image - Uses the imported variable */}
        <div className="flex items-center justify-center w-full py-4 lg:hidden">
          <img 
            src={noveltyBanner} 
            alt="Novelty Digital Solutions Banner" 
            className="w-full max-w-[280px] h-auto object-contain rounded-2xl shadow-2xl"
          />
        </div>

        <form className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-xl pt-2">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full text-sm sm:text-base px-4 py-3.5 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-[#3B82F6] transition-colors"
          />
          <button 
            type="submit" 
            className="flex items-center justify-center bg-[#3B82F6] text-white text-base font-bold px-8 py-4 rounded-lg whitespace-nowrap hover:bg-blue-600 transition-colors shadow-sm cursor-pointer"
          >
            Get started
          </button>
        </form>

        <p className="text-xs text-gray-400 max-w-[500px] leading-relaxed pt-2 break-words flex items-start gap-2">
          <span className="inline-flex items-center justify-center w-3.5 h-3.5 border border-gray-400 rounded-full text-[9px] cursor-pointer shrink-0 mt-0.5 hover:bg-white hover:text-black transition-colors">i</span>
          <span>"We don't just implement technology — we build partnerships. Every client's success is a direct measure of our own" ~ Novelty Works Ltd</span>
        </p>

      </div>

      {/* Desktop Banner Image - Uses the imported variable */}
      <div className="hidden lg:col-span-5 lg:flex items-center justify-center w-full h-full p-4">
        <img 
          src={noveltyBanner} 
          alt="Novelty Digital Solutions Banner" 
          className="w-full max-w-md h-auto object-contain rounded-2xl shadow-2xl"
        />
      </div>
      
    </div>
  );
};